<template>
  <div class="w-screen h-screen bg-blue-50">
    <div class="grid sm:flex justify-center">
      <div>
        <h1 class="font-bold">WELCOME TO MRT</h1>
        <p class="w-[40ch] my-1.5">
          The International Space Station private reporting tool. This tool was
          created for engineers and likeminded nerds.
        </p>
        <p>Please insert your user information on the right</p>
      </div>
      <form @submit.prevent="submitLogin" class="grid m-1 w-full sm:w-1/3">
        <div class="grid">
          <label for="text">Email</label>
          <input
            class="my-1 border-solid border p-1 border-black"
            id="email"
            name="email"
            type="email"
            v-model="email"
            placeholder="Please enter your email"
          />
        </div>
        <span class="text-red-700" v-if="msg.email">{{ msg.email }}</span>
        <div class="grid">
          <label for="password">Password:</label>
          <input
            class="my-1 border-solid border p-1 border-black"
            id="password"
            name="password"
            type="password"
            v-model="password"
            placeholder="Please enter your password"
          />
        </div>
        <span v-if="msg.password">{{ msg.password }}</span>
        <button type="submit" class="primary-button">login</button>
      </form>
    </div>
  </div>
</template>

<script>
import users from "@/assets/users.json";

export default {
  name: "Login",
  transition: "index",
  data() {
    return {
      email: "",
      password: "",
      user: ["johnny"],
      msg: [],
    };
  },
  methods: {
    submitLogin() {
      const currentUser = users.find((user) => {
        if (
          user.email === this.email &&
          user.password === this.password.toString()
        ) {
          return user;
        } else {
          return false;
        }
      });

      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        this.$router.push({ path: "/" });

        const outputuser = localStorage.getItem("user");
        console.log(outputuser);
      } else {
        alert("We could not find the user");
      }
    },
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
    validatePassword(value) {
      let difference = 8 - value.length;
      if (value.length < 8) {
        this.msg["password"] =
          "Must be 8 characters! " + difference + " characters left";
      } else {
        this.msg["password"] = "";
      }
    },
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
  },
};
</script>
