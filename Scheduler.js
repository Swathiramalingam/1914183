import React from 'react';
import TrainCard from './Card';
import trainScheduleData from './data/Data';

function Schedule() {
  return (
    <div>
      {trainScheduleData.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default Schedule;