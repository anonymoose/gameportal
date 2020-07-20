import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Button, Row, Col } from 'reactstrap';
import axios from 'axios';
// import _ from 'lodash';
import "./searchBar.css";

class SearchBar extends React.Component {

    // DEBUG
    componentDidMount() {
        const {setResultsProp} = this.props;

        axios.get(`http://localhost:4000/v1/cards/?name=Jadelight`)
            .then(res => {
                setResultsProp(res.data);
            })
    }
    // /DEBUG

    render() {
        const {setResultsProp} = this.props;

        return(
            <Formik
              initialValues={{search: 'Jadelight',}}
              validationSchemavalidationSchema={Yup.object({
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
                  <Col lg={{size:4, offset: 1}}>
                    <Field name="search" type="text"></Field>
                    <ErrorMessage name="search"/>
                  </Col>
                  <Col lg={{size:4}}>
                    <Button className="searchBar__button">Search</Button>
                  </Col>
                </Row>
              </Form>
            </Formik>
        )
    }
}

export default SearchBar;
