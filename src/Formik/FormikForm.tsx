import React from 'react';
import { Formik, FormikActions, Form, yupToFormErrors } from 'formik';
import {
  Button,
  FormGroup,
  Label,
  FormFeedback,
  Input,
  Container,
  Col
} from 'reactstrap';
import * as yup from 'yup';

interface Props {}

interface State {
  initialValues: Values;
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

  validationSchema = yup.object().shape({
    title: yup
      .string()
      .required()
      .min(3)
  });

  onSubmit = (values: Values, actions: FormikActions<Values>) => {
    setTimeout(() => {
      actions.setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 2000);
  };

  render() {
    return (
      <Container>
        <h2>FormikForm</h2>
        <Formik
          initialValues={this.state.initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.onSubmit}
        >
          {({ isSubmitting, errors, handleChange, handleBlur, values }) => (
            <Form>
              <FormGroup row>
                <Label for="title" sm={2}>
                  Title
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="type title..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    className={errors.title ? 'invalid' : undefined}
                    invalid={!!errors.title}
                  />
                  {errors.title ? (
                    <FormFeedback>{errors.title}</FormFeedback>
                  ) : null}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={2}>
                  Description
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    placeholder="type description..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    className={errors.description ? 'invalid' : undefined}
                    invalid={!!errors.description}
                  />
                  {errors.description ? (
                    <FormFeedback>{errors.description}</FormFeedback>
                  ) : null}
                </Col>
              </FormGroup>
              <Button disabled={isSubmitting}>Submit</Button>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}

export default FormikForm;
