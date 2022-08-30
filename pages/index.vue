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
            <div id="report_container" class="border border-gray-900 h-60">
              <Spacereports
                @delete-spacereport="deleteSpacereport"
                :spacereports="spacereports"
              />
              <!-- v bind for at det opdatere dynamisk  -->
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
  </body>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      spacereports: [],
    }
  },
  methods: {
    deleteSpacereport(id) {
      consol.log('spacereport', id)
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
        missiondesc: 'it went bad',
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
