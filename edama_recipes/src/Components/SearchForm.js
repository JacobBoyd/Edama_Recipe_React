import React, { Component } from 'react'


const API_ID = process.env.REACT_APP_API_KEY;
const API_KEY = process.env.REACT_APP_API_ID;

export default class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm : ''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
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
            console.log(resJson.hits[0].recipe);
        });
    }

    render() {
        return (
            <>
                <form className="search-form" onSubmit={e => this.onSubmit(e)}>
                <input type="text" className="search-bar" name="searchTerm" onChange={e => this.onChange(e)}/>
                <button type="submit" className="search-btn">Search</button>
                </form>
            </>
        )
    }
}
