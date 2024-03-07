const { test, devices } = require('@playwright/test');
const { devicesToTest } = require('./config');
const base = require('../PageObjects/base');
const VolvoCarsPage = require('../PageObjects/VolvoCarsPage');
const Safety = require('../PageObjects/Safety');
const allure = require('allure-playwright');

for (const device of devicesToTest) {
    const deviceName = device.name || 'Unknown Device';
    test.describe(`Test on ${deviceName}`, () => {
       // allure.description(`Device: ${deviceName}`);

        test(`Test on ${deviceName}`, async ({ page }) => {
            const volvoCarsPage = new VolvoCarsPage(page);
        

        // Use page class methods for test steps
        await volvoCarsPage.goToPage();

           

            // Move to Video 1 and verify the video
          //  await Safety.waitForElement(Safety.Video1);
            await Safety.scrollIntoView(Safety.Video1);
            await base.shortPause();
            await base.moveToElement(Safety.Video1);
            await base.shortPause();
            await Safety.clickElement(Safety.Video1);
            await page.waitForTimeout(15000);
            await Safety.clickElement(Safety.Video1);
            await base.pause();

            // Verify the text "A million more..."
        //    await Safety.waitForElement(Safety.millionmoretext);
            await Safety.scrollIntoView(Safety.millionmoretext, false);
            await base.shortPause();
            await base.moveToElement(Safety.millionmoretext);
            expect(await Safety.getElementText(Safety.millionmoretext)).toBe(
                'A million more. With new and existing safety features, we are determined to save a million more lives.'
            );
            await base.shortPause();

            // Move to footer
            await Safety.scrollIntoView(Safety.footerArea);
            await base.shortPause();
            await base.moveToElement(Safety.footerArea);
            await base.mediumPause();

            // Move to Learn More safety
            await Safety.scrollIntoView(Safety.LearnMoreSafetyLink, false);
            await base.shortPause();
            await base.moveToElement(Safety.LearnMoreSafetyLink);
            await base.mediumPause();
            await Safety.clickElement(Safety.LearnMoreSafetyLink);
            await base.mediumPause();
            expect(await page.title()).toBe('Car safety | Volvo Cars');
            await base.pause();
        });
    });
}
