import React, { FunctionComponent } from 'react';
import {
  JusterCore,
  EventType,
  CorePositionType
} from '@juster-finance/sdk';
import BigNumber from "bignumber.js";

import { PositionComponent } from '../core/Position';
import { EventComponent } from '../core/Event';
import { ProvideLiquidityForm } from '../core/ProvideLiquidityForm';
import { BetForm } from '../core/BetForm';
import { WithdrawButton } from '../core/WithdrawButton';


export type CoreTabProps = {
  pkh: string | null,
  justerCore: JusterCore,
  position: CorePositionType | null,
  event: EventType | null,
  // TODO: move eventId to the EventType maybe
  eventId: number
};

export const CoreTab: FunctionComponent<CoreTabProps> = ({
  pkh,
  justerCore,
  position,
  event,
  eventId
}) => {

  return (
    <div>
      <EventComponent
        eventId={eventId}
        event={event}
      />

      <hr/>
      <PositionComponent
        position={position}
        event={event}
        pkh={pkh}
        justerCore={justerCore}
      />

      <hr/>
      <ProvideLiquidityForm
        eventId={eventId}
        event={event}
        justerCore={justerCore}
      />

      <hr/>
      <BetForm
        eventId={eventId}
        event={event}
        justerCore={justerCore}
      />

      <hr/>
      <WithdrawButton
        eventId={eventId}
        pkh={pkh}
        justerCore={justerCore}
      />
    </div>
  );
};

