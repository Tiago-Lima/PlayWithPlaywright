[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Tiago-Lima/PlayWithPlaywright/playwright.yml?branch=main\&style=for-the-badge)](https://github.com/Tiago-Lima/PlayWithPlaywright/actions)
[![Playwright](https://img.shields.io/badge/-playwright-%232EAD33?style=for-the-badge\&logo=playwright\&logoColor=white)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/node.js-%2343853D?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)

# 📘 PlayWithPlaywright

Project created to develop practical skills with **Playwright**, applying best practices for **end-to-end test automation**, **Page Object Model (POM)**, parallel test execution, reporting, and CI integration.

---

## 📦 Technologies Used

* **Node.js**
* **TypeScript**
* **Playwright Test**
* **Page Object Model (POM)**
* **Allure Reports**
* **GitHub Actions**

---

## 🚀 1. How to Install the Project

### 🔧 Prerequisites

Make sure you have installed:

* **Node.js** (version 18+ recommended)
* **Git**
* **NPM** or **Yarn**

---

## 📥 Clone the Repository

```bash
git clone https://github.com/Tiago-Lima/PlayWithPlaywright.git
cd PlayWithPlaywright
```

---

## 📚 Install Dependencies

```bash
npm install
```

---

## 🧩 Install Playwright Browsers

```bash
npx playwright install
```

To install all browsers including WebKit and system dependencies:

```bash
npx playwright install --with-deps
```

---

## ▶️ 2. How to Run the Tests

Playwright includes a built-in test runner.

### ✔ Run all tests

```bash
npx playwright test
```

### ✔ Run in UI mode (visual debug)

```bash
npx playwright test --ui
```

### ✔ Run a single test file

```bash
npx playwright test tests/home-page-tests.spec.ts
```

### ✔ Run with a specific browser project

```bash
npx playwright test --project=chromium
```

### ✔ Run a filtered test

```bash
npx playwright test -g "Featured Items"
```

---

## 🐞 3. Debug and Troubleshooting

### 🔍 Run tests in headed mode

```bash
npx playwright test --headed
```

### 🔍 Pause execution during a test

Add the following line in your test:

```ts
await page.pause();
```

---

## 📁 4. Project Structure

```
PlayWithPlaywright/
│
├── tests/               → test files
│   └── home-page-tests.spec.ts
│
├── pages/               → Page Objects
│   └── HomePage.ts
│
├── playwright.config.ts → global configuration
│
├── package.json         → scripts and dependencies
│
└── README.md
```

This project uses **Page Object Model (POM)** to ensure maintainability and readability.

---

## 📊 5. Reports

Playwright automatically generates reports.

### Copy test history before generating Allure reports

Before generating Allure Reports, run:

```bash
npm run copy:history
```

### ✔ Open Playwright HTML report

```bash
npx playwright show-report
```

### ✔ Open Allure report

```bash
npm run allure:generate
npm run allure:open
```

---

## 🔧 6. CI/CD Pipeline – GitHub Actions

The pipeline runs automatically on every push or pull request.

### 🏃 How to view the pipeline execution

1. Go to **GitHub > Actions**
2. Select the workflow (e.g. *Playwright Tests*)
3. Check:

   * Test execution
   * Logs
   * Artifacts (reports, screenshots)
   * Screenshots on failure

### ✔ Pipeline reports

The workflow automatically stores:

* Playwright HTML Report
* Screenshots
* Videos (if enabled)

All files are available for download under **Artifacts**.

---

## 🧪 7. Useful Scripts (package.json)

```json
{
  "scripts": {
    "test": "playwright test",
    "test:ui": "playwright test --ui",
    "codegen": "playwright codegen",
    "copy:history": "node copy-history.js",
    "allure:generate": "npx allure generate ./allure-results --clean",
    "allure:open": "npx allure open"
  }
}
```

---

## ⭐ 8. Project Goal

This repository demonstrates:

* Playwright with TypeScript
* Robust and reliable test creation
* UI validations (animations, hover, carousels, etc.)
* Proper use of Page Objects
* Parallel and cross-browser execution
* Automatic CI execution
* Professional reporting

---

## 🤝 Contributions

Feel free to open:

* Issues
* Pull Requests
* POM improvements
* New automation scenarios
