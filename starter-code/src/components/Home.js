import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div id="Home">
                <img src="/images/beers.png" alt="All beers"/> 
                <Link to="/beers"><h5> All Beers </h5></Link>    
                <p> Pariatur do velit tempor et eiusmod esse. Nostrud non eiusmod deserunt ut Lorem id ea aliquip. Duis dolor cillum magna anim. Dolor velit commodo dolore non ullamco ex esse ipsum. Reprehenderit et reprehenderit ipsum dolor do est duis veniam incididunt nisi.</p> 
                
                <img src="/images/random-beer.png" alt="All beers"/> 
                <Link to="/random-beer"><h5> Random Beers </h5></Link>    
                <p> Pariatur do velit tempor et eiusmod esse. Nostrud non eiusmod deserunt ut Lorem id ea aliquip. Duis dolor cillum magna anim. Dolor velit commodo dolore non ullamco ex esse ipsum. Reprehenderit et reprehenderit ipsum dolor do est duis veniam incididunt nisi.</p> 
                
                <img src="/images/new-beer.png" alt="All beers"/> 
                <Link to="/new-beer"><h5> New Beer </h5></Link>    
                <p> Pariatur do velit tempor et eiusmod esse. Nostrud non eiusmod deserunt ut Lorem id ea aliquip. Duis dolor cillum magna anim. Dolor velit commodo dolore non ullamco ex esse ipsum. Reprehenderit et reprehenderit ipsum dolor do est duis veniam incididunt nisi.</p> 
            </div>
        );
    }
}

export default Home;
