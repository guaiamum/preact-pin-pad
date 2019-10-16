const { server: { port } } = require('../../jest-puppeteer.config.js');

/**
 * @param {number} num
 * @returns {string}
 */
const keySelector = (num) => num > 0 ? `.keypad .key-w:nth-child(${num})` : `.keypad .key-w:nth-child(10)`;

describe('Google Puppeteer', () => {
    beforeAll(async () => {
        await page.goto(`http://localhost:${port}/`);
    });

    beforeEach(async () => {
        await page.waitForSelector('[class="vsr"]'); // wait Visor reset
    });

    it('should display error', async () => {
        await page.click(keySelector(1));
        await page.click(keySelector(1));
        await page.click(keySelector(1));
        await page.click(keySelector(1));

        await expect(page.$$eval('.vsr._err', (el) => el.length)).resolves.toBe(1);
    });

    it('should display success', async () => {
        await page.click(keySelector(1));
        await page.click(keySelector(2));
        await page.click(keySelector(3));
        await page.click(keySelector(4));

        await expect(page.$$eval('.vsr._ok', (el) => el.length)).resolves.toBe(1);
    });

    it('should take snapshot', async () => {
        const screenshot = await page.screenshot({ type: 'png', fullPage: true });
        expect(screenshot).toMatchImageSnapshot();
    });
});
