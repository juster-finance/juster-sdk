import React, { useState, FormEvent } from 'react';
import './App.css';
import {
  Juster,
  EventType,
  PositionType,
} from 'juster-sdk';
import { PositionComponent } from './components/Position';
import { EventComponent } from './components/Event';
import { ProvideLiquidityForm } from './components/ProvideLiquidityForm';
import { BetForm } from './components/BetForm';
import { WithdrawButton } from './components/WithdrawButton';


const juster = Juster.create("testnet");


function App() {
  const [eventId, setEventId] = useState<number>(12);

  const [event, setEvent] = useState<EventType | null>(null);
  const [position, setPosition] = useState<PositionType | null>(null);
  const [pkh, setPkh] = useState<string | null>(null);

  const update = async () => {
    if (eventId !== null) {
      const updEvent = await juster.getEvent(eventId);
      setEvent(updEvent);
      console.log(updEvent);
    }

    if ((pkh !== null) && (eventId !== null)) {
      const updPosition = await juster.getPosition(eventId, pkh)
      setPosition(updPosition);
      console.log(updPosition);
    }
  };  

  const handleSync = async (e: FormEvent<HTMLButtonElement>) => {
    await juster!.sync();
    const newPkh = await juster!.getPkh();
    setPkh(newPkh)
    update()
  }

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
          onClick={(e) => update()}
        >
          update
        </button>

        <PositionComponent position={position} event={event} pkh={pkh}/>
        <EventComponent eventId={eventId} event={event}/>
        <hr/>
        <ProvideLiquidityForm eventId={eventId} event={event} juster={juster}/>
        <hr/>
        <BetForm eventId={eventId} event={event} juster={juster}/>
        <hr/>
        <WithdrawButton eventId={eventId} pkh={pkh} juster={juster}/>

      </div>
    </div>
  );
}

export default App;
