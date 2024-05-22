import { useParams, Link } from 'react-router-dom';

function TopicPage() {
  const { topicId } = useParams();
  const posts = [
    { id: 1, title: 'Welcome to General Discussion' },
    { id: 2, title: 'Let\'s talk about technology' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Topic {topicId}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/new-post/${topicId}`} className="text-blue-500 hover:underline mt-4 block">
        Create New Post
      </Link>
    </div>
  );
}

export default TopicPage;
