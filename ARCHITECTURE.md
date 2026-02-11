# 📐 ARCHITECTURE.md

## Angular 21 Enterprise Boilerplate Architecture Guide

---

# 📘 Table of Contents

1. Architecture Overview
2. Design Principles
3. Application Layering
4. Domain Driven Design (DDD) Implementation
5. Signal-First State Management
6. Data Communication Flow
7. Infrastructure Layer (Core)
8. Design System Architecture
9. Security & Authorization Architecture
10. Error Handling & Observability
11. Performance & Scalability Strategy
12. Mock API Development Architecture
13. Dependency Rules
14. Feature Development Workflow
15. Scalability & Future Evolution
16. Architectural Decisions Summary

---

# 1️⃣ Architecture Overview

This project follows a **Domain Driven Clean Architecture** using Angular 21 modern features.

It is designed to support:

* Enterprise SaaS applications
* Multi-domain systems
* Large team collaboration
* Long-term maintainability
* Microfrontend migration readiness

---

### 🧠 High Level Architecture

```
UI Layer
   ↓
Domain Store (Signals)
   ↓
Repository Layer
   ↓
HTTP Service
   ↓
Interceptor Pipeline
   ↓
Backend API / MSW
```

---

This ensures strict separation between:

* UI
* Business Logic
* Infrastructure
* API Communication

---

# 2️⃣ Design Principles

---

## ✔ Separation of Concerns

Each layer owns a specific responsibility.

---

## ✔ Domain Ownership

Every business feature is isolated inside its domain.

---

## ✔ Infrastructure Independence

Core infrastructure never depends on domain logic.

---

## ✔ Signal-First Reactivity

State is managed using Angular signals instead of traditional RxJS store patterns.

---

## ✔ Scalability by Design

The structure supports:

* Feature versioning
* Microfrontend extraction
* Monorepo scaling

---

# 3️⃣ Application Layering

---

## 🟢 App Shell Layer

Responsible for:

* Bootstrapping application
* Routing composition
* Provider composition
* Application configuration

```
app-shell/
```

---

## 🟢 Core Layer (Infrastructure)

Contains cross-cutting services:

```
core/
```

Examples:

* HTTP client abstraction
* Interceptors
* Logging
* Caching
* Performance monitoring
* Global loading state

---

## 🟢 Design System Layer

Reusable UI & UX infrastructure:

```
design-system/
```

Includes:

* Theming engine
* Toast notifications
* Skeleton loading
* UI directives

---

## 🟢 Domain Layer

Contains all business features:

```
domains/
```

Each domain owns:

* API contracts
* Business models
* Repository logic
* State management
* UI components

---

## 🟢 Layout Layer

Defines application shell structure:

```
layout/
```

Examples:

* Header
* Sidebar
* Navigation
* Toast mounting

---

---

# 4️⃣ Domain Driven Design (DDD) Implementation

Each domain follows a standard blueprint.

---

### Example Domain Structure

```
domains/tasks
 ├── api
 │     ├── dtos
 │     ├── mappers
 │     └── repositories
 │
 ├── models
 ├── store
 ├── ui
 ├── providers
 └── routes
```

---

### Benefits

* Feature isolation
* Independent development
* Easier debugging
* Clear ownership

---

# 5️⃣ Signal-First State Management

---

Angular Signals are used for:

* Domain state stores
* UI state
* Theme management
* Loading tracking
* Directive reactivity

---

### Why Signals?

Signals provide:

* Simpler syntax
* Fine-grained reactivity
* Improved performance
* Reduced boilerplate

---

### Store Pattern

```
Store
  ├── signal state
  ├── computed selectors
  ├── mutation methods
```

---

# 6️⃣ Data Communication Flow

---

## 📊 End-to-End Flow

```
Smart Component
   ↓
Store
   ↓
Repository
   ↓
HttpService
   ↓
Interceptors
   ↓
API / MSW
   ↓
Mapper
   ↓
Store Update
   ↓
Dumb Component
```

---

This ensures:

* UI never talks directly to API
* Business logic stays centralized
* API changes remain isolated

---

# 7️⃣ Infrastructure Layer (Core)

---

### HttpService

Provides unified API communication.

---

### Interceptors

Pipeline handles:

```
Auth → Loading → Error → Logging
```

---

### Cache Service

Reduces repeated API calls.

---

### Logger Service

Centralized logging abstraction.

---

### Performance Service

Provides execution monitoring hooks.

---

### Loading Store

Tracks active network requests globally.

---

# 8️⃣ Design System Architecture

---

Contains reusable UI infrastructure.

---

### Theme System

Supports:

* Dark / Light modes
* Brand color switching
* CSS variable injection
* Angular Material + Tailwind integration

---

### Feedback System

Includes:

* Toast notifications
* Global error UX
* Loading skeletons

---

### UI Directives

Examples:

* Permission rendering
* Feature flag rendering
* Skeleton rendering

---

# 9️⃣ Security & Authorization Architecture

---

### Authentication Domain

Handles:

* Login workflow
* Token storage
* Refresh token pipeline

---

### Authorization System

Includes:

* Auth Guard
* Role Guard
* Permission Guard
* Feature Guard

---

### Route Security Flow

```
Route Navigation
   ↓
Guards
   ↓
Auth Store + Permission Store
   ↓
Allow / Deny Access
```

---

# 🔟 Error Handling & Observability

---

Centralized error interceptor provides:

* Error classification
* Toast notifications
* Logger integration

---

### Benefits

* Consistent user feedback
* Easier debugging
* Central failure tracking

---

# 1️⃣1️⃣ Performance & Scalability Strategy

---

### Implemented Strategies

* Repository caching
* Smart retry strategy
* Route prefetching
* Lazy store injection
* Optimistic UI updates

---

### Result

* Faster UI response
* Reduced API load
* Improved user experience

---

# 1️⃣2️⃣ Mock API Development Architecture

---

Mock Service Worker (MSW) simulates backend.

```
mock-api/
```

---

### Benefits

* Backend independent development
* Stable testing environment
* Realistic API simulation

---

# 1️⃣3️⃣ Dependency Rules

---

### Allowed Dependencies

```
domains → core
domains → design-system
design-system → core
```

---

### Forbidden Dependencies

```
core → domains ❌
core → UI ❌
```

---

These rules prevent architecture corruption.

---

# 1️⃣4️⃣ Feature Development Workflow

---

### Steps To Add New Feature

1. Create new domain folder
2. Define DTO + Mapper
3. Create repository
4. Create store
5. Create UI components
6. Register routes
7. Register providers

---

This ensures consistent feature development.

---

# 1️⃣5️⃣ Scalability & Future Evolution

---

This architecture supports:

* Multi-domain enterprise systems
* Feature versioning (`tasks/v2`)
* Microfrontend migration
* Monorepo expansion
* SSR integration
* Multi-tenant theming

---

# 1️⃣6️⃣ Architectural Decisions Summary

---

### Why Domain Driven Design?

Ensures feature isolation and ownership.

---

### Why Signal State?

Improves performance and reduces complexity.

---

### Why Repository Pattern?

Separates business logic from API layer.

---

### Why Central Interceptors?

Provides consistent infrastructure behavior.

---

### Why Design System?

Ensures UI consistency and reusability.

---

---

# 🏁 Conclusion

This architecture transforms Angular into a scalable engineering platform by enforcing:

* Clear separation of concerns
* Predictable development workflow
* Enterprise-grade infrastructure
* Future-ready scalability

It enables teams to focus on building business features rather than designing system structure repeatedly.

---

---

# 📌 Recommended Reading Order For New Developers

1. README.md
2. ARCHITECTURE.md
3. Domain Example (Tasks)
4. Core Infrastructure

---
