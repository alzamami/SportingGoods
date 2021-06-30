import { makeAutoObservable } from "mobx";

import slugify from "react-slugify";
import axios from "axios";

class ProductStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  productDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);

      const updatedProducts = this.products.filter(
        (product) => product.id !== productId
      );
      this.products = updatedProducts;
    } catch (error) {
      console.error(error);
    }
  };

  createProduct = async (newProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/products",
        newProduct
      );
      this.products.push(response.data);
    } catch (error) {
      console.error(error);
    }
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

  fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
    } catch (error) {
      console.error("fetchProducts", error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
