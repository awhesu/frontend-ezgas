import { Navigate, Route, Routes } from 'react-router-dom'

import ConsumerLayout from './layouts/ConsumerLayout'
import AdminLayout from './layouts/AdminLayout'

import HomePage from './pages/consumer/HomePage'
import SchedulePage from './pages/consumer/SchedulePage'
import OrderTrackingPage from './pages/consumer/OrderTrackingPage'
import OrderHistoryPage from './pages/consumer/OrderHistoryPage'
import PaymentsPage from './pages/consumer/PaymentsPage'
import ProfileSettingsPage from './pages/consumer/ProfileSettingsPage'
import StationDetailsPage from './pages/consumer/StationDetailsPage'
import FavoritesPage from './pages/consumer/FavoritesPage'
import NotificationsPage from './pages/consumer/NotificationsPage'

import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AdminCustomersPage from './pages/admin/AdminCustomersPage'
import AdminVendorsPage from './pages/admin/AdminVendorsPage'
import AdminOrdersPage from './pages/admin/AdminOrdersPage'
import AdminServicesPage from './pages/admin/AdminServicesPage'
import AdminSubscriptionPage from './pages/admin/AdminSubscriptionPage'
import AdminSettingsPage from './pages/admin/AdminSettingsPage'
import AdminNotificationPage from './pages/admin/AdminNotificationPage'

import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/home" replace />} />

      <Route path="/app" element={<ConsumerLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="order-tracking" element={<OrderTrackingPage />} />
        <Route path="order-history" element={<OrderHistoryPage />} />
        <Route path="payments" element={<PaymentsPage />} />
        <Route path="profile" element={<ProfileSettingsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="station/:id" element={<StationDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="users/customers" element={<AdminCustomersPage />} />
        <Route path="users/vendors" element={<AdminVendorsPage />} />
        <Route path="orders" element={<AdminOrdersPage />} />
        <Route path="services" element={<AdminServicesPage />} />
        <Route path="subscription" element={<AdminSubscriptionPage />} />
        <Route path="notification" element={<AdminNotificationPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
