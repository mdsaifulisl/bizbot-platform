import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import ScrollToTop from "@/components/common/ScrollToTop"

// Layouts
import AuthLayout from "@/layouts/AuthLayout"
import PublicLayout from "@/layouts/PublicLayout"
import DashboardLayout from "@/layouts/DashboardLayout"
import GetStartedFree from "@/pages/public/aichatbot/GetStartedFree"

// auth pages
import Register from "@/pages/auth/Register"
import Login from "@/pages/auth/Login"

// dashboard
import Dashboard from "@/pages/dashboard/Dashboard"

// public pages
import Pricing from "@/pages/public/pricing/Pricing"
import Home from "@/pages/public/home/Home"
// templates pages
import WebsiteTemplatesPage from "@/pages/public/templates/WebTemplates"
import TemplateDetails from "@/pages/public/templates/TemplateDetails"

// aichatbot pages
import AIChatBot from "@/pages/public/aichatbot/AIChatBot"

// blog pages
import Blog from "@/pages/public/blog/Blog"
import BlogDetails from "@/pages/public/blog/BlogDetails"
// about pages
import AboutPage from "@/pages/public/about/AboutPage"

// contact pages
import ContactPage from "@/pages/public/contact/ContactPage"

// faqs pages
import FAQ from "@/pages/public/faqs/FAQ"

// documentation pages
import Documentation from "@/pages/public/documentation/Documentation"



// privacy pages






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
          <Route path="/ai-features" element={<AIChatBot />} />
          <Route path="/get-started/:tierName/:tierId" element={<GetStartedFree />} />
          {/* Blogs */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          {/* documentation */}
          <Route path="/docs" element={<Documentation />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />}  />


          {/* contact */}
          <Route path="/contact" element={<ContactPage />}  />

          {/* faqs */}
          <Route path="/faqs" element={<FAQ />}  />
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