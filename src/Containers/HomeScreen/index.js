import {connect} from 'react-redux';
import {requestBooks, getBookById} from '../../Redux/Actions';
import {bindActionCreators} from 'redux';

import HomeScreen from '../../Components/HomeScreen';

const mapStateToProps = store => ({
  books: store.booksState.books,
  totalOfBooks: store.booksState.totalOfBooks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({requestBooks, getBookById}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
