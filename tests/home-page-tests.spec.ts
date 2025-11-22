import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Tests for home page components', () => {
  
  test.beforeEach('Validating if the page is completely loaded',async ({page})=>{
  const homePage = new HomePage(page);
  await homePage.visit();
  expect(page).toHaveTitle('Automation Exercise');
  });

// Validating status code 200
  test ('validating status code 200', async ({page})=>{
  const response = await page.request.get('/');
  expect(response.status()).toBe(200);
  });

// **************  Validating header components ********************
  // validating Logo
  test('validating logo is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await expect(homePage.logo.locator('img')).toBeVisible();
  await expect(homePage.logo.locator('img')).toHaveAttribute('alt','Website for automation practice'); 
  });

  //Validating Menu items
  test('validating menu items', async ({ page }) => {
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
        const homePage = new HomePage(page);  
        await expect(homePage.featuredItensTitle).toBeVisible();
        await expect(homePage.featuredItensTitle).toHaveText('Features Items');
      });

//Validating Products list hover behavior
      test('validating Featured Itens overlay and Add to cart button', async ({ page }) => {
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