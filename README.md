[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Tiago-Lima/PlayWithPlaywright/playwright.yml?branch=main&style=for-the-badge)](https://github.com/Tiago-Lima/PlayWithPlaywright/actions)  [![Playwright](https://img.shields.io/badge/-playwright-%232EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)  [![Node.js](https://img.shields.io/badge/node.js-%2343853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)  
# 📘 **PlayWithPlaywright**

Projeto criado para desenvolver habilidades práticas com **Playwright**, aplicando boas práticas de **automação de testes end-to-end**, **Page Object Model (POM)**, testes paralelos, relatórios e integração com CI.

---

## 📦 **Tecnologias utilizadas**

* **Node.js**
* **TypeScript**
* **Playwright Test**
* **Page Object Model (POM)**
* **Allure Reports** 
* **GitHub Actions** 

---

# 🚀 **1. Como instalar o projeto**

### 🔧 **Pré-requisitos**

Certifique-se de ter instalado:

* **Node.js** (versão 18+ recomendada)
* **Git**
* **NPM** ou **Yarn**

---

## 📥 **Clonar o repositório**

```bash
git clone https://github.com/Tiago-Lima/PlayWithPlaywright.git
cd PlayWithPlaywright
```

---

## 📚 **Instalar as dependências**

```bash
npm install
```

---

## 🧩 **Instalar os browsers do Playwright**

```bash
npx playwright install
```

(Se quiser instalar tudo, incluindo WebKit + dependências)

```bash
npx playwright install --with-deps
```

---

# ▶️ **2. Como executar os testes**

O Playwright já vem com um runner integrado, então basta usar:

### ✔ **Executar todos os testes**

```bash
npx playwright test
```

### ✔ **Executar em modo UI (debug visual)**

```bash
npx playwright test --ui
```

### ✔ **Executar apenas um arquivo**

```bash
npx playwright test tests/home-page-tests.spec.ts
```

### ✔ **Executar com um projeto específico (chromium, firefox, webkit)**

```bash
npx playwright test --project=chromium
```

### ✔ **Executar um teste filtrado**

```bash
npx playwright test -g "Featured Items"
```

---

# 🐞 **3. Debug e troubleshooting**

### 🔍 Abrir o navegador no modo “headed”

```bash
npx playwright test --headed
```

### 🔍 Pausar a execução no meio do teste

Adicione:

```ts
await page.pause();
```

---

# 📁 **4. Estrutura do Projeto**

```
PlayWithPlaywright/
│
├── tests/               → arquivos de teste
│   └── home-page-tests.spec.ts
│
├── pages/               → Page Objects
│   └── HomePage.ts
│
├── playwright.config.ts → configurações globais
│
├── package.json         → scripts e dependências
│
└── README.md
```

O projeto usa **Page Object Model (POM)** para garantir manutenibilidade e legibilidade.

---

# 📊 **5. Relatórios**

O Playwright gera relatórios automaticamente.

### ✔ **Abrir o relatório gerado pelo PlayWright**

Após rodar os testes:

```bash
npx playwright show-report
```
### ✔ **Abrir o relatório gerado pelo Allure Reports**

```bash
npm run allure:generate
npm run allure:open
```

# 🔧 **6. Pipeline (CI/CD) – GitHub Actions**

O pipeline roda automaticamente em cada push/pull request.

### 🏃 **Para ver o pipeline funcionando**

1. Vá até **GitHub > Actions**
2. Escolha o workflow (ex: *Playwright Tests*)
3. Veja:

   * Testes rodando
   * Logs
   * Artefatos (incluindo relatório)
   * Prints/screenshots em caso de falha

### ✔ Relatórios no pipeline

O workflow salva automaticamente:

* Relatório HTML do Playwright
* Screenshots
* Videos (se habilitado)

Esses arquivos ficam disponíveis para **download em “Artifacts”**.

---

# 🧪 **7. Scripts úteis (package.json)**



```json
"scripts": {
  "test": "playwright test",
  "test:ui": "playwright test --ui",
  "codegen": "playwright codegen",

  "allure:generate": "npx allure generate ./allure-results --clean",
  "allure:open": "npx allure open",
  "allure:full": "playwright test && npx allure generate ./allure-results --clean && npx allure open"

}
```

---

# ⭐ **8. Objetivo do Projeto**

Este repositório demonstra:

* Uso do Playwright com TypeScript
* criação de testes robustos e confiáveis
* validações de UI, animações, hover, carrosséis etc.
* uso correto de Page Objects
* execução paralela e cross-browser
* execução automática no CI
* geração de relatórios profissionais


---

# 🤝 **Contribuições**

Sinta-se livre para abrir:

* Issues
* Pull Requests
* Melhorias no POM
* Novos cenários de automação


