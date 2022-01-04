import React, { Component } from 'react';
import CardView from "./CardView";
import { render } from "@testing-library/react";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { name: 'one', votes: 0 }
                , { name: 'two', votes: 0 }
                , { name: 'three', votes: 0 }
                , { name: 'four', votes: 0 }
                , { name: 'five', votes: 0 }
                , { name: 'six', votes: 0 }

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