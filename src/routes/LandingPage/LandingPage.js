import React, { Component } from 'react'
import Landing from '../../components/Landing/Landing'
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

export default class LandingPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/collection'
        history.push(destination)
    }

    render() {
        return (
          <div>
              <Landing />
          </div>
        )
    }
}