// MenuOption.js
class MenuOption {
    constructor(page) {
        this.page = page;
    }

    async getCarsMenu() {
        return '#site-nav-topbar-wrapper>nav>button';
    }

    async getAllCarMenuOptions() {
        return '#site-nav-cars-menu-section-panel-1 > div > a > div > div > div > picture > img';
    }

    async getNavMenu() {
        return '#site-nav-topbar-wrapper > nav > div:nth-child(3) > button > div';
    }

    async getNavMenuItems() {
        return "button[data-autoid='nav:sideNavLinksMenuDrawer']";
    }

    async getCloseNavMenu() {
        return '#site-nav-topbar-wrapper > nav > div:nth-child(3) > button > div';
    }

    async waitForSelector(selector) {
        await this.page.waitForSelector(selector);
    }

    async isVisible(selector) {
        return await this.page.isVisible(selector);
    }

    async moveToElement(selector) {
        await this.page.hover(selector);
    }

    async clickElement(selector) {
        await this.page.click(selector);
    }
}

module.exports = MenuOption;
