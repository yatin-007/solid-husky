import { Component, Setter } from 'solid-js';
import { useFormHandler } from 'solid-form-handler';
import { yupSchema } from 'solid-form-handler/yup';
import * as yup from 'yup';

import { TextInputField, WrapperModal } from '../../../components';
export interface Props {
  title: string;
  isOpen: boolean;
  setIsOpen: Setter<boolean>;
}

type Schema = {
  title: string;
  description: string;
};

const schema: yup.Schema<Schema> = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
});

export const AddBlog: Component<Props> = (props) => {
  const formHandler = useFormHandler<Schema>(yupSchema(schema));
  const { formData } = formHandler;

  const onClose = () => {
    props.setIsOpen(false);
  };

  const submit = async (event: Event) => {
    try {
      event.preventDefault();

      await formHandler.validateForm();

      const data = formData();

      // eslint-disable-next-line no-alert
      alert(`Data sent with success: ${JSON.stringify(data)}`);

      await formHandler.resetForm();
      onClose();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error submitting form:', error);
    }
  };

  return (
    <WrapperModal
      open={props.isOpen}
      title={'Add Blog'}
      handleClose={onClose}
      onSubmit={submit}
    >
      <form autocomplete="off" onSubmit={submit}>
        <div class="mb-3">
          <TextInputField
            label="Title"
            name="title"
            formHandler={formHandler}
          />
        </div>
        <div class="mb-3">
          <TextInputField
            label="Description"
            name="description"
            formHandler={formHandler}
          />
        </div>
      </form>
    </WrapperModal>
  );
};
