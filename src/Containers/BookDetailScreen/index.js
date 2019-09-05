import {connect} from 'react-redux';

import BookDetailScreen from '../../Components/BookDetailScreen';

const mapStateToProps = store => ({
  detailedBook: store.booksState.detailedBook.volumeInfo,
});

export default connect(mapStateToProps)(BookDetailScreen);
