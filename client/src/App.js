import React from 'react';
import './App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Button, Row, Col } from 'reactstrap';
import axios from 'axios';
import _ from 'lodash';
import { BrowserRouter, Switch, Route, Link, withRouter} from 'react-router-dom';
import queryString from 'query-string';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* <SignupForm/> */}
          <Switch>
            <Route path='/card'>
              <CardView/>
            </Route>
            <Route path='/'>
              <SearchView/>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
};

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

class CardViewEx extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      card: {},
    }
  }

  componentDidMount(){
    const { location } = this.props;
    const parsed = queryString.parse(location.search);
    const cardMongoID = parsed._id;
    axios.get(`http://localhost:4000/v1/cards/${cardMongoID}`)
        .then(res => {
          this.setState({card: res.data});
        });
  }

  render(){
    const {card} = this.state;
    if (card.id === undefined) {
      return null;
    };

    return(
      <>
        <Col lg= {2}></Col>
        <Col lg= {8}>
          <Row>
            <Col lg= {4}>
              <img alt={card.name} src={card.image_uris.small}/>
            </Col>
            <Col lg= {4}></Col>
            <Col lg= {4}></Col>
          </Row>
        </Col>
        <Col lg= {2}></Col>
      </>
    );
  };
};

const CardView = withRouter(CardViewEx);

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
