import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './layout/Header/Header';
import BooksList from './features/BooksList/BooksListContainer';
import Sidebar from './layout/Sidebar/Sidebar';
import './App.css';
import { useEffect } from 'react';
import { getBooks, getAuthors } from './requests/requests';
import { connect } from 'react-redux';
import { updateBooks } from './redux/subReducers/booksRedux';
import { updateAuthors } from './redux/subReducers/authorsRedux';

function App({ updateBooks, updateAuthors }) {
  useEffect(() => {
    getBooks()
      .then((response) => {
        const { data } = response;
        updateBooks(data);
      })
      .catch((error) => {});

    getAuthors()
      .then((response) => {
        const { data } = response;
        updateAuthors(data);
      })
      .catch((error) => {});
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateBooks: (data) => dispatch(updateBooks(data)),
    updateAuthors: (data) => dispatch(updateAuthors(data)),
  };
};
export default connect(null, mapDispatchToProps)(App);
