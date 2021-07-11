import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

function AuthorsList({ books }) {
  const authors = [...new Set(books.map((book) => book.author))]; //Set() is a specially object who can have only unique data
  return (
    <section>
      <h3>Authors list</h3>
      <ListGroup>
        {authors.map((author, index) => {
          return <ListGroupItem key={index}>{author}</ListGroupItem>;
        })}
      </ListGroup>
    </section>
  );
}

AuthorsList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default AuthorsList;