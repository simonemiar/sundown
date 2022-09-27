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
          clickHandle(); 
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
      error:[],
      isimagescompleted:
        this.$store.state.spacereport.iscompleted.isimagescompleted,
      currentreport: {},
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
  mounted(){
    if (localStorage.currentReport) {
      this.currentreport = JSON.parse(localStorage.currentReport);
      // test of the user in the vuex
    }
  },
  methods: {
    clickHandle(e) {
      if(this.newmissionimages.length < 7 && this.newmissionimages.length > 0){
        this.$store.commit("setCompleted", {
        key: "isimagescompleted",
        value: true,
      });
        this.$router.push("/flow/map");
        this.updateLocalstorage()
      } else {
        this.error = ["Please select between one and maximum seven images to proceed"]
      }
      // e.preventDefault
      
    },
    pushImage(newimage) {
      console.log("test push", newimage)
      this.$store.commit("removeOriginalImage", newimage);

    },
    removeNewImage(newimage){
      console.log("test remove", newimage)
      this.$store.commit("removeNewImage", newimage);
      this.missionimages = [...this.missionimages, newimage]
    },
    updateLocalstorage() {
      let getCurrentReport = localStorage.getItem("currentReport");
      let parseCurrentReport = JSON.parse(getCurrentReport)
      let currentReport = {...parseCurrentReport, ...{missionimages: this.missionimages, newmissionimages: this.newmissionimages, iscompleted: {...parseCurrentReport.iscompleted, isimagescompleted: this.$store.state.spacereport.iscompleted.isimagescompleted}}}
      this.currentreport = currentReport
      console.log("ddd",this.currentreport.newmissionimages)
      localStorage.setItem("currentReport", JSON.stringify(currentReport));
    },  
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
        return this.currentreport.missionimages || this.$store.getters.spacereport.missionimages
      },
      set(newValue) {
        console.log('set test old', newValue)
        return this.$store.commit('setSpacereport', {
          key: 'missionimages',
          value: newValue,
        })
      },
    },
    newmissionimages: {
      get() {
        return this.currentreport.newmissionimages || this.$store.getters.spacereport.newmissionimages 
      },
      set(newValue) {
        console.log('set test new', newValue)
        return this.$store.commit('setSpacereport', {
          key: 'newmissionimages',
          value: newValue,
        })
      },
    },
  },
}
</script>
