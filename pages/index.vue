<template>
  <body class="w-screen h-screen bg-graycolor">
    <div class="grid justify-items-center">
      <Login />
      <Header />
      <div>
        <h1 class="text-center">Hi, [user.name]</h1>
        <section id="section_layout" class="grid grid-cols-2">
          <div class="m-2">
            <p>space reports created by [user.name]</p>
            <div
              id="report_container"
              class="border border-gray-900 h-20"
            ></div>
          </div>
          <div class="m-2">
            <button @click="gotoSpaceFlow" class="secondary-button">
              + create new space report
            </button>
            <p class="font-bold">fun space facts</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              beatae provident nisi, et facilis, architecto libero, eum officia
              alias repellat necessitatibus. Minus ab laudantium in nam quo
              eveniet cum sunt exercitationem aliquid quam, libero perspiciatis
              nisi animi quae voluptates, eius architecto reprehenderit porro ex
              voluptatum est ratione, dolore et consequatur.
            </p>
          </div>
        </section>
      </div>
    </div>
  </body>
</template>

<script>
import Login from '/components/Login.vue'
import Header from '../components/Header.vue'

export default {
  name: 'App',
  components: Login,
  Header,

  methods: {
    gotoSpaceFlow() {
      this.$router.push('/spaceflow')
    },
  },

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
