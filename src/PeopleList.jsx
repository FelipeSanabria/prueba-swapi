import React, { Component } from 'react';

class PeopleList extends Component {
  render() {
    const people = this.props.people;

    return (
      <div className="Items">
        {
          people.map((p) => {
            return (
              <div className="Item" key={p.url}>
                <h1>{p.name}</h1>
                <p><strong>Gender: </strong>{p.gender}</p>
                <p><strong>Eye Color: </strong>{p.eye_color}</p>
                <p><strong>Birth Year: </strong>{p.birth_year}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default PeopleList; 
