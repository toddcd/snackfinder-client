import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#BC3908',
        },
        secondary: {
            main: '#7D2505',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        minHeight: '100vh',
    },
});

export default theme;