// Import Playwright
const { chromium } = require('playwright');

(async () => {
  // Step 1: Launch the browser and navigate to Amazon homepage
  const browser = await chromium.launch({ headless: false }); // headless: false opens browser for visual verification
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com');
  
  console.log("Navigated to Amazon homepage");

  // Step 2: Search for an item (e.g., "laptop")
  const searchBox = await page.locator('input[name="field-keywords"]'); // Amazon search box selector
  await searchBox.type('laptop'); // Typing the search query 'laptop'
  await searchBox.press('Enter'); // Press 'Enter' to submit the search
  
  console.log("Searched for 'laptop'");

  // Step 3: Wait for search results to load
  await page.waitForSelector('.s-main-slot'); // Wait for the main search results to appear
  
  console.log("Search results loaded");

  // Step 4: Select the first item in the search results and click on it
  const firstItem = await page.locator('.s-main-slot .s-result-item:first-child');
  await firstItem.click(); // Click on the first item in the list
  
  console.log("Clicked on the first item in the search results");

  // Step 5: Wait for the product page to loa
