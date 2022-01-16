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
            if (e.keyCode === 13 && e.target.value !== "") {
                this.props.add(e.target.value);
                e.target.value = "";
                this.props.fieldLength(0);
            } else {
                this.setState({value: e.target.value})
            }
        }
        else {
            e.target.value.slice(0, e.target.value.length - 1)
        }
    }

    fl = (e) => {
        this.props.fieldLength(e.target.value.length);
    }

    render() {
        return(
            <Input placeholder="type + enter. 150 characters max." inputProps={{ maxLength: 150 }} fullWidth onKeyDown={(e) => {this.update(e);}} onChange={(e) => {this.fl(e);}}></Input>
        )
    }
}

export default NewCard