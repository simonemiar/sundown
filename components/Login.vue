<template>
  <div class="grid justify-items-center">
        <h1 class="text-fourth header-text font-bold text-center">MRT</h1>
        <p v-if="error.length">
          <b>please correct the following errors</b>
          <ul>
            <li v-for="e in error" v-bind:key="e">
              {{e}}
            </li>
          </ul>
        </p>
        <form @submit="login" class="grid m-1">
          <label for="text">Email</label>
          <input class="my-1 border-solid border p-1 border-black" id="email" type="email" v-model="email" placeholder="Please enter your email"></input>
          <label for="password">Password:</label>
          <input class=" my-1 border-solid border p-1 border-black" id="password" type="text" v-model="password" placeholder="Please enter your password"></input>
          <button type="submit" class="primary-button ">login</button>
        </form>
      </div>
</template>

<script>
const users = require('../assets/users.json')
console.log(users[0])

export default {
  name: "Login",
  data(){
    return {
			error:[],
      email: null,
      password: null, 
    }
  },
  methods: {
    login(e) 
    { 
      if(this.email && this.password) 
      {
        console.log("login called")
        // loop here
        } 
        this.error=[]; 
        if(!this.email)
        {
          this.error = ["email is required"]
        }
        if(!this.password)
        {
          this.error = ["password is required"]
        }
        console.log("errors", this.error);
        e.preventDefault()
      }
    }
}

</script>

// for loop submitted through json
// store login in local storage 
// 