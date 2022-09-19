<template>
  <div>
    <h3 class="text-center">space overview</h3>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2">
        <p class="font-bold">Mission name:</p>
        <p>{{ spacereport.missionname }}</p>
        <div>
          <p class="font-bold">Mission Descripton</p>
          <p>{{ spacereport.missiondesc }}</p>
        </div>
        <div>
          <p class="font-bold">Mission start date</p>
          <p>{{ spacereport.missiondate }}</p>
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
      <div class="m-2 h-80">
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

    <div class="flex place-content-between">
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
    };
  },
  methods: {
    test() {
      const findReport = this.reports.find(
        (report) => report.missionid === this.spacereport.missionid
      );
      // console.log(findReport)
      // if (findReport) {
      //   console.log('working dog shit')
      //   console.log("hahahahhah I got u")
      // } else {
      //   console.log('not working dog shit')
      //   this.reports.push(this.spacereport)
      // }
      // const testReport = this.reports.find(
      //   (report) => report.missionid == this.spacereport.missionid
      // )
    },
    finaliseReport() {
      if (this.reports === null) {
        this.reports = [];
      }
      const findReport = this.reports.find(
        (report) => report.missionid === this.spacereport.missionid
      );
      console.log("find report", findReport);
      if (findReport) {
        console.log("hahahahhah I got u");
        this.reports.splice(this.reports.indexOf(findReport), 1);
        this.reports.push(this.spacereport);
      } else {
        console.log("not working dog shit");
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
