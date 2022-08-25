<template>
  <body class="w-screen h-screen bg-graycolor">
    <div class="grid justify-items-center">
      <Login />
      <div class="astronauts">
        <p>hello</p>
      </div>
    </div>
  </body>
</template>

<script>
import Login from '/components/Login.vue'
// const astronautData = "astronauts.json";
export default {
  name: 'App',
  components: { Login },

  // data () {
  //   return {
  //     users: null,
  //   }
  // },
  // async mounted () {
  //   const response = await fetch(astronautData)
  //   const { data: users } = await response.json()
  //   this.users = users
  //   console.log(users)
  // },
}
</script>
