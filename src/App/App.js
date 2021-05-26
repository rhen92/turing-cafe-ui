import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../api-calls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => {
        this.setState({ reservations: data})
      })
      .catch(error => this.setState({ error: 'Something went wrong' }))
  }

  render() {
    return (
      <div className="App">
        {!this.state.reservations.length && !this.state.error && <h2>Loading content...</h2>}
        {this.state.error && <h2>{this.state.error}</h2>}
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
