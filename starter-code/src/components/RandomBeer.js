import React, { Component } from 'react';

class Beers extends Component {
    displayBeer = () => {
        let beer = this.props.randomBeer;
        return (
            <div key={beer?._id}>
                <div className="singleBeer">
                    <img className="beerImage" src={beer?.image_url} alt={beer?.name}></img>
                    <div className="beerDescription">
                        <h4>{beer?.name}</h4>
                        <h6>{beer?.tagline}</h6>
                        <p>{beer?.description}</p>
                        <i>Contributed by: {beer?.contributed_by}</i>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.displayBeer()}
            </div>
        );
    }
}

export default Beers;