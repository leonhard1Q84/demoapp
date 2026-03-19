import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, MapPin } from 'lucide-react';

export function Checkin() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Mock preauth bottom sheet logic
      alert('打开预授权 Bottom Sheet (MVP 流程)');
      navigate(-1);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB] pb-24">
      <Header title="取车登记" />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">车辆照片</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-video bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-300">
                <Camera className="h-6 w-6 mb-1" />
                <span className="text-xs">左前 45°</span>
              </div>
              <div className="aspect-video bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-300">
                <Camera className="h-6 w-6 mb-1" />
                <span className="text-xs">右后 45°</span>
              </div>
              <div className="aspect-video bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-300">
                <Camera className="h-6 w-6 mb-1" />
                <span className="text-xs">仪表盘</span>
              </div>
              <div className="aspect-video bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-300">
                <Camera className="h-6 w-6 mb-1" />
                <span className="text-xs">其他细节</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">停放位置</h3>
            <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-xl mb-3">
              <MapPin className="h-5 w-5 text-indigo-600" />
              <span className="text-sm text-gray-700">正在获取定位...</span>
            </div>
            <textarea 
              className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
              placeholder="补充位置说明（如：B2层 C区 102车位）"
              rows={3}
            />
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 p-4 pb-safe">
        <Button className="w-full h-12 rounded-xl" onClick={handleSubmit} disabled={loading}>
          {loading ? '提交中...' : '提交登记'}
        </Button>
      </div>
    </div>
  );
}
