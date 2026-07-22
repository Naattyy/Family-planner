import { test, expect } from '@playwright/test';

test.describe('Task filters', () => {
  test.beforeEach(async ({ page }) => {

    await page.goto('/');
    await page.evaluate(() => {localStorage.clear();});
    await page.reload();

    const taskInput = page.getByPlaceholder('Napríklad kúpiť mlieko...',);

    const addButton = page.getByRole('button', {name: /Pridať úlohu/,});

    await taskInput.fill('Aktívna úloha');
    await addButton.click();

    await taskInput.fill('Dokončená úloha');
    await addButton.click();

    await page.getByRole('checkbox', {name: 'Dokončená úloha',}).check();
  });

  test('TC_07 – Display all tasks using the All filter', async ({ page }) => {

    await page.getByRole('button', { name: /Všetky/ }).click();

    await expect(page.getByText('Aktívna úloha')).toBeVisible();
    await expect(page.getByText('Dokončená úloha'),).toBeVisible();
  });

  test('TC_08 – Display only active tasks using the Remaining filter', async ({page,}) => {

    await page.getByRole('button', { name: /Zostávajúce/ }).click();

    await expect(page.getByText('Aktívna úloha')).toBeVisible();
    await expect(page.getByText('Dokončená úloha'),).not.toBeVisible();
  });

  test('TC_09 – Display only completed tasks using the Completed filter', async ({page,}) => {

    await page.getByRole('button', { name: /Dokončené/ }).click();

    await expect(page.getByText('Dokončená úloha'),).toBeVisible();
    await expect(page.getByText('Aktívna úloha'),).not.toBeVisible();
  });
});