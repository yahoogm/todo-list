'use client';

import { taskItem } from '@/utils/types';
import { Button, LoadingTaskTable } from '@/components/atoms';
import {
  EyeIcon,
  TrashIcon,
  PencilIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import usePagination from '@/hooks/usePagination';
import * as React from 'react';
import useNavigate from '@/hooks/useNavigate';

const TaskTable = () => {
  const {
    tasks,
    loading,
    meta,
    handleNextPage,
    handlePreviousPage,
    handleDeleteTask,
    setStatusFilter,
    statusFilter,
  } = usePagination();
  const { handleNavigate } = useNavigate();

  return (
    <React.Fragment>
      <div className="flex justify-between ">
        <Button
          text="add todo"
          width="btn"
          btnColor="btn-outline btn-info"
          onClick={() => handleNavigate('/task/add', 'push')}
        >
          <PlusCircleIcon className="w-6" />
        </Button>
        <div className="form-control">
          <select
            className="select select-info bg-black"
            onChange={(e) => setStatusFilter(e.target.value)}
            value={statusFilter}
          >
            <option value={'All'}>All</option>
            <option value={'Complete'}>Complete</option>
            <option value={'Not Complete'}>Not Complete</option>
          </select>
        </div>
      </div>

      <table className="table table-zebra text-center overflow-y-auto h-97">
        <thead>
          <tr>
            <th>Name</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            tasks?.length > 0 ? (
              tasks?.map((task: taskItem) => {
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.created_at}</td>
                    <td className="space-x-2">
                      <Button
                        btnColor="btn-primary"
                        width="btn-sm"
                        onClick={() =>
                          handleNavigate(`/task/detail/${task.id}`, 'push')
                        }
                      >
                        <EyeIcon className="btn-xs rounded-md text-white" />
                      </Button>

                      <Button
                        btnColor="btn-secondary"
                        width="btn-sm"
                        onClick={() =>
                          handleNavigate(`/task/edit/${task.id}`, 'push')
                        }
                      >
                        <PencilIcon className="btn-xs rounded-md text-white" />
                      </Button>
                      <Button
                        btnColor="btn-error"
                        width="btn-sm"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        <TrashIcon className="btn-xs rounded-md text-white" />
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No task available</td>
              </tr>
            )
          ) : (
            <LoadingTaskTable />
          )}
        </tbody>
      </table>
      <div className="join flex justify-end">
        <div className="join grid grid-cols-2">
          <button
            className="join-item btn btn-outline btn-accent"
            onClick={handlePreviousPage}
            disabled={loading || meta.offset === 0}
          >
            Previous
          </button>
          <button
            className="join-item btn btn-outline btn-accent"
            onClick={handleNextPage}
            disabled={loading || meta.offset + meta.limit >= meta.total}
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskTable;
