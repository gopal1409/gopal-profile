import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Layout from '@components/layout/Layout';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import ScrollToTop from '@components/layout/ScrollToTop';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;