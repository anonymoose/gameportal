import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import LegalitiesCheck from './legalitiesCheck/legalitiesCheck';
import '../../commonCSS.css';


class Legalities extends React.Component {
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
                    <Row>
                        <LegalitiesCheck value={card.legalities.standard} name="standard"/>
                    </Row>
                    <Row>
                        <LegalitiesCheck value={card.legalities.pioneer} name="pioneer"/>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <LegalitiesCheck value={card.legalities.modern} name="modern"/>
                    </Row>
                    <Row>
                        <LegalitiesCheck value={card.legalities.legacy} name="legacy"/>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <LegalitiesCheck value={card.legalities.pauper} name="pauper"/>
                    </Row>
                    <Row>
                        <LegalitiesCheck value={card.legalities.vintage} name="vintage"/>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <LegalitiesCheck value={card.legalities.historic} name="historic"/>
                    </Row>
                    <Row>
                        <LegalitiesCheck value={card.legalities.penny} name="penny"/>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <LegalitiesCheck value={card.legalities.commander} name="commander"/>
                    </Row>
                    <Row>
                        <LegalitiesCheck value={card.legalities.brawl} name="brawl"/>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <LegalitiesCheck value={card.legalities.oldschool} name="oldschool"/>
                    </Row>
                    <Row>
                        <LegalitiesCheck value={card.legalities.duel} name="duel"/>
                    </Row>
                </Col>
            </>
        );
    }
}

export default Legalities;