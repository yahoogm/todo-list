'use client';

import { TaskTable } from '@/components/molecules';
import { getToken } from '@/utils/getToken';
import { useRouter } from 'next/navigation';

const Task = () => {
  const token = getToken('token');
  const router = useRouter();
  if (!token) router.push('/auth/sign-in');
  return (
    <div className="space-y-4">
      <TaskTable />
    </div>
  );
};

export default Task;
