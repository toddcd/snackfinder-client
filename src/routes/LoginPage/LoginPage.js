import React, {Component} from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
//import SigninForm from '../../components/LoginForm/SigninForm'
import BaseContainer from "../../Utils/BaseContainer";
import SnackFinderContext from "../../context/SnackFinderContext";
import MainLogo from "../../Utils/MainLogo";

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
            <BaseContainer>
                <MainLogo/>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </BaseContainer>
        )
    }
}

export default LoginPage;
