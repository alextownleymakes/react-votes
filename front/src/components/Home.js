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


    render() {
        return(
            <>
                <CardView/>
            </>
        )
    }

}

export default Home