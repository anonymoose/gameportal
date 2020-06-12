import React from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import { Link, } from 'react-router-dom';
import SearchBar from './searchBar'

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