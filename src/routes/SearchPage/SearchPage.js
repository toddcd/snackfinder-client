import React, {Component} from 'react';
import SearchForm from "../../components/SearchForm/SearchForm";
import BaseContainer from "../../Utils/BaseContainer";

class SearchPage extends Component {
    render() {
        return (
            <BaseContainer>
                <SearchForm/>
            </BaseContainer>
        );
    }
}

export default SearchPage;