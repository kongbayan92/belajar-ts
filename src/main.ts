class Product {
  readonly productId: string = "PRD-001";
  productName: string;

  constructor(productName: string) {
    // this.productId = "PRD-001";
    this.productName = productName;
  }


}

let product = new Product("Buku");

document.querySelector("#productID")?.addEventListener("keypress", (e: any) => {
  console.log("test")
  product.productId = e.target.value;
  // console.log(prod)
})