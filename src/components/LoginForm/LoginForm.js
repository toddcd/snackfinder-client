import React, {Component} from 'react'
//import TokenService from '../../services/token-service'
//import AuthApiService from '../../services/auth-api-service'
import {Button, TextField, Grid, Link, Box} from '@material-ui/core';

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        },
    }

    state = {error: null}

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()

        this.setState({ error: null })
        this.props.onLoginSuccess()


        //const { history } = this.props
        //const { user_name, password } = ev.target

        // AuthApiService.postLogin({
        //     user_name: user_name.value,
        //     password: password.value,
        // })
        //     .then(res => {
        //         user_name.value = ''
        //         password.value = ''
        //         TokenService.saveAuthToken(res.authToken)
        //         this.props.onLoginSuccess()
        //     })
        //     .catch(res => {
        //         this.setState({ error: res.error })
        //     })
    }

    render() {
        const {error} = this.state
        return (
            <Grid item>
                <form onSubmit={this.handleSubmitJwtAuth}>
                    <Grid container justify='center' direction='column' alignItems='center' item>
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            color="secondary"
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            color="secondary"
                            required
                            id="loginPassword"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            //autoFocus
                        />
                        <Box mt={2}>
                            <Button variant="contained" color="secondary" type='submit'>
                                Login
                            </Button>
                        </Box>
                        <Box mt={4}>
                            <Grid container direction="column" alignItems="center">
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </form>
            </Grid>
        )
    }
}
