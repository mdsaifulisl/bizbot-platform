import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import ScrollToTop from "@/components/common/ScrollToTop"

// public pages
import Pricing from "@/pages/public/pricing/Pricing"
import Home from "@/pages/public/home/Home"
// templates pages
import WebsiteTemplatesPage from "@/pages/public/templates/WebTemplates"
import TemplateDetails from "@/pages/public/templates/TemplateDetails"

// aichatbot pages
import AIChatBot from "@/pages/public/aichatbot/AIChatBot"

// auth pages
import Register from "@/pages/auth/Register"
import Login from "@/pages/auth/Login"

// dashboard
import Dashboard from "@/pages/dashboard/Dashboard"

// Layouts
import AuthLayout from "@/layouts/AuthLayout"
import PublicLayout from "@/layouts/PublicLayout"
import DashboardLayout from "@/layouts/DashboardLayout"
import GetStartedFree from "@/pages/public/aichatbot/GetStartedFree"


export default function AppRoutes() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
       

        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/templates" element={<WebsiteTemplatesPage />} />
          <Route path="/templates/:id" element={<TemplateDetails />} />
          {/* ai chatbot */}
          <Route path="/aichatbot" element={<AIChatBot />} />
          <Route path="/get-started/:tierName/:tierId" element={<GetStartedFree />} />
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