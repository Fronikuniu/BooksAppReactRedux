import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import shortid from 'shortid';
import PropTypes from 'prop-types';

function BooksForm({ addBook, addAuthor }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addBook({
      id: shortid(),
      title: data.title,
      author: data.author,
      price: data.price,
    });

    addAuthor({
      id: shortid(),
      name: data.author,
    });
  };

  return (
    <section>
      <h3 className="mt-4">Add book to the list!</h3>
      <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <FormGroup controlId="title">
          <FormLabel>Title:</FormLabel>
          <FormControl type="text" name="title" {...register('title', { required: true, minLength: 3, maxLength: 100 })} placeholder="Enter Title Name" />
          {errors.title?.type === 'required' && <p className="error-text">Title is required!</p>}
          {errors.title?.type === ('minLength' || 'maxLength') && <p className="error-text">The Title must be between 3 and 100 characters long!</p>}
        </FormGroup>
        <FormGroup controlId="author">
          <FormLabel>Author:</FormLabel>
          <FormControl type="text" name="author" {...register('author', { required: true, minLength: 3, maxLength: 100 })} placeholder="Enter Author Name" />
          {errors.author?.type === 'required' && <p className="error-text">Author is required!</p>}
          {errors.author?.type === ('minLength' || 'maxLength') && <p className="error-text">The Author must be between 3 and 100 characters long!</p>}
        </FormGroup>
        <FormGroup controlId="price">
          <FormLabel>Price:</FormLabel>
          <FormControl type="number" name="price" {...register('price', { required: true })} placeholder="Enter Price" />
          {errors.price?.type === 'required' && <p className="error-text">Price is required!</p>}
        </FormGroup>

        <Button type="submit" variant="success">
          Add book!
        </Button>
      </Form>
    </section>
  );
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BooksForm;
