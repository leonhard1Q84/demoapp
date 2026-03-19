import React from 'react';
import { Loader2, AlertCircle, FileX } from 'lucide-react';
import { Button } from './button';

interface StateViewProps {
  state: 'loading' | 'empty' | 'error' | 'success';
  children: React.ReactNode;
  emptyMessage?: string;
  errorMessage?: string;
  onRetry?: () => void;
}

export function StateView({ state, children, emptyMessage = "暂无数据", errorMessage = "加载失败", onRetry }: StateViewProps) {
  if (state === 'loading') {
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-gray-400">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600 mb-4" />
        <p className="text-sm">加载中...</p>
      </div>
    );
  }

  if (state === 'empty') {
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-gray-400">
        <FileX className="h-12 w-12 mb-4 text-gray-300" />
        <p className="text-sm text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-gray-400">
        <AlertCircle className="h-12 w-12 mb-4 text-red-400" />
        <p className="text-sm text-gray-500 mb-4">{errorMessage}</p>
        {onRetry && (
          <Button variant="outline" size="sm" onClick={onRetry}>
            重试
          </Button>
        )}
      </div>
    );
  }

  return <>{children}</>;
}
