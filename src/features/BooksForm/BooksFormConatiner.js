import BooksForm from './BooksForm';
import { connect } from 'react-redux';
import { addAuthorRequest } from '../../redux/subReducers/authorsRedux';
import { addBookRequest } from '../../redux/subReducers/booksRedux';

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBookRequest(book)),
  addAuthor: (author) => dispatch(addAuthorRequest(author)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
