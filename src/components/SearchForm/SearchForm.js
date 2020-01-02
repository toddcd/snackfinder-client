import React, {Component} from 'react';
import {BeerIcon, CoffeeIcon, MuffinIcon, TacoIcon} from '../../static/images/SnackIcons'
import smallLogo from '../../static/images/nav-logo-orange.png'
import {Button, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";

const useStyles = theme => ({
        root: {
            justifyContent: 'center',
            display: 'flex',
            textAlign: 'center',
            wrap: 'noWrap',
            'min-height': '100vh',
        },
        radioPadding: {
            paddingTop: '15px',
            paddingBottom: '15px'
        },
        radioGridItem: {
            flexDirection: 'row',
            wrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        formContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
        avatar: theme.avatar,
    }
);

const marks = [
    {
        value: 1,
        label: '1mi',
    },
    {
        value: 25,
        label: '25mi',
    },
    {
        value: 50,
        label: '50mi',
    },
    {
        value: 100,
        label: '100mi',
    },
];

class SearchForm extends Component {
    state = {
        snackType: '',
        location: '',
        locationCenter: '',
        distance: 1,
    }

    handleSnackTypeChange = (e) => {
        this.setState({
                ...this.state,
                snackType: e.target.value
            }
        )
    }

    setGeoLocation(value) {
        if (value !== 'alt') {
            let html5GeoLocationPromise = new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve(
                        {
                            "lat": position.coords.latitude,
                            "lng": position.coords.longitude
                        });
                });
            })

            html5GeoLocationPromise.then(geography => {

                //query['geography'] = geography;
                const center = geography['lat'] + ',' + geography['lng'];
                console.log('geolocation from browser: ' + center)

                this.setState({...this.state, locationCenter: center});
                //openResultListPage(query);
            })
        } else {

        }
    }

    handleLocationChange = (e) => {
        this.setState({
                ...this.state,
                location: e.target.value,
            }
        )
        this.setGeoLocation(e.target.value);
    }

    handleDistanceChange = (e, value) => {
        this.setState({
                ...this.state,
                distance: value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    valuetext(value) {
        return `${value}mi`;
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container direction='column' justify='center' alignItems='center'>
                <div>
                    <Box pb={3}>
                        <img src={smallLogo}/>
                    </Box>
                </div>
                <form className={classes.formContainer} onSubmit={this.handleSubmit}>
                    <FormControl>
                        <Grid container direction='column' justify='center' alignItems='center'>
                            <RadioGroup style={{width: '100%', minWidth: '300px'}} aria-label="snacks" name="snacks"
                                        value={this.state.snackType}
                                        onChange={this.handleSnackTypeChange}>
                                <Box className={classes.radioPadding}>
                                    <Grid container item className={classes.radioGridItem}>
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    value='coffee'
                                                    name='snacks'
                                                />
                                            }
                                            label="Coffee"
                                            labelPlacement='end'
                                        />
                                        <Avatar className={classes.avatar}>
                                            <CoffeeIcon className={classes.snackLogo}/>
                                        </Avatar>
                                    </Grid>
                                </Box>
                                <Divider/>
                                <Box className={classes.radioPadding}>
                                    <Grid container item className={classes.radioGridItem}>
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    value='pastry'
                                                    name='snacks'
                                                />
                                            }
                                            label="Pastries"
                                            labelPlacement='end'
                                        />
                                        <Avatar className={classes.avatar}>
                                            <MuffinIcon className={classes.snackLogo}/>
                                        </Avatar>
                                    </Grid>
                                </Box>
                                <Divider/>
                                <Box className={classes.radioPadding}>
                                    <Grid container item className={classes.radioGridItem}>
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    value='taco'
                                                    name='snacks'
                                                />
                                            }
                                            label="Tacos"
                                            labelPlacement='end'
                                        />
                                        <Avatar className={classes.avatar}>
                                            <Box p={2}>
                                                <TacoIcon className={classes.snackLogo}/>
                                            </Box>
                                        </Avatar>
                                    </Grid>
                                </Box>
                                <Divider/>
                                <Box className={classes.radioPadding}>
                                    <Grid container item className={classes.radioGridItem}>
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    value='beer'
                                                    name='snacks'
                                                />
                                            }
                                            label="Beer"
                                            labelPlacement='end'
                                        />
                                        <Avatar className={classes.avatar}>
                                            <BeerIcon className={classes.snackLogo}/>
                                        </Avatar>
                                    </Grid>
                                </Box>
                                <Divider/>
                            </RadioGroup>

                        </Grid>
                        <Grid item>
                            <Box pb={1} pt={2} pr={1} pl={1}>
                                <Typography id="search-window" gutterBottom>
                                    Search Window
                                </Typography>
                                <Slider
                                    defaultValue={1}
                                    getAriaValueText={this.valuetext}
                                    onChange={this.handleDistanceChange}
                                    aria-labelledby="search-window"
                                    step={5}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                />
                            </Box>
                        </Grid>
                        <Divider/>
                        <Grid item>
                            <RadioGroup style={{width: '100%'}} aria-label="location" name="location"
                                        value={this.state.location}
                                        onChange={this.handleLocationChange} required>
                                <FormControlLabel
                                    control={
                                        <Radio
                                            value='current'
                                            color="primary"
                                            name="location"
                                        />
                                    }
                                    label="Current Location"
                                    labelPlacement='end'
                                />
                                <FormControlLabel
                                    control={
                                        <Radio
                                            value='alt'
                                            color="primary"
                                            name="location"
                                        />
                                    }
                                    label="Alt Location"
                                    labelPlacement='end'
                                />
                            </RadioGroup>
                        </Grid>
                        <Grid item>
                            {this.state.location === 'alt' ?
                                <Fade in={true} timeout={500}>
                                    <TextField
                                        variant="standard"
                                        fullWidth
                                        margin="normal"
                                        required
                                        color="secondary"
                                        id="location"
                                        label="Location"
                                        name="location"
                                    /></Fade> : null}
                        </Grid>
                        <Grid item>
                            <Box pt={2}>
                                <Button variant="contained" color="secondary" type='submit'>
                                    Search
                                </Button>
                            </Box>
                        </Grid>
                    </FormControl>
                </form>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(SearchForm);