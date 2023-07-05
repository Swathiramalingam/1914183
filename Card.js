import React from 'react';

function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h3>Train Number: {train.trainNumber}</h3>
      <p>Departure: {train.departure}</p>
      <p>Destination: {train.destination}</p>
    </div>
  );
}

export default TrainCard;