<template>
  <div class="w-screen h-screen bg-blue-50">
    <div class="grid sm:flex justify-center">
      <div>
        <h1 class="font-bold text-blue-800">WELCOME TO MRT</h1>
        <p class="w-[40ch] my-1.5">
          The International Space Station private reporting tool. This tool was
          created for engineers and likeminded nerds.
        </p>
        <p>Please insert your user information on the right</p>
      </div>
      <form @submit.prevent="submitLogin" class="grid m-1 w-full sm:w-1/3">
        <div class="grid">
          <label for="text">Username or Email</label>
          <input
            class="my-1 border-solid border p-1 border-black"
            id="usernameoremail"
            name="usernameoremail"
            type="text"
            v-model="usernameoremail"
            placeholder="Please enter your email or username"
            @keyup="handleUsernameOrEmailChange()"
          />
        </div>
        <span class="text-red-700" v-if="msg.usernameoremail">{{
          msg.usernameoremail
        }}</span>
        <div class="grid">
          <label for="password">Password:</label>
          <input
            class="my-1 border-solid border p-1 border-black"
            id="password"
            name="password"
            type="password"
            v-model="password"
            placeholder="Please enter your password"
            @keyup="handlePasswordChange()"
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
  name: "Login",
  transition: "login",
  data() {
    return {
      usernameoremail: "",
      password: "",
      user: [""],
      msg: [],
    };
  },
  methods: {
    handleUsernameOrEmailChange() {
      let checkEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.usernameoremail === this.user.email
        );
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
    // validateEmail(value) {
    //   if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
    //     this.msg["email"] = "";
    //   } else {
    //     this.msg["email"] = "Invalid Email Address";
    //   }
    // },
    // validatePassword(value) {
    //   let difference = 8 - value.length;
    //   if (value.length < 8) {
    //     this.msg["password"] =
    //       "Must be 8 characters! " + difference + " characters left";
    //   } else {
    //     this.msg["password"] = "";
    //   }
    // },
  },
  // watch: {
  //   email(value) {
  //     this.email = value;
  //     this.validateEmail(value);
  //   },
  // },
};
</script>
