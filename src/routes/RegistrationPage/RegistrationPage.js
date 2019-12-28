import React, {Component} from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import LoginRegContainer from "../../Utils/LoginRegContainer";

class RegistrationPage extends Component {
    static defaultProps = {
        history: {
            push: () => {
            },
        },
    }

    handleRegistrationSuccess = user => {
        const {history} = this.props
        history.push('/login')
    }

    render() {
        return (
            <LoginRegContainer>
                <RegistrationForm
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </LoginRegContainer>
        )
    }
}

export default RegistrationPage;
