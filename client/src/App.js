import React from 'react';
import './App.css';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from "yup";
// import _ from 'lodash';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import CardView from './components/cardView';
import { SearchResults } from './components/searchView/searchView';
import SearchBar from './components/searchBar';
import { Row, Col } from 'reactstrap';
import DarkMode from './components/darkMode/darkMode'
import './components/commonCSS.css'



class App extends React.Component {
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
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              {/* <SignupForm/> */}
              <Switch>
                <Route path='/card'>
                  <CardView/>
                </Route>
                <Route path='/'>
                  <Row className="">
                    <Col>
                      <DarkMode/>
                    </Col>
                    <Col>
                      <SearchBar setResultsProp={this.setResults}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <SearchResults cards={searchResults}/>
                    </Col>
                  </Row>
                </Route>
              </Switch>
            </header>
          </div>
        </BrowserRouter>
        <Row>
        </Row>
      </>
    );  
  };
}

export default App;
