import React, {Component} from 'react';
import {BeerIcon, CoffeeIcon, MuffinIcon, TacoIcon} from '../static/images/SnackIcons'
import {Fade, Grid, Slide, withStyles} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const useStyles = theme => ({
        root: {
            justifyContent: 'center',
            display: 'flex',
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
        snackLogo: theme.snackLogo,
        img: {
            minWidth: '100%',
            alignSelf: 'center',
            objectFit: 'contain',
        },
    }
);

class MainLogo extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
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
                                    <Avatar alt="coffee icon">
                                        <CoffeeIcon className={classes.snackLogo}/>
                                    </Avatar>
                                </div>
                            </Slide>
                        </Grid>
                        <Grid item>
                            <Slide direction="right" in={true} timeout={1000}>
                                <div>
                                    <Avatar alt='muffin icon'>
                                        <MuffinIcon className={classes.snackLogo}/>
                                    </Avatar>
                                </div>
                            </Slide>
                        </Grid>
                        <Grid item>
                            <Slide direction="left" in={true} timeout={1000}>
                                <div>
                                    <Avatar alt='taco icon'>
                                        <TacoIcon className={classes.snackLogo}/>
                                    </Avatar>
                                </div>
                            </Slide>
                        </Grid>
                        <Grid item>
                            <Slide direction="left" in={true} timeout={1500}>
                                <div>
                                    <Avatar alt='beer icon'>
                                        <BeerIcon className={classes.snackLogo}/>
                                    </Avatar>
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

            </div>
        );
    }
}

export default withStyles(useStyles)(MainLogo);
