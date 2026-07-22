import { test, expect } from '@playwright/test';

test.describe('Clear completed tasks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    await page.evaluate(() => {
      localStorage.clear();
    });

    await page.reload();
  });

  test('clear completed button is disabled when no task is completed', async ({
    page,
  }) => {
    const clearButton = page.getByRole('button', {
      name: /Vymazať dokončené/,
    });

    await expect(clearButton).toBeDisabled();
  });

  test('user can clear completed tasks', async ({ page }) => {
    const taskInput = page.getByPlaceholder(
      'Napríklad kúpiť mlieko...',
    );

    const addButton = page.getByRole('button', {
      name: /Pridať úlohu/,
    });

    await taskInput.fill('Aktívna úloha');
    await addButton.click();

    await taskInput.fill('Dokončená úloha');
    await addButton.click();

    await page
      .getByRole('checkbox', {
        name: 'Dokončená úloha',
      })
      .check();

    await page
      .getByRole('button', {
        name: /Vymazať dokončené/,
      })
      .click();

    await expect(
      page.getByText('Dokončená úloha'),
    ).not.toBeVisible();

    await expect(page.getByText('Aktívna úloha')).toBeVisible();
  });
});