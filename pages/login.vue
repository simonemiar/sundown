<template>
  <div class="w-screen h-screen bg-blue-50 page-enter-active">
    <div class="log-bg w-4/5 m-auto sm:py-5">
      <!-- <img
        class="log-spaceship spaceship1"
        src="../assets/img/spaceship.svg"
        alt="spaceship"
      />
      <img
        class="log-spaceship spaceship2"
        src="../assets/img/spaceship.svg"
        alt="spaceship"
      />
      <img
        class="log-spaceship spaceship3 opacity-40"
        src="../assets/img/spaceship.svg"
        alt="spaceship"
      />
      <img
        class="log-spaceship spaceship4"
        src="../assets/img/spaceship.svg"
        alt="spaceship"
      /> -->
      <h1 class="font-bold text-blue-800 text-center text-5xl lg:text-7xl">
        WELCOME TO MRT
      </h1>
    </div>
    <div class="grid sm:flex justify-center">
      <div class="m-1">
        <p class="font-semibold">What is MRT</p>
        <p class="sm:w-[37ch] mb-1.5">
          The International Space Station private reporting tool. This tool was
          created for engineers and likeminded nerds.
        </p>
        <p>Please insert your user information on the right</p>
      </div>
      <form @submit.prevent="submitLogin" class="grid m-1 sm:w-full sm:w-1/3">
        <div class="grid">
          <label class="font-semibold" for="text">Username or Email</label>
          <input
            class="my-1 border-solid border p-1 border-black"
            id="usernameoremail"
            name="usernameoremail"
            type="text"
            v-model="usernameoremail"
            placeholder="Please enter your email or username"
            @change="handleUsernameOrEmailChange()"
          />
        </div>
        <span class="text-red-700" v-if="msg.usernameoremail">{{
          msg.usernameoremail
        }}</span>
        <div class="grid">
          <label class="font-semibold" for="password">Password:</label>
          <input
            class="my-1 border-solid border p-1 border-black"
            id="password"
            name="password"
            type="password"
            v-model="password"
            placeholder="Please enter your password"
            @change="handlePasswordChange()"
          />
        </div>
        <span class="text-red-700" v-if="msg.password">{{ msg.password }}</span>
        <button type="submit" class="primary-button my-4">login</button>
      </form>
    </div>
  </div>
</template>

<script>
import users from "@/assets/users.json";

export default {
  name: "login",
  layout: "empty",
  transition: "login",
  data() {
    return {
      usernameoremail: "",
      password: "",
      user: [""],
      msg: [],
    };
  },
  mounted() {
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
      this.$store.commit("setSpacereport", {
        key: "missionuser",
        value: this.user.id,
      });
      // test of the user in the vuex
      this.$router.push({ path: "/" });
    } else {
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    handleUsernameOrEmailChange() {
      let checkEmail = users.some((object) => {
        return object.email === this.usernameoremail;
      });
      let checkUsername = users.some((object) => {
        return object.username === this.usernameoremail;
      });

      if (checkEmail) {
        console.log("this is an email");
        this.msg["usernameoremail"] = "";
      } else if (checkUsername) {
        console.log("this is an username");
        this.msg["usernameoremail"] = "";
      } else {
        console.log("this is not an email");
        this.msg["usernameoremail"] = "Invalid Username or Email";
      }
    },
    handlePasswordChange() {
      let checkPassword = users.some((object) => {
        return object.password === this.password;
      });

      if (checkPassword) {
        console.log("this is an correct password");
        this.msg["password"] = "";
      } else {
        console.log("this is not an correct password");
        this.msg["password"] = "Invalid password";
      }
    },
    submitLogin() {
      const currentUser = users.find((user) => {
        if (
          (user.email === this.usernameoremail ||
            user.username === this.usernameoremail) &&
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
        alert("We could not find the user\nPlease checkout below errors");
      }
    },
  },
};
</script>
