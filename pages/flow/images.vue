<template>
  <div>
      <Header />
    <h3 class="text-center">space images</h3>
    <!-- creating a loading... with fetch hook -->
    <p v-if="error.length">
           <b>please correct the following errors</b>
           <ul>
             <li v-for="e in error" v-bind:key="e">
               {{e}}
             </li>
           </ul>
         </p>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2 h-80">
        <p class="font-bold">space mission images</p>
        <div
          id="report_container"
          class="border border-gray-900 overflow-scroll h-full"
        >
          <div v-if="!$fetchState.pending">
            <Missionimage
              @push-image="pushImage"
              v-for="missionimage in missionimages"
              :key="missionimage.img_src"
              :image="missionimage"
            />
          </div>
          <div v-else>Loading...</div>
        </div>
      </div>
      <div class="m-2">
        <p class="font-bold">Selected images to report</p>
        <div id="select_container" class="border border-gray-900 overflow-scroll h-full">
          <Missionimage
            v-for="newmissionimage in newmissionimages"
            :key="newmissionimage.img_src"
            :image="newmissionimage"
          />
        </div>
      </div>
    </section>
    <div class="flex place-content-between">
      
    
      <NuxtLink to="/flow/details" class="secondary-button"><button>back</button></NuxtLink>
      <NuxtLink to="/flow/map" class="primary-button">
        <button @click="
          clickHandle()
          updateInput()
        ">forward</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Images",
  data() {
    return {
      missionimages: '',
      coordinates: {
        missionlongitude: '',
        missionlatitude: '',
      },
      error:[],
    }
  },
  // needs to loop though array to get to img
  // async fetch() {
  //   const data = await fetch(
  //     'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=15'
  //   ).then((res) => res.json())
  //   console.log(data)
  //   this.missionimages = data.photos
  // },
  async fetch() {
    const data = await fetch('https://api.nuxtjs.dev/mountains').then((res) =>
      res.json()
    )
    // console.log(data)
    this.missionimages = data
  },
  created() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then((response) => response.json())
      .then((data) => {
        this.coordinates.missionlongitude = data.longitude
        this.coordinates.missionlatitude = data.latitude
      })
      .catch((e) => console.log(e))
  },
  methods: {
    clickHandle(e) {
      if (this.newmissionimages.length) {
        this.$emit('toggle-flow-map')
        // } else if (this.newmissionimages.length < 7) {
        //   this.$emit('toggle-flow-map')
      } else {
        this.error=[]; 
        if(this.newmissionimages.length < 1)
        {
          this.error = ["Please select minimum one image to proceed"]
        } else {
        console.log("errors", this.error);
        e.preventDefault
        // alert('double wrong number to many')
        }
        if(this.newmissionimages.length > 7)
        {
          this.error = ["Please select maximum seven image to proceed"]
        } else {
        console.log("errors", this.error);
        e.preventDefault
        // alert('double wrong number to many')
        }
      }
    },
    updateInput() {
      console.log('test input')
      this.$store.commit('setCoordinates', {
        key: 'missionlongitude',
        value: this.coordinates.missionlongitude,
      })
      this.$store.commit('setCoordinates', {
        key: 'missionlatitude',
        value: this.coordinates.missionlatitude,
      })
    },
    pushImage(newimage) {
      console.log(newimage)
      this.newmissionimages = [...this.newmissionimages, newimage]
    },
  },
  computed: {
    spacereports() {
      return this.$store.getters.spacereports
    },
    newmissionimages: {
      get() {
        return this.$store.getters.spacereports.newmissionimages
      },
      set(newValue) {
        console.log('set test', newValue)
        return this.$store.commit('setSpacereport', {
          key: 'newmissionimages',
          value: newValue,
        })
      },
    },
  },
}
</script>
