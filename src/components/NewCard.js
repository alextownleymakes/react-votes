import { Input } from "@material-ui/core";
import React, { Component } from "react";


class NewCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    update = (e) => {
        if (e.target.value.length < 160) {
            if (e.keyCode === 13) {
                this.props.add(e.target.value);
                e.target.value = "";
            } else {
                this.setState({value: e.target.value})
            }
        }
        else {
            e.target.value.slice(0, e.target.value.length - 1)
        }
    }

    render() {
        return(
            <Input placeholder="type something and press enter" fullWidth onKeyDown={(e) => {this.update(e);}}></Input>
        )
    }
}

export default NewCard