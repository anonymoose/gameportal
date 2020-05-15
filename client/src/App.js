import React from 'react';
import './App.css';
import {useFormik} from 'formik'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignupForm/>
      </header>
    </div>
  );
}

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
