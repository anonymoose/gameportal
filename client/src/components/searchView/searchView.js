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
        <Row >

          <Col sm={{size: 2, offset: 2}} style={{border: "1px solid green"}}>
            <Link to={`/card?_id=${card._id}`}>
              {card.image_uris !== undefined &&
               <img alt={card.name} src={card.image_uris.small}/>}

              {card.image_uris === undefined &&
               <strong>NO IMAGE</strong>}
            </Link>
          </Col>

          <Col sm={{size: 5}} style={{border: "1px solid green"}}>
            <Row >
              {card.name} {card.mana_cost}
            </Row>
            <Row>
              <Col className="all__text-align_left">{card.rarity}</Col>
              <Col className="all__text-align_right">{card.set_name}</Col>
            </Row>
            <Row >
              {card.oracle_text}
            </Row>
          </Col>
        </Row>
      </>
    )
}

export { SearchResults };


/*
  <Row className="searchView__margins-between-results" >
  <Col style={{border: "1px solid green"}}>
  <Link to={`/card?_id=${card._id}`} className="all__float_right">
  {card.image_uris !== undefined &&
  <img alt={card.name} src={card.image_uris.small}/>}

  {card.image_uris === undefined &&
  <strong>NO IMAGE</strong>}
  </Link>
  </Col>
  <Col style={{border: "1px solid green"}}>
  <Row className="all__bold">
  {card.name} {card.mana_cost}
  </Row>
  <Row>
  <Col className="all__text-align_left">{card.rarity}</Col>
  <Col className="all__text-align_right">{card.set_name}</Col>
  </Row>
  <Row className="all__text-align_left">
  {card.oracle_text}
  </Row>
  </Col>
  </Row>
*/
