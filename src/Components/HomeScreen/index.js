import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import DatePicker from 'react-native-datepicker'

function Home() {
  const [searchValue, setSearch] = useState('');

  function handleSearch(text) {
    setSearch(text);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../Assets/Images/supero_cor.png')}
      />
      <View style={styles.filter}>
        <Text>Filtrar ano de publicação:</Text>
        <TextInput
          style={styles.input}
          value={searchValue}
          onChangeText={handleSearch}
          placeholder="1985"
        />
        <FontAwesomeIcon icon={['far', 'calendar-alt']} />
        <Text>até</Text>
        <FontAwesomeIcon icon={['far', 'calendar-alt']} />
      </View>
      <ScrollView style={styles.flex1}>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  logo: {
    width: 150,
    height: 35,
    alignSelf: 'center',
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderBottomWidth: 1,
    marginHorizontal: 30,
    marginTop: 3,
    textAlign: 'center',
  },
  filter: {
    height: 50,
    marginTop: 15,
    marginHorizontal: 30,
  },
});
