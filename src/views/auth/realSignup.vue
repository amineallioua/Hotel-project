<template>
    <div class="w-full h-full flex bg-[#CDCDCD1F] bg-opacity-10">
      <div class="md:flex relative w-1/2 h-full hidden justify-center items-center">
        <img src="../../assets/signup.jpeg" class="absolute w-full h-full object-cover" alt="">
        <div class="absolute w-full h-full opacity-[79%] bg-[#161C1E]"></div>
        <h1 class="font-[500] text-[50px] z-20 text-white">Hello,<br>Friend!</h1>
      </div>
  
      <div class="flex flex-col gap-6 items-center md:w-1/2 w-full justify-center">
        <h1 class="text-[40px] font-[500] text-[#4796A9]">Sign up</h1>
        <div class="flex flex-col gap-4">
          <input
            v-model="name"
            placeholder="Username"
            type="text"
            class="w-[247px] h-[41px] rounded-[10px] outline-none px-5 text-[13px] shadow-form"
          >
          <input
            v-model="phone"
            placeholder="Phone"
            type="text"
            class="w-[247px] h-[41px] rounded-[10px] outline-none px-5 text-[13px] shadow-form"
          >
          <input
            v-model="email"
            placeholder="Email"
            type="email"
            class="w-[247px] h-[41px] rounded-[10px] outline-none px-5 text-[13px] shadow-form"
          >
          <input
            v-model="password"
            placeholder="Password"
            type="password"
            class="w-[247px] h-[41px] rounded-[10px] outline-none px-5 text-[13px] shadow-form"
          >
          <input
            v-model="confirm"
            placeholder="Confirm Password"
            type="password"
            class="w-[247px] h-[41px] rounded-[10px] outline-none px-5 text-[13px] shadow-form"
          >
          <p v-if="errorMessage" class="text-red-500 text-[12px]">{{ errorMessage }}</p>

          <button
            @click="register"
            class="w-[247px] h-[41px] rounded-[10px] bg-custom-gradient font-[500] text-white text-[20px] shadow-form"
          >
            Sign up
          </button>
        </div>
  
        <div class="w-[35px] h-[35px] rounded-full bg-[#EDEDED] shadow-filter flex items-center justify-center">
          <!-- SVG Icon -->
        </div>
        <p class="text-[#4796A9D6] text-opacity-85 text-[10px] font-[400]">
          Have an account?
          <router-link to="login">
            <span class="text-[#3A7A89] text-opacity-100">Log in</span>
          </router-link>
        </p>
      </div>
  
      <button class="absolute top-[25px] right-[25px]">
        <router-link to="/">
          <svg width="33" height="33" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21" cy="21" r="18" stroke="#4796A9" stroke-width="5" />
            <path d="M15.0002 26.9993L27.0002 14.9993" stroke="#4796A9" stroke-width="5" />
            <path d="M27 27L15 15" stroke="#4796A9" stroke-width="5" />
          </svg>
        </router-link>
      </button>
    </div>
  </template>
  
  <script>
  import { authStore } from "../../stores/authStore";
  
  export default {
    data() {
      return {
        auth: authStore(),
        name: "",
        phone: "",
        email: "",
        password: "",
        confirm: "",
        errorMessage: "",
      };
    },
    computed: {
      isNameValid() {
        return this.name.trim().length > 0;
      },
      isPhoneValid() {
        const re = /^[0-9]{10}$/;  // Adjust this based on your desired format
        return re.test(this.phone) && this.phone.trim().length > 0; 
        
      },
      isEmailValid() {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(this.email);
      },
      isPasswordValid() {
        return this.password.trim().length >= 6;
      },
      isConfirmPasswordValid() {
        return this.password === this.confirm;
      },
    },
    methods: {
      register() {
        if (
          this.isNameValid &&
          this.isPhoneValid &&
          this.isEmailValid &&
          this.isPasswordValid &&
          this.isConfirmPasswordValid
        ) {
          this.errorMessage = "";
          this.auth.register(this.name, this.email, this.phone, this.password);
        } else {
          this.setError();
        }
      },
      setError() {
        if (!this.isNameValid) {
          this.errorMessage = "Name is required.";
        } else if (!this.isPhoneValid) {
          this.errorMessage = "invalid phone .";
        } else if (!this.isEmailValid) {
          this.errorMessage = "Invalid email address.";
        } else if (!this.isPasswordValid) {
          this.errorMessage = "Password must be at least 6 characters.";
        } else if (!this.isConfirmPasswordValid) {
          this.errorMessage = "Passwords do not match.";
        }
      },
    },
  };
  </script>
  