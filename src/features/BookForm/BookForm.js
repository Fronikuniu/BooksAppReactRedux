import { useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import shortid from 'shortid';

function BooksForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      id: shortid(),
      title: title,
      author: author,
      price: price,
    });
  };

  return (
    <>
      <h3 className="mt-4">Add book to the list!</h3>
      <Form onSubmit={handleSubmit} className="mt-4">
        <FormGroup controlId="title">
          <FormLabel>Title:</FormLabel>
          <FormControl
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter Title Name"
          />
        </FormGroup>
        <FormGroup controlId="author">
          <FormLabel>Author:</FormLabel>
          <FormControl
            type="text"
            name="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            placeholder="Enter Author Name"
          />
        </FormGroup>
        <FormGroup controlId="price">
          <FormLabel>Price:</FormLabel>
          <FormControl
            type="number"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="Enter Price"
          />
        </FormGroup>

        <Button type="submit" variant="primary">
          Add book!
        </Button>
      </Form>
    </>
  );
}

export default BooksForm;
