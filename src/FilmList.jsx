import React, { Component } from 'react';

class FilmList extends Component {
  render() {
    const films = this.props.films;

    return (
      <div className="Items">
        {
          films.map((f) => {
            return (
              <div className="Item" key={f.url}>
                <h1>{f.title}</h1>
                <p><strong>Release Date: </strong>{f.release_date}</p>
                <p><strong>Director: </strong>{f.director}</p>
                <p><strong>Producer: </strong>{f.producer}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default FilmList; 
