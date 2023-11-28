'use client';

import { HeaderAndFooter } from '@/components/templates';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { FormEdit } from '@/components/molecules';
import useNavigate from '@/hooks/useNavigate';

const EditTask: React.FC<{ id: string }> = ({ id }) => {
  const { handleNavigate } = useNavigate();

  return (
    <HeaderAndFooter>
      <button
        className="flex space-x-2"
        onClick={() => handleNavigate(undefined, 'back')}
      >
        <ArrowLeftIcon className="w-6" />
        <span>Back</span>
      </button>

      <div className="mt-4 h-40 w-full p-6 overflow-hidden rounded-xl bg-blue-gray-600 bg-primary">
        <div className="flex gap-2.5 items-end flex-wrap">
          <h1 className="text-white font-bold text-2xl sm:text-3xl">Edit</h1>
        </div>
      </div>
      <div className="overflow-x-auto bg-gray-800 -mt-16 px-6 py-8 mx-4 rounded-xl z-10">
        <FormEdit id={id} />
      </div>
    </HeaderAndFooter>
  );
};

export default EditTask;
