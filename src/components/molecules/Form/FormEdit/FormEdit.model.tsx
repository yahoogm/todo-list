import * as yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import axios from 'axios';
import { getToken } from '@/app/utils/getToken';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { taskResponse } from '@/app/utils/types';

type FormValues = {
  name: string | '';
  description: string | '';
  is_complete: boolean;
};

const useFormEditModel = ({ id }: { id: string }) => {
  const router = useRouter();
  const token = getToken('token');

  const [task, setTask] = React.useState<FormValues>({
    name: '',
    description: '',
    is_complete: false,
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const schema = yup.object({
    name: yup.string().required('name is required').min(3, 'Too short!'),
    description: yup
      .string()
      .required('description is required')
      .min(3, 'Too short!'),
    is_complete: yup.boolean().required(),
  });

  const getDetailTask = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const req = await axios.get<taskResponse>(
        `${process.env.API_URL}/task/${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const res = req.data;
      setTask({
        name: res.name,
        description: res.description,
        is_complete: res.is_complete,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [id, token]);

  const handleUpdateTask = async (task: FormValues) => {
    try {
      const req = await axios.patch<taskResponse>(
        `${process.env.API_URL}/task/${id}`,
        task,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const res = req.data;
      toast.success('Success edit task');
      router.push('/task');
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      description: '',
      is_complete: false,
    },
    validationSchema: schema,

    onSubmit: (values) => {
      handleUpdateTask(values);
      formik.resetForm();
    },
  });

  React.useEffect(() => {
    getDetailTask();
  }, [getDetailTask]);

  return { formik, task, isLoading };
};

export default useFormEditModel;
