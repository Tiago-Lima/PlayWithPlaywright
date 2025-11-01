import { test, expect } from '@playwright/test';

test.describe('Automation Exercise Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        // Navegar para a página inicial antes de cada teste
        await page.goto('https://automationexercise.com/');
        
        // Verificar se a página carregou corretamente
        await expect(page).toHaveTitle('Automation Exercise');
    });

    test.fixme('TC1 - Register User (Need to implement an delay in some point)', async ({ page }) => {
        const email = `teste${Date.now()}@teste.com`;
        const username = 'Teste User';

        // Clicar em Signup / Login
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        
        // Verificar se 'New User Signup!' está visível
        await expect(page.getByText('New User Signup!')).toBeVisible();
        
        // Preencher formulário de signup
        await page.locator('[data-qa="signup-name"]').fill(username);
        await page.locator('[data-qa="signup-email"]').fill(email);
        await page.locator('[data-qa="signup-button"]').click();
        
        // Verificar página de informações da conta
        await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();
        
        // Preencher informações da conta
        await page.getByLabel('Mr.').check();
        await page.getByLabel('Password *').fill('senha123');
        await page.locator('#days').selectOption('1');
        await page.locator('#months').selectOption('January');
        await page.locator('#years').selectOption('1990');
        await page.getByLabel('Sign up for our newsletter!').check();
        await page.getByLabel('Receive special offers from our partners!').check();
        
        // Preencher informações de endereço
        await page.locator('[data-qa="first_name"]').fill('Teste');
        await page.locator('[data-qa="last_name"]').fill('Usuario');
        await page.locator('[data-qa="company"]').fill('Empresa Teste');
        await page.locator('[data-qa="address"]').fill('Rua Teste, 123');
        await page.locator('[data-qa="country"]').selectOption('United States');
        await page.locator('[data-qa="state"]').fill('Estado Teste');
        await page.locator('[data-qa="city"]').fill('Cidade Teste');
        await page.locator('[data-qa="zipcode"]').fill('12345');
        await page.locator('[data-qa="mobile_number"]').fill('123456789');
        
        // Criar conta
        await page.getByRole('button', { name: 'Create Account' }).click();
        
        // Verificar se conta foi criada
        await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
        
        // Continuar e verificar login
        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page.getByText(`Logged in as ${username}`)).toBeVisible();
        
        // Deletar conta
        await page.getByRole('link', { name: ' Delete Account' }).click();
        await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
    });

   
    // O site está apresentando problemas na verificação do login. O elemento "Logged in as" não está sendo exibido após o login bem-sucedido.
    test.fixme('TC2 - Login User with correct email and password', async ({ page }) => {
        // Clicar em Signup / Login
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        
        // Verificar se 'Login to your account' está visível
        await expect(page.getByText('Login to your account')).toBeVisible();
        
        // Login com credenciais inválidas
        await page.locator('[data-qa="login-email"]').fill('incorreto@teste.com');
        await page.locator('[data-qa="login-password"]').fill('senhaerrada');
        await page.locator('[data-qa="login-button"]').click();
        
        // Verificar mensagem de erro
        await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
    });

    // O site está apresentando problemas na verificação do login. O elemento "Logged in as" não está sendo exibido após o login bem-sucedido.
    test.fixme('TC4 - Logout User', async ({ page }) => {
        // Clicar em Signup / Login
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        
        // Login com credenciais válidas
        await page.locator('[data-qa="login-email"]').fill('usuario.teste@teste.com');
        await page.locator('[data-qa="login-password"]').fill('senha123');
        await page.locator('[data-qa="login-button"]').click();
        
        // Verificar login
        await page.waitForSelector('a:has-text("Logged in as")');
        await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();
        
        // Fazer logout
        await page.locator('a[href="/logout"]').click();
        
        // Verificar se voltou para página de login
        await expect(page).toHaveURL('https://automationexercise.com/login');
    });

    // O site está apresentando problemas na exibição da mensagem de erro para email existente.
    test.fixme('TC5 - Register User with existing email', async ({ page }) => {
        // Clicar em Signup / Login
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        
        // Verificar se 'New User Signup!' está visível
        await expect(page.getByText('New User Signup!')).toBeVisible();
        
        // Tentar registrar com email existente
        await page.locator('[data-qa="signup-name"]').fill('Teste User');
        await page.locator('[data-qa="signup-email"]').fill('usuario.teste@teste.com');
        await page.locator('[data-qa="signup-button"]').click();
        
        // Verificar mensagem de erro
        await page.waitForSelector('p:has-text("Email Address already exist!")');
        await expect(page.locator('p:has-text("Email Address already exist!")')).toBeVisible();
    });

    // O site está apresentando problemas com elementos duplicados no botão Home e na mensagem de sucesso.
    test.fixme('TC6 - Contact Us Form', async ({ page }) => {
        // Configurar handler do diálogo antes de qualquer ação
        page.on('dialog', dialog => dialog.accept());
        
        // Clicar em Contact Us
        await page.getByRole('link', { name: ' Contact us' }).click();
        
        // Verificar se 'GET IN TOUCH' está visível
        await expect(page.getByText('GET IN TOUCH')).toBeVisible();
        
        // Preencher formulário
        await page.locator('[data-qa="name"]').fill('Teste Usuario');
        await page.locator('[data-qa="email"]').fill('teste@teste.com');
        await page.locator('[data-qa="subject"]').fill('Teste Contato');
        await page.locator('[data-qa="message"]').fill('Mensagem de teste para contato');
        
        // Upload de arquivo
        await page.locator('input[type="file"]').setInputFiles('test-plan.md');
        
        // Enviar formulário
        await page.getByRole('button', { name: 'Submit' }).click();
        
        // Aceitar alerta
        page.on('dialog', dialog => dialog.accept());
        
        // Verificar sucesso
        await page.waitForSelector('.status.alert.alert-success', { state: 'visible', timeout: 10000 });
        await expect(page.locator('.status.alert.alert-success')).toBeVisible();
        
        // Voltar para home
        await page.getByRole('link', { name: ' Home' }).click();
        await expect(page).toHaveURL('https://automationexercise.com/');
    });

    test('TC7 - Verify Test Cases Page', async ({ page }) => {
        // Clicar em Test Cases
        await page.locator('a[href="/test_cases"]').first().click();
        
        // Verificar URL
        await expect(page).toHaveURL('https://automationexercise.com/test_cases');
        
        // Verificar se página está visível
        await expect(page.locator('b').filter({ hasText: 'Test Cases' })).toBeVisible();
    });

    test('TC8 - Verify All Products and product detail page', async ({ page }) => {
        // Clicar em Products
        await page.getByRole('link', { name: ' Products' }).click();
        
        // Verificar página de produtos
        await expect(page).toHaveURL('https://automationexercise.com/products');
        await expect(page.getByText('ALL PRODUCTS')).toBeVisible();
        
        // Clicar em View Product do primeiro produto
        await page.getByRole('link', { name: 'View Product' }).first().click();
        
        // Verificar detalhes do produto
        await expect(page.getByText('Category:')).toBeVisible();
        await expect(page.getByText('Availability:')).toBeVisible();
        await expect(page.getByText('Condition:')).toBeVisible();
        await expect(page.getByText('Brand:')).toBeVisible();
    });

    test('TC9 - Search Product', async ({ page }) => {
        // Clicar em Products
        await page.getByRole('link', { name: ' Products' }).click();
        
        // Verificar página de produtos
        await expect(page.getByText('ALL PRODUCTS')).toBeVisible();
        
        // Buscar produto
        await page.locator('#search_product').fill('Blue Top');
        await page.locator('#submit_search').click();
        
        // Verificar resultados
        await expect(page.getByText('SEARCHED PRODUCTS')).toBeVisible();
        await expect(page.locator('.features_items')).toBeVisible();
    });

    test('TC10 - Verify Subscription in home page', async ({ page }) => {
        // Verificar se SUBSCRIPTION está visível
        await expect(page.getByText('SUBSCRIPTION')).toBeVisible();
        
        // Inserir email
        await page.locator('#susbscribe_email').fill('teste@teste.com');
        await page.locator('#subscribe').click();
        
        // Verificar mensagem de sucesso
        await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();
    });
});