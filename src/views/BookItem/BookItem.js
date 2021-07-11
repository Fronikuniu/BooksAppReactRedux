import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

function BookItem({ book }) {
  return (
    <ListGroupItem key={book.id}>
      {book.title} by {book.author} ${book.price}
    </ListGroupItem>
  );
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
