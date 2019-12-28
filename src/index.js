import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import {SnackFinderProvider} from './context/SnackFinderContext';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        <SnackFinderProvider>
            <App/>
        </SnackFinderProvider>
    </ThemeProvider>,
    document.getElementById('root')
)
;

