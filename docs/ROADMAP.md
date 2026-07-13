# Project Roadmap & Progress Tracker
## Implementation Phases & Milestones

---

## 📌 Phase 1: Core Foundation & Auth
- [ ] Initialize Root, Backend, and Frontend Projects (TypeScript Setup)
- [ ] Configure PostgreSQL Database & Prisma Schema
- [ ] Run Initial Database Migration
- [ ] Implement Backend Authentication API (`/auth/register`, `/auth/login` with JWT)
- [ ] Implement Frontend Authentication Logic using Redux Toolkit & RTK Query
- [ ] Build Login & Registration UI Pages (Tailwind CSS + shadcn/ui)

## 📌 Phase 2: Shell & User Space
- [ ] Build Main Dashboard Layout with Responsive Sidebar & Navbar
- [ ] Implement Theme Toggle (Dark/Light Mode)
- [ ] Create User Profile Management Page (Update Name/Password)
- [ ] Build Admin Panel Base Layout with Guarded Routes

## 📌 Phase 3: Website Store Module (Service 1)
- [ ] Admin: Template Manager UI (Create, Read, Update, Delete Templates)
- [ ] Customer: Browse Templates Page (Grid View, Filter, Demo Links)
- [ ] Customer: Template Single View & "Buy Now" Checkout Triggers
- [ ] Customer: Website Order History Page

## 📌 Phase 4: Payment System
- [ ] Integrate SSLCOMMERZ Sandbox Gateway in Backend
- [ ] Implement Order Creation & Gateway URL Redirect Flow
- [ ] Create SSLCOMMERZ Callback/IPN Webhook Listener (`/payments/ssl-callback`)
- [ ] Handle Payment Success/Failure Redirect Pages on Frontend

## 📌 Phase 5: Requirement Submission & Deployment
- [ ] Customer: Form for Submitting Domain, Hosting, and cPanel Credentials
- [ ] Admin: Manage Website Orders Queue (View cPanel Data safely)
- [ ] Admin: Update Order Status (`Pending` ➔ `In Progress` ➔ `Live`)
- [ ] Implement Live Status Notification for Customers

## 📌 Phase 6: AI Engine & Scraper (Service 2)
- [ ] Customer: Register Business & Website URL Module
- [ ] Backend: Build Website Crawler/Scraper Engine (Extract text, products, FAQs)
- [ ] Backend: Setup Database Storage for Scraped Content (`KnowledgeBase` Table)
- [ ] Integrate OpenAI API (GPT-4o/3.5) with Custom System Prompts

## 📌 Phase 7: Subscription Core
- [ ] Setup Monthly Subscription Packages for AI SaaS
- [ ] Connect SSLCOMMERZ for Subscription Billing Cycles
- [ ] Implement Expiry Check Middleware (Block AI responses if subscription is `EXPIRED`)

## 📌 Phase 8: Channel Integrations (WhatsApp & Messenger)
- [ ] Integrate Meta Cloud API for WhatsApp Webhooks
- [ ] Integrate Facebook Page Tokens for Messenger Webhooks
- [ ] Create Central Webhook Handlers to route incoming messages to OpenAI Engine
- [ ] Save Conversation History & Messages to DB (`Conversations` & `Messages` Tables)

## 📌 Phase 9: UI Control & Analytics
- [ ] Build Live Chat Analytics UI (Total Chats, AI Response count, Tokens Used)
- [ ] Build AI Playground/Config Panel (Modify Personality, Custom Welcome Message)
- [ ] Implement Live Conversation Viewer (Admin/Customer can read chat logs)

## 📌 Phase 10: Launch & DevOps
- [ ] Secure cPanel credential handling (Encryption at Rest)
- [ ] Provision Ubuntu VPS Server
- [ ] Configure Nginx Server as Reverse Proxy with SSL (Certbot)
- [ ] Setup PM2 Process Manager for Backend Node Application
- [ ] Final End-to-End Testing & Production Deployment 🎉