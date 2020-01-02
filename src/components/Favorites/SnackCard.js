import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {BeerIcon, CoffeeIcon, MuffinIcon, TacoIcon} from '../../static/images/SnackIcons'
import {Typography, withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
//import AvatarGroup from '@material-ui/lab/AvatarGroup';


const name = 'Gracenote Coffee';
const address = '108 Lincoln St, Boston';
const dist = '1.11 mi';
const ciclismoFav = 'yes';
const ranking = '4';

const useStyles = theme => ({
    card: {
        maxWidth: 345,
        maxHeight: 150,
    },
    content: {
        width: '100%',
        wrap: 'nowrap'
    },
    snackLogo: theme.snackLogo,
});

class SnackCard extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <TacoIcon className={classes.snackLogo}/>
                        </Avatar>
                    }
                    title={name}
                    subheader={address}
                >
                </CardHeader>
                <CardContent>
                    <Grid container direction='row' justify='space-between'>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {dist}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {ranking}
                        </Typography>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(useStyles)(SnackCard);