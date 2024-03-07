const { chromium } = require('playwright');

class Base {
    constructor() {
        this.page = null;
    }

    async ShortPause() {
        await this.page.waitForTimeout(1000);
    }

    async MediumPause() {
        await this.page.waitForTimeout(3000);
    }

    async Pause() {
        await this.page.waitForTimeout(5000);
    }

    async LongPause() {
        await this.page.waitForTimeout(10000);
    }

    get ApplicationURL() {
        return 'https://www.volvocars.com/intl/v/car-safety/a-million-more';
    }

    async BaseUrl() {
        this.page = await chromium.launch().then(browser => browser.newPage());
        await this.page.goto(this.ApplicationURL);
        await this.page.maximize();
        await this.Pause();
    }

    get cookieBtnAccept() {
        const locator = this.page.locator('.optanon-allow-all.accept-cookies-button');
        
        if (!locator) {
            throw new Error('Cookie button element not found');
        }
    
        return locator;
    }

    async MoveToElement(element) {
        await element.waitForSelector();
        await element.hover();
    }
}

module.exports = new Base();
