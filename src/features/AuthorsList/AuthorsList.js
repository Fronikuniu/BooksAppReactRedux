import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

function AuthorsList({ authors, removeAutBooks, removeAuthor }) {
  return (
    <section>
      <h3>Authors list</h3>
      <ListGroup>
        {authors.map((author, index) => {
          return (
            <ListGroupItem key={index} className="authorslist-item">
              {author}{' '}
              <Button
                title="Delete all author books!"
                variant="danger"
                onClick={() => {
                  removeAutBooks(author);
                  removeAuthor(author);
                }}
              >
                X
              </Button>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </section>
  );
}

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired,
};

export default AuthorsList;
