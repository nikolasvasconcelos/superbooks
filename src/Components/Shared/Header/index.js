import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../Assets/Images/supero_branco.png')}
      />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#EA7137',
  },
  logo: {
    width: 150,
    height: 35,
    alignSelf: 'center',
    marginVertical: 15,
  },
});
