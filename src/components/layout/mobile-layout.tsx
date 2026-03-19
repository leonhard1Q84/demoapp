import React from 'react';
import { Outlet } from 'react-router-dom';

export function MobileLayout() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-[#F9FAFB] shadow-xl sm:border-x sm:border-gray-200">
      <Outlet />
    </div>
  );
}
