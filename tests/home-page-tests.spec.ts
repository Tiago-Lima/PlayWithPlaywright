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

});
