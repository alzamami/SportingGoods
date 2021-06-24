import products from "../products";

import { makeAutoObservable } from "mobx";

import slugify from "react-slugify";

class ProductStore {
  products = products;

  constructor() {
    makeAutoObservable(this);
  }

  productDelete = (productId) => {
    const updatedProducts = this.products.filter(
      (product) => product.id !== productId
    );
    this.products = updatedProducts;
  };

  createProduct = (newProduct) => {
    newProduct.id = this.products.length + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);
  };

  updateProduct = (updatedProduct) => {
    const product = this.products.find(
      (product) => product.id === updatedProduct.id
    );
    product.name = updatedProduct.name;
    product.price = updatedProduct.price;
    product.description = updatedProduct.description;
    product.image = updatedProduct.image;

    product.slug = slugify(updatedProduct.name);
  };
}

const productStore = new ProductStore();
export default productStore;
