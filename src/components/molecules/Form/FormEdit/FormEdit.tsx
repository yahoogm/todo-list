'use client';

import useFormEditModel from './FormEdit.model';
import { Button, Input } from '@/components/atoms';

const FormEdit = ({ id }: { id: string }) => {
  const model = useFormEditModel({ id });

  if (model.isLoading) return <div>Loading...</div>;

  if (
    model.formik.values.name === '' ||
    model.formik.values.description === '' ||
    model.formik.values.is_complete === undefined
  ) {
    model.formik.setValues({
      name: model.task.name,
      description: model.task.description,
      is_complete: model.task.is_complete,
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

      <div>
        <select
          className="select select-bordered w-full"
          id="is_complete"
          name="is_complete"
          onChange={(e) => {
            model.formik.handleChange(e);
            if (e.target.value === 'Complete') {
              model.formik.setFieldValue('is_complete', true);
            } else {
              model.formik.setFieldValue('is_complete', false);
            }
          }}
          onBlur={model.formik.handleBlur}
          value={model.formik.values.is_complete ? 'Complete' : 'Not complete'}
        >
          <option value={'Complete'}>Complete</option>
          <option value={'Not complete'}>Not complete</option>
        </select>
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

export default FormEdit;
