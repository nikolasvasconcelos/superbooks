import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

function Home() {
  return (
    <View style={style.container}>
      <Image
        source={require('../../Assets/Images/supero_cor.png')}
        style={style.flex1}
      />
    </View>
  );
}

export default Home;

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: {
    width: 200,
    height: 50,
  },
});
