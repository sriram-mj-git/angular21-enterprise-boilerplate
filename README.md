![Angular](https://img.shields.io/badge/Angular-21-red?logo=angular)
![Signals](https://img.shields.io/badge/State-Signals-orange)
![Standalone](https://img.shields.io/badge/Architecture-Standalone-blue)
![Zoneless](https://img.shields.io/badge/Change%20Detection-Zoneless-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?logo=tailwindcss)
![Angular Material](https://img.shields.io/badge/UI-Angular%20Material-indigo)
![MSW](https://img.shields.io/badge/API-MSW-green)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

# 📘 Angular 21 Enterprise Boilerplate

A **modern, scalable, signal-first Angular 21 architecture** built for real-world enterprise and SaaS applications.

This boilerplate provides a **production-ready foundation** using Domain Driven Design, Clean Architecture, and Angular’s latest features including standalone APIs, zoneless change detection, and signals.

---

## 🚀 Why This Boilerplate Exists

Most frontend projects slow down over time due to poor structure, tight coupling, and inconsistent architecture.

This boilerplate solves that by providing:

* Clear domain ownership
* Enterprise-grade infrastructure layer
* Signal-based reactive state management
* Scalable feature architecture
* Centralized error, loading, logging & caching systems
* Reusable design system
* Mock API development support
* Performance and scalability patterns

---

## ⭐ Key Features

### ✅ Angular 21 Modern Architecture

* Standalone components
* Zoneless change detection
* Signals-first reactive state
* Function-based guards & interceptors

---

### ✅ Domain Driven Design (DDD)

Each feature is self-contained with:

* API contracts
* Repository layer
* Store layer
* UI layer
* Providers

---

### ✅ Enterprise Infrastructure

* HTTP abstraction layer
* Interceptor pipeline
* Logging system
* Global error handling
* Loading tracking system
* Request caching
* Smart retry strategy

---

### ✅ Authentication & Authorization

* Login workflow
* Role hierarchy
* Permission guards
* Refresh token handling
* Route-level security

---

### ✅ Task CRUD (Reference Feature)

* Optimistic UI updates
* Rollback handling
* Signal forms
* Repository pattern
* DTO → Model mapping

---

### ✅ Feature Flags

* API-driven feature toggling
* Directive-based UI rendering

---

### ✅ Theme Engine

* Dark / Light mode
* Dynamic color branding
* CSS variable integration
* Angular Material + Tailwind sync

---

### ✅ Loading & Skeleton System

* Automatic request detection
* Global loading store
* Reusable skeleton directive

---

### ✅ Error Handling & UX Feedback

* Centralized HTTP error interceptor
* Error classification
* Toast notification system
* Logger integration

---

### ✅ Mock API Development

* Mock Service Worker (MSW)
* Domain-aligned API simulation
* Offline development support

---

## 🧠 Architecture Overview

```
UI → Store → Repository → HttpService → Interceptors → API/MSW → Mapper → Store → UI
```

---

## 📂 Project Structure

```
src/app
│
├── app-shell        → App bootstrap, routing & providers
├── core             → Infrastructure layer
├── design-system    → Reusable UI + theming
├── domains          → Business features (DDD)
├── layout           → App shell layout
├── mock-api         → MSW mock backend
└── shared           → Utilities & helpers
```

---

## 📦 Domain Example

```
domains/tasks
├── api
├── models
├── store
├── ui
├── providers
└── routes
```

Each domain owns its entire business logic.

---

## 🏗 Tech Stack

* Angular 21
* Angular Signals
* Angular Material
* Tailwind CSS
* SCSS architecture
* MSW (Mock Service Worker)
* RxJS
* TypeScript Strict Mode

---

## 🧪 Enterprise Capabilities

✔ Optimistic CRUD
✔ Role-based routing
✔ Feature flag rendering
✔ Centralized logging
✔ Global loading detection
✔ API caching
✔ Retry strategy
✔ Performance monitoring hooks
✔ Prefetch navigation support

---

## 🧰 Getting Started

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd <project-name>
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start Development Server

```bash
npm start
```

Application runs at:

```
http://localhost:4200
```

---

### 4️⃣ Mock API Setup

MSW is already configured.

If needed:

```bash
npx msw init public/
```

---

## 🧩 How To Add New Feature

1. Create new domain:

```
domains/reports
```

2. Follow domain structure:

* api
* models
* store
* ui
* providers

3. Register routes

4. Done ✅

---

## 🎨 Theme Customization

Themes can be modified inside:

```
design-system/theme
```

Supports:

* Brand colors
* Dark/light mode
* Multi-tenant theming

---

## 🔐 Security Features

* Auth Guards
* Role Guards
* Permission Guards
* Feature Guards
* Refresh token pipeline

---

## ⚡ Performance Features

* Request caching
* Route prefetch
* Lazy store injection
* Optimistic UI updates

---

## 🧪 Development Advantages

This boilerplate improves:

| Area               | Benefit                              |
| ------------------ | ------------------------------------ |
| Maintainability    | Clear separation of concerns         |
| Debugging          | Centralized logging & error handling |
| Scalability        | Domain-based feature isolation       |
| Team Collaboration | Clear ownership boundaries           |
| Development Speed  | Prebuilt infrastructure              |
| Reliability        | Optimistic rollback & retry strategy |

---

## 🧭 When To Use This Boilerplate

Use for:

* Enterprise dashboards
* SaaS platforms
* Admin panels
* Internal tools
* Scalable Angular platforms

---

## 📈 Future Expansion Ready

Supports:

* Feature versioning
* Microfrontend migration
* Nx monorepo integration
* SSR integration
* Multi-team development

---

## 🤝 Contribution Guidelines

1. Follow domain-driven structure
2. Avoid placing business logic inside core
3. Keep UI reusable under design-system
4. Maintain strict typing
5. Write minimal, clean, scalable code

---

## 📚 Learning Goals Covered

This project demonstrates:

* Advanced Angular architecture
* Signal-based state management
* Enterprise frontend patterns
* Production-grade infrastructure design

---

## 👨‍💻 Author Purpose

This boilerplate is designed as a reusable foundation to accelerate modern Angular enterprise application development.

---

## 📄 License

MIT License

---

## ⭐ If You Found This Useful

Consider starring ⭐ the repository to support and share with the community.

---
