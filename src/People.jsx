import React, { Component } from 'react';
import PeopleList from './PeopleList';
import axios from 'axios';

class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    }

    this.getPeople = this.getPeople.bind(this);
  }

  getPeople() {
    return axios.get("https://swapi.co/api/people")
      .then((response) => {
        this.setState({ people: response.data.results })
      })
  }

  componentDidMount() {
    this.getPeople()
  }

  render() {
    const { people } = this.state;
    return (
      <div className="List">
        <PeopleList people={people} />
      </div>
    );
  }
}

export default People;
