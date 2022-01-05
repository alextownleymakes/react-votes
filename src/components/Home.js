import React, { Component } from 'react';
import CardView from "./CardView";
import { render } from "@testing-library/react";
import { v4 as uuidv4 } from 'uuid';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { cardId: uuidv4(), cardCount: 0, name: 'one', votes: 0 }
                , { cardId: uuidv4(), cardCount: 1, name: 'two', votes: 0 }
                , { cardId: uuidv4(), cardCount: 2, name: 'three', votes: 0 }
                , { cardId: uuidv4(), cardCount: 3, name: 'four', votes: 0 }
                , { cardId: uuidv4(), cardCount: 4, name: 'five', votes: 0 }
                , { cardId: uuidv4(), cardCount: 5, name: 'six', votes: 0 }

            ]
        }
    }

    render() {
        return(
            <>
                <CardView data={this.state.cards}/>
            </>
        )
    }

}

export default Home