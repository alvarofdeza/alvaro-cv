import { test, expect } from "@playwright/test";

test.describe("Álvaro Portfolio & Digital CV - E2E Suite", () => {
  test("1. Carga inicial limpia y metadatos correctos", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    const response = await page.goto("/");
    expect(response?.status()).toBe(200);

    // Title & Meta
    await expect(page).toHaveTitle(/Álvaro Fernández Abad/);
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute("content", /Software Engineering|Ingeniería del Software/);

    // No severe console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test("2. Navegación fluida por anclas internas", async ({ page }) => {
    await page.goto("/");

    const sections = ["projects", "education", "experience", "contact"];
    for (const sectionId of sections) {
      const sectionEl = page.locator(`#${sectionId}`);
      await expect(sectionEl).toBeAttached();

      const link = page.locator(`header[data-ui="menubar"] a[href="#${sectionId}"]`);
      if (await link.isVisible()) {
        await link.click();
        await expect(sectionEl).toBeInViewport({ ratio: 0.1 });
      }
    }
  });

  test("3. Selector bilingüe ES ⇄ EN con persistencia", async ({ page }) => {
    await page.goto("/");

    // Click ES to ensure baseline
    const esButton = page.locator('header[data-ui="menubar"] button:has-text("ES")');
    await esButton.click();
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.locator("body")).toContainText("Proyectos");

    // Switch to EN
    const enButton = page.locator('header[data-ui="menubar"] button:has-text("EN")');
    await enButton.click();

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("body")).toContainText("Projects");

    // Reload page to verify localStorage persistence
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("body")).toContainText("Projects");

    // Switch back to ES
    await page.locator('header[data-ui="menubar"] button:has-text("ES")').click();
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
  });

  test("4. Endpoint de CV (/cv) sirve documento PDF", async ({ request }) => {
    const response = await request.get("/cv");
    expect(response.status()).toBe(200);
    const contentType = response.headers()["content-type"];
    expect(contentType).toContain("application/pdf");
    const body = await response.body();
    expect(body.length).toBeGreaterThan(1000);
  });

  test("5. Radar Battleship táctico e interactivo", async ({ page }) => {
    await page.goto("/");

    // Open radar window if not visible
    const radarBtn = page.locator('button:has-text("radar.exe"), button:has-text("Lanzar Radar")').first();
    if (await radarBtn.isVisible()) {
      await radarBtn.click();
    }

    // Grid cells should be interactive
    const radarCell = page.locator('button[aria-label*="Sector A1"]').first();
    await expect(radarCell).toBeVisible();
    await radarCell.click();

    // Cell should update state (hit 'X' or miss '·')
    const cellText = await radarCell.innerText();
    expect(["X", "·"]).toContain(cellText.trim());
  });

  test("6. Copiado de email al portapapeles con feedback visual", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/");

    const copyBtn = page.locator('section#contact button[title*="Email"]').first();
    await copyBtn.scrollIntoViewIfNeeded();
    await copyBtn.click();

    // Check feedback message
    await expect(page.locator("section#contact")).toContainText(/Copiado|Copied/i);
  });

  test("7. Accesibilidad por teclado (Tab) con foco visible", async ({ page }) => {
    await page.goto("/");

    // Press Tab multiple times to traverse interactive links
    await page.keyboard.press("Tab");
    const focusedTag = await page.evaluate(() => document.activeElement?.tagName);
    expect(["A", "BUTTON"]).toContain(focusedTag);

    // Verify focus-visible style presence
    const hasFocusRing = await page.evaluate(() => {
      const el = document.activeElement;
      return el ? window.getComputedStyle(el).outlineStyle !== "" || el.className.includes("focus-visible") : false;
    });
    expect(hasFocusRing).toBeTruthy();
  });
});
