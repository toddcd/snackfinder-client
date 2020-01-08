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
    snackLogo: {
        width: "32px",
        height: "32px",
        padding: '0 1px 0 2px',
        //color: '#7D2505',
        color: '#ffffff',
    },
    avatar: {
        backgroundColor: '#7D2505'
    },
});

export default theme;