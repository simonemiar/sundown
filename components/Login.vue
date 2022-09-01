// https://www.youtube.com/watch?v=UAu7cMuu0BI&ab_channel=CodifyAcademy
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
        <!-- <form @submit.prevent="handleSubmit" class="grid m-1"> -->
        <form class="grid m-1">
          <div class="form-group">
          <label for="text">Email</label>
          <input class="my-1 border-solid border p-1 border-black" id="email" name="email" type="email" v-model="email" placeholder="Please enter your email"/>
          </div>
          <div>
          <label for="password">Password:</label>
          <input class=" my-1 border-solid border p-1 border-black" id="password" name="password" type="text" v-model="password" placeholder="Please enter your password"/>
          </div>
          <button @click="submitLogin" type="submit" class="primary-button ">login</button>
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
      email: '',
      password: '', 
    }
  },
  methods: {
    submitLogin(){
      console.warn(this.email,this.password)
    },
    // async handleSubmit(){
    //   const response = await axios.post(users, {
    //     email: this.email,
    //     password: this.password,
    //   })
    //   console.log(response)

    // },
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