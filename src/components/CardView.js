import React, { Component } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import VoteCard from './VoteCard'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardContainer: {
        paddingTop: 10
    }
  });

class CardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.data
        }
    }
    
    componentDidMount() {

    }

    up = (o) => {
        var cards = this.state.cards;
        cards[o].votes++
        this.setState({cards: cards })
    }

    down = (o) => {
        var cards = this.state.cards;
        cards[o].votes--
        this.setState({cards: cards })
    }

    renderCards(o) {
        let cards = []
        for (var i = 0; i < o.length; i++) {
            o[i].votes > -5 && cards.push(
                <VoteCard data={o[i]} key={i} num={i} up={this.up} down={this.down}/>
            )
        }
        return cards;
    }

    render() {
        console.log(this.state.cards)
        return (
            <Grid container className="cardContainer" justifyContent="center" spacing={5}>
                <Grid item lg={12} xs={12}>
                    <Grid container justifyContent="center" spacing={5}>
                        {this.renderCards(this.state.cards)}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default CardView;