import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contents from './pages/Contents/Contents';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contents />} />
      </Routes>
    </BrowserRouter>
  );
}
