import React from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

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

