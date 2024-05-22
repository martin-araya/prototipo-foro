import { Link } from 'react-router-dom';

function HomePage() {
  const topics = [
    { id: 1, title: 'General Discussion' },
    { id: 2, title: 'Tech Talk' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Forum Home</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id} className="mb-2">
            <Link to={`/topic/${topic.id}`} className="text-blue-500 hover:underline">
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/new-topic" className="text-blue-500 hover:underline mt-4 block">
        Create New Topic
      </Link>
    </div>
  );
}

export default HomePage;
