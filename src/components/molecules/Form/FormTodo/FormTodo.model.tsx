import * as yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import axios from 'axios';
import { getToken } from '@/app/utils/getToken';
import { useRouter } from 'next/navigation';

type FormValues = {
  name: string;
  description: string;
};

const useFormTodoModel = () => {
  const router = useRouter();
  const schema = yup
    .object({
      name: yup.string().required('name is required').min(3, 'Too short!'),
      description: yup
        .string()
        .required('description is required')
        .min(3, 'Too short!'),
    })
    .required();

  const handleAddTask = async (payload: FormValues) => {
    const token = getToken('token');
    try {
      await axios.post(`${process.env.API_URL}/task`, payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Success add task');
      router.push('/tasks');
    } catch (error) {
      toast.error('Failed add todo');
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: schema,

    onSubmit: (values) => {
      handleAddTask(values);

      formik.resetForm();
    },
  });
  return { formik };
};

export default useFormTodoModel;
