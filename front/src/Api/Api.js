import axios from 'axios';

axios.defaults.baseURL = "http://localhost:9000/api";

const Api = {

    getAllCards() {
        try {
            return axios('/cards/getallcards',
                {
                    method: 'get'
                });
        } catch (err) {
            return err;
        }
    },

    newCard(data) {
        try {
            return axios('/cards/newcard', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                data: data
            })
        } catch (err) {
            return (err);
        }
    },

    upvote(data) {
        try {
            return axios('/cards/vote', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                data: data
            })
        } catch (err) {
            return (err);
        }
    },

    downvote(data) {
        try {
            return axios('/cards/vote', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                data: data
            })
        } catch (err) {
            return (err);
        }
    },

    login(data) {
        try {
            return axios('/users/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                data: data
            })
        } catch (err) {
            return (err);
        }
    },

    register(data) {
        try {
            return axios('/users/register', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                data: data
            })
        } catch (err) {
            return (err);
        }
    }
}


export default Api;