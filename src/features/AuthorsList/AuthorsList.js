import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllAuthors, removeAuthorBooks } from '../../redux/store';

function AuthorsList({ authors, removeAutBooks }) {
  return (
    <section>
      <h3>Authors list</h3>
      <ListGroup>
        {authors.map((author, index) => {
          return (
            <ListGroupItem key={index} className="authorslist-item">
              {author}{' '}
              <Button title="Delete all author books!" variant="danger" onClick={() => removeAutBooks(author)}>
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

const mapStateToProps = (state) => ({
  authors: getAllAuthors(state),
});
const mapDispatchToProps = (dispatch) => ({
  removeAutBooks: (author) => dispatch(removeAuthorBooks(author)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList);
