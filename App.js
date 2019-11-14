import React, { Component } from 'react'
import { Provider } from 'react-redux';
import configureStore from './app/modules/store/configureStore';
import Navigation from './app/navigation';

const store = configureStore()

console.disableYellowBox = true;
export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
