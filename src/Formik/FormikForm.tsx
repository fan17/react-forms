import React from 'react';
import { Formik, FormikActions, Form, Field, ErrorMessage } from 'formik';

interface Props {}

interface State {
  initialValues: Values;
}

interface ValidationErrors {
  title?: string;
  descriptions?: string;
}

interface Values {
  title: string;
  description: string;
}

class FormikForm extends React.Component<Props, State> {
  state: State = {
    initialValues: {
      title: '',
      description: ''
    }
  };

  validate = (values: Values): ValidationErrors => {
    console.log('validate');
    const errors: ValidationErrors = {};
    if (!values.title) {
      errors.title = 'Required';
    }

    return errors;
  };

  onSubmit = (values: Values, actions: FormikActions<Values>) => {
    setTimeout(() => {
      actions.setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 2000);
  };

  render() {
    return (
      <div>
        <h2>FormikForm</h2>
        <h3>Create / update / delete article</h3>
        <Formik
          initialValues={this.state.initialValues}
          validate={this.validate}
          onSubmit={this.onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" />
              <Field type="textarea" name="description" />
              <ErrorMessage name="description" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default FormikForm;
