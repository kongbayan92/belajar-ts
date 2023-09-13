var Product = /** @class */ (function () {
    function Product(productName) {
        this.productId = "PRD-001";
        // this.productId = "PRD-001";
        this.productName = productName;
    }
    return Product;
}());
var product = new Product("Buku");
console.log("test");
product.productId = "Yanzen";
console.log(product);
// document.querySelector("#productID")?.addEventListener("keypress", (e: any) => {
// })
