import axios from 'axios';
import * as React from 'react';
import { getToken } from '../utils/getToken';
import { taskResponse } from '../utils/types';
import toast from 'react-hot-toast';

type ApiResponse = {
  data: taskResponse[];
  meta: {
    limit: number;
    offset: number;
    total: number;
  };
};
const usePagination = () => {
  const [tasks, setTasks] = React.useState<taskResponse[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [deleteAdditionCount, setDeleteAdditionCount] =
    React.useState<number>(0);
  const [statusFilter, setStatusFilter] = React.useState<string>('All');

  const [meta, setMeta] = React.useState({
    limit: 5,
    offset: 0,
    total: 0,
  });

  const token = getToken('token');

  const retrieveTasks = React.useCallback(
    async (offset: number, limit: number) => {
      setLoading(true);

      try {
        const isCompleteFilter =
          statusFilter === 'Complete'
            ? true
            : statusFilter === 'Not Complete'
            ? false
            : undefined;
        const req = await axios.get<ApiResponse>(
          `${process.env.API_URL}/task`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            params: {
              offset,
              limit,
              is_complete: isCompleteFilter,
            },
          }
        );
        const res = req.data;

        setLoading(false);
        setTasks(res.data);

        setMeta({
          limit: meta.limit,
          offset: res.meta.offset,
          total: res.meta.total,
        });
      } catch (error) {
        const errMsg = error as Error;

        setError(errMsg.message);
        setLoading(false);
      }
    },
    [token, meta.limit, statusFilter]
  );

  const handleDeleteTask = React.useCallback(
    async (id: number) => {
      try {
        await axios.delete<{ message: string }>(
          `${process.env.API_URL}/task/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success('Delete success');
        setDeleteAdditionCount((prevCount) => prevCount + 1);
      } catch (error) {
        toast.success('Delete Failed');
      }
    },
    [token]
  );

  React.useEffect(() => {
    retrieveTasks(meta.offset, meta.limit);
  }, [retrieveTasks, meta.offset, meta.limit, deleteAdditionCount]);

  const handleNextPage = () => {
    setMeta((prevMeta) => ({
      ...prevMeta,
      offset: prevMeta.offset + prevMeta.limit,
    }));
  };

  const handlePreviousPage = () => {
    const newOffset = Math.max(meta.offset - meta.limit, 0);
    setMeta((prevMeta) => ({ ...prevMeta, offset: newOffset }));
  };

  return {
    tasks,
    loading,
    error,
    meta,
    setStatusFilter,
    statusFilter,
    handleNextPage,
    handlePreviousPage,
    retrieveTasks,
    handleDeleteTask,
  };
};

export default usePagination;
