const { test, expect } = require('@playwright/test');

test("Counter Test", async ({ page }) => {
    await page.goto('https://www.avito.ru/avito-care/eco-impact');
    

        const ValueText = await ValueElement.textContent();
        const actualValue = parseInt(ValueText.trim());
        
        expect(actualValue).not.toBeNaN(); // Проверка, что значение является числом

        // Примерные проверки на размер числа, в том числе равенство 0
        if (actualValue > 0) {
            expect(actualValue).toBeGreaterThan(0); // Положительное число
        } else if (actualValue < 0) {
            expect(actualValue).toBeLessThan(0); // Отрицательное число
        } else {
            expect(actualValue).toBe(0); // Значение равно 0
        }
    } else {
        throw new Error('Элемент CO2 не найден на странице.');
    }
});using System;

class Program
{
 public static void Main(string[] args)
 {
 Console.WriteLine("Hello, world!");
 }
}using System;

class Program
{
 public static void Main(string[] args)
 {
 Console.WriteLine("Hello, world!");
 }
}using System;

class Program
{
 public static void Main(string[] args)
 {
 Console.WriteLine("Hello, world!");
 }
}
