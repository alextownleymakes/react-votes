import React, { Component } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import VoteCard from './VoteCard'
import Typography from '@material-ui/core/Typography';
import NewCard from "./NewCard";

import Api from '../Api/Api'

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
        cards[o].votes++;
        this.setState({cards: cards});

        Api.upvote(cards[o]);
    }

    down = (o) => {
        var cards = this.state.cards;
        cards[o].votes--;
        this.setState({cards: cards });

        Api.downvote(cards[o]);

    }

    add = (o) => {
        var cards = this.state.cards;
        var newid = uuidv4();
        var newCard = { cardId: newid, cardCount: (cards.length), name: o, votes: 0 };
        cards.push(newCard);

        this.setState({cards: cards})

        Api.newCard(JSON.stringify(cards))
    }

    fieldLength = (o) => {
        this.setState({fl: o})
    }

    fl = (o) => {
        var fl = this.state.fl;
        var remaining = 150 - o;
        if (o > 0) { return <Typography style={{marginTop: 7, color: '#ff8888', fontSize: 13}}>{ remaining } characters remaining!</Typography> }
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
        return (
            <>
            <Grid container className="cardContainer" justifyContent="center" spacing={1} xs={12}style={{marginTop: 5}}>
                <Grid item xs={4}/>
                <Grid item xs={4} align="center">
                    <NewCard add={this.add} fieldLength={this.fieldLength}/><br/>
                </Grid>
                <Grid item xs={4} >{this.state.fl > 0 ? this.fl(this.state.fl) : null}</Grid>
                <Grid container className="cardContainer" justifyContent="center" spacing={3} xs={12} style={{marginTop: 30}}>
                    {/* <Box> */}
                        {this.renderCards(this.state.cards)}
                    {/* </Box> */}
                </Grid>
            </Grid>
            </>
        )
    }
}

export default CardView;