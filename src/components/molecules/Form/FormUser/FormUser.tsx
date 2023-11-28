import { Input, Button } from '@/components/atoms';
import useFormUserModel from './FormUser.model';

const FormUser = () => {
  const model = useFormUserModel();

  if (model.isLoading) return <div>Loading...</div>;

  if (model.formik.values.name === '' || model.formik.values.email === '') {
    model.formik.setValues({
      name: model.task.name,
      email: model.task.email,
      old_password: model.task.old_password,
      new_password: model.task.new_password,
    });
  }
  return (
    <form
      className=" m-auto space-y-2 w-96"
      onSubmit={model.formik.handleSubmit}
    >
      <div>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="name"
          onChange={model.formik.handleChange}
          value={model.formik.values.name}
        />
        <div className="normal-case text-red-300">
          {model.formik.touched.name && model.formik.errors.name ? (
            <small>{model.formik.errors.name}</small>
          ) : null}
        </div>
      </div>
      <div>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          onChange={model.formik.handleChange}
          value={model.formik.values.email}
        />
        <div className="normal-case text-red-300">
          {model.formik.touched.email && model.formik.errors.email ? (
            <small>{model.formik.errors.email}</small>
          ) : null}
        </div>
      </div>
      <div>
        <Input
          id="old_password"
          name="old_password"
          type="password"
          placeholder="Old password"
          onChange={model.formik.handleChange}
          value={model.formik.values.old_password}
        />
        <div className="normal-case text-red-300">
          {model.formik.touched.old_password &&
          model.formik.errors.old_password ? (
            <small>{model.formik.errors.old_password}</small>
          ) : null}
        </div>
      </div>
      <div>
        <Input
          id="new_password"
          name="new_password"
          type="password"
          placeholder="New password"
          onChange={model.formik.handleChange}
          value={model.formik.values.new_password}
        />
        <div className="normal-case text-red-300">
          {model.formik.touched.new_password &&
          model.formik.errors.new_password ? (
            <small>{model.formik.errors.new_password}</small>
          ) : null}
        </div>
      </div>

      <div className="justify-end flex">
        <Button
          btnColor="btn-success"
          width="w-full"
          btnType="submit"
          text="submit"
        />
      </div>
    </form>
  );
};

export default FormUser;
