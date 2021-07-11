import AuthorsList from '../../features/AuthorsList/AuthorsList';
import BooksSummary from '../../features/BooksSummary/BooksSummary';

function Sidebar({ books }) {
  return (
    <aside className="mt-2 mb-2">
      <h2 className="mb-4">Books Information</h2>
      <AuthorsList books={books} />
      <BooksSummary books={books} />
    </aside>
  );
}

export default Sidebar;
