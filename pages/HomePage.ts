import  { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly logo: Locator;
    
  readonly carrousel: Locator;
     //Carrousel slide buttons
    readonly previousButton: Locator;
    readonly nextButton: Locator;
    //Carrousel indicators
    readonly indicators: Locator;


    constructor(page: Page) {   
    this.page = page;
    this.logo = page.locator('.logo.pull-left a');

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

        // ***************************** Carrousel methods ***********************************
        
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
         console.log(await this.indicators.count());
        console.log(await this.indicators.nth(index).count());
        await this.indicators.nth(index).click();
       


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
       * @param expected Number of expected slide (0, 1, 2...)
       */
     async validateSlideActive(expected: number): Promise<void> {
     const active = await this.getActiveCarrouselSlide();
       if (active !== expected) {
        throw new Error(
        `Active slide is incorrect. Expected: ${expected}, returned: ${active}`
      );
     }
    }

    // ***************************************************************************************

    
  }