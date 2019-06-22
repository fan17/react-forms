import React from 'react';
import FormikForm from './Formik/FormikForm';
import FinalForm from './FinalForm/FinalForm';

const App: React.FC = () => {
  return (
    <div>
      <h1>Forms</h1>
      <FormikForm />
      <FinalForm />
    </div>
  );
};

export default App;
