import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './layout/Header/Header';
import BooksList from './features/BooksList/BooksListContainer';
import Sidebar from './layout/Sidebar/Sidebar';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from './redux/subReducers/booksRedux';
import { fetchAuthors } from './redux/subReducers/authorsRedux';

function App({ updateBooks, updateAuthors }) {
  useEffect(() => {
    updateBooks();
    updateAuthors();
  }, [updateBooks, updateAuthors]);

  return (
    <Container>
      <Header />
      <Row>
        <Col xs="12" md="9">
          <main className="mt-2 mb-2">
            <BooksList />
          </main>
        </Col>
        <Col xs="12" md="3">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateBooks: () => dispatch(fetchBooks()),
  updateAuthors: () => dispatch(fetchAuthors()),
});

export default connect(null, mapDispatchToProps)(App);

// How works thunk:
// const mapDispatchToProps = (realDispatch) => {
//   const dispatch = (action) => {
//     if (typeof action === 'function') action(realDispatch);
//     else realDispatch(action);
//   };

//   return ({                                     ---- we can code
//     updateBooks: () => dispatch(fetchBooks()), ---- like this
//     updateBooks: () => fetchBooks(dispatch),   ---- not like this
//   });                                           ---- to save our code consistency
// };
