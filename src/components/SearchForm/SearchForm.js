import React, {Component} from 'react';
import {BeerIcon, CoffeeIcon, MuffinIcon, TacoIcon} from '../../static/images/SnackIcons'
import {ListItemText, withStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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

class SearchForm extends Component {
    render() {
        const {classes} = this.props;
        return (
            <form>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CoffeeIcon className={classes.snackLogo}/>
                            </Avatar>
                        </ListItemAvatar>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={true}
                                    // checked={state.checkedB}
                                    // onChange={handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Coffee"
                            labelPlacement='start'
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MuffinIcon className={classes.snackLogo}/>
                            </Avatar>
                        </ListItemAvatar>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={true}
                                    // checked={state.checkedB}
                                    // onChange={handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Pastries"
                            labelPlacement='start'
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <TacoIcon className={classes.snackLogo}/>
                            </Avatar>
                        </ListItemAvatar>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={true}
                                    // checked={state.checkedB}
                                    // onChange={handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Tacos"
                            labelPlacement='start'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeerIcon className={classes.snackLogo}/>
                            </Avatar>
                        </ListItemAvatar>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={true}
                                    // checked={state.checkedB}
                                    // onChange={handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Beer"
                            labelPlacement='start'
                        />
                    </ListItem>
                </List>
            </form>
        );
    }
}

export default withStyles(useStyles)(SearchForm);