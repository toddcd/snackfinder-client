import React, {Component} from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import BaseContainer from "../../Utils/BaseContainer";
import MainLogo from "../../Utils/MainLogo";

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
            <BaseContainer>
                <MainLogo/>
                <RegistrationForm
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </BaseContainer>
        )
    }
}

export default RegistrationPage;
