import { makeAutoObservable } from "mobx";
import instance from "./instance";
import shopStore from "./shopStore";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const response = await instance.get("/products");
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchProducts", error);
    }
  };

  productDelete = async (productId) => {
    try {
      shopStore.loading = true;
      await instance.delete(`/products/${productId}`);

      const updatedProducts = this.products.filter(
        (product) => product.id !== productId
      );
      this.products = updatedProducts;
      shopStore.fetchStores();
    } catch (error) {
      console.error(error);
    }
  };

  createProduct = async (newProduct, store) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);
      const response = await instance.post(
        `/stores/${store.id}/products`,
        formData
      );
      this.products.push(response.data);
      store.products.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };

  updateProduct = async (updatedProduct) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);
      const response = await instance.put(
        `/products/${updatedProduct.id}`,
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
  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);
}

const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
