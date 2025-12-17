import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import AdminLayout from './layouts/AdminLayout'

import Home from './pages/app/Home'
import Schedule from './pages/app/Schedule'
import OrderTracking from './pages/app/OrderTracking'

import AdminDashboard from './pages/admin/Dashboard'
import AdminOrders from './pages/admin/Orders'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/home" />} />

      <Route path="/app" element={<AppLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="order-tracking" element={<OrderTracking />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="orders" element={<AdminOrders />} />
      </Route>
    </Routes>
  )
}