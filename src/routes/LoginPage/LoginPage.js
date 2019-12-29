import React, {Component} from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SigninForm from '../../components/LoginForm/SigninForm'

import LoginRegContainer from "../../Utils/LoginRegContainer";
import SnackFinderContext from "../../context/SnackFinderContext";

class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {
            },
        },
    }

    static contextType = SnackFinderContext;

    handleLoginSuccess = () => {
        const { history } = this.props
        this.context.setLoggedIn(true)
        history.push('/search')
    }

    render() {
        return (
            <LoginRegContainer>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </LoginRegContainer>
        )
    }
}

export default LoginPage;
