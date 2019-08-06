import React, { Component } from 'react';
import PlanetList from './PlanetList';
import axios from 'axios';

class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
    }

    this.getPlanets = this.getPlanets.bind(this);
  }

  getPlanets() {
    return axios.get("https://swapi.co/api/planets")
      .then((response) => {
        this.setState({ planets: response.data.results })
      })
  }

  componentDidMount() {
    this.getPlanets()
  }

  render() {
    const { planets } = this.state;
    return (
      <div className="List">
        <PlanetList planets={planets} />
      </div>
    );
  }
}

export default People;
