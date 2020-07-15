import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../../../commonCSS.css';

class LegalitiesCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        const {value, name} = this.props;
        let color = '';
        let text = '';
        if (value === "legal") {
            color = 'green';
            text = 'legal';
        } else {
            color = 'gray';
            text = 'not legal';
        }

        return (
            <>
                <div style={{backgroundColor:color}}>
                    {text}
                </div>&nbsp; {name}
            </>
        );
    }
}

export default LegalitiesCheck;