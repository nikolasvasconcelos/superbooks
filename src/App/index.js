/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import '../Themes/fontAwesome';

import {BooksStore} from '../Redux/Stores';
import AppContainer from '../Containers/AppContainer';

function App() {
  return (
    <Provider store={BooksStore}>
      <AppContainer />
    </Provider>
  );
}

export default App;
