<template>
  <div>
    <!-- creating a loading... with fetch hook -->
    <div class="max-w-screen-lg m-auto">
      <p class="m-2 text-red-700" v-if="error.length">
        <b>please correct the following errors</b>
        <ul>
          <li v-for="e in error" v-bind:key="e">
            {{e}}
          </li>
        </ul>
      </p>
    </div>
    <section id="section_layout" class="sm:grid sm:grid-cols-2">
      <div class="m-2 h-80">
        <p class="font-bold">space mission images</p>
        <div
          id="report_container"
          class="border border-gray-900 overflow-scroll h-full"
        >
          <div v-if="!$fetchState.pending">
            <Missionimage
              @click-image="pushImage"
              v-for="missionimage in missionimages"
              :key="missionimage.img_src"
              :image="missionimage"
            />
          </div>
          <div v-else>Loading...</div>
        </div>
      </div>
      <div class="m-2 my-10 sm:my-2">
        <p class="font-bold">Selected images to report</p>
        <div id="select_container" class="border border-gray-900 overflow-scroll h-80">
          <Missionimage
            v-for="newmissionimage in newmissionimages"
            :key="newmissionimage.img_src"
            :image="newmissionimage"
            @click-image="removeImage"
            
          />
        </div>
      </div>
    </section>
    <div class="flex place-content-between max-w-screen-lg m-2 sm:m-auto">
      <NuxtLink to="/flow/details" class="secondary-button"><button>back</button></NuxtLink>
        <button class="primary-button" @click="
          clickHandle()
        ">forward</button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Images",
  layout: "flow",
  data() {
    return {
      // missionimages: '',
      error:[],
    }
  },
  //     'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=15'
  async fetch() {
    const data = await fetch('https://api.nuxtjs.dev/mountains').then((res) =>
      res.json()
    )
    // console.log(data)
    this.missionimages = data
  },
  methods: {
    clickHandle(e) {
      console.log(this.newmissionimages )
      if(this.newmissionimages.length < 7 && this.newmissionimages.length > 0){
        this.$router.push("/flow/map");
      } else {
        this.error = ["Please select between one and maximum seven images to proceed"]
      }
      // e.preventDefault
    },
    pushImage(newimage) {
      console.log(newimage)
      this.newmissionimages = [...this.newmissionimages, newimage]
    },
    removeImage(newimage){
      this.$store.commit("deleteImage", newimage);   
    }
    
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport
    },
    newmissionimages: {
      get() {
        return this.$store.getters.spacereport.newmissionimages
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
