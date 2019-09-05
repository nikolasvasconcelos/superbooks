import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import RootNavigator from './RootNavigator';

function App({requestBooks}) {
  requestBooks();
  return (
    <>
      <SafeAreaView style={styles.topSafeAreaView} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'transparent',
  },
  topSafeAreaView: {
    backgroundColor: '#EA7137',
  },
};
