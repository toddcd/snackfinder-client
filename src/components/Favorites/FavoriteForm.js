import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SnackCard from "./SnackCard";

class FavoriteForm extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid container direction='row' justify='center' alignContent='center' item>
                        <Link href="/addfavorite">
                            <Button>Add Favorite</Button>
                        </Link>
                        <Link href="/search">
                            <Button>Search</Button>
                        </Link>
                    </Grid>
                    <Grid>
                        <List>
                            <ListItem>
                                <SnackCard/>
                            </ListItem>
                            <ListItem>
                                <SnackCard/>
                            </ListItem>
                            <ListItem>
                                <SnackCard/>
                            </ListItem>
                            <ListItem>
                                <SnackCard/>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default FavoriteForm;