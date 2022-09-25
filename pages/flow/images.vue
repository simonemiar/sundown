<template>
  <div class="bg-blue-50 w-screen h-screen">
    <!-- creating a loading... with fetch hook -->
    <div class="max-w-screen-lg m-auto px-6">
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
        <p class="font-bold">Space mission images</p>
        <div
          id="report_container"
          class="border border-gray-300 bg-white overflow-scroll h-full"
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
      <div class="m-2 mt-10 sm:mt-2">
        <p class="font-bold">Selected images to report</p>
        <div id="select_container" class="border border-gray-300 bg-white overflow-scroll h-80">
          <Missionimage
          @click-image="removeNewImage"
          v-for="newmissionimage in newmissionimages"
          :key="newmissionimage.img_src"
          :image="newmissionimage"
          />
        </div>
      </div>
    </section>
    <div class="flex px-8 place-content-between max-w-screen-lg sm:m-auto">
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
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.spacereport.missionname == "") {
      return redirect('/flow/details')
    }
  },
  data() {
    return {
      error:[],
      isimagescompleted:
        this.$store.state.spacereport.iscompleted.isimagescompleted,
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
        this.$store.commit("setCompleted", {
        key: "isimagescompleted",
        value: true,
      });
        this.$router.push("/flow/map");
      } else {
        this.error = ["Please select between one and maximum seven images to proceed"]
      }
      // e.preventDefault
    },
    pushImage(newimage) {
      console.log("test push", newimage)
      console.log("test img", this.missionimages)
      this.$store.commit("removeOriginalImage", newimage);
      // this.$store.dispatch("removeOriginalImage", newimage);
      // this.newmissionimages = [...this.newmissionimages, newimage]
      // console.log(this.spacereport.missionimages)
      
    },
    removeNewImage(newimage){
      console.log("test remove", newimage)
      this.$store.commit("removeNewImage", newimage);
      this.missionimages = [...this.missionimages, newimage]
    }   
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport
    },
    iscompleted() {
      return this.$store.getters.spacereport.iscompleted;
    },
    missionimages: {
      get() {
        return this.$store.getters.spacereport.missionimages
      },
      set(newValue) {
        console.log('set test', newValue)
        return this.$store.commit('setSpacereport', {
          key: 'missionimages',
          value: newValue,
        })
      },
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
