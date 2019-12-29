import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import {SnackFinderProvider} from './context/SnackFinderContext';

ReactDOM.render(
    <Fragment>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        < ThemeProvider
            theme={theme}>
            <SnackFinderProvider>
                <App/>
            </SnackFinderProvider>
        </ThemeProvider>
    </Fragment>,
    document.getElementById('root')
);

