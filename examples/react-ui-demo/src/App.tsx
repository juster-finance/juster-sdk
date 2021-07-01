import React, { useState, FormEvent } from 'react';
import './App.css';
import {
  Juster,
  EventType,
  PositionType,
} from '@juster/sdk';
import { PositionComponent } from './components/Position';
import { EventComponent } from './components/Event';
import { ProvideLiquidityForm } from './components/ProvideLiquidityForm';
import { BetForm } from './components/BetForm';
import { WithdrawButton } from './components/WithdrawButton';


const juster = Juster.create("testnet");


function App() {
  const [eventId, setEventId] = useState<number>(15);
  const [event, setEvent] = useState<EventType | null>(null);
  const [position, setPosition] = useState<PositionType | null>(null);
  const [pkh, setPkh] = useState<string | null>(null);

  const update = async (
    eventId: number,
    pkh: string | null
  ) => {
    const updEvent = await juster.getEvent(eventId);
    setEvent(updEvent);

    if ((pkh !== null) && (eventId !== null)) {
      const updPosition = await juster.getPosition(eventId, pkh)
      setPosition(updPosition);
    };

    setPkh(pkh);
    setEventId(eventId);
  };  

  const handleSync = async (e: FormEvent<HTMLButtonElement>) => {
    await juster.sync();
    juster.getPkh().then((pkh) => {
      console.log("newPkh: ", pkh);
      update(eventId, pkh);

      juster.subscribeToEvent(
        eventId,
        (updEvent) => {setEvent(updEvent)});
  
      juster.subscribeToPosition(
        eventId,
        pkh,
        (updPosition) => {setPosition(updPosition)});
      });

  };

  return (
    <div className="App">
      <header className="App-header">
        Juster SDK Demo
      </header>
      <div>
        <button
          onClick={handleSync}
        >
          sync
        </button>

        <button
          onClick={(e) => update(eventId, pkh)}
        >
          update
        </button>

        <hr/>
        <EventComponent
          eventId={eventId}
          event={event}
        />

        <hr/>
        <PositionComponent
          position={position}
          event={event}
          pkh={pkh}
          juster={juster}
        />

        <hr/>
        <ProvideLiquidityForm
          eventId={eventId}
          event={event}
          juster={juster}
        />

        <hr/>
        <BetForm
          eventId={eventId}
          event={event}
          juster={juster}
        />

        <hr/>
        <WithdrawButton
          eventId={eventId}
          pkh={pkh}
          juster={juster}/>

      </div>
    </div>
  );
}

export default App;
