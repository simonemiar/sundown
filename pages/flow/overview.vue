<template>
  <div class="bg-blue-50 w-screen h-screen">
    <section id="section_layout" class="sm:grid sm:grid-cols-2">
      <div class="m-2 p-2 bg-white rounded border border-gray-900 h-80">
        <p class="font-bold">Mission name:</p>
        <p>{{ spacereport.missionname }}</p>
        <div>
          <p class="font-bold">Mission Descripton</p>
          <p>{{ spacereport.missiondesc }}</p>
        </div>
        <div>
          <p class="font-bold">Mission start date</p>
          <p>{{ displaydate }}</p>
          <!-- <p><Date /></p> -->
        </div>
        <div>
          <p class="font-bold">Lat:</p>
          <p>{{ coordinates.missionlatitude }}</p>
        </div>
        <div>
          <p class="font-bold">Long:</p>
          <p>{{ coordinates.missionlongitude }}</p>
        </div>
      </div>
      <div
        class="m-2 p-2 bg-white rounded border border-gray-900 overflow-scroll h-80"
      >
        <div>
          <p class="font-bold">Images</p>
          <Missionimage
            v-for="image in spacereport.newmissionimages"
            :key="image.id"
            :image="image"
          />
        </div>
      </div>
    </section>

    <div class="flex place-content-between max-w-screen-lg m-2 sm:m-auto">
      <NuxtLink to="/flow/map" class="secondary-button"
        ><button>back</button></NuxtLink
      >
      <NuxtLink to="/" class="primary-button">
        <button @click="finaliseReport">Finalise report</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  layout: "flow",
  data() {
    return {
      reports: JSON.parse(localStorage.getItem("reports")),
      displaydate: new Intl.DateTimeFormat("en-GB").format(
        this.$store.state.spacereport.missiondate
      ),
    };
    //  displaydate: this.$store.state.spacereport.missiondate
    //     .toISOString()
    //     .replace(/T/, " ")
    //     .replace(/\..+/, ""), // first replace T with a space  // second replace delete the dot and everything after,,
    // };
  },

  methods: {
    finaliseReport() {
      if (this.reports === null) {
        this.reports = [];
      }
      const findReport = this.reports.find(
        (report) => report.missionid === this.spacereport.missionid
      );
      console.log("find report", findReport);
      if (findReport) {
        this.reports.splice(this.reports.indexOf(findReport), 1);
        this.reports.push(this.spacereport);
      } else {
        this.reports.push(this.spacereport);
      }
      this.updateLocalstorage();
      this.resetReport();
    },
    updateLocalstorage() {
      localStorage.setItem("reports", JSON.stringify(this.reports));
    },
    resetReport() {
      console.log("test reset");
      this.$store.dispatch("resetReport"); // calling my action in the store
    },
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport;
    },
    coordinates() {
      return this.$store.getters.spacereport.coordinates;
    },
  },
};
</script>
