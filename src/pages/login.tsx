import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Car } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/home', { replace: true });
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg">
        <Car className="h-8 w-8" />
      </div>
      <h1 className="mb-2 text-2xl font-bold text-gray-900">门店运营端</h1>
      <p className="mb-8 text-center text-sm text-gray-500">
        Store Ops Mobile
      </p>
      
      <div className="w-full space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">员工账号</label>
          <input 
            type="text" 
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="请输入账号"
            defaultValue="admin"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">密码</label>
          <input 
            type="password" 
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="请输入密码"
            defaultValue="123456"
          />
        </div>
        <Button 
          className="mt-6 w-full" 
          size="lg" 
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? '登录中...' : '登录'}
        </Button>
      </div>
    </div>
  );
}
