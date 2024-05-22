import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TopicPage from './components/TopicPage';
import PostPage from './components/PostPage';
import NewTopic from './components/NewTopic';
import NewPost from './components/NewPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/new-topic" element={<NewTopic />} />
        <Route path="/new-post/:topicId" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
