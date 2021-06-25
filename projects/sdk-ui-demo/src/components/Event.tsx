import React, { FunctionComponent } from 'react';
import {
  EventType,
  calculateRatio
} from 'juster-sdk';

export type EventProps = {
  eventId: number | null,
  event: EventType | null
}

export const EventComponent: FunctionComponent<EventProps> = ({ eventId, event }) => {

  const isNotLoaded = (eventId === null) || (event === null);
  if (isNotLoaded) {
    return <div>No event loaded</div>
  };

  let ratioA: string = event === null
    ? "-"
    : calculateRatio(event, "aboveEq").toFixed();

  let ratioB: string = event === null
    ? "-"
    : calculateRatio(event, "below").toFixed();

  return (
    <div className="Grid">
      Event {eventId}:
      <p>
        <span>Ratio AboveEq:</span>
        <span>{ratioA}</span>
      </p>
      <p>
        <span>Ratio Below:</span>
        <span>{ratioB}</span>
      </p>
    </div>
  );
}
