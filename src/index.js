import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import {SnackFinderProvider} from './context/SnackFinderContext';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <SnackFinderProvider>
                <App/>
            </SnackFinderProvider>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
;

