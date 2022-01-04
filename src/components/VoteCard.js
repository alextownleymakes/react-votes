import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Container, Button } from "@material-ui/core";
import BsArrowUpCircleFill from 'react-icons/bs'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

class VoteCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return(
                <Grid item key={this.props.num}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom align="center">
                                {this.state.data.votes}
                            </Typography>
                            <ButtonGroup size="small" variant="text" >
                                <Button key="up" onClick={() => {this.props.up(this.props.num)}}><FaAngleUp/></Button>,
                                <Button key="down" onClick={() => {this.props.down(this.props.num)}}><FaAngleDown/></Button>
                            </ButtonGroup>
                        </CardContent>
                    </Card>
                </Grid>
        ) 
    }
}

export default VoteCard