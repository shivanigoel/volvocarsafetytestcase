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

    async scrollIntoView(element, block = 'center') {
        await this.page.evaluate(async ({ selector, block }) => {
            const targetElement = document.querySelector(selector);

            if (targetElement) {
                await new Promise((resolve) => {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                resolve();
                                observer.disconnect();
                            }
                        });
                    }, { rootMargin: '0px', threshold: 0.5, root: null, block });
                    observer.observe(targetElement);
                });
            } else {
                throw new Error(`Element with selector '${selector}' not found`);
            }
        }, { selector: element, block });
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
