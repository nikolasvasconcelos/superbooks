import React from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';
import moment from 'moment';

function ListItem({
  title,
  authors,
  imageLinks,
  publisher,
  publishedDate,
  id,
  navigate,
  getBookById,
}) {
  function openDetail() {
    navigate({routeName: 'Details'});
    getBookById(id);
  }

  return (
    <TouchableHighlight onPress={openDetail}>
      <View style={styles.container}>
        {imageLinks && imageLinks.thumbnail && (
          <Image style={styles.logo} source={{uri: imageLinks.thumbnail}} />
        )}
        <View style={[styles.container, styles.bookInfo]}>
          <Text style={styles.title}>{title}</Text>
          {authors &&
            authors.map((a, i) => (
              <Text style={styles.subtitle} key={i}>
                {a}
              </Text>
            ))}
          <Text style={styles.subtitle}>{publisher}</Text>
        </View>
        <Text style={[styles.title, styles.year]}>
          {moment(publishedDate).format('YYYY')}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    flex: 1,
    width: 100,
    height: 150,
    alignSelf: 'center',
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  bookInfo: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 15,
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 15,
  },
  subtitle: {
    fontSize: 12.5,
    color: 'grey',
  },
  year: {
    flex: 1,
    textAlign: 'center',
  },
});
