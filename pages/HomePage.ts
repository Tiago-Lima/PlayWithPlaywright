import  { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly logo: Locator;
  readonly menuItens: Locator;

    
  readonly carrousel: Locator;
     //Carrousel slide buttons
    readonly previousButton: Locator;
    readonly nextButton: Locator;
    //Carrousel indicators
    readonly indicators: Locator;
    readonly activeSlide: Locator;
    //Featured Items
    readonly featuredItensTitle: Locator;
    readonly featuredItensProducts: Locator;
    readonly featuredItensOverlay: Locator;
    readonly featuredItensAddToCartButton: Locator;

    constructor(page: Page) {   
    this.page = page;
    //Header constructor
    this.logo = page.locator('.logo.pull-left a');
    this.menuItens = page.locator('.fa fa-home');
    //Carrousel constructor
    this.carrousel = page.locator('#slider-carousel');
      this.previousButton = this.carrousel.locator('a[data-slide="prev"]');
      this.nextButton = this.carrousel.locator('a[data-slide="next"]');
      this.indicators = this.carrousel.locator('.carousel-indicators > li');
      this.activeSlide = this.carrousel.locator('.item.active');
    //Featured Items constructor
    this.featuredItensTitle = page.locator('.features_items h2.title');
    this.featuredItensProducts = page.locator('.features_items .product-image-wrapper');
    this.featuredItensOverlay = page.locator('.features_items .product-overlay');
    this.featuredItensAddToCartButton = this.featuredItensOverlay.locator('.add-to-cart');

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
        /**
         * Click on next button of carrousel
         * 
         */
      async goToNextCarrousel() {
        await this.nextButton.click();
      }

      /**
       * Select an slide based on data slide "data-slide-to".
       * @param index Number of slide (0, 1, 2...)
       */
      async goToCorrouselSlide(index: number) {
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
      /**
       * 
       * @returns the the Test case button Locator  of the active slide
       */
      async getCarrouselSlidesCount(): Promise<number> {
        return await this.indicators.count();
      }
 
      getCarrouselButtonTestCase() {
      return this.activeSlide.locator('.test_cases_list');
      }
      /**
       * 
       * @returns the the Api Testing button Locator  of the active slide
       */
      getCarrouselButtonApiTesting() {
      return this.activeSlide.locator('.apis_list');
      }

    // ***************************** Navigation methods **********************************************************
      /**
       * 
       * @returns the number of itens on menu
       */
      async getMenuItemsCount() {
        return await this.menuItens.count();
      }
      /**
       * 
       * @param i index of menu item
       * @returns the menu item Locator at index i
       */
      async getMenuItem(i: number) {
        return this.menuItens.nth(i);
      }
    
      //********************************************* Featured Itens methods ***********************************************
      /**
       * 
       * @returns number of products in Featured Items section
       */
      async getFeaturedItemsProductsCount(): Promise<number> {
        return await this.featuredItensProducts.count();
      } 
      
      /**
       * 
       * @param index index of product in Featured Items section
       * @returns Locator of product at index in Featured Items section
       */
         getFeaturedItemProduct(index: number): Locator {
        return this.featuredItensProducts.nth(index);
      }

      /**
       * 
       * @param index index of product in Featured Items section
       * Hovers the product at index in Featured Items section
       */
      async hoverFeaturedItemProduct(index: number): Promise<void> {
        const product = await this.getFeaturedItemProduct(index);
        await product.hover();
      }

      /**
       * 
       * @param index index of product in Featured Items section
       * @returns Locator of overlay of product at index in Featured Items section
       */
         getFeaturedItemOverlay(index: number): Locator  {
        return this.featuredItensOverlay.nth(index);
      }
      /**
       * 
       * @param index index of product in Featured Items section
       * Waits for overlay of product at index in Featured Items section to be visible
       */
      async waitForOverlayVisible(index: number): Promise<void> {
        const overlay = await this.getFeaturedItemOverlay(index);
        await overlay.waitFor({ state: 'visible' });
      }
      
      /**
       * 
       * @param index index of product in Featured Items section
       * @returns Locator of Add to Cart button of product at index in Featured Items section
       */
       getFeaturedItemAddToCartButton(index: number): Locator { 
        const overlay =  this.getFeaturedItemOverlay(index);
        return overlay.locator('.add-to-cart');
      }
         

      

    
  }