import { test, expect } from '@playwright/test';

test('create delete course list', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('название').click();
  await page.getByPlaceholder('название').fill('test');
  await page.getByPlaceholder('описание').click();
  await page.getByPlaceholder('описание').click();
  await page.getByPlaceholder('описание').fill('test');
  await page.getByRole('button', { name: 'Добавить' }).click();
  await expect(page.getByText('testtestУдалить')).toBeVisible();
  await page.getByRole('button', { name: 'Удалить' }).click();
  await expect(page.getByText('testtestУдалить')).not.toBeVisible();
});