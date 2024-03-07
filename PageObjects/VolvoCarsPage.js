// VolvoCarsPage.js
class VolvoCarsPage {
    constructor(page) {
      this.page = page;
    }
  
    async goToPage() {
      await this.page.goto('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    }
  
    async getPageTitle() {
      return await this.page.title();
    }
  
    async getMenuOptions() {
      const menuOptionsXPath = '//*[@id="_UFgXqzaQ8FGxIm88_GJm"]/div/div/a/em';
      return await this.page.$$(menuOptionsXPath);
    }
  
    async getMenuOptionText(option) {
      return await option.innerText();
    }
  }
  
  module.exports = VolvoCarsPage;
  