

<template>
  <div class="grid justify-items-center">
        <h1 class="text-fourth header-text font-bold text-center">MRT</h1>
        <p v-if="error.length">
          <b>please correct the following errors</b>
          <ul>
            <!-- <li v-for="e in error" v-bind:key="e">
              {{e}}
            </li> -->
          </ul>
        </p>
        <!-- <form @submit.prevent="handleSubmit" class="grid m-1"> -->
        <form @submit.prevent="submitLogin"  class="grid m-1">
          <div class="form-group">
          <label for="text">Email</label>
          <input class="my-1 border-solid border p-1 border-black" id="email" name="email" type="email" v-model="email" placeholder="Please enter your email"/>
          </div>
          <div>
          <label for="password">Password:</label>
          <input class=" my-1 border-solid border p-1 border-black" id="password" name="password" type="text" v-model="password" placeholder="Please enter your password"/>
          </div>
          <button type="submit" @click="updateInput" class="primary-button" >login</button>
        </form>
      </div>
</template>

<script>
import users from '@/assets/users.json'

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
      console.log(users)
      const userTest = users.filter(user => {
        if (user.email === this.email && user.password === this.password) {
          return user
        }
      })
      console.log(userTest[0])
      console.log("user logged in")
    },
  },
  
}

</script>


