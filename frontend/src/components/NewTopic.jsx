import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewTopic() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para crear un nuevo tema
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create New Topic</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewTopic;
