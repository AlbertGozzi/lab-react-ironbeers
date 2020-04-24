import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="searchBar">
                <label htmlFor="searchBar">Search beers:</label>
                <input type="text" id="searchBar" onChange={this.props.updateFilter}></input>
            </div>
        );
    }
}

export default Search;