import { defineStore } from "pinia";
import axios from "../services/axios";
import router from "../router/router";
export const authStore = defineStore("user", {
  state: () => ({
    User: null,
    token: null,
    registerRole: null,
  }),

  actions: {
    async login(email, password) {
      try {
        const response = await axios.post("auth/login", { password, email });
        const result = response.data;
        this.User = result.user;
        this.token = result.token;

        router.push("/");

        console.log("this is the", result);
      } catch (error) {
        console.log(error);
      }
    },

    async register(name, email, phone, password) {
      try {
        const role = this.registerRole;
        const response = await axios.post("auth/register", {
          name,
          email,
          phone,
          password,
          role,
        });
        const result = response.data;
        this.User = result.newUser;
        this.token = result.token;
        router.push("/");

        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },

    async logout() {
      try {
        const email = this.User.email;
        const password = this.User.password;
        const response = await axios.post("auth/logout", { email, password });
        const result = response.data;
        localStorage.clear();
        router.push("/");
        window.location.reload();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
    async forget(email) {
      try {
        const response = await axios.post("auth/forgot-password", { email });
        const result = response.data;
        console.log(result);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async reset(newPassword, token) {
      try {
        const response = await axios.post("auth/reset-password", {
          newPassword,
          token,
        });
        const result = response.data;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
    async sendLink() {
      try {
        const email = this.User.email;
        const response = await axios.post("auth/send-verify-link", { email });
        const result = response.data;
        window.alert("check your email");
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
    async activate(token) {
      try {
        const response = await axios.post("auth/verify-email", { token });
        const result = response.data;
        console.log(result);
        return result
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},

  persist: true,
});
