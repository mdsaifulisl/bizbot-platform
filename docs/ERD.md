# Entity Relationship Diagram (ERD)
## Relational Mapping Documentation

নিচের ডায়াগ্রামটি প্ল্যাটফর্মের টেবিলগুলোর মধ্যকার 1:1 এবং 1:N (One-to-Many) রিলেশনশিপ নির্দেশ করে।

```mermaid
erDiagram
    USER ||--o{ BUSINESS : "owns"
    USER ||--o{ WEBSITE_ORDER : "places"
    USER ||--o{ PAYMENT : "makes"
    USER ||--o{ SUBSCRIPTION : "pays"
    
    WEBSITE_TEMPLATE ||--o{ WEBSITE_ORDER : "ordered_in"
    
    BUSINESS ||--|| AI_CONFIG : "configured_by"
    BUSINESS ||--o{ KNOWLEDGE_BASE : "contains"
    BUSINESS ||--o{ CHANNEL_ACCOUNT : "integrates"
    BUSINESS ||--o{ CONVERSATION : "logs"
    BUSINESS ||--|| SUBSCRIPTION : "subscribed_under"
    
    CONVERSATION ||--o{ MESSAGE : "includes"

    USER {
        string id PK
        string name
        string email UK
        string password
        enum role
    }

    BUSINESS {
        string id PK
        string userId FK
        string name
        string websiteUrl UK
    }

    WEBSITE_TEMPLATE {
        string id PK
        string title
        decimal price
        string imageUrl
    }

    WEBSITE_ORDER {
        string id PK
        string userId FK
        string templateId FK
        string domainName
        string cPanelPass
        enum status
    }

    SUBSCRIPTION {
        string id PK
        string businessId FK
        string userId FK
        enum status
        datetime endDate
    }

    KNOWLEDGE_BASE {
        string id PK
        string businessId FK
        string sourceUrl
        text rawContent
    }

    AI_CONFIG {
        string id PK
        string businessId FK
        text systemPrompt
        string welcomeMessage
    }

    CHANNEL_ACCOUNT {
        string id PK
        string businessId FK
        string platform
        string pageOrPhoneId UK
        text accessToken
    }

    CONVERSATION {
        string id PK
        string businessId FK
        string customerPlatformId
        string platform
    }

    MESSAGE {
        string id PK
        string conversationId FK
        string sender
        text text
    }

    PAYMENT {
        string id PK
        string userId FK
        string tranId UK
        decimal amount
        string purpose
        enum status
    }