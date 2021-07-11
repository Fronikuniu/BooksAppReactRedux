import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './layout/Header/Header';
import BooksList from './features/BooksList/BooksList';
import Sidebar from './layout/Sidebar/Sidebar';
import './App.css';

const booksData = [
  { id: 1, title: 'Title1', author: 'Author1', price: 12 },
  { id: 2, title: 'Title2', author: 'Author2', price: 22 },
];

function App() {
  const [books, setBooks] = useState(booksData);

  const addBook = (book) => {
    setBooks([...books, book]);
  };
  return (
    <Container>
      <Header />
      <Row>
        <Col xs="12" md="9">
          <main className="mt-2 mb-2">
            <BooksList addBook={addBook} books={books} />
          </main>
        </Col>
        <Col xs="12" md="3">
          <Sidebar books={books} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
