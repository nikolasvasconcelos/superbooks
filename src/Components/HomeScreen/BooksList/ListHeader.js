import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ListHeader() {
  return (
    <View style={styles.container}>
      <Text style={[styles.flex3, styles.headerText]}>Livros</Text>
      <Text style={[styles.flex1, styles.headerText]}>Ano</Text>
    </View>
  );
}

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#EA7137',
  },
  flex1: {
    flex: 1,
    textAlign: 'center',
  },
  flex3: {flex: 3},
  headerText: {color: '#fff'},
});
