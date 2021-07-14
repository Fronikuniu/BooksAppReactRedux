import BooksForm from './BooksForm';
import { connect } from 'react-redux';
import { addAuthor } from '../../redux/subReducers/authorsRedux';
import { addBook } from '../../redux/subReducers/booksRedux';

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
  addAuthor: (author) => dispatch(addAuthor(author)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
