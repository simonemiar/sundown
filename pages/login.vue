<template>
  <div class="w-screen h-screen bg-blue-50 page-enter-active">
    <div class="w-4/5 m-auto log-bg sm:py-5">
      <h1
        class="py-5 text-6xl font-bold text-center text-blue-800 focus-in-contract-bck"
      >
        MRT
      </h1>
    </div>
    <div class="grid justify-center sm:flex">
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
            class="p-1 my-1 border border-black border-solid"
            id="usernameoremail"
            name="usernameoremail"
            type="text"
            v-model="usernameoremail"
            placeholder="Please enter your email or username"
            @blur="handleUsernameOrEmailChange"
          />
        </div>
        <span class="text-red-700" v-if="msgUsernameorPassword">{{
          msgUsernameorPassword
        }}</span>
        <div class="grid">
          <label class="font-semibold" for="password">Password:</label>
          <input
            class="p-1 my-1 border border-black border-solid"
            id="password"
            name="password"
            type="password"
            v-model="password"
            placeholder="Please enter your password"
            @blur="handlePasswordChange"
          />
        </div>
        <!-- <span class="text-red-700" v-if="msg.password">{{ msg.password }}</span> -->
        <span class="text-red-700" v-if="msgPassword">{{ msgPassword }}</span>
        <button type="submit" class="my-4 primary-button">login</button>
      </form>
    </div>
    <p>Data til login - Kun til praktik rapport bedømmere</p>
    <pre class="text-xs">{{ users }}</pre>
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
      msgPassword: "",
      msgUsernameorPassword: "",
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
      console.log("blur");
      let checkEmail = users.some((object) => {
        return object.email === this.usernameoremail;
      });
      let checkUsername = users.some((object) => {
        return object.username === this.usernameoremail;
      });

      if (checkEmail) {
        console.log("this is an email");
        this.msgUsernameorPassword = "";
      } else if (checkUsername) {
        console.log("this is an username");
        this.msgUsernameorPassword = "";
      } else {
        console.log("this is not an email");
        this.msgUsernameorPassword = "Invalid Username or Email";
      }
    },
    handlePasswordChange() {
      let checkPassword = users.some((object) => {
        return object.password === this.password;
      });

      if (checkPassword) {
        console.log("blur 2");
        console.log("this is an correct password");
        this.msgPassword = "";
      } else {
        console.log("blur 3");
        console.log("this is not an correct password");
        this.msgPassword = "Invalid password";
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
  computed: {
    users() {
      return users;
    },
  },
};
</script>
