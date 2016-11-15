import * as React from 'react';

export interface IApp {};

export class App extends React.Component<IApp, {}> {
  render() {
    return <h1>StageUp - Track your studio orders with ease!</h1>;
  }
}