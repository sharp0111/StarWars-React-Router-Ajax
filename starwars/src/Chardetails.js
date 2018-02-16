import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Chardetails extends React.Component {
  state = {
    chardetails: [],
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
    .get(`https://swapi.co/api/people/${id}/`)
    .then(response => {
      this.setState({ chardetails: response.data })
    })
    .catch(error => console.log('Error:', error))
      
  }
  
  render() {
    return (
      <div>
        <h3>Name: {this.state.chardetails.name}</h3>
        <p>Birth Year: {this.state.chardetails.birth_year}</p>
        <p>Gender: {this.state.chardetails.gender}</p>
        <p>Height: {this.state.chardetails.height}</p>
        <p>Mass: {this.state.chardetails.mass}</p>
        <p>Skin: {this.state.chardetails.skin_color}</p>
        <p>Hair: {this.state.chardetails.hair_color}</p>
        <p>Eye Color: {this.state.chardetails.eye_color}</p>
        <Link to="/">Back to the Character List</Link>
      </div>
    );
  }
}

export default Chardetails;