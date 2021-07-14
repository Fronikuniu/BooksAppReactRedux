import AuthorsList from './AuthorsList';
import { connect } from 'react-redux';
import { getAllAuthors, removeAuthor } from '../../redux/subReducers/authorsRedux';
import { removeAuthorBooks } from '../../redux/subReducers/booksRedux';

const mapStateToProps = (state) => ({
  authors: getAllAuthors(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeAutBooks: (author) => dispatch(removeAuthorBooks(author)),
  removeAuthor: (author) => dispatch(removeAuthor(author)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList);
