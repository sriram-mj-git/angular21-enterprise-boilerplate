# 🤝 Contributing Guide

Thank you for your interest in contributing to the **Angular 21 Enterprise Boilerplate**.
This project follows strict architectural and coding standards to ensure scalability, maintainability, and production readiness.

Please read this document carefully before submitting contributions.

---

# 📌 Table of Contents

* Code of Conduct
* Contribution Types
* Project Architecture Rules
* Development Setup
* Branching Strategy
* Coding Standards
* Folder Structure Guidelines
* Adding New Features
* Writing Commits
* Pull Request Process
* Testing Guidelines
* Reporting Bugs
* Suggesting Enhancements
* Review Expectations

---

# 📜 Code of Conduct

Contributors are expected to:

* Be respectful and constructive
* Follow architectural guidelines
* Write clean, readable, and maintainable code
* Provide meaningful commit messages
* Follow the established folder structure

---

# 🧩 Contribution Types

You may contribute in the following areas:

* Bug fixes
* Feature enhancements
* Performance improvements
* Documentation improvements
* Test coverage improvements
* Developer experience improvements

---

# 🏗 Project Architecture Rules

This project follows **Domain Driven Design + Clean Architecture**.

## 🔹 Layer Responsibilities

### `domains/`

Contains business features.

* UI
* Store
* Repository
* Models
* Providers

---

### `core/`

Contains infrastructure only.

* HTTP service
* Interceptors
* Logging
* Caching
* Performance utilities

⚠ Never place business logic here.

---

### `design-system/`

Contains reusable UI and theming.

* UI components
* Directives
* Theme engine
* Toast & skeleton system

---

### `app-shell/`

Contains application wiring.

* Routing
* Provider composition
* Bootstrapping logic

---

### `layout/`

Contains shell UI like header, sidebar, footer.

---

### `mock-api/`

Contains MSW mock backend handlers.

---

### `shared/`

Contains utility helpers and pipes only.

---

# 🚫 Forbidden Architecture Violations

Do NOT:

* Access domain logic from `core`
* Put business logic inside UI components
* Mix domain logic across domains
* Create global shared service for domain data
* Bypass repository layer for HTTP calls

---

# 🧰 Development Setup

### Clone Repository

```bash
git clone <repo-url>
cd project-name
```

---

### Install Dependencies

```bash
npm install
```

---

### Run Application

```bash
npm start
```

---

### Run Tests

```bash
npm test
```

---

# 🌿 Branching Strategy

We follow a simple feature-based workflow.

### Branch Naming

```
feature/<feature-name>
fix/<bug-name>
refactor/<area>
docs/<documentation-topic>
```

---

### Example

```
feature/task-filter
fix/login-refresh-token
refactor/theme-engine
```

---

# ✍ Coding Standards

### TypeScript

* Use strict typing
* Avoid `any`
* Prefer `readonly` where possible
* Use DTO → Model mapping

---

### Angular

* Use standalone components
* Use signals for state
* Use function-based guards & interceptors
* Avoid unnecessary RxJS Subjects when signals suffice

---

### Component Guidelines

Follow Smart/Dumb pattern:

#### Smart Components

* Domain pages
* Handle state & business logic

#### Dumb Components

* UI only
* Use inputs/models
* No domain logic

---

### Store Guidelines

* Use signals
* Keep store focused on state
* Avoid HTTP calls directly in UI

---

### Repository Guidelines

* All API calls go through repositories
* Handle mapping here
* Handle caching here

---

### Styling Guidelines

* Use Tailwind + SCSS structure
* Follow design-system tokens
* Avoid inline styles

---

# 📂 Folder Structure Rules

When adding new feature domain:

```
domains/<feature>
 ├── api
 ├── models
 ├── store
 ├── ui
 ├── providers
 └── routes
```

---

# ➕ Adding New Features

### Step 1 — Create Domain

```
domains/reports
```

---

### Step 2 — Add Structure

* api
* models
* store
* ui
* providers

---

### Step 3 — Register Routes

---

### Step 4 — Add Providers

---

# 📝 Commit Message Guidelines

Follow conventional commits.

### Format

```
type(scope): description
```

---

### Examples

```
feat(tasks): add optimistic task update
fix(auth): handle refresh token failure
refactor(core): improve cache strategy
docs(readme): update architecture overview
```

---

### Commit Types

* feat
* fix
* refactor
* docs
* test
* chore

---

# 🔀 Pull Request Process

### Before Submitting PR

✔ Code compiles
✔ Tests pass
✔ Follows folder structure
✔ No architecture violations
✔ Includes meaningful commit messages

---

### PR Description Must Include

* Purpose
* Summary of changes
* Screenshots (if UI)
* Testing notes

---

# 🧪 Testing Guidelines

Contributors should:

* Write unit tests for store logic
* Write component tests for UI behavior
* Ensure MSW handlers updated if API changes
* Maintain coverage for critical logic

---

# 🐞 Reporting Bugs

Please include:

* Expected behavior
* Actual behavior
* Steps to reproduce
* Browser / environment details
* Screenshots if applicable

---

# 💡 Suggesting Enhancements

When suggesting new features:

* Explain business use case
* Explain architectural impact
* Provide implementation suggestions if possible

---

# 👀 Review Expectations

All contributions will be reviewed for:

* Code quality
* Architecture compliance
* Performance impact
* Scalability compatibility
* Documentation completeness

---

# ⚡ Performance & Scalability Expectations

Contributions should:

* Avoid unnecessary re-renders
* Use signals properly
* Follow lazy loading patterns
* Avoid global state misuse

---

# 🧭 Development Philosophy

This boilerplate promotes:

* Clean separation of concerns
* Predictable data flow
* Domain ownership
* Reusability
* Long-term maintainability

---

# ❤️ Thank You

Your contribution helps improve a scalable Angular architecture that benefits developers and teams building enterprise applications.

---

If you have questions, feel free to open a discussion or issue.

---

## ⭐ Support

If you find this project helpful, please consider starring the repository.

---
