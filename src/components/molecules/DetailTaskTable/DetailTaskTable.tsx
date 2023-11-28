'use client';

import useDetailTask from '@/hooks/useDetailTask';
import { LoadingDetailTask } from '@/components/atoms';
import * as React from 'react';

const DetailTaskTable = ({ id }: { id: string }) => {
  const { detailTasks, loading, error } = useDetailTask({ id });

  return (
    <table className="w-full table-auto">
      <tbody>
        {!loading ? (
          <React.Fragment>
            <tr>
              <th className="border border-t-0 border-l-0 border-b-0 px-4 sm:px-5 py-2.5 w-48 align-middle text-sm font-medium whitespace-nowrap text-blue-gray-600 border-gray-200 text-left">
                Name
              </th>
              <td className="px-4 sm:px-5 py-2.5 align-middle text-sm font-medium whitespace-nowrap">
                {detailTasks?.name}
              </td>
            </tr>
            <tr>
              <th className="border border-t-0 border-l-0 border-b-0 px-4 sm:px-5 py-2.5 w-48 align-middle text-sm font-medium whitespace-nowrap text-blue-gray-600 border-gray-200 text-left">
                Description
              </th>
              <td className="px-4 sm:px-5 py-2.5 align-middle text-sm font-medium whitespace-nowrap">
                {detailTasks?.description}
              </td>
            </tr>
            <tr>
              <th className="border border-t-0 border-l-0 border-b-0 px-4 sm:px-5 py-2.5 w-48 align-middle text-sm font-medium whitespace-nowrap text-blue-gray-600 border-gray-200 text-left">
                Created At
              </th>
              <td className="px-4 sm:px-5 py-2.5 align-middle text-sm font-medium whitespace-nowrap">
                {detailTasks?.created_at}
              </td>
            </tr>
            <tr>
              <th className="border border-t-0 border-l-0 border-b-0 px-4 sm:px-5 py-2.5 w-48 align-middle text-sm font-medium whitespace-nowrap text-blue-gray-600 border-gray-200 text-left">
                Status
              </th>
              <td className="px-4 sm:px-5 py-2.5 align-middle text-sm font-medium whitespace-nowrap">
                {detailTasks?.is_complete === false
                  ? 'Not complete'
                  : 'Complete'}
              </td>
            </tr>
          </React.Fragment>
        ) : (
          <LoadingDetailTask />
        )}
      </tbody>
    </table>
  );
};

export default DetailTaskTable;
