import React, {Component} from 'react';
import sidelogo from "../static/images/side-logo.png";
import {Fade, Grid, withStyles} from "@material-ui/core";

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

class BaseContainer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container item justify="flex-end" alignContent="center">
                    <Fade in={true} timeout={3000}>
                        <div className={classes.backGroundSideImage}/>
                    </Fade>
                </Grid>
                <Grid container justify="center" item>
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

export default withStyles(useStyles)(BaseContainer);
