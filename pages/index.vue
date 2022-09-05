<template>
  <div class="w-screen h-screen bg-graycolor">
    <h1>Home</h1>
    <div class="grid justify-items-center">
      <!-- <Login /> -->
      <Header />
      <div>
        <h1 class="text-center">Hi, [user.name]</h1>
        <section id="section_layout" class="grid grid-cols-2">
          <div class="m-2">
            <p>space reports created by {{ spacereports.missionuser }}</p>
            <div id="report_container" class="border border-gray-900 h-60">
              <Spacereports :spacereports="spacereports" />
            </div>
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
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      spacereports: [],
    }
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
    gotoSpaceFlow() {
      this.$router.push('/spaceflow')
    },
  },
  computed: {
    // spacereports() {
    //   return this.$store.getters.spacereports
    // },
  },
}
</script>
