import AuthorsList from '../../features/AuthorsList/AuthorsList';
import BooksSummary from '../../features/BooksSummary/BooksSummary';

function Sidebar() {
  return (
    <aside className="mt-2 mb-2">
      <h2 className="mb-4">Books Information</h2>
      <AuthorsList />
      <BooksSummary />
    </aside>
  );
}

export default Sidebar;
