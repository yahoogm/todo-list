import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type FormValues = {
  username_or_email: string;
  password: string;
};

const useFormSignInModel = () => {
  const schema = yup
    .object({
      username_or_email: yup
        .string()
        .required('Username or email is required')
        .min(6, 'Too short!')
        .max(15, 'Too length!'),
      password: yup
        .string()
        .required('Password is required')
        .min(6, 'Too short!')
        .max(15, 'Too length!'),
    })
    .required();

  const router = useRouter();

  const handleSignIn = async (payload: FormValues) => {
    try {
      const request = await axios.post(
        `${process.env.API_URL}/auth/signin`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const response = await request.data;
      const parseUser = JSON.stringify(response.user);

      localStorage.setItem('token', response.token);
      localStorage.setItem('account', parseUser);

      toast.success('Sign in success');
      router.push('/task');
    } catch (error) {
      const err = error as {
        response?: { data?: { errors?: { email?: string } } };
      };

      const errCheck =
        err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors.email
          : 'email has already occured';

      const errMsg = errCheck || 'Failed to sign in';
      toast.error(errMsg);
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      username_or_email: '',
      password: '',
    },
    validationSchema: schema,

    onSubmit: (values) => {
      handleSignIn(values);

      formik.resetForm();
    },
  });
  return { formik };
};

export default useFormSignInModel;
