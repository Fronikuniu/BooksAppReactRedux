import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookItem from '../../views/BookItem/BookItem';
import BooksForm from '../BookForm/BookForm';

function BooksList({ books, removeBook }) {
  return (
    <div>
      <section>
        <h2>BooksList</h2>
        <ListGroup>
          {books.map((book) => (
            <BookItem key={book.id} book={book} removeBook={removeBook} />
          ))}
        </ListGroup>
      </section>

      <BooksForm />
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});
const mapDispatchToProps = (dispatch) => ({
  removeBook: (bookId) => dispatch({ type: 'REMOVE_BOOK', bookId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
