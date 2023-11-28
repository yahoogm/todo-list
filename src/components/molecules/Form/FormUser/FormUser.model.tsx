import * as yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import axios from 'axios';
import { getToken } from '@/utils/getToken';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { taskResponse, userDetail } from '@/utils/types';

type FormValues = {
  name: string | '';
  email: string | '';
  old_password: string | '';
  new_password: string | '';
};

const useFormUserModel = () => {
  const router = useRouter();
  const token = getToken('token');

  const [task, setTask] = React.useState<FormValues>({
    name: '',
    email: '',
    old_password: '',
    new_password: '',
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const schema = yup.object({
    name: yup.string().required('name is required').min(3, 'Too short!'),
    email: yup
      .string()
      .email('Not valid email')
      .required('email is required')
      .min(3, 'Too short!')
      .test(
        'uniqueEmail',
        'Email must be different from the previous one',
        (value) => {
          const previousEmail = task.email;
          return value !== previousEmail;
        }
      ),
    old_password: yup
      .string()
      .required('old password is required')
      .min(3, 'Too short!'),
    new_password: yup
      .string()
      .required('new password is required')
      .min(3, 'Too short!'),
  });

  const getDetailUser = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const req = await axios.get<userDetail>(`${process.env.API_URL}/user`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const res = req.data;
      setTask({
        name: res.name,
        email: res.email,
        old_password: '',
        new_password: '',
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const handleUpdateUser = async (user: FormValues) => {
    try {
      const req = await axios.patch<userDetail>(
        `${process.env.API_URL}/user`,
        user,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const res = req.data;
      localStorage.setItem('account', JSON.stringify(res));
      toast.success('Success edit user');
      router.push('/task');
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      old_password: '',
      new_password: '',
    },
    validationSchema: schema,

    onSubmit: (values) => {
      handleUpdateUser(values);

      formik.resetForm();
    },
  });

  React.useEffect(() => {
    getDetailUser();
  }, [getDetailUser]);

  return { formik, task, isLoading };
};

export default useFormUserModel;
