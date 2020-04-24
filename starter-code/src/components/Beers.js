import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

class Beers extends Component {
    displayBeers = () => {
        return this.props.beers.map(beer => {
            return <div key={beer._id}>
                <div className="beer">
                    <img className="beerImage" src={beer.image_url} alt={beer.name}></img>
                    <div className="beerDescription">
                        <Link to={`/beers/${beer._id}`}><h4>{beer.name}</h4></Link>
                        <h6>{beer.tagline}</h6>
                        <p>Contributed by: {beer.contributed_by}</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        })
    }

    render() {
        return (
            <div>
                <Search updateFilter={this.props.updateFilter}></Search>
                {this.displayBeers()}
            </div>
        );
    }
}

export default Beers;