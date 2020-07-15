import React from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
// import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import '../commonCSS.css';
import CardImage from './cardImage/cardImage';
import CardInfo from './cardInfo/cardInfo';
import CurrentCardsPrice from "./currentCard'sPrice/currentCard'sPrice";
import CardPrintings from './cardPrintings/cardPrintings';
import Legalities from './legalities/legalities';
import DeckUsage from './deckUsage/deckUsage';
import RecentDecks from './recentDecks/recentDecks';
import Rulings from './rulings/rulings';

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
            <Row>
              <Col>
                <Row>
                  <Col>
                    <CardImage card={card}></CardImage>
                  </Col>
                </Row>
                <Row>
                  <Col style={{border: "1px solid red"}}>
                    <CurrentCardsPrice card={card}></CurrentCardsPrice>
                  </Col>
                </Row>
                <Row style={{border: "1px solid orange"}}>
                  <CardPrintings card={card}></CardPrintings>
                </Row>
              </Col>
              <Col>
                <Row>
                  <CardInfo card={card}></CardInfo>
                </Row>
                <Row style={{border: "1px solid yellow"}} xs={2}>
                  <Legalities card={card}></Legalities>
                </Row>
              </Col>
            </Row>
            <Row style={{border: "1px solid green"}}>
              <Col style={{border: "1px solid blue"}}>
                <DeckUsage card={card}></DeckUsage>
              </Col>
              <Col style={{border: "1px solid purple"}}>
                <RecentDecks card={card}></RecentDecks>
              </Col>
            </Row>
            <Row>
              <Rulings card={card}></Rulings>
            </Row>
        </>
      );
    };
  };
  
  const CardView = withRouter(CardViewEx);

  export default CardView;