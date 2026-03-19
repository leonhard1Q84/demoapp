import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightElement?: React.ReactNode;
  className?: string;
}

export function Header({ title, showBack = true, onBack, rightElement, className }: HeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className={cn("sticky top-0 z-40 flex h-14 items-center justify-between bg-white px-4 border-b border-gray-100", className)}>
      <div className="flex w-10 items-center justify-start">
        {showBack && (
          <button
            onClick={handleBack}
            className="flex h-10 w-10 items-center justify-center rounded-full active:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
        )}
      </div>
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      </div>
      <div className="flex w-10 items-center justify-end">
        {rightElement}
      </div>
    </header>
  );
}
