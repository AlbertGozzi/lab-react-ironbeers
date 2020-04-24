import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import NewBeer from './components/NewBeer';

let baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
let allBeersEndpoint = "/";
let randomBeerEndpoint = "/random";
let addEndpoint = "/new";
let searchEndpoint = "/search?q="; 

class App extends Component {
  state = {
    beers: [],
    randomBeer: ''
  }

  componentDidMount = () => {
      axios.get(baseUrl + allBeersEndpoint)
      .then(response => {
          this.setState({
              beers: response.data
          })
      });
      axios.get(baseUrl + randomBeerEndpoint)
      .then(response => {
          this.setState({
              randomBeer: response.data
          })
      });
  }

  submitForm = (e) => {
    e.preventDefault();
    let beer = {
      name: e.target.name.value,
      tagline: e.target.tagline.value,
      description: e.target.description.value,
      first_brewed: e.target.first_brewed.value,
      brewers_tips: e.target.brewers_tips.value,
      attenuation_level: e.target.attenuation_level.value,
      contributed_by: e.target.contributed_by.value
    }
    console.log('Posting');
    axios.post(baseUrl + addEndpoint, beer)
    .then(response => {
      console.log(response);
    });
  }

  updateFilter = (e) => {
    axios.get(baseUrl + searchEndpoint + e.target.value)
    .then(response => {
        console.log(response.data);
        this.setState({
          beers: response.data
        })
    });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home}/>;
          <Route exact path='/beers' render={props => <Beers {...props} beers={this.state.beers} updateFilter={this.updateFilter}/>}/>;
          <Route path='/beers/:beerId' render={props => <SingleBeer {...props} beers={this.state.beers}/>}/>;
          <Route path='/random-beer' render={props => <RandomBeer {...props} randomBeer={this.state.randomBeer}/>}/>;
          <Route path='/new-beer' render={props => <NewBeer {...props} beers={this.state.beers} submitForm={this.submitForm}/>}/>;
        </Switch>
      </div>
    );
  }
}

export default App;
