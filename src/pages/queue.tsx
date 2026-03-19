import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StateView } from '@/components/ui/state-view';
import { UiState } from '@/types';
import { Search, Filter } from 'lucide-react';

const MOCK_ORDERS = [
  { id: '1', no: 'PLT-20260310-021', name: 'Mina Lee', phone: '+82 1012345678', car: 'Nissan Aura', time: '11:30', type: 'pickup', status: '待取车' },
  { id: '2', no: 'PLT-20260310-022', name: 'John Doe', phone: '+1 234567890', car: 'Toyota Camry', time: '14:00', type: 'return', status: '待还车' },
];

export function Queue() {
  const navigate = useNavigate();
  const [uiState, setUiState] = useState<UiState>('loading');

  useEffect(() => {
    setTimeout(() => setUiState('success'), 800);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB]">
      <Header title="履约队列" />
      
      <div className="bg-white p-4 border-b border-gray-100 sticky top-14 z-30">
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="search" 
              placeholder="搜索订单号、姓名、手机号" 
              className="w-full pl-9 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl text-sm"
            />
          </div>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl text-gray-600">
            <Filter className="h-4 w-4" />
          </button>
        </div>
        <div className="flex space-x-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
          <Badge variant="default" className="px-3 py-1.5 rounded-full text-sm">全部</Badge>
          <Badge variant="secondary" className="px-3 py-1.5 rounded-full text-sm font-normal">待取车 (12)</Badge>
          <Badge variant="secondary" className="px-3 py-1.5 rounded-full text-sm font-normal">待还车 (8)</Badge>
        </div>
      </div>

      <StateView state={uiState}>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {MOCK_ORDERS.map(order => (
            <Card key={order.id} className="active:bg-gray-50 transition-colors" onClick={() => navigate(`/detail/${order.id}`)}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{order.no}</div>
                    <div className="font-semibold text-gray-900">{order.name}</div>
                  </div>
                  <Badge variant={order.type === 'pickup' ? 'blue' : 'warning'}>{order.status}</Badge>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center">
                    <span className="w-16 text-gray-400">车型</span>
                    <span>{order.car}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-16 text-gray-400">时间</span>
                    <span className="font-medium text-gray-900">{order.time}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </StateView>
    </div>
  );
}
