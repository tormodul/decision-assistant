// src/components/PageLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <Outlet /> {/* This is where the child route components will be rendered */}
      </div>
    </div>
  );
};

export default PageLayout;