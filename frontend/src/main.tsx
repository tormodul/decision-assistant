// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ScenarioListPage from './routes/ScenarioListPage';
import ScenarioDetailPage from './routes/ScenarioDetailPage';
import './index.css';
import PageLayout from './components/ui/PageLayout'; // Import the layout component

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/scenarios" replace />} />
        <Route element={<PageLayout />}> {/* Apply the layout to these routes */}
          <Route path="/scenarios" element={<ScenarioListPage />} />
          <Route path="/scenario/:id" element={<ScenarioDetailPage />} />
        </Route>
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);