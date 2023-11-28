'use client';

import useNavigate from '@/hooks/useNavigate';
import { FormTodo } from '@/components/molecules';
import { HeaderAndFooter } from '@/components/templates';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getToken } from '@/utils/getToken';
import { useRouter } from 'next/navigation';
import * as React from 'react';

const Todo = () => {
  const { handleNavigate } = useNavigate();
  const router = useRouter();
  const token = getToken('token');

  React.useEffect(() => {
    if (!token) router.push('/auth/sign-in');
  }, [token, router]);

  return (
    <HeaderAndFooter>
      <div className="w-96 m-auto mb-4">
        <button
          className="flex space-x-2"
          onClick={() => handleNavigate(undefined, 'back')}
        >
          <ArrowLeftIcon className="w-6" />
          <span>Back</span>
        </button>
      </div>
      <FormTodo />
    </HeaderAndFooter>
  );
};

export default Todo;
