# Student Management UI

Modern Student Management System built using:

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* Playwright
* FastAPI Integration

---

# Features

* Authentication Login Page
* Dashboard UI
* Student Management
* Courses Management
* Attendance Tracking
* Profile & Settings
* Responsive Modern Design
* End-to-End UI Testing with Playwright

---

# Tech Stack

## Frontend

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui

## Testing

* Playwright

## Backend

* FastAPI

---

# Project Setup

## 1. Clone Repository

```bash
git clone https://github.com/rohit28900/student_managment_ui.git
```

## 2. Navigate to Project

```bash
cd student_managment_ui
```

---

# Install Dependencies

```bash
npm install
```

---

# Run Project Locally

Start development server:

```bash
npm run dev
```

Application runs on:

```txt
http://localhost:3000
```

---

# Backend Requirement

Make sure FastAPI backend is running on:

```txt
http://localhost:8001
```

Example FastAPI run command:

```bash
uvicorn app.main:app --reload --port 8001
```

---

# Environment Setup

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:8001
```

---

# Playwright Setup

Install Playwright browsers:

```bash
npx playwright install
```

---

# Run Playwright Tests

Run all tests:

```bash
npx playwright test
```

Run specific test:

```bash
npx playwright test tests/login.spec.ts
```

Run Playwright in UI mode:

```bash
npx playwright test --ui
```

---

# Playwright Reports

Open HTML report:

```bash
npx playwright show-report
```

---

# Folder Structure

```bash
student-management-ui/
│
├── app/
├── components/
├── services/
├── tests/
│   ├── auth/
│   ├── dashboard/
│   ├── students/
│   └── pages/
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# Available Pages

* `/login`
* `/dashboard`
* `/students`
* `/courses`
* `/attendance`
* `/profile`
* `/settings`

---

# Playwright Topics Covered

* First Script
* Locators
* Assertions
* Waits
* Forms & Actions
* Page Object Model (POM)
* Fixtures
* Reports
* UI Mode Testing

---

# Useful Commands

## Start Development Server

```bash
npm run dev
```

## Build Production App

```bash
npm run build
```

## Run Playwright Tests

```bash
npx playwright test
```

## Open Playwright UI

```bash
npx playwright test --ui
```

## Open Playwright Report

```bash
npx playwright show-report
```

---

# Author

Rohit Singh
