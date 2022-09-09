<template>
  <div class="w-screen h-screen bg-graycolor">
    <div class="grid justify-items-center">
      <Header />
      <button @click="clearUser">logout</button>
      <div>
        <h1 class="text-center">Hi, {{ user }}</h1>
        <section id="section_layout" class="grid grid-cols-2">
          <div class="m-2">
            <p>space reports created by {{ user }}</p>
            <div id="report_container" class="border border-gray-900 h-60">
              <Spacereports :spacereports="spacereports" />
            </div>
          </div>
          <div class="m-2">
            <NuxtLink to="/flow/details" class="secondary-button"
              >+ create new space report</NuxtLink
            >
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
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      spacereports: [],
      user: '',
    }
  },
  mounted() {
    if (localStorage.user) {
      this.user = localStorage.user
    } else {
      this.$router.push({ path: '/login' })
    }
  },
  watch: {
    user(newUser) {
      localStorage.user = newUser
    },
  },
  created() {
    this.spacereports = [
      {
        // fake space reports
        id: 1,
        missionname: 'first launch',
        missiondesc: 'it went bad',
        missiondate: '11-11-11',
        selectedimages: 'pictures',
        lat: '1234',
        long: '1234',
      },
      {
        id: 2,
        missionname: 'second launch',
        missiondesc: 'it went really bad bad',
        missiondate: '11-11-11',
        selectedimages: 'pictures',
        lat: '1234',
        long: '1234',
      },
    ]
  },

  methods: {
    clearUser() {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    },
  },
  computed: {
    // spacereports() {
    //   return this.$store.getters.spacereports
    // },
  },
}
</script>
