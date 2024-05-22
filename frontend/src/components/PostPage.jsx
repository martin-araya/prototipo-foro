import { useParams } from 'react-router-dom';

function PostPage() {
  const { postId } = useParams();
  const post = { id: postId, title: 'Welcome to General Discussion', content: 'This is the first post.' };
  const replies = [
    { id: 1, content: 'First reply!' },
    { id: 2, content: 'Interesting topic.' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
      <h2 className="text-2xl font-bold mb-4">Replies</h2>
      <ul>
        {replies.map((reply) => (
          <li key={reply.id} className="mb-2">
            {reply.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostPage;
