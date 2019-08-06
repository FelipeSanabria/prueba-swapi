import React, { Component } from 'react';

class PlanetList extends Component {
  render() {
    const planets = this.props.planets;

    return (
      <div className="Items">
        {
          planets.map((pl) => {
            return (
              <div className="Item" key={pl.url}>
                <h1>{pl.name}</h1>
                <p><strong>Terrain: </strong>{pl.terrain}</p>
                <p><strong>Climate: </strong>{pl.climate}</p>
                <p><strong>Population: </strong>{pl.population}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default PlanetList; 
