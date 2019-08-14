import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';


const API_ID = process.env.REACT_APP_API_KEY;
const API_KEY = process.env.REACT_APP_API_ID;

export default class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm : ''
        }
    }

    onChangeSearchTerms(e) {
        let searchTerms = e.target.value;
        let joinedTerms = searchTerms.replace(/[ ,]+/g, ",");
        console.log(joinedTerms);
        this.setState({
            searchTerm : joinedTerms
        });
    }


    onSubmit(e) {
        e.preventDefault();

        fetch(`https://api.edamam.com/search?q=${this.state.searchTerm}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => {
            return response.json();
        })
        .then((resJson) => {
            // this.props.updateRecipes(resJson.hits)
            this.props.callback(resJson.hits);
        });
    }

    render() {
        return (
            <>
                <form className="search-form" onSubmit={e => this.onSubmit(e)}>
                    {/* <FaSearch className="icon"/> */}
                    <input type="text" className="search-bar" placeholder={this.state.searchTerm || "Search for Ingredients"} name="searchTerm" onChange={e => this.onChangeSearchTerms(e)}/>
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </>
        )
    }
}
