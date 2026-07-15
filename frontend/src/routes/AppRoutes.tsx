import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// public pages
import Pricing from "@/pages/public/pricing/Pricing"
import Home from "@/pages/public/home/Home"

// auth pages
import Register from "@/pages/auth/Register"
import Login from "@/pages/auth/Login"

// dashboard
import Dashboard from "@/pages/dashboard/Dashboard"

// Layouts
import AuthLayout from "@/layouts/AuthLayout"
import PublicLayout from "@/layouts/PublicLayout"
import DashboardLayout from "@/layouts/DashboardLayout"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>

          <Route path="/register" element={<Register />} />
          <Route path="/customer/login" element={<Login />} />
          
        </Route>

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}