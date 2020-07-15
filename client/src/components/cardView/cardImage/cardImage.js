import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './cardImage.css'


class CardImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        const {card} = this.props;

        return (
                <img className="cardImage__size" alt={card.name} src={card.image_uris.normal}/>
        );
    }
}

export default CardImage;