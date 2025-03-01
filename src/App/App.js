import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';
import { getReservations } from '../api-calls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getReservations()
      .then(data => {
        this.setState({ reservations: data})
      })
      .catch(error => this.setState({ error: 'Something went wrong' }))
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [newReservation, ...this.state.reservations]})
  }

  deleteReservation = (id) => {
    const removedReservation = this.state.reservations.filter(reservation => reservation.id !== id)
    this.setState({ reservations: removedReservation});
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.reservations.length && !this.state.error && <h2>Loading content...</h2>}
        {this.state.error && <h2>{this.state.error}</h2>}
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} deleteReservation={this.deleteReservation} />
        </div>
      </div>
    )
  }
}

export default App;
