import * as yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

type FormValues = {
  username: string;
  email: string;
  name: string;
  password: string;
};

const useFormSignUpModel = () => {
  const schema = yup
    .object({
      username: yup
        .string()
        .required('Username is required')
        .min(6, 'Too short!')
        .max(15, 'Too length!'),
      email: yup
        .string()
        .email('Not valid email')
        .required('email is required')
        .min(6, 'Too short!')
        .max(30, 'Too length!'),
      name: yup
        .string()
        .required('name is required')
        .min(6, 'Too short!')
        .max(15, 'Too length!'),
      password: yup
        .string()
        .required('Password is required')
        .min(8, 'Too short!')
        .max(15, 'Too length!'),
    })
    .required();

  const router = useRouter();

  const handleSignUp = async (payload: FormValues) => {
    try {
      await axios.post(`${process.env.API_URL}/auth/signup`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      toast.success('Sign up success');
      router.push('/auth/sign-in');
    } catch (error) {
      const err = error as {
        response?: { data?: { errors?: { email?: string; username: string } } };
      };

      const emailError = err.response?.data?.errors?.email;
      const usernameError = err.response?.data?.errors?.username;
      let errMsg = '';
      if (emailError && usernameError) {
        errMsg = `${emailError} and ${usernameError}`;
      } else if (usernameError) {
        errMsg = usernameError;
      } else if (emailError) {
        errMsg = emailError;
      } else {
        errMsg = 'Failed to sign up';
      }

      toast.error(errMsg);
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      username: '',
      email: '',
      name: '',
      password: '',
    },
    validationSchema: schema,

    onSubmit: (values) => {
      handleSignUp(values);

      formik.resetForm();
    },
  });
  return { formik };
};

export default useFormSignUpModel;
