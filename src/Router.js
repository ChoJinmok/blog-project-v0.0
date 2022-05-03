import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyBlog from './pages/MyBlog/MyBlog';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog-project-v0.0" element={<MyBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
