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

import { PoolTab } from './components/tabs/Pool';
import { CoreTab } from './components/tabs/Core';

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

type Tabs = "pool" | "core";


function App() {
  // TODO: this component state is getting very complex, probably there is a way
  // to fix it:
  const [tab, setTab] = useState<Tabs>("pool");
  const [eventId, setEventId] = useState<number>(10313);
  const [event, setEvent] = useState<EventType | null>(null);
  const [position, setPosition] = useState<CorePositionType | null>(null);
  const [pkh, setPkh] = useState<string | null>(null);

  const [pendingEntries, setPendingEntries] = useState<PendingEntriesType>([]);
  const [poolPositions, setPoolPositions] = useState<PoolPositionsType>([]);
  const [claims, setClaims] = useState<ClaimsType>([]);

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
    // TODO: add here justerPool getPendingEntries, getPositions, getClaims
    // to test how it works
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

  const tabsContent = {
    pool: (
      <PoolTab
        pkh={pkh}
        justerPool={justerPool}
        pendingEntries={pendingEntries}
        poolPositions={poolPositions}
        claims={claims}
      />
    ),
    core: (
      <CoreTab
        pkh={pkh}
        justerCore={justerCore}
        position={position}
        event={event}
        eventId={eventId}
      />
    )
  };

  // TODO: make selectable tabs ?
  return (
    <div className="App">
      <header className="App-header">
        Juster SDK Demo
        <br />
        { tab }
      </header>
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
      { tabsContent[tab] }
      <hr/>
    </div>
  );
}

export default App;
