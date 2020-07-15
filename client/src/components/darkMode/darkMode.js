import React from 'react';
import { Button } from 'reactstrap';
import './darkMode.css';
import '../commonCSS.css';


class DarkMode extends React.Component {
    constructor (props){
        super(props);
        this.changeMode = this.changeMode.bind(this);
    }

    changeMode(){
        const body = document.body;
        body.classList.toggle("darkMode__night-mode");
    }
    
    render(){
        return(
            <Button className="darkMode__button-color" onClick={this.changeMode}>Night Mode</Button>  
        );
    }
};

export default DarkMode;