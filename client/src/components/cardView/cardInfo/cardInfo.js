import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


class CardInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        const {card} = this.props;

        return (
            <>
                <Col>
                    <Row className="all__bold all__text-align_left">
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
            </>
        );
    }
}

export default CardInfo;