import React, {Component} from 'react'
//import AuthApiService from '../../services/auth-api-service'
import {Button, Grid, Link, TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {
        }
    }

    state = {error: null}

    handleSubmit = ev => {
        ev.preventDefault()
        //const {full_name, user_name, password, email} = ev.target

        this.setState({error: null})

        // AuthApiService.postRegistration({
        //     user_name: user_name.value,
        //     password: password.value,
        //     full_name: full_name.value,
        //     email: email.value,
        // })
        //     .then(user => {
        //         full_name.value = ''
        //         user_name.value = ''
        //         password.value = ''
        //         email.value = ''
        //         this.props.onRegistrationSuccess()
        //     })
        //     .catch(res => {
        //         this.setState({error: res.error})
        //     })
    }

    render() {
        const {error} = this.state
        return (
            <Grid item>
                <form onSubmit={this.handleSubmit}>
                    <Grid container justify='center' direction='column' alignItems='center' item>
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            id="fullname"
                            label="Full Name"
                            name="fullname"
                            autoComplete="fullname"
                            autoFocus
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            id="username"
                            label="User Name"
                            name="username"
                            autoComplete="username"
                            // autoFocus
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            id="regPassword"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            // autoFocus
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            // autoFocus
                        />
                        <Box mt={2}>
                            <Button variant="contained" color="secondary" type='submit'>
                                Register
                            </Button>
                        </Box>
                        <Box mt={4}>
                            <Grid container direction="column" alignItems="center">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {"Already have an account? Login here."}
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
