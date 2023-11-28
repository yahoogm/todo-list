'use client';

import { TaskTable } from '@/components/molecules';
import { getToken } from '@/utils/getToken';
import { useRouter } from 'next/navigation';
import * as React from 'react';

const Task = () => {
  const router = useRouter();
  const token = getToken('token');

  React.useEffect(() => {
    if (!token) router.push('/auth/sign-in');
  }, [router, token]);

  return (
    <div className="space-y-4">
      <TaskTable />
    </div>
  );
};

export default Task;
