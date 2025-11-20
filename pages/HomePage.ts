import  { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    
    readonly carrousel: Locator;
     // Corrousel slide buttons
  readonly previousButton: Locator;
  readonly nextButton: Locator;

    //Corrousel indicators
  readonly indicators: Locator;


    constructor(page: Page) {   
    this.page = page;

    this.carrousel = page.locator('#slider-carousel');
    this.previousButton = this.carrousel.locator('a[data-slide="prev"]');
    this.nextButton = this.carrousel.locator('a[data-slide="next"]');
    this.indicators = this.carrousel.locator('.carousel-indicators > li');
    }

        /**
         * Go to base url defined in playwright.config.ts
         */
        async visit() {
          await this.page.goto('/');
        }

        /**
         * Click on previous button of carrousel
         * 
         */
        async goToPreviousCarrousel() {
        await this.previousButton.click();
      }

      async goToNextCarrousel() {
        await this.nextButton.click();
      }

      /**
       * Select an slide based on data slide "data-slide-to".
       * @param index Number of slide (0, 1, 2...)
       */
      async goToCorrouselSlide(index: number) {
        await this.page.locator(`li[data-slide-to="${index}"]`).click();
      }

       /**
       * Return the active slide index.
       * Depends of the "active" on the <li>.
       */
      async getActiveCarrouselSlide(): Promise<number> {
      const active = this.page.locator('.carousel-indicators > li.active');
      const attr = await active.getAttribute('data-slide-to');
      return Number(attr);
      }

       /**
       * Validate if the active slide is the expected one.
       * @param expected
       */
     async validarSlideAtivo(expected: number) {
     const active = await this.getActiveCarrouselSlide();
       if (active !== expected) {
        throw new Error(
        `Active slide is incorrect. Expected: ${expected}, returned: ${active}`
      );
     }
    }
  }