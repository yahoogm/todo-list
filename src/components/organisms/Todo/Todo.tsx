'use client';

import useNavigate from '@/hooks/useNavigate';
import { FormTodo } from '@/components/molecules';
import { HeaderAndFooter } from '@/components/templates';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Todo = () => {
  const { handleNavigate } = useNavigate();
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
