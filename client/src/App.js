import React from 'react';
import './App.css';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from "yup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SignupForm/> */}
        <SearchBar/>
      </header>
    </div>
  );
}

const SearchBar = () => {
  return(
    <Formik
      initialValues={{search: '',}}
      validationSchema={Yup.object({
        search: Yup.string()
          .max(500, 'Must be 500 or less')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 600);
      }}
    >
      <Form>
        <label htmlFor="search">Search </label>
        <Field name="search" type="text"></Field>
        <ErrorMessage name="search" />
      </Form>
    </Formik>
  )
}

// const SignupForm = () => {
//   return (
//     <Formik
//       initialValues={{ firstName: '', lastName: '', email: '' }}
//       validationSchema={Yup.object({
//         firstName: Yup.string()
//           .max(15, 'Must be 15 characters or less')
//           .required('Required'),
//         lastName: Yup.string()
//           .max(20, 'Must be 20 characters or less')
//           .required('Required'),
//         email: Yup.string()
//           .email('Invalid email address')
//           .required('Required'),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       <Form>
//         <label htmlFor="firstName">First Name</label>
//         <Field name="firstName" type="text" />
//         <ErrorMessage name="firstName" />
//         <label htmlFor="lastName">Last Name</label>
//         <Field name="lastName" type="text" />
//         <ErrorMessage name="lastName" />
//         <label htmlFor="email">Email Address</label>
//         <Field name="email" type="email" />
//         <ErrorMessage name="email" />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// }

export default App;
