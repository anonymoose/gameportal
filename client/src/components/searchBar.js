import React from 'react';
import './App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Button, Row, Col } from 'reactstrap';
import axios from 'axios';
// import _ from 'lodash';

const SearchBar = ({setResultsProp}) => {

    debugger;

    return(
      <Formik
        initialValues={{search: '',}}
        validationSchema={Yup.object({
          search: Yup.string()
            .max(500, 'Must be 500 or less')
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.get(`http://localhost:4000/v1/cards/?name=${values.search}`)
          .then(res => {
            setResultsProp(res.data);
          })
        }}
      >
        <Form>
          <Row>
              <Col lg= {4}>
              </Col>
              <Col lg= {3}>
                <Field name="search" type="text"></Field>
                <ErrorMessage name="search"/>
              </Col>
              <Col lg= {1}>
                <Button size="lg">Search</Button>
              </Col>
              <Col lg= {4}>
              </Col>
          </Row>
        </Form>
      </Formik>
    )
  }
  
export default SearchBar;