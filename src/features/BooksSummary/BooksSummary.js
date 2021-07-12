import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountBooks } from '../../redux/store';

function BooksSummary({ booksLength }) {
  return (
    <section>
      <br />
      <h3>Books Summary</h3>
      <p>
        There is <b>{booksLength}</b> {booksLength === 1 ? 'book' : 'books'} in the app!
      </p>
    </section>
  );
}

BooksSummary.propTypes = {
  booksLength: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  booksLength: getCountBooks(state),
});
export default connect(mapStateToProps)(BooksSummary);
