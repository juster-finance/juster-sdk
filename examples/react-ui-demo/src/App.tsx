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
  PoolPositionType,
  ClaimsType,
  PoolStateType,
  getAllPools,
  PoolType
} from '@juster-finance/sdk';

import { PoolTab } from './components/tabs/Pool';
import { CoreTab } from './components/tabs/Core';

// TODO: move this initialization code somewhere?
const rpcNode = "https://rpc.tzkt.io/ghostnet/";
const appName = "Juster";
const tezos = new TezosToolkit(rpcNode);
const provider = new BeaconWallet({
  name: appName,
  preferredNetwork: NetworkType["GHOSTNET"]
});

const network = "testnet";
const justerCore = JusterCore.create(tezos, provider, network);

// NOTE: pool address hardcoded to allow default pool object creation (instead of making it null)
// TODO: try to initiate justerPool inside useEffect
let justerPool = JusterPool.create(
  tezos, provider, network, "KT1JKiMQWE8hcSGq8j89mYDEY4DLpTE4vEaD");

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
  const [poolPosition, setPoolPosition] = useState<PoolPositionType | null>(null);
  const [claims, setClaims] = useState<ClaimsType>([]);
  const [poolState, setPoolState] = useState<PoolStateType | null>(null);
  const [pools, setPools] = useState<Array<JusterPool>>([]);

  // TODO: don't like this hardcoded address again:
  const [poolAddress, setPoolAddress] = useState<string>("KT1JKiMQWE8hcSGq8j89mYDEY4DLpTE4vEaD");

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
    const newPools = await getAllPools(network);

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

      const newJusterPools = newPools.map(
        (pool, _) => {
          const newJusterPool = JusterPool.create(tezos, provider, network, pool.address)

          // TODO: move subscription code to the separate components
          // TODO: find a way to get pkh of user
          newJusterPool.subscribeToPendingEntries(
            pkh,
            (updPendingEntries) => {setPendingEntries(updPendingEntries)}
          );

          newJusterPool.subscribeToPoolPositions(
            pkh,
            (updPoolPosition) => {setPoolPosition(updPoolPosition)}
          );

          newJusterPool.subscribeToWithdrawableClaims(
            pkh,
            (updClaims) => {setClaims(updClaims)}
          );

          newJusterPool.subscribeToLastPoolState((updPoolState) => {setPoolState(updPoolState)});
          return newJusterPool
        }
      );

      setPools(newJusterPools);
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
        pools={pools}
        pendingEntries={pendingEntries}
        poolPosition={poolPosition}
        claims={claims}
        poolState={poolState}
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
      <hr/>
      { tabsContent[tab] }
      <hr/>
    </div>
  );
}

export default App;
