import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NewPost() {
  const { topicId } = useParams();
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para crear una nueva publicación
    navigate(`/topic/${topicId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Content</label>
          <textarea
            className="border rounded w-full py-2 px-3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPost;
