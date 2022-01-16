import React, { Component } from 'react';
import CardView from "./CardView";
import { render } from "@testing-library/react";
import { v4 as uuidv4 } from 'uuid';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: null
        }
    }


    api = () => {
        fetch("http://localhost:9000/api/cards")
            .then(res => res.text())
            .then(res => this.setState({ cards: JSON.parse(res) }, () => {console.log(this.state.res)}));    
    }

    componentDidMount() {
        this.api();
    }

    render() {
        console.log(this.state.cards)
        return(
            <>
                {this.state.cards && <CardView data={this.state.cards}/>}
            </>
        )
    }

}

export default Home