import React, {Component} from 'react';
import {BeerIcon, CoffeeIcon, MuffinIcon, TacoIcon} from '../static/images/SnackIcons'
import sidelogo from "../static/images/side-logo.png";
import {Fade, Grid, Slide, withStyles} from "@material-ui/core";

const useStyles = theme => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            wrap: 'noWrap',
            'min-height': '100vh',
        },
        imageContainer: {
            display: 'flex',
            minWidth: '100%',
            [theme.breakpoints.down('xs')]: {
                paddingLeft: '20px',
                paddingRight: '20px',
            },
        },
        snackLogo: {
            width: "42px",
            height: "42px",
            //color: '#7D2505',
            color: 'grey',
        },
        img: {
            minWidth: '100%',
            alignSelf: 'center',
            objectFit: 'contain',
        },
        backGroundSideImage: {
            background: `url(${sidelogo}) no-repeat center center`,
            backgroundSize: 'cover',
            minWidth: '100%',
            minHeight: '100%'
        },
        backGroundSideImage180: {
            background: `url(${sidelogo}) no-repeat center center`,
            backgroundSize: 'cover',
            minWidth: '100%',
            minHeight: '100%',
            webkitTransform: 'rotate(180deg)',
            mozTransform: 'rotate(180deg)',
            msTransform: 'rotate(180deg)',
            oTransform: 'rotate(180deg)',
            transform: 'rotate(180deg)',
        },
    }
);

class LoginRegContainer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container item justify="flex-end" alignContent="center">
                    <Fade in={true} timeout={3000}>
                        <div className={classes.backGroundSideImage}/>
                    </Fade>
                </Grid>
                <Grid container
                      justify="center"
                      item>
                    <Grid container item justify="center" alignContent="flex-end">
                        <Slide direction="down" in={true} timeout={500}>
                            <div className={classes.imageContainer}>
                                <Fade in={true} timeout={2000}>
                                    <img className={classes.img} alt='ciclismo logo'
                                         src={require('../static/images/orange-logo.png')}/>
                                </Fade>
                            </div>
                        </Slide>
                        <Grid container direction='row' justify='center' alignContent='center' spacing={5}>
                            <Grid item>
                                <Slide direction="right" in={true} timeout={1500}>
                                    <div>
                                        <CoffeeIcon className={classes.snackLogo}/>
                                    </div>
                                </Slide>
                            </Grid>
                            <Grid item>
                                <Slide direction="right" in={true} timeout={1000}>
                                    <div>
                                        <MuffinIcon className={classes.snackLogo}/>
                                    </div>
                                </Slide>
                            </Grid>
                            <Grid item>
                                <Slide direction="left" in={true} timeout={1000}>
                                    <div>
                                        <TacoIcon className={classes.snackLogo}/>
                                    </div>
                                </Slide>
                            </Grid>
                            <Grid item>
                                <Slide direction="left" in={true} timeout={1500}>
                                    <div>
                                        <BeerIcon className={classes.snackLogo}/>
                                    </div>
                                </Slide>
                            </Grid>
                        </Grid>
                        <Slide direction="down" in={true} timeout={2000}>
                            <div className={classes.imageContainer}>
                                <Fade in={true} timeout={2000}>
                                    <img className={classes.img} alt='snack finder logo'
                                         src={require('../static/images/snackfinder.png')}/>
                                </Fade>
                            </div>
                        </Slide>
                    </Grid>
                    {this.props.children}
                </Grid>
                <Grid container item justify="flex-start" alignContent="center">
                    <Fade in={true} timeout={3000}>
                        <div className={classes.backGroundSideImage180}/>
                    </Fade>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(LoginRegContainer);
