# Software Requirements Specification (SRS)
## Project Name: AI SaaS Platform & Website Development Agency

---

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to define the functional and non-functional requirements for the **AI SaaS Platform & Website Development Agency** application. It serves as a comprehensive guide for developers, system architects, and stakeholders throughout the software development lifecycle.

### 1.2 Scope
This platform offers a dual-service architecture:
1. **Website Development & Deployment (Agency Service):** Customers purchase pre-designed website templates, provide their custom domain and hosting credentials (cPanel/VPS), and receive a fully setup and live website from the agency team.
2. **AI Chatbot SaaS (Monthly Subscription):** Customers can integrate an AI-powered conversational agent into their website, WhatsApp, and Facebook Messenger. The AI leverages customer-specific business information (crawled from their live website or uploaded as documentation) to automate support and product inquiries.

---

## 2. User Roles & System Permissions

The system defines three primary actor categories:

### 2.1 Guest / Visitor
* Browse public pages (Home, About, Services, Website Templates, AI Chatbot, Pricing, Portfolio, Blog, Contact, FAQ).
* View demo previews of available website templates.
* Register for a customer account.

### 2.2 Customer (Business Owner)
* **Website Management:** Purchase website templates, submit domain/hosting/cPanel credentials, and track website order/deployment status.
* **AI Knowledge Base Management:** Connect their live website URL for auto-crawling, upload custom FAQs, and configure AI prompt instructions (welcome message, tone, personality).
* **Channel Integrations:** Connect and authorize WhatsApp Business API and Facebook Messenger channels for automated AI replies.
* **Live Chat & Conversations:** View, monitor, and manually intervene in active AI-customer chat conversations across channels.
* **Subscription & Billing:** Manage monthly SaaS AI subscriptions, view invoices, and make payments via SSLCOMMERZ.
* **Analytics:** View customer interaction metrics, message volumes, and usage limits.

### 2.3 System Administrator (Admin)
* **User & Business Management:** Manage registered users, view connected business accounts, and handle account suspensions.
* **Website Order Lifecycle Management:** View incoming hosting credentials, update deployment status (Pending $\rightarrow$ In Progress $\rightarrow$ Live), and notify customers.
* **Template Catalog Management:** Add, update, or remove website templates with tags, categories, pricing, and preview URLs.
* **AI & Token Management:** Monitor OpenAI API consumption, set global token usage limits, and tune vector/embeddings settings.
* **Financial Management:** Review all SSLCOMMERZ transactions, recurring payments, and order histories.
* **System Logs & Support:** Access support tickets, platform logs, and system error audits.

---

## 3. Detailed Functional Requirements

### 3.1 Authentication & User Management
* **RF-3.1.1:** Users must be able to sign up using standard credentials (Name, Email, Password).
* **RF-3.1.2:** Authentication must utilize JWT (JSON Web Tokens) for stateless authorization.
* **RF-3.1.3:** Password hashing must be enforced using `bcrypt` (minimum 10 salt rounds).
* **RF-3.1.4:** Password reset via email verification must be available.

### 3.2 Website Order & Deployment Module
* **RF-3.2.1:** Template Store: Display templates with filtering (Category, Price, Niche).
* **RF-3.2.2:** Credential Submission: Upon purchasing a template, the customer must be prompted with a secure form to input:
  * Domain Name
  * Hosting Provider / IP
  * cPanel / Server Credentials (User/Password/SSH)
  * Special Deployment Instructions
* **RF-3.2.3:** Order Status Tracking: Display progress status (`PENDING_CREDENTIALS`, `IN_DEVELOPMENT`, `TESTING`, `LIVE`).

### 3.3 AI Knowledge Base & Web Crawler Engine
* **RF-3.3.1:** Website Crawling: Customers enter their website URL. The system recursively scrapes textual content (product details, terms, FAQs, pages) and stores it in the `KnowledgeBase` table.
* **RF-3.3.2:** Manual Knowledge Input: Customers can add custom text entries, FAQs, or business rules directly into the dashboard.
* **RF-3.3.3:** AI Customization: Allow customers to set:
  * System Prompt / Tone (e.g., Professional, Friendly, Sales-Oriented)
  * Default Welcome Message
  * Fallback Escalation Behavior (when AI doesn't know the answer)

### 3.4 Multi-Channel Communication
* **RF-3.4.1 (WhatsApp):** Webhook-based integration to receive customer messages and route them through the AI engine before sending a response.
* **RF-3.4.2 (Messenger):** Facebook Graph API integration for real-time automated messaging.
* **RF-3.4.3 (Website Widget):** An embeddable JS widget for live website chat functionality.

### 3.5 Payment Gateway (SSLCOMMERZ)
* **RF-3.5.1:** One-time payment processing for Website Templates.
* **RF-3.5.2:** Recurring monthly subscription billing for AI Chatbot SaaS.
* **RF-3.5.3:** Handle IPN (Instant Payment Notification) webhooks from SSLCOMMERZ to verify transaction status safely on the backend.

---

## 4. System Architecture & Tech Stack

### 4.1 Frontend Layer
* **Framework:** React with TypeScript (powered by Vite)
* **State Management:** Redux Toolkit (UI State) + RTK Query (Server State & Caching)
* **Routing:** React Router v6+
* **Styling & Components:** Tailwind CSS, `shadcn/ui`
* **Form Validation:** React Hook Form + Zod

### 4.2 Backend Layer
* **Runtime & Framework:** Node.js, Express.js (TypeScript)
* **Architecture:** Layered Architecture (`Route` $\rightarrow$ `Controller` $\rightarrow$ `Service` $\rightarrow$ `Repository` $\rightarrow$ `Prisma`)
* **ORM & Database:** Prisma ORM with PostgreSQL
* **Task Scheduling & Process Management:** PM2 on VPS

### 4.3 Third-Party Integrations
* **AI:** OpenAI API (GPT Models, Embeddings/RAG for Knowledge Base)
* **Payments:** SSLCOMMERZ (Local Bangladeshi Payment Gateway)
* **Media Storage:** Cloudinary (Template images, assets, user avatars)
* **Email:** Nodemailer (SMTP transactional emails)

---

## 5. Non-Functional Requirements

### 5.1 Security
* All sensitive data in transit must use HTTPS / TLS encryption.
* Sensitive host credentials submitted by users must be encrypted at rest in the database.
* Protection against OWASP Top 10 vulnerabilities (SQL Injection via Prisma, XSS protection, CORS configuration, Rate limiting).

### 5.2 Performance & Uptime
* Backend server processes managed by PM2 to ensure auto-restart on crashes.
* API response times for non-AI routes should be under $200\text{ ms}$.
* AI stream response latency should start within $1.5\text{ seconds}$.

### 5.3 Scalability
* Database schema normalized up to 3NF to handle growing conversation logs.
* Modular folder architecture allowing backend services to be separated into microservices in future iterations.

---

## 6. Assumptions & Dependencies
* Customers own or will purchase their own domain name and hosting infrastructure.
* Users have access to valid SSLCOMMERZ merchant credentials (or Sandbox mode during development).
* WhatsApp Business API access and Meta Developer Accounts are active for channel integrations.