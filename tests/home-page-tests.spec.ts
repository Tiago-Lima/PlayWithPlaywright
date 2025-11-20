import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Tests for home page components', () => {
  test('validating carrousel', async ({ page }) => {
    const homePage = new HomePage(page);

  await homePage.visit();

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
