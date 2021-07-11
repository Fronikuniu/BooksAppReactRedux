import PropTypes from 'prop-types';

function BooksSummary({ books }) {
  return (
    <section>
      <br />
      <h3>Books Summary</h3>
      <p>
        There is <b>{books.length}</b> {books.length === 1 ? 'book' : 'books'} in the app!
      </p>
    </section>
  );
}

BooksSummary.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksSummary;
