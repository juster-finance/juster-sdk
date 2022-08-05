import React, { useState, FormEvent } from 'react';
import './App.css';

import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from '@taquito/beacon-wallet';
import { NetworkType } from '@airgap/beacon-dapp';

import {
  JusterCore,
  JusterPool,
  EventType,
  CorePositionType,
  PendingEntriesType,
  PoolPositionsType,
  ClaimsType
} from '@juster-finance/sdk';

import { PositionComponent } from './components/core/Position';
import { EventComponent } from './components/core/Event';
import { ProvideLiquidityForm } from './components/core/ProvideLiquidityForm';
import { BetForm } from './components/core/BetForm';
import { WithdrawButton } from './components/core/WithdrawButton';

import { DepositForm } from './components/pool/DepositForm';
import { PendingEntriesBlock } from './components/pool/PendingEntriesBlock';
import { PoolPositions } from './components/pool/PoolPositions';
import { ClaimsBlock } from './components/pool/ClaimsBlock';

// TODO: move this initialization code somewhere?
const rpcNode = "https://rpc.tzkt.io/ghostnet/";
const network = NetworkType["GHOSTNET"];
const appName = "Juster";
const tezos = new TezosToolkit(rpcNode);
const provider = new BeaconWallet({
  name: appName,
  preferredNetwork: network
});
const justerCore = JusterCore.create(tezos, provider, "testnet");
const justerPool = JusterPool.create(tezos, provider, "testnet");


function App() {
  const [eventId, setEventId] = useState<number>(10313);
  const [event, setEvent] = useState<EventType | null>(null);
  const [position, setPosition] = useState<CorePositionType | null>(null);
  const [pkh, setPkh] = useState<string | null>(null);

  const [pendingEntries, setPendingEntries] = useState<PendingEntriesType | []>([]);
  const [poolPositions, setPoolPositions] = useState<PoolPositionsType | []>([]);
  const [claims, setClaims] = useState<ClaimsType | []>([]);

  // TODO: remove this update and button (?)
  const update = async (
    eventId: number,
    pkh: string | null
  ) => {
    const updEvent = await justerCore.getEvent(eventId);
    setEvent(updEvent);

    if ((pkh !== null) && (eventId !== null)) {
      const updPosition = await justerCore.getPosition(eventId, pkh)
      setPosition(updPosition);
    };

    setPkh(pkh);
    setEventId(eventId);
  };

  const handleSync = async (e: FormEvent<HTMLButtonElement>) => {
    await justerCore.sync();

    justerCore.getPkh().then((pkh) => {
      console.log("newPkh: ", pkh);
      update(eventId, pkh);

      justerCore.subscribeToEvent(
        eventId,
        (updEvent) => {setEvent(updEvent)}
      );

      justerCore.subscribeToPosition(
        eventId,
        pkh,
        (updPosition) => {setPosition(updPosition)}
      );

      justerPool.subscribeToPendingEntries(
        pkh,
        (updPendingEntries) => {setPendingEntries(updPendingEntries)}
      );

      justerPool.subscribeToPoolPositions(
        pkh,
        (updPoolPositions) => {setPoolPositions(updPoolPositions)}
      );

      justerPool.subscribeToClaims(
        pkh,
        (updClaims) => {setClaims(updClaims)}
      );

      });
  };

  // TODO: move all this code to one component with juster core
  // TODO: so there will be one main block with both sync/update with two tabs
  // TODO: select event option
  // TODO: check vulnerabilities in github
  /*
  return (
    <div className="App">
      <header className="App-header">
        Juster SDK Core Demo
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
  */

  return (
    <div className="App">
      <header className="App-header">
        Juster SDK Pool Demo
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
        <DepositForm
          pkh={pkh}
          justerPool={justerPool}
        />

        <hr/>
        <PendingEntriesBlock
          pkh={pkh}
          justerPool={justerPool}
          pendingEntries={pendingEntries}
        />

        <hr/>
        <PoolPositions
          pkh={pkh}
          justerPool={justerPool}
          poolPositions={poolPositions}
        />

        <hr/>
        <ClaimsBlock
          pkh={pkh}
          justerPool={justerPool}
          claims={claims}
        />

      </div>
    </div>
  );
}

export default App;
