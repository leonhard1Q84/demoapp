import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StateView } from '@/components/ui/state-view';
import { UiState } from '@/types';
import { Phone, Navigation, Clock, MapPin, Info } from 'lucide-react';

export function OrderDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [uiState, setUiState] = useState<UiState>('loading');

  useEffect(() => {
    setTimeout(() => setUiState('success'), 500);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB] pb-24">
      <Header title="订单详情" />
      
      <StateView state={uiState}>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {/* Order Info Card */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-bold text-gray-900">订单详情</h2>
                  <Badge variant="warning" className="text-[10px] px-1.5 py-0 bg-orange-50 text-orange-600 border-orange-200">送车</Badge>
                  <Badge variant="warning" className="text-[10px] px-1.5 py-0 bg-orange-50 text-orange-600 border-orange-200">自助取还</Badge>
                </div>
                <Badge variant="blue" className="rounded-full px-3">进行中</Badge>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">渠道订单号</span>
                  <span className="font-mono text-gray-900">PLT-20260310-021</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">确认号</span>
                  <span className="font-mono text-indigo-600">9012456677</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer & Booking Info Card */}
          <Card>
            <CardContent className="p-0">
              <div className="px-4 py-3 border-b border-gray-100 flex items-center space-x-2">
                <div className="w-1 h-4 bg-indigo-600 rounded-full"></div>
                <h3 className="font-semibold text-gray-900">客户与预订信息</h3>
              </div>
              
              <div className="p-4 space-y-4">
                {/* Customer */}
                <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-xl">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">Mina Lee</div>
                    <div className="flex items-center text-indigo-600 text-sm mt-0.5">
                      <Phone className="h-3.5 w-3.5 mr-1" />
                      <span>+82 1012345678</span>
                    </div>
                  </div>
                </div>

                {/* Vehicle */}
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-blue-50">
                  <div className="text-xs text-gray-500 mb-1">预订车型</div>
                  <div className="font-bold text-gray-900">Nissan Aura or similar</div>
                </div>

                {/* Add-ons */}
                <div className="bg-[#FFFBF5] p-3 rounded-xl border border-orange-50">
                  <div className="text-xs text-gray-500 mb-2">附加设备与服务</div>
                  <Badge variant="warning" className="bg-orange-100/50 text-orange-800 border-orange-200">Road / congestion payment scheme</Badge>
                </div>

                {/* Time & Location */}
                <div className="space-y-4 pt-2">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">预订取车时间</div>
                    <div className="flex items-center text-gray-900 font-medium">
                      <Clock className="h-4 w-4 mr-1.5 text-gray-400" />
                      03/11 11:30
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">取车位置</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-900 font-medium">
                        Suvarnabhumi Airport P2
                      </div>
                      <Button variant="outline" size="sm" className="h-7 text-indigo-600 border-indigo-200 bg-indigo-50 rounded-full px-3">
                        <Navigation className="h-3 w-3 mr-1" />
                        导航
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </StateView>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 p-4 pb-safe">
        <div className="flex space-x-3">
          <Button variant="outline" className="flex-1 h-12 rounded-xl text-gray-700 font-semibold" onClick={() => navigate(-1)}>
            释放投递任务
          </Button>
          <Button className="flex-1 h-12 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] font-semibold" onClick={() => navigate(`/checkin/${id}`)}>
            继续任务
          </Button>
        </div>
      </div>
    </div>
  );
}
