'use client';

import { Button, Input } from '@/components/atoms';
import useFormSignInModel from './FormSignIn.model';

const FormSignIn = () => {
  const model = useFormSignInModel();

  return (
    <form onSubmit={model.formik.handleSubmit}>
      <div className="mb-4">
        <Input
          id="username_or_email"
          name="username_or_email"
          placeholder="Username or email"
          type="text"
          onChange={model.formik.handleChange}
          value={model.formik.values.username_or_email}
        />
        <div className="normal-case text-red-300">
          {model.formik.touched.username_or_email &&
          model.formik.errors.username_or_email ? (
            <small>{model.formik.errors.username_or_email}</small>
          ) : null}
        </div>
      </div>
      <div className="mb-10">
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          onChange={model.formik.handleChange}
          value={model.formik.values.password}
        />
        <div className="normal-case text-red-300">
          {model.formik.touched.password && model.formik.errors.password ? (
            <small>{model.formik.errors.password}</small>
          ) : null}
        </div>
      </div>
      <div className="w-full">
        <Button
          text="sign in"
          btnColor="btn-primary"
          btnType="submit"
          width="w-full"
        />
      </div>
    </form>
  );
};

export default FormSignIn;
