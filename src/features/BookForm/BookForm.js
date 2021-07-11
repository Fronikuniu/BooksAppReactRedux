import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import shortid from 'shortid';
import PropTypes from 'prop-types';

function BooksForm({ addBook }) {
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
  };

  return (
    <section>
      <h3 className="mt-4">Add book to the list!</h3>
      <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <FormGroup controlId="title">
          <FormLabel>Title:</FormLabel>
          <FormControl type="text" name="title" {...register('title', { required: true, maxLength: 100 })} placeholder="Enter Title Name" />
          {errors.title?.type === 'required' && <p className="error-text">Title is required!</p>}
        </FormGroup>
        <FormGroup controlId="author">
          <FormLabel>Author:</FormLabel>
          <FormControl type="text" name="author" {...register('author', { required: true, maxLength: 100 })} placeholder="Enter Author Name" />
          {errors.author?.type === 'required' && <p className="error-text">Author is required!</p>}
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

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch({ type: 'ADD_BOOK', book }),
});
export default connect(null, mapDispatchToProps)(BooksForm);
