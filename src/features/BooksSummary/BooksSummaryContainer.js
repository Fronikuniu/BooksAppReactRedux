import BooksSummary from './BooksSummary';
import { connect } from 'react-redux';
import { getCountBooks } from '../../redux/subReducers/booksRedux';

const mapStateToProps = (state) => ({
  booksLength: getCountBooks(state),
});

export default connect(mapStateToProps)(BooksSummary);
