import React, { Component } from 'react';
import FilmList from './FilmList';
import axios from 'axios';

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    }

    this.getFilms = this.getFilms.bind(this);
  }

  getFilms() {
    return axios.get("https://swapi.co/api/films")
      .then((response) => {
        this.setState({ films: response.data.results })
      })
  }

  componentDidMount() {
    this.getFilms()
  }

  render() {
    const { films } = this.state;
    return (
      <div className="List">
        <FilmList films={films} />
      </div>
    );
  }
}

export default Films;
