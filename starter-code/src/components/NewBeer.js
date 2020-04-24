import React, { Component } from 'react';

class NewBeer extends Component {
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.props.submitForm} autoComplete="off">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"></input>
                    <label htmlFor="tagline">Tagline:</label>
                    <input type="text" id="tagline"></input>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description"></input>
                    <label htmlFor="first_brewed">First Brewed:</label>
                    <input type="text" id="first_brewed"></input>
                    <label htmlFor="brewers_tips">Brewers Tips:</label>
                    <input type="text" id="brewers_tips"></input>
                    <label htmlFor="attenuation_level">Attenuation level:</label>
                    <input type="number" id="attenuation_level"></input>
                    <label htmlFor="contributed_by">Contributed by:</label>
                    <input type="text" id="contributed_by"></input>
                    <input type="submit" id="submit"></input>
                </form>
            </div>
        );
    }
}

export default NewBeer;