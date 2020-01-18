import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings(['Unrecognized Websocket']);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0aa" />
      <Routes />
    </>
  );
}
