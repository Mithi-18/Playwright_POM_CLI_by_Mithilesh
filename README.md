# Playwright POM CLI — Sauce Demo

A JavaScript Playwright project using Page Object Model (POM) and JSON-driven login scenarios.

## Requirements
- Node.js 18 or newer
- npm

## Setup
```bash
npm install
npx playwright install chromium
```

## Run the login suite
```bash
npm run test:login
```

## Project structure
```text
Playwright_POM_CLI_Name/
├── data/
│   └── users.json
├── pages/
│   ├── InventoryPage.js
│   └── LoginPage.js
├── tests/
│   └── login.spec.js
├── screenshots/
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

The suite contains three scenarios: a valid login, a locked-out account, and an incorrect password. Each scenario is generated from `data/users.json`.
