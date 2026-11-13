class InventoryPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('[data-test="title"]');
    this.productList = page.locator('[data-test="inventory-list"]');
  }

  async isLoaded() {
    return (await this.pageTitle.isVisible().catch(() => false))
      && (await this.productList.isVisible().catch(() => false))
      && (await this.pageTitle.innerText()).trim() === 'Products';
  }
}

module.exports = { InventoryPage };
