import { makeAutoObservable } from "mobx";
import axios from "axios";

class ProductStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
    } catch (error) {
      console.error("fetchProducts", error);
    }
  };

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
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);
      const response = await axios.post(
        "http://localhost:8000/products",
        formData
      );
      this.products.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  updateProduct = async (updatedProduct) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);
      const response = await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        formData
      );

      const product = this.products.find(
        (product) => product.id === response.data.id
      );
      for (const key in product) product[key] = response.data[key];
    } catch (error) {
      console.error(error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
