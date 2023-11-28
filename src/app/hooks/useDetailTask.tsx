import * as React from 'react';
import { taskResponse } from '../utils/types';
import axios from 'axios';
import { getToken } from '../utils/getToken';

const useDetailTask = (props: { id: string }) => {
  const [detailTasks, setDetailTasks] = React.useState<taskResponse>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const token = getToken('token');

  const retrieveDetailTasks = React.useCallback(async () => {
    setLoading(true);

    try {
      const req = await axios.get<taskResponse>(
        `${process.env.API_URL}/task/${props.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const res = req.data;

      setDetailTasks(res);
      setLoading(false);
    } catch (error) {
      const errMsg = error as Error;

      setError(errMsg.message);
      setLoading(false);
    }
  }, [token, props.id]);

  React.useEffect(() => {
    retrieveDetailTasks();
  }, [retrieveDetailTasks]);

  return { detailTasks, loading, error };
};

export default useDetailTask;
