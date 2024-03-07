class Safety {
    constructor(page) {
        this.page = page;
    }

    async getVideo1() {
        return await this.page.locator('#Video-1');
    }

    async getLearnMoreSafetyLink() {
        return await this.page.locator("a[data-autoid='iconCallouts:cta']");
    }

    async getFooterArea() {
        return await this.page.locator('#vcc-site-footer');
    }

    async getMillionMoreText() {
        return await this.page.locator('#TextStatement-1 > section > div');
    }

    async waitForElement(element) {
        await element.waitForExist();
    }

    async scrollIntoView(elementLocator) {
        const element = await this.page.locator(elementLocator);
        await element.scrollIntoViewIfNeeded();
    }


    async moveToElement(element) {
        await element.hover();
    }

    async clickElement(element) {
        await element.click();
    }

    async getElementText(element) {
        return await element.innerText();
    }
}

module.exports = Safety;
