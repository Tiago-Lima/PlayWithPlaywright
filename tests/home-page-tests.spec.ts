import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { allure } from 'allure-playwright';

test.describe('Tests for home page components', () => {
  
  test.beforeEach('Validating if the page is completely loaded', async ({ page }) => {
 

  const homePage = new HomePage(page);
  await homePage.visit();
  await expect(page).toHaveTitle('Automation Exercise');
  
});

// Validating status code 200
  test ('validating status code 200', async ({page})=>{
  await allure.feature('Home Page');
  await allure.testCaseId('CT001');
  await allure.displayName('Validating home page status code');
  await allure.description('This test case verifies that the home page returns a status code of 200, indicating successful loading of the page.');
  await allure.owner('Tiago Lima');
  await allure.severity('blocker');
  await allure.tags('home-page','status-code','load-validation');
    
  const response = await page.request.get('/');
    
  expect(response.status()).toBe(200);
  });

// **************  Validating header components ********************
  // validating Logo
  test('validating logo is visible', async ({ page }) => {
    await allure.feature('Home Page');
    await allure.testCaseId('CT002');
    await allure.displayName('Validating logo visibility and alt attribute');
    await allure.description('This test case checks if the logo is visible on the home page and verifies its alt attribute for accessibility compliance.');
    await allure.owner('Tiago Lima');
    await allure.severity('medium');
    await allure.tags('home-page','logo','accessibility');

  const homePage = new HomePage(page);
  await expect(homePage.logo.locator('img')).toBeVisible();
  await expect(homePage.logo.locator('img')).toHaveAttribute('alt','Website for automation practice'); 
  });

  //Validating Menu items
  test('validating menu items', async ({ page }) => {
    await allure.feature('Home Page');
    await allure.testCaseId('CT003');
    await allure.displayName('Validating menu items functionality');
    await allure.description('This test case validates the presence, visibility, and functionality of the main menu items on the home page.');
    await allure.owner('Tiago Lima');
    await allure.severity('medium');
    await allure.tags('home-page','menu-items','navigation');

    const homePage = new HomePage(page);

    const expectedText = [
      'Home','Products','Cart','Signup / Login','Test Cases','API Testing','Contact us'
    ];

    const count = await homePage.getMenuItemsCount();

    for (let i = 0; i < count; i++) {
      const item = await homePage.getMenuItem(i);
      await expect(item).toHaveText(expectedText[i]);
      await expect(item).toBeVisible();
      await expect(item).toBeEnabled();
    }
  });

// ***************************************************************

//validating carrousel functionality
  test('validating carrousel', async ({ page }) => {
    await allure.feature('Home Page');
    await allure.testCaseId('CT004');
    await allure.displayName('Validating carrousel navigation functionality');
    await allure.description('This test case checks the functionality of the carrousel on the home page, ensuring that navigation buttons work correctly and the appropriate slides are displayed.');
    await allure.owner('Tiago Lima');
    await allure.severity('medium');
    await allure.tags('home-page','carrousel','navigation');

  const homePage = new HomePage(page);
  //Go to first slide
  await homePage.goToCorrouselSlide(1);
  await expect(await homePage.getActiveCarrouselSlide()).toBe(1);

  
  //Go to next slide
  await homePage.goToNextCarrousel();
  await expect(await homePage.getActiveCarrouselSlide()).toBe(2);

  //Go to previous slide
  await homePage.goToPreviousCarrousel();
  await homePage.validateSlideActive(1);

});
// Validating carrousel buttons for each slide
  test('validating carrousel buttons', async ({ page }) => {
    await allure.feature('Home Page');
    await allure.testCaseId('CT005');
    await allure.displayName('Validating carrousel slide buttons visibility and functionality');
    await allure.description('This test case verifies that the buttons on each carrousel slide are visible and functional, ensuring users can interact with them as intended.');
    await allure.owner('Tiago Lima');
    await allure.severity('medium');
    await allure.tags('home-page','carrousel','buttons');

    const homePage = new HomePage(page);
    const slideCount = await homePage.getCarrouselSlidesCount();
    //Click on Test Cases button
    for (let i = 0; i < slideCount; i++) {
      await homePage.goToCorrouselSlide(i);
      const testCaseButton = homePage.getCarrouselButtonTestCase();
      const apiButton = homePage.getCarrouselButtonApiTesting();
      await expect(testCaseButton).toBeVisible();
      await expect(testCaseButton).toBeEnabled();
      await expect(apiButton).toBeVisible();
      await expect(apiButton).toBeEnabled();
   
    }
  });
// ************************ Validating Product Contents ***************************************
//Featured Items section
      test('validating Featured Items section', async ({ page }) => {
        await allure.feature('Home Page');
        await allure.testCaseId('CT006');
        await allure.displayName('Validating Featured Items section title visibility and text');
        await allure.description('This test case checks the visibility and correctness of the title in the Featured Items section on the home page.');
        await allure.owner('Tiago Lima');
        await allure.severity('medium');
        await allure.tags('home-page','featured-items','section');

        const homePage = new HomePage(page);  
        await expect(homePage.featuredItensTitle).toBeVisible();
        await expect(homePage.featuredItensTitle).toHaveText('Features Items');
      });

//Validating Products list hover behavior
      test('validating Featured Itens overlay and Add to cart button', async ({ page }) => {
        await allure.feature('Home Page');
        await allure.testCaseId('CT007');
        await allure.displayName('Validating Featured Items product hover behavior');
        await allure.description('This test case verifies the hover behavior of products in the Featured Items section, ensuring that overlays and Add to Cart buttons appear correctly.');
        await allure.owner('Tiago Lima');
        await allure.severity('medium');
        await allure.tags('home-page','featured-items','hover-behavior');

        const homePage = new HomePage(page);  
        const productsCount = await homePage.featuredItensProducts.count();

        console.log(`Number of products in Featured Items section: ${productsCount}`);

        for (let i = 0; i < productsCount; i++) {
          const product = homePage.featuredItensProducts.nth(i);
          await homePage.hoverFeaturedItemProduct(i);
          await homePage.waitForOverlayVisible(i);

          const overlay = homePage.getFeaturedItemOverlay(i);
          const addToCartButton = homePage.getFeaturedItemAddToCartButton(i);
          await expect(overlay).toBeVisible();
          await expect(addToCartButton).toBeVisible();
          await expect(addToCartButton).toBeEnabled();
        }
      });

// Validating Products list information
      test('validating Featured Itens product information', async ({ page }) => {
        await allure.feature('Home Page');
        await allure.testCaseId('CT008');
        await allure.displayName('Validating Featured Items product information visibility');
        await allure.description('This test case checks that each product in the Featured Items section displays its name, price, and image correctly.');
        await allure.owner('Tiago Lima');
        await allure.severity('medium');
        await allure.tags('home-page','featured-items','product-information');

        const homePage = new HomePage(page);  
        const productsCount = await homePage.featuredItensProducts.count();
        for (let i = 0; i < productsCount; i++) {
          const product = homePage.getFeaturedItemProduct(i);
          const productName = product.locator('.productinfo p');
          const productPrice = product.locator('.productinfo h2');
          const productImage = product.locator('img');

          await expect(productImage).toBeVisible();
          await expect(productName).toBeVisible();
          await expect(productPrice).toBeVisible();
        }
      });
});    