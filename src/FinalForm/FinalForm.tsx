import React, { ComponentType } from 'react';
import { Form, Field } from 'react-final-form';
import {
  Button,
  FormGroup,
  Label,
  FormFeedback,
  Input,
  Container,
  Col
} from 'reactstrap';

// it is needed to do some magic
// it seems ugly, formik is much more simple
// const adapt = Component => ({ input, meta: { valid }, ...rest }) => (
//   <Component {...input} {...rest} valid={valid} />
// );
// const AdaptedInput = adapt(Input);

interface Props {}

interface State {
  initialValues: Values;
}

interface Values {
  title: string;
  description: string;
}

class FinalForm extends React.Component<Props, State> {
  state: State = {
    initialValues: {
      title: '',
      description: ''
    }
  };

  onSubmit = (values: Values) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 2000);
  };

  render() {
    return (
      <Container>
        <h2>FinalForm</h2>
        <Form
          onSubmit={this.onSubmit}
          initialValues={this.state.initialValues}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup row>
                <Label for="title" sm={2}>
                  Title
                </Label>
                <Col sm={10}>
                  <Field
                    name="title"
                    component="input"
                    type="text"
                    placeholder="Title"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={2}>
                  Description
                </Label>
                <Col sm={10}>
                  <Field
                    name="description"
                    component="textarea"
                    placeholder="Description"
                  />
                </Col>
              </FormGroup>
              <Button disabled={submitting || pristine}>Submit</Button>
            </form>
          )}
        />
      </Container>
    );
  }
}

export default FinalForm;
