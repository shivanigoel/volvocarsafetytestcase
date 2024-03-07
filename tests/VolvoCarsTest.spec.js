const { test, expect } = require('@playwright/test');
const { devicesToTest } = require('./config');
const allure = require('allure-playwright');
const VolvoCarsPage = require('../PageObjects/VolvoCarsPage');
const base = require('../PageObjects/base');
const MenuOption = require('../PageObjects/MenuOption');

const expectedMenuOptions = [
    'Highlights',
    'Culture & Vision',
    'Features',
    'Child Safety',
    'Research',
    'Heritage'
];

for (const device of devicesToTest) {
    const deviceName = device.name || 'Device';
    test(`Test on ${deviceName}`, async ({ page }) => {
        const volvoCarsPage = new VolvoCarsPage(page);
        const menu = new MenuOption(page);

        // Use page class methods for test steps
        await volvoCarsPage.goToPage();
        const pageTitle = await volvoCarsPage.getPageTitle();
        expect(pageTitle).toBe('Safety - Highlights | Volvo Cars');

        const menuOptions = await volvoCarsPage.getMenuOptions();

        // Iterate through each menu option
        for (const [index, option] of menuOptions.entries()) {
            const optionText = await volvoCarsPage.getMenuOptionText(option);

            // Log the expected and actual option text
            console.log(`Expected Menu Option ${index + 1}: ${expectedMenuOptions[index]}`);
            console.log(`Actual Menu Option ${index + 1}: ${optionText}`);

            // Verify the option text
            test(`Verify Menu Option ${index + 1} Text`, async () => {
                allure.attachment('Expected', expectedMenuOptions[index], 'text/plain');
                allure.attachment('Actual', optionText.trim(), 'text/plain');
                expect(optionText.trim()).toBe(expectedMenuOptions[index]); // Verify the option text
            });
        }

        // Additional test steps
        console.log('Car Icon Existing : ', await page.isVisible(await menu.getCarsMenu()));
        if (await page.isVisible(await menu.getCarsMenu())) {
            await base.MoveToElement(await page.locator(menu.getCarsMenu()));
            await base.ShortPause();
            await page.click(menu.getCarsMenu());
            await base.ShortPause();
        } else {
            console.log('Car Icon menu is not displaying');
        }

          });
}
