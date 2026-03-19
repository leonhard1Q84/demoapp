import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Card, CardContent } from '@/components/ui/card';
import { StateView } from '@/components/ui/state-view';
import { UiState } from '@/types';
import { Calendar, CarFront, Key, MapPin, UserPlus, Wrench } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();
  const [uiState, setUiState] = useState<UiState>('loading');

  useEffect(() => {
    setTimeout(() => setUiState('success'), 600);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB]">
      <Header title="工作台" showBack={false} />
      
      <StateView state={uiState}>
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Store Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-900">
              <MapPin className="h-5 w-5 text-indigo-600" />
              <span className="font-semibold">Suvarnabhumi Airport P2</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200">
              <Calendar className="h-4 w-4" />
              <span>03/11</span>
            </div>
          </div>

          {/* Task Summary */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-none shadow-md" onClick={() => navigate('/queue')}>
              <CardContent className="p-5 flex flex-col items-start">
                <div className="p-2 bg-white/20 rounded-lg mb-3">
                  <Key className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl font-bold mb-1">12</span>
                <span className="text-sm font-medium text-indigo-100">今日待取</span>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-none shadow-md" onClick={() => navigate('/queue')}>
              <CardContent className="p-5 flex flex-col items-start">
                <div className="p-2 bg-white/20 rounded-lg mb-3">
                  <CarFront className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl font-bold mb-1">8</span>
                <span className="text-sm font-medium text-emerald-100">今日待还</span>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3 px-1">快捷入口</h3>
            <div className="grid grid-cols-2 gap-3">
              <Card className="active:bg-gray-50 transition-colors" onClick={() => navigate('/queue')}>
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                    <Key className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-sm">去送车</span>
                </CardContent>
              </Card>
              <Card className="active:bg-gray-50 transition-colors" onClick={() => navigate('/queue')}>
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                    <CarFront className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-sm">去收车</span>
                </CardContent>
              </Card>
              <Card className="active:bg-gray-50 transition-colors opacity-60" onClick={() => alert('V2.0 功能')}>
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                    <UserPlus className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-sm">Walk-in 开单</span>
                </CardContent>
              </Card>
              <Card className="active:bg-gray-50 transition-colors opacity-60" onClick={() => alert('V2.0 功能')}>
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-sm">车辆管理</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </StateView>
    </div>
  );
}
