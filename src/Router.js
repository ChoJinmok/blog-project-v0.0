import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contents from './pages/Contents/Contents';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog-project-v0.0" element={<Contents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
