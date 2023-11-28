import { Button, Input } from '@/components/atoms';
import useFormSignUpModel from './FormSignUp.model';

const FormSignIn = () => {
  const model = useFormSignUpModel();

  return (
    <form onSubmit={model.formik.handleSubmit}>
      <div className="mb-4">
        <Input
          id="username"
          name="username"
          placeholder="Username"
          type="text"
          onChange={model.formik.handleChange}
          value={model.formik.values.username}
        />
        <div className="normal-case text-red-300">
          {model.formik.touched.username && model.formik.errors.username ? (
            <small>{model.formik.errors.username}</small>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={model.formik.handleChange}
          value={model.formik.values.email}
        />
        <div className="normal-case text-red-300">
          {model.formik.touched.email && model.formik.errors.email ? (
            <small>{model.formik.errors.email}</small>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <Input
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          onChange={model.formik.handleChange}
          value={model.formik.values.name}
        />
        <div className="normal-case text-red-300">
          {model.formik.touched.name && model.formik.errors.name ? (
            <small>{model.formik.errors.name}</small>
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
          text="sign up"
          btnColor="btn-primary"
          btnType="submit"
          width="w-full"
        />
      </div>
    </form>
  );
};

export default FormSignIn;
