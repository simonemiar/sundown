<template>
  <div class="w-screen h-screen bg-graycolor">
    <div class="grid justify-items-center">
      <Header />
      <button class="bold" @click="clearUser">LOGOUT</button>
      <div>
        <h1 class="text-center">
          Hi, {{ user.first_name }} {{ user.last_name }}
        </h1>
        <section id="section_layout" class="grid grid-cols-2">
          <div class="m-2">
            <p>space reports created by {{ user.first_name }}</p>
            <div id="report_container" class="border border-gray-900 h-60">
              <div
                v-for="(report, index) in reports"
                :key="report"
                class="secondary-button mx-3 bg-blue-300 rounded"
              >
                {{ reports.missionname }}
                <button
                  class="text-white bg-blue-800 px-2"
                  @click="updateReport(index)"
                >
                  update
                </button>
                <button
                  class="text-white bg-black px-2"
                  @click="removeReport(index)"
                >
                  x
                </button>
              </div>
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
      // thespacereports: [],
      user: '',
      reports: [],
    }
  },
  // created() {
  //   this.thespacereports = [
  //     {
  //       // fake space reports
  //       id: 1,
  //       missionname: 'first launch',
  //       missiondesc: 'it went bad',
  //       missiondate: '11-11-11',
  //       selectedimages: 'pictures',
  //       lat: '1234',
  //       long: '1234',
  //     },
  //     {
  //       id: 2,
  //       missionname: 'second launch',
  //       missiondesc: 'it went really bad bad',
  //       missiondate: '11-11-11',
  //       selectedimages: 'pictures',
  //       lat: '1234',
  //       long: '1234',
  //     },
  //   ]
  // },
  mounted() {
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user)
    } else {
      this.$router.push({ path: '/login' })
    }
    if (localStorage.reports) {
      this.reports = JSON.parse(localStorage.reports)
      console.log(this.reports.value)
    }
  },
  methods: {
    // storage() {
    //   if (process.browser) {
    //     localStorage.getItem('authToken')
    //   }
    // },
    clearUser() {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    },
    removeReport(index) {
      console.log('delete test')
      console.log(this.reports)
      this.reports.splice(index, 1)
      localStorage.setItem('reports', JSON.stringify(this.reports))

      // use splice here
      // this.spacereports.splice(this.spacereports.indexOf(this.spacereports), 1)
    },
    updateReport(index) {
      console.log('edit test')
    },
  },
  computed: {
    spacereports() {
      return this.$store.getters.spacereports
    },
  },
  watch: {
    user(newUser) {
      localStorage.user = JSON.stringify(newUser)
    },
    report(newReport) {
      localStorage.report = JSON.stringify(newReport)
    },
  },
}
</script>
