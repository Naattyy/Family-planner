import { test, expect } from '@playwright/test';

test.describe('Add task', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('TC_01 – Add a new task using the button', async ({ page }) => {

    const taskName = 'kúpiť banány';

    await page.getByRole('textbox', { name: 'Napríklad kúpiť mlieko...' }).click();
    await page.getByRole('textbox', { name: 'Napríklad kúpiť mlieko...' }).fill(taskName);
    await page.getByRole('button', { name: 'Pridať úlohu ＋' }).click();

    await expect(page.getByText(taskName)).toBeVisible();
  });

  test('TC_02 – Add a new task using Enter', async ({ page }) => {

    const taskName = 'Upratať kuchyňu';
    const taskInput = page.getByPlaceholder('Napríklad kúpiť mlieko...',);

    await taskInput.fill(taskName);
    await taskInput.press('Enter');
    await expect(page.getByText(taskName)).toBeVisible();
  });

  test('TC_03 – Prevent adding an empty task', async ({ page }) => {

    await page.getByRole('button', { name: /Pridať úlohu/ }).click();

    await expect(page.getByText('Zatiaľ nemáš žiadne úlohy.'),).toBeVisible();
    await expect(page.locator('.task-item')).toHaveCount(0);
  });

  test('TC_04 – Clear the input field after adding a task', async ({ page }) => {

    const taskInput = page.getByPlaceholder('Napríklad kúpiť mlieko...',);

    await taskInput.fill('Vyniesť smeti');
    await page.getByRole('button', { name: /Pridať úlohu/ }).click();

    await expect(taskInput).toHaveValue('');
  });

  test('TC_05 – Complete a task', async ({ page }) => {

    const taskName = 'Poliať kvety';

    await page.getByPlaceholder('Napríklad kúpiť mlieko...').fill(taskName);
    await page.getByRole('button', { name: /Pridať úlohu/ }).click();

    const checkbox = page.getByRole('checkbox');

    await checkbox.check();

    await expect(checkbox).toBeChecked();
    await expect(page.locator('.task-item')).toHaveClass(/completed/,);
  });

  test('TC_06 – Delete a task', async ({ page }) => {

    const taskName = 'Kúpiť chlieb';

    await page.getByPlaceholder('Napríklad kúpiť mlieko...').fill(taskName);
    await page.getByRole('button', { name: /Pridať úlohu/ }).click();
    await page.getByRole('button', {name: `Vymazať úlohu ${taskName}`,}).click();

    await expect(page.getByText(taskName)).not.toBeVisible();

    await expect(page.getByText('Zatiaľ nemáš žiadne úlohy.'),).toBeVisible();
  });
});