import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import moment from 'moment';
import ISO6391 from 'iso-639-1';
import PropTypes from 'prop-types';

import {Header} from '../Shared';
import BookDescription from './BookDescription';

function BookDetailScreen({detailedBook}) {
  if (!detailedBook) {
    return (
      <View style={[styles.bookInfo, styles.container]}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  const {
    imageLinks,
    authors,
    title,
    publisher,
    publishedDate,
    industryIdentifiers,
    language,
    dimensions,
  } = detailedBook;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {imageLinks && imageLinks.thumbnail && (
        <Image style={styles.logo} source={{uri: imageLinks.thumbnail}} />
      )}
      <Text style={styles.title}>{title}</Text>
      {authors && (
        <>
          <Text style={styles.descriptionName}>Escrito por </Text>
          <Text style={styles.descriptionData}>
            {authors.map((a, i) => (
              <Text key={i}>{a}</Text>
            ))}
          </Text>
        </>
      )}
      <BookDescription label="Publicado por " description={publisher} />
      <BookDescription
        label="No ano de "
        description={moment(publishedDate).format('DD/MM/YYYY')}
      />
      {industryIdentifiers && (
        <>
          <Text style={styles.descriptionName}>ISBN </Text>
          <Text style={styles.descriptionData}>
            {industryIdentifiers.map((ind, i) => (
              <Text key={i}>{ind.identifier}</Text>
            ))}
          </Text>
        </>
      )}
      {dimensions && (
        <Text style={[styles.descriptionName, styles.year]}>Dimensões</Text>
      )}
      {dimensions && dimensions.height && (
        <Text style={styles.descriptionData}>Altura {dimensions.height}</Text>
      )}
      {dimensions && dimensions.width && (
        <Text style={styles.descriptionData}>Largura {dimensions.width}</Text>
      )}
      <BookDescription
        label="Idioma "
        description={ISO6391.getName(language)}
      />
    </ScrollView>
  );
}

BookDetailScreen.navigationOptions = {header: <Header />};

BookDetailScreen.propTypes = {detailedBook: PropTypes.object};

export default BookDetailScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 150,
    alignSelf: 'center',
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  bookInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 15,
    borderBottomWidth: 0,
  },
  bookDescription: {
    flex: 3,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  descriptionName: {
    fontSize: 12,
    color: 'grey',
  },
  descriptionData: {
    fontSize: 14,
    marginBottom: 10,
  },
  year: {
    textAlign: 'center',
  },
});
