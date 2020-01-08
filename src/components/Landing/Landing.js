import React, {Component} from 'react';
import {Link, withStyles} from "@material-ui/core";
import cup from '../../static/images/Coffee@2x.png'
import desktopCup from '../../static/images/desktop-cup@2x.png'
import desktopTacos from '../../static/images/desktop-tacos@2x.png'
import desktopWheel from '../../static/images/desktop-bike-wheel.png'
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from '@material-ui/icons/Navigation';


const useStyles = theme => ({
        root: {
            display: 'flex',
            color: '#FFFFFF',
            backgroundColor: '#BC3908',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            height: '100vh',
        },
        backgroundImage: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        cupImage: {
            backgroundImage: `linear-gradient(
                                rgba(188, 57, 8, .35),
                                rgba(188, 57, 8, .05)),
                                url(${desktopCup})`,
            [theme.breakpoints.down('xs')]: {
                backgroundImage: `linear-gradient(
                                    rgba(188, 57, 8, .35),
                                    rgba(188, 57, 8, .05)),
                                    url(${cup})`,
            },
            width: '100%',
            height: '30%'
        },
        wheelImage: {
            backgroundImage: `url(${desktopWheel})`,
            width: '100%',
            height: '40%'
        },
        tacoImage: {
            backgroundImage: `linear-gradient(
                                rgba(188, 57, 8, .05),
                                rgba(188, 57, 8, .35)),
                                url(${desktopTacos})`,
            width: '100%',
            height: '30%'
        },
        ciclismo: {
            fontFamily: '"Pattaya"',
            fontStyle: 'italic',
            fontSize: '12em',
            padding: '0 0 0 0',
            [theme.breakpoints.down('sm')]: {
                fontSize: '9em',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '6em',
            },
        },
        snackFinder: {
            fontSize: '1.5em',
            '& span': {
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: '#282B33',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5em',
            },
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }
);

class Landing extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        }
    }

    getScreenSize = () => {

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Fade in={true} timeout={1500}>
                    <div className={[classes.backgroundImage, classes.cupImage].join(' ')}/>
                </Fade>
                <div className={[classes.backgroundImage, classes.wheelImage].join(' ')}>
                    <Slide direction="right" in={true} timeout={1000}>
                        <Typography variant='h1' className={classes.ciclismo}>
                            Ciclismo
                        </Typography>
                    </Slide>
                    <Slide direction='left' in={true} timeout={1000}>
                        <Typography variant='subtitle1' style={{fontSize: '1em'}}>
                            (chē-klē-zmo)
                        </Typography>
                    </Slide>
                    <Fade in={true} timeout={1500}>
                        <div>
                            <Typography variant='subtitle1' className={classes.snackFinder}>
                                <span>SNACK </span>FINDER
                            </Typography>
                            <Link href="/login">
                                <Fab size="small" color="grey" aria-label="add">
                                    <NavigationIcon/>
                                </Fab>
                            </Link>
                        </div>
                    </Fade>
                </div>
                <Fade in={true} timeout={1500}>
                    <div className={[classes.backgroundImage, classes.tacoImage].join(' ')}/>
                </Fade>
            </div>
        )
    }
}

export default withStyles(useStyles)(Landing);
