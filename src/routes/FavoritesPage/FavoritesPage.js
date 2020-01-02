import React, {Component} from 'react';
import FavoriteForm from "../../components/Favorites/FavoriteForm";
import BaseContainer from "../../Utils/BaseContainer";

class FavoritesPage extends Component {
    render() {
        return (
            <BaseContainer>
                <FavoriteForm/>
            </BaseContainer>
        );
    }
}

export default FavoritesPage;