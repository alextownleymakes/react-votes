import React, { Component } from 'react';
import CardView from "./CardView";
import { render } from "@testing-library/react";
import { v4 as uuidv4 } from 'uuid';
import Api from '../Api/Api'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: null
        }
    }

    getAllCards = () => {
        Api.getAllCards().then(data => {
            this.setState({cards: data.data})
        })
    }

    componentDidMount() {

        this.getAllCards();
    }

    render() {
        return(
            <>
                {this.state.cards && <CardView data={this.state.cards}/>}
            </>
        )
    }

}

export default Home