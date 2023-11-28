import * as React from 'react';

const LoadingDetailTask = () => {
  return (
    <React.Fragment>
      <tr>
        <th className="border border-t-0 border-l-0 border-b-0 px-4 sm:px-5 py-2.5 w-48 align-middle text-sm font-medium  text-blue-gray-600 border-gray-200 text-left whitespace-nowrap">
          Name
        </th>
        <td className="px-4 sm:px-5 py-2.5 align-middle text-sm font-medium skeleton"></td>
      </tr>
      <tr>
        <th className="border border-t-0 border-l-0 border-b-0 px-4 sm:px-5 py-2.5 w-48 align-middle text-sm font-medium  text-blue-gray-600 border-gray-200 text-left whitespace-nowrap">
          Description
        </th>
        <td className="px-4 sm:px-5 py-2.5 align-middle text-sm font-medium skeleton"></td>
      </tr>
      <tr>
        <th className="border border-t-0 border-l-0 border-b-0 px-4 sm:px-5 py-2.5 w-48 align-middle text-sm font-medium  text-blue-gray-600 border-gray-200 text-left whitespace-nowrap">
          Created At
        </th>
        <td className="px-4 sm:px-5 py-2.5 align-middle text-sm font-medium skeleton"></td>
      </tr>
      <tr>
        <th className="border border-t-0 border-l-0 border-b-0 px-4 sm:px-5 py-2.5 w-48 align-middle text-sm font-medium  text-blue-gray-600 border-gray-200 text-left whitespace-nowrap">
          Status
        </th>
        <td className="px-4 sm:px-5 py-2.5 align-middle text-sm font-medium skeleton"></td>
      </tr>
    </React.Fragment>
  );
};

export default LoadingDetailTask;
