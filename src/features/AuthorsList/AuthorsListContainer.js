import AuthorsList from './AuthorsList';
import { connect } from 'react-redux';
import { getAllAuthors, removeAuthorRequest } from '../../redux/subReducers/authorsRedux';
import { removeAuthorBookRequest } from '../../redux/subReducers/booksRedux';

const mapStateToProps = (state) => ({
  authors: getAllAuthors(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeAutBooks: (author) => dispatch(removeAuthorBookRequest(author)),
  removeAuthor: (author) => dispatch(removeAuthorRequest(author)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList);
