import { makeAutoObservable } from "mobx";
import instance from "./instance";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      await instance.post("/signup", newUser);
    } catch (error) {
      console.error(error);
    }
  };
}

const authStore = new AuthStore();
export default authStore;
