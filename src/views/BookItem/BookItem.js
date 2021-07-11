import { Button } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

function BookItem({ book, removeBook }) {
  return (
    <ListGroupItem key={book.id} className="booklist-item">
      <span>
        <span className="booklist-item-title">{book.title}</span> by <span className="booklist-item-author">{book.author} </span>
        costs <span className="booklist-item-price"> ${book.price}</span>.
      </span>
      <Button variant="danger" onClick={() => removeBook(book.id)}>
        X
      </Button>
    </ListGroupItem>
  );
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BookItem;
