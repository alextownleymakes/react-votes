import React, { Component } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import VoteCard from './VoteCard'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";
import NewCard from "./NewCard";

import { v4 as uuidv4 } from 'uuid';


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

    add = (o) => {
        var cards = this.state.cards;
        var newid = uuidv4();
        var newCard = { cardId: newid, cardCount: (cards.length + 1), name: o, votes: 0 }
        cards.push(newCard);
        console.log(cards)

        this.setState({cards: cards})
    }

    renderCards(o) {
        let cards = []
        for (var i = 0; i < o.length; i++) {
            console.log(o[i])
            o[i].votes > -5 && cards.push(
                <VoteCard data={o[i]} key={i} num={i} up={this.up} down={this.down}/>
            )
        }
        return cards;
    }

    render() {
        return (
            <>
            <Grid container className="cardContainer" justifyContent="center" spacing={5} xs={12}>
                <Grid item xs={4}/>
                <Grid item xs={4} align="center">
                    <NewCard add={this.add}/><br/>
                </Grid>
                <Grid item xs={4}/>
                {this.renderCards(this.state.cards)}
            </Grid>
            </>
        )
    }
}

export default CardView;