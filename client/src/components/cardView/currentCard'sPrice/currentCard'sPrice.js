import React from 'react';
// import { Container, Row, Col, Button } from 'reactstrap';


class CurrentCardsPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        const {card} = this.props;

        return (
            <>
                {card.prices.usd} {card.prices.usd_foil}
            </>
        );
    }
}

export default CurrentCardsPrice;