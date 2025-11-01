# Plano de Testes - Automation Exercise

## Visão Geral da Aplicação
O site Automation Exercise é uma aplicação web para prática de automação de testes, oferecendo diversos cenários de teste para usuários praticarem suas habilidades em automação.

## Cenários de Teste

### 1. Registro de Usuário
**Objetivo:** Verificar o fluxo de registro de um novo usuário no site.

**Passos:**
1. Navegar para a página inicial
2. Clicar em 'Signup / Login'
3. Verificar se 'New User Signup!' está visível
4. Inserir nome e email
5. Clicar em botão 'Signup'
6. Verificar se 'ENTER ACCOUNT INFORMATION' está visível
7. Preencher detalhes:
   - Title
   - Password
   - Data de nascimento
   - Newsletter
   - Ofertas especiais
8. Preencher informações adicionais:
   - Primeiro nome
   - Último nome
   - Empresa
   - Endereço
   - País
   - Estado
   - Cidade
   - CEP
   - Telefone
9. Clicar em 'Create Account'
10. Verificar se 'ACCOUNT CREATED!' está visível
11. Clicar em 'Continue'
12. Verificar se 'Logged in as username' está visível
13. Clicar em 'Delete Account'
14. Verificar se 'ACCOUNT DELETED!' está visível

### 2. Login com Email e Senha Corretos
**Objetivo:** Verificar o processo de login com credenciais válidas.

**Passos:**
1. Navegar para a página inicial
2. Clicar em 'Signup / Login'
3. Verificar se 'Login to your account' está visível
4. Inserir email e senha corretos
5. Clicar em botão 'Login'
6. Verificar se 'Logged in as username' está visível
7. Clicar em 'Delete Account'
8. Verificar se 'ACCOUNT DELETED!' está visível

### 3. Login com Email e Senha Incorretos
**Objetivo:** Verificar o comportamento do sistema com credenciais inválidas.

**Passos:**
1. Navegar para a página inicial
2. Clicar em 'Signup / Login'
3. Verificar se 'Login to your account' está visível
4. Inserir email e senha incorretos
5. Clicar em botão 'Login'
6. Verificar se mensagem 'Your email or password is incorrect!' está visível

### 4. Logout de Usuário
**Objetivo:** Verificar o processo de logout do usuário.

**Passos:**
1. Navegar para a página inicial
2. Clicar em 'Signup / Login'
3. Verificar se 'Login to your account' está visível
4. Inserir email e senha corretos
5. Clicar em botão 'Login'
6. Verificar se 'Logged in as username' está visível
7. Clicar em 'Logout'
8. Verificar se usuário é redirecionado para a página de login

### 5. Registro com Email Existente
**Objetivo:** Verificar o comportamento ao tentar registrar com email já cadastrado.

**Passos:**
1. Navegar para a página inicial
2. Clicar em 'Signup / Login'
3. Verificar se 'New User Signup!' está visível
4. Inserir nome e email já existente
5. Clicar em botão 'Signup'
6. Verificar se mensagem 'Email Address already exist!' está visível

### 6. Formulário de Contato
**Objetivo:** Verificar a funcionalidade do formulário de contato.

**Passos:**
1. Navegar para a página inicial
2. Clicar em 'Contact Us'
3. Verificar se 'GET IN TOUCH' está visível
4. Inserir nome, email, assunto e mensagem
5. Fazer upload de arquivo
6. Clicar em 'Submit'
7. Clicar 'OK' no popup
8. Verificar se 'Success! Your details have been submitted successfully.' está visível
9. Clicar em 'Home'
10. Verificar se usuário está na página inicial

### 7. Verificar Página de Casos de Teste
**Objetivo:** Verificar se a página de casos de teste está acessível.

**Passos:**
1. Navegar para a página inicial
2. Clicar em 'Test Cases'
3. Verificar se usuário é navegado para a página de casos de teste
4. Verificar se a página de casos de teste está visível

### 8. Verificar Produtos e Página de Detalhes
**Objetivo:** Verificar a listagem de produtos e suas páginas de detalhes.

**Passos:**
1. Navegar para a página inicial
2. Clicar em 'Products'
3. Verificar se usuário está na página ALL PRODUCTS
4. Verificar se a lista de produtos está visível
5. Clicar em 'View Product' do primeiro produto
6. Verificar se usuário está na página de detalhes
7. Verificar se os detalhes estão visíveis:
   - Nome
   - Categoria
   - Preço
   - Disponibilidade
   - Condição
   - Marca

### 9. Busca de Produtos
**Objetivo:** Verificar a funcionalidade de busca de produtos.

**Passos:**
1. Navegar para a página inicial
2. Clicar em 'Products'
3. Verificar se usuário está na página ALL PRODUCTS
4. Inserir nome do produto no campo de busca
5. Clicar em botão 'Search'
6. Verificar se 'SEARCHED PRODUCTS' está visível
7. Verificar se todos os produtos relacionados à busca são visíveis

### 10. Verificar Inscrição na Newsletter na Página Inicial
**Objetivo:** Verificar a funcionalidade de inscrição na newsletter.

**Passos:**
1. Navegar para a página inicial
2. Verificar se 'SUBSCRIPTION' está visível
3. Inserir email no campo de inscrição
4. Clicar no botão de seta
5. Verificar se mensagem de sucesso 'You have been successfully subscribed!' está visível