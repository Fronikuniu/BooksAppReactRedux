import BooksList from './BooksList';
import { connect } from 'react-redux';
import { getAllBooks, removeBook } from '../../redux/subReducers/booksRedux';

const mapStateToProps = (state) => ({
  books: getAllBooks(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (bookId) => dispatch(removeBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
