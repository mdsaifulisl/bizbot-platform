# Database Documentation (PostgreSQL + Prisma)
## Project: AI SaaS Platform & Website Development Business

---

## 1. Database Architecture Overview
এই প্রজেক্টে ডেটাবেস হিসেবে **PostgreSQL** এবং ORM হিসেবে **Prisma** ব্যবহার করা হচ্ছে। সিস্টেমের মূল আর্কিটেকচার রিলেশনাল মডেল অনুসরণ করে ডিজাইন করা হয়েছে, যা ইউজার, তাদের পারচেজ করা ওয়েবসাইট এবং AI সাবস্ক্রিপশনের মধ্যে নিখুঁত সংযোগ তৈরি করে।

---

## 2. Enums
Prisma ও PostgreSQL-এ ডেটার স্টেট ফিক্সড রাখার জন্য নিচের এনুমগুলো ব্যবহার করা হবে:

### Role
*   `ADMIN`: প্ল্যাটফর্মের সুপার ইউজার।
*   `CUSTOMER`: সাধারণ ক্লায়েন্ট।

### OrderStatus
*   `PENDING`: অর্ডার করা হয়েছে কিন্তু cPanel ডিটেইলস দেওয়া হয়নি।
*   `IN_PROGRESS`: cPanel সাবমিট করা হয়েছে এবং ডেপ্লোয়মেন্টের কাজ চলছে।
*   `LIVE`: ওয়েবসাইট পুরোপুরি লাইভ।

### SubscriptionStatus
*   `ACTIVE`: সাবস্ক্রিপশন চালু আছে এবং বিলিং সফল।
*   `EXPIRED`: মেয়াদ শেষ, AI রেসপন্স ব্লকড।
*   `CANCELED`: ইউজার সাবস্ক্রিপশন ক্যানসেল করেছে।

### PaymentStatus
*   `PENDING`: পেমেন্ট ইনিশিয়েট হয়েছে।
*   `SUCCESS`: SSLCOMMERZ থেকে পেমেন্ট ভেরিফাইড।
*   `FAILED`: পেমেন্ট ফেইল্ড বা ক্যানসেলড।

---

## 3. Core Tables & Schemas

### 3.1 Users Table
সিস্টেমের সকল ইউজার এবং এডমিনের লগইন ক্রেডেন্সিয়াল ও রোল সেভ থাকবে।

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | ইউনিক ইউজার আইডি |
| `name` | String | Not Null | ইউজারের নাম |
| `email` | String | Unique, Not Null | লগইন ইমেইল |
| `password` | String | Not Null | Bcrypt দ্বারা হ্যাশ করা পাসওয়ার্ড |
| `role` | Enum (Role) | Default: `CUSTOMER` | ইউজারের রোল (ADMIN/CUSTOMER) |
| `createdAt` | DateTime | Default: `now()` | একাউন্ট তৈরির সময় |
| `updatedAt` | DateTime | UpdatedAt | প্রোফাইল আপডেটের সময় |

---

### 3.2 WebsiteTemplates Table
এডমিনের আপলোড করা রেডিমেড ওয়েবসাইট টেমপ্লেটের কালেকশন।

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | টেমপ্লেট আইডি |
| `title` | String | Not Null | টেমপ্লেটের নাম |
| `description` | String | Not Null | টেমপ্লেটের বিবরণ |
| `price` | Decimal | Not Null | টেমপ্লেটের মূল্য (BDT) |
| `demoUrl` | String | Nullable | লাইভ ডেমো লিংক |
| `imageUrl` | String | Not Null | ক্লাউডিনারি ইমেজ লিংক |
| `createdAt` | DateTime | Default: `now()` | যোগ করার সময় |

---

### 3.3 WebsiteOrders Table
কাস্টমারের কেনা ওয়েবসাইট এবং তাদের সাবমিট করা cPanel ক্রেডেন্সিয়াল ট্র্যাকিং।

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | অর্ডার আইডি |
| `userId` | String (UUID) | Foreign Key (Users) | কোন ইউজার অর্ডার করেছে |
| `templateId` | String (UUID) | Foreign Key (Templates) | কোন টেমপ্লেটটি কিনেছে |
| `domainName` | String | Nullable | কাস্টমারের ডোমেন নাম |
| `hostingInfo` | String | Nullable | হোস্টিং প্রোভাইডারের নাম |
| `cPanelUrl` | String | Nullable | cPanel লগইন লিংক |
| `cPanelUser` | String | Nullable | cPanel ইউজারনেম |
| `cPanelPass` | String | Nullable | cPanel পাসওয়ার্ড (Encrypted) |
| `status` | Enum (OrderStatus)| Default: `PENDING` | ডেপ্লোয়মেন্টের বর্তমান অবস্থা |
| `createdAt` | DateTime | Default: `now()` | অর্ডার তৈরির সময় |

---

### 3.4 Businesses Table
AI SaaS ব্যবহার করার জন্য কাস্টমারের রেজিস্ট্রিকৃত কোম্পানি বা ওয়েবসাইট প্রোফাইল।

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | বিজনেস আইডি |
| `userId` | String (UUID) | Foreign Key (Users) | বিজনেসের মালিক (কাস্টমার) |
| `name` | String | Not Null | কোম্পানির নাম |
| `websiteUrl` | String | Unique, Not Null | চ্যাটবট যে ওয়েবসাইট ক্রল করবে |
| `createdAt` | DateTime | Default: `now()` | রেজিস্ট্রি করার সময় |

---

### 3.5 Subscriptions Table
AI SaaS চ্যাটবটের মাসিক মেম্বারশিপ এবং বিলিং সাইকেল ট্র্যাকার।

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | সাবস্ক্রিপশন আইডি |
| `businessId` | String (UUID) | Foreign Key (Businesses) | কোন বিজনেসের সাবস্ক্রিপশন |
| `userId` | String (UUID) | Foreign Key (Users) | কোন ইউজার পে করছে |
| `status` | Enum (SubStatus) | Default: `ACTIVE` | সাবস্ক্রিপশনের বর্তমান অবস্থা |
| `startDate` | DateTime | Default: `now()` | সাবস্ক্রিপশন শুরুর তারিখ |
| `endDate` | DateTime | Not Null | মেয়াদ শেষের তারিখ (Current + 30 Days) |

---

### 3.6 KnowledgeBase Table
ওয়েবসাইট ক্রল করে নিয়ে আসা টেক্সট, FAQ এবং প্রোডাক্ট ডেটা যা AI রেসপন্সের সোর্স হিসেবে কাজ করবে।

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | নলেজ বেস আইডি |
| `businessId` | String (UUID) | Foreign Key (Businesses) | কোন বিজনেসের ডাটা |
| `sourceUrl` | String | Not Null | স্পেসিফিক পেজের URL যা ক্রল করা হয়েছে |
| `rawContent` | String (Text) | Not Null | স্ক্র্যাপ করা মূল টেক্সট কনটেন্ট |
| `createdAt` | DateTime | Default: `now()` | ক্রল করার সময় |

---

### 3.7 AIConfig Table
চ্যাটবটের পার্সোনালিটি এবং অটো-রিপ্লাই সেটিংস।

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | কনফিগ আইডি |
| `businessId` | String (UUID) | Unique, Foreign Key | কোন বিজনেসের চ্যাটবট এটি |
| `systemPrompt` | String (Text) | Not Null | OpenAI-কে দেওয়া চ্যাটবটের ডিরেক্টিভ |
| `welcomeMessage`| String | Default: `Hello!` | চ্যাটবটের প্রথম স্বাগতম বার্তা |
| `aiPersonality` | String | Default: `Professional` | চ্যাটবটের আচরণ/টোন |

---

### 3.8 ChannelAccounts Table (WhatsApp & Messenger)
মেটা ক্লাউড এপিআই এবং ফেসবুক পেজ কানেকশনের ক্রেডেন্সিয়াল।

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | চ্যানেল আইডি |
| `businessId` | String (UUID) | Foreign Key (Businesses) | কোন বিজনেসের সাথে যুক্ত |
| `platform` | String | Not Null | `WHATSAPP` অথবা `MESSENGER` |
| `pageOrPhoneId` | String | Unique, Not Null | ফেসবুক পেজ আইডি বা হোয়াটসঅ্যাপ ফোন আইডি |
| `accessToken` | String (Text) | Not Null | মেটা পার্মানেন্ট এক্সেস টোকেন |
| `isActive` | Boolean | Default: `true` | চ্যানেলটি সচল আছে কি না |

---

### 3.9 Conversations & Messages Table
গ্রাহকদের সাথে AI চ্যাটবটের হওয়া কথোপকথন এবং চ্যাট হিস্ট্রি।

#### Conversations
| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | কনভারসেশন আইডি |
| `businessId` | String (UUID) | Foreign Key (Businesses) | কোন বিজনেসের কনভারসেশন |
| `customerPlatformId` | String | Not Null | গ্রাহকের হোয়াটসঅ্যাপ নম্বর বা মেসেঞ্জার পিএসআইডি |
| `platform` | String | Not Null | `WHATSAPP` / `MESSENGER` |
| `updatedAt` | DateTime | UpdatedAt | শেষ মেসেজ আসার সময় |

#### Messages
| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | মেসেজ আইডি |
| `conversationId` | String (UUID) | Foreign Key (Conversations) | কোন চ্যাটের অংশ |
| `sender` | String | Not Null | `USER` (গ্রাহক) অথবা `BOT` (AI) |
| `text` | String (Text) | Not Null | মেসেজের বডি বা টেক্সট |
| `createdAt` | DateTime | Default: `now()` | মেসেজ পাঠানোর সময় |

---

### 3.10 Payments Table
SSLCOMMERZ-এর মাধ্যমে হওয়া সমস্ত ওয়ান-টাইম (Template) এবং সাবস্ক্রিপশন ট্রানজেকশন হিস্ট্রি।

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String (UUID) | Primary Key | পেমেন্ট আইডি |
| `userId` | String (UUID) | Foreign Key (Users) | কোন ইউজার পে করেছে |
| `tranId` | String | Unique, Not Null | SSLCOMMERZ ইউনিক ট্রানজেকশন আইডি |
| `amount` | Decimal | Not Null | টাকার পরিমাণ (BDT) |
| `purpose` | String | Not Null | `WEBSITE_PURCHASE` বা `AI_SUBSCRIPTION` |
| `status` | Enum (PaymentStatus)| Default: `PENDING` | পেমেন্টের অবস্থা |
| `createdAt` | DateTime | Default: `now()` | ট্রানজেকশনের সময় |