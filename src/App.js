import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './layout/Header/Header';
import BooksList from './features/BooksList/BooksListContainer';
import Sidebar from './layout/Sidebar/Sidebar';
import './App.css';

function App() {
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

export default App;
