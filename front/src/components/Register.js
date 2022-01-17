import React, { Component } from "react";
import { Box, Grid, Button, Link, TextField, Typography, InputAdornment, IconButton } from '@material-ui/core/';
import Api from "../Api/Api"
import {v4 as uuidv4} from 'uuid';
// import {Form, Button, Card, Alert} from 'react-bootstrap';

import './styles/Login.css';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            pass: ""
        }
    }
    

    validateForm = () => {
        return (this.state.pass.length > 0 && this.state.name.length > 0);
    }

    handleChange = (e) => {
        var id = e.target.id
        var value = e.target.value
        // const { id, value } = e.target;
        this.setState({[id]: value})
        console.log(this.state)
    }

    saveUser = () => {
        this.setState({userId: uuidv4()}, () => {
            Api.register(this.state).then(res => {
                console.log(res)
            })
        });
    }

    render() {
        return (
            <Box className="registerContainer">
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h1" style={{textAlign: "center", marginTop: "80px"}}>
                                sign up
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>

                            <TextField
                                variant="outlined"
                                padding={0}
                                id="name"
                                placeholder={"username"}
                                style={{ width: '50%' }}
                                // InputProps={{
                                //     startAdornment: (
                                //         <InputAdornment position="start">
                                //             {/* <PersonIcon /> */}
                                //         </InputAdornment>
                                //     ),
                                // }}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>

                            <TextField
                                variant="outlined"
                                padding={0}
                                id="pass"
                                placeholder={"password"}
                                type={"password"}
                                style={{ width: '50%' }}
                                // InputProps={{
                                //     startAdornment: (
                                //         <InputAdornment position="start">
                                //             {/* <LockIcon /> */}
                                //         </InputAdornment>
                                //     ),
                                //     endAdornment: (
                                //         <InputAdornment position="end">
                                //             <IconButton size='small' onClick={() => { this.setState({ visible: !this.state.visible }) }}>
                                //                 {/* {this.state.visible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />} */}
                                //             </IconButton>
                                //         </InputAdornment>
                                //     )
                                // }}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Button variant="contained" color="primary" style={{ width: '50%' }} disabled={!this.validateForm()} onClick={this.saveUser}>continue</Button>
                        </Grid>

                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            {/* <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText="CONTINUE WITH GOOGLE"
                                onSuccess={this.loginWithGoogle}
                                onFailure={this.googleLoginError}
                                cookiePolicy={'single_host_origin'}
                                className={'google-login'}
                            /> */}
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography variant="sub" style={{color: "#444"}}>
                                don't forget your login info. this cannot be retrieved (yet).
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
                <Link to="/login">sign in</Link>
            </Box>
        )
    }

}

export default Register;
