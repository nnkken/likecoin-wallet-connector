import * as React from 'react';
import classNames from 'classnames';

import {
  KeplrInstallCTAPreset,
  LikeCoinWalletConnectorMethod,
  LikeCoinWalletConnectorMethodType,
} from '../types';

import { ConnectionMethodButton } from './connection-method-button';

export interface ConnectionMethodListBaseProps
  extends React.HTMLAttributes<HTMLUListElement> {
  methods: LikeCoinWalletConnectorMethod[];
  isMobile: boolean;
  keplrInstallCTAPreset?: KeplrInstallCTAPreset;
  onSelectMethod?: (method: LikeCoinWalletConnectorMethodType) => void;
}

export const ConnectionMethodListBase: React.FC<ConnectionMethodListBaseProps> = ({
  className,
  methods,
  isMobile,
  keplrInstallCTAPreset,
  onSelectMethod,
  ...props
}) => {
  function handleMethodSelection(method: LikeCoinWalletConnectorMethodType) {
    if (onSelectMethod) onSelectMethod(method);
  }

  return (
    <ul
      className={classNames(
        'lk-grid lk-grid-flow-row lk-gap-[12px]',
        className
      )}
      {...props}
    >
      {methods.map(method => (
        <li key={method.type}>
          <ConnectionMethodButton
            type={method.type}
            name={method.name}
            description={method.description}
            url={method.url}
            keplrInstallCTAPreset={keplrInstallCTAPreset}
            isMobile={isMobile}
            onPress={() => handleMethodSelection(method.type)}
          />
        </li>
      ))}
    </ul>
  );
};
