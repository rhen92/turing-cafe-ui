import React from 'react';
import './Card.css';

const Card = ({ name, date, time, number, id, deleteReservation, deleteReservationFromApi }) => {
  return (
    <article className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => deleteReservation(id)}>Cancel</button>
    </article>
  )
}

export default Card;
