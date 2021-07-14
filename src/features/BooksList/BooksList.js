import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BookItem from '../../views/BookItem/BookItem';
import BooksForm from '../../features/BooksForm/BooksFormConatiner';

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

export default BooksList;
