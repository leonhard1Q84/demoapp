import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/mobile-layout';
import { Login } from '@/pages/login';
import { Home } from '@/pages/home';
import { Queue } from '@/pages/queue';
import { OrderDetail } from '@/pages/order-detail';
import { Checkin } from '@/pages/checkin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/detail/:id" element={<OrderDetail />} />
          <Route path="/checkin/:id" element={<Checkin />} />
          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
