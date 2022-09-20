<template>
  <div class="grid justify-items-center">
    <form @submit.prevent="submitLogin" class="grid m-1">
      <div class="form-group">
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
      <div>
        <label for="password">Password:</label>
        <input
          class="my-1 border-solid border p-1 border-black"
          id="password"
          name="password"
          type="text"
          v-model="password"
          placeholder="Please enter your password"
        />
      </div>
      <button type="submit" class="primary-button">login</button>
    </form>
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
  },
};
</script>
