import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage/AriticlePage';
import MyBlog from './pages/MyBlog/MyBlog';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog-project-v0.0" element={<MyBlog />} />
        <Route
          path="/blog-project-v0.0/article/:id"
          element={<ArticlePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
