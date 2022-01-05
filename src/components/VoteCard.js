import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Container, Button } from "@material-ui/core";
import BsArrowUpCircleFill from 'react-icons/bs'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'


const styles = theme => ({
    root: {
        fontSize: 7,
    },
  });

class VoteCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        const { classes } = this.props;
        return(
                <Grid item xs={3} key={this.props.num}>
                    <Card>
                        <CardContent>
                            <Grid container xs={12}>
                                <Grid item align="left" xs={1}>
                                    <Typography className={classes.root} gutterBottom align="left">
                                        {this.state.data.cardCount}
                                    </Typography>
                                </Grid>
                                <Grid item align="right" xs={11}>
                                    <Typography className={classes.root} gutterBottom align="right">
                                        {this.state.data.cardId}
                                    </Typography>
                                </Grid>
                            </Grid>
                                <Typography gutterBottom align="center" mt={20} mb={5}>
                                    {this.state.data.name}
                                </Typography>
                            <Grid container align="right" xs={12}>
                                <Typography align="center">
                                    {this.state.data.votes}
                                </Typography>
                                <ButtonGroup size="small" variant="text" >
                                    <Button key="up" onClick={() => {this.props.up(this.props.num)}}><FaAngleUp/></Button>,
                                    <Button key="down" onClick={() => {this.props.down(this.props.num)}}><FaAngleDown/></Button>
                                </ButtonGroup>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
        ) 
    }
}

VoteCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VoteCard);
