import React from 'react';
import './App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Button, Row, Col } from 'reactstrap';
import axios from 'axios';
import _ from 'lodash';
import { Link, } from 'react-router-dom';

const SearchBar = ({setResultsProp}) => {

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
            <Col lg= {6}>
              <Field name="search" type="text"></Field>
              <ErrorMessage name="search"/>
            </Col>
            <Col lg= {6}>
              <Button size="lg">Search</Button>
            </Col>
          </Row>
        </Form>
      </Formik>
    )
  }
  
const SearchResults = ({cards}) => {
    return _.map(cards, card =>(
      <SearchResult card={card} key={card.id}/>
    ));
};

const SearchResult = ({card}) => {
    console.log(card);

    return(
      <div>
        <Link to={`/card?_id=${card._id}`}>
          {card.image_uris !== undefined &&
          <img alt={card.name} src={card.image_uris.small}/>}
  
          {card.image_uris === undefined &&
          <strong>NO IMAGE</strong>}
          </Link>
        {card.name}
      </div>
    )
}
  
class SearchView extends React.Component {
    constructor (props){
      super(props);
      this.state = {
        searchResults: [],
      }
      this.setResults = this.setResults.bind(this);
    }
  
    setResults(resultsFromSearchbar){
      this.setState({searchResults: resultsFromSearchbar})
    }
  
    render(){
      const {searchResults} = this.state;
      return(
        <>
          <Row>
            <Col xl={{ size: 5, offset: 4 }}>
              <SearchBar setResultsProp={this.setResults}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <SearchResults cards={searchResults}/>
            </Col>
          </Row>
        </>
      )
    }
}

export default SearchView;