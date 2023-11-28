import { Button, Input } from '@/components/atoms';
import useFormTodoModel from './FormTodo.model';

const FormTodo = () => {
  const model = useFormTodoModel();

  return (
    <form
      className=" m-auto space-y-2 w-96"
      onSubmit={model.formik.handleSubmit}
    >
      <div>
        <Input
          id="name"
          name="name"
          placeholder="Todo name"
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

      <div>
        <textarea
          className="textarea textarea-bordered w-96 bg-white text-black placeholder:text-gray-400"
          placeholder="Description"
          id="description"
          name="description"
          onChange={model.formik.handleChange}
          value={model.formik.values.description}
        ></textarea>
        <div className="normal-case text-red-300">
          {model.formik.touched.description &&
          model.formik.errors.description ? (
            <small>{model.formik.errors.description}</small>
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

export default FormTodo;
