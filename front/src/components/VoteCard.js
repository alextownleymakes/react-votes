import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
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
        color: '#aaa'
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
                <Grid item xs={2} key={this.props.num}>
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
                                <Box mb={3} mt={3}>
                                    <Typography gutterBottom align="center" style={{overflowWrap: "break-word", minHeight: 170, maxHeight: 170, overflowY: 'hidden'}} paddingTop={20} paddingBottom={5}>
                                        {this.state.data.name}
                                    </Typography>
                                </Box>
                            <Grid container align="right" xs={12}>
                                <Grid item align="right" xs={12}>
                                <ButtonGroup size="small" variant="text" >
                                <Typography align="center" style={{fontSize: 14, color: '#999'}}>
                                    {this.state.data.votes}
                                </Typography>
                                    <Button key="up" onClick={() => {this.props.up(this.props.num)}}><FaAngleUp/></Button>,
                                    <Button key="down" onClick={() => {this.props.down(this.props.num)}}><FaAngleDown/></Button>
                                </ButtonGroup>
                                </Grid>
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
