import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import BookItem from '../../views/BookItem/BookItem';
import BooksForm from '../BookForm/BookForm';

function BooksList({ books, addBook }) {
  return (
    <div>
      <h2>BooksList</h2>
      <ListGroup>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ListGroup>

      <BooksForm addBook={addBook} />
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksList;
