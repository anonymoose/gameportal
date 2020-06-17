import React from 'react';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import { Link, } from 'react-router-dom';
import './searchView.css';
import '../commonCSS.css';

const SearchResults = ({cards}) => {
    return _.map(cards, card =>(
      <SearchResult card={card} key={card.id}/>
    ));
};

const SearchResult = ({card}) => {
    console.log(card);

    return(
      <>
        <Row className="searchView__margins-between-results">
          <Col lg= {6}>
            <Link to={`/card?_id=${card._id}`} className="all__float_right">
              {card.image_uris !== undefined &&
              <img alt={card.name} src={card.image_uris.small}/>}
      
              {card.image_uris === undefined &&
              <strong>NO IMAGE</strong>}
            </Link>
          </Col>
          <Col lg= {6}>
            <Row lg= {6} className="all__bold">
              {card.name} {card.mana_cost}
            </Row>
            <Row>
              <Col className="all__text-align_left">{card.rarity}</Col>
              <Col className="all__text-align_right">{card.set_name}</Col>
            </Row>
            <Row lg= {6} className="all__text-align_left">
              {card.oracle_text}
            </Row>
          </Col>
        </Row>
      </>
    )
}
  
export { SearchResults };