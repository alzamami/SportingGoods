import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ShopStore {
  stores = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchStores = async () => {
    try {
      const response = await instance.get("/stores");
      this.stores = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchStores", error);
    }
  };

  createStore = async (newStore) => {
    try {
      const formData = new FormData();
      for (const key in newStore) formData.append(key, newStore[key]);
      const response = await instance.post("/stores", formData);
      response.data.stores = [];
      this.stores.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchStores();
export default shopStore;
