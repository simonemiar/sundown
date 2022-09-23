<template>
  <div class="bg-blue-50 w-screen h-screen">
    <section id="section_layout" class="sm:grid sm:grid-cols-2">
      <div class="m-2 p-2 bg-white rounded border border-gray-300 h-80">
        <p class="font-bold">Mission name:</p>
        <p>{{ spacereport.missionname }}</p>
        <div>
          <p class="font-bold">Mission Descripton</p>
          <p>{{ spacereport.missiondesc }}</p>
        </div>
        <div>
          <p class="font-bold">Mission start date</p>
          <p>{{ formatDate(spacereport.missiondate) }}</p>
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
        class="m-2 p-2 bg-white rounded border border-gray-300 overflow-scroll h-80"
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

    <div class="flex px-8 place-content-between max-w-screen-lg sm:m-auto">
      <NuxtLink to="/flow/map" class="secondary-button"
        ><button>BACK</button></NuxtLink
      >
      <NuxtLink to="/" class="primary-button">
        <button @click="finaliseReport">FINALISE REPORT</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  layout: "flow",
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.spacereport.missionname == "") {
      return redirect("/flow/details");
    }
  },
  data() {
    return {
      reports: JSON.parse(localStorage.getItem("reports")),
      isoverviewcompleted:
        this.$store.state.spacereport.iscompleted.isoverviewcompleted,
    };
  },
  mounted() {
    this.$store.commit("setCompleted", {
      key: "isoverviewcompleted",
      value: true,
    });
  },
  methods: {
    finaliseReport() {
      this.$store.commit("setCompleted", {
        key: "isoverviewcompleted",
        value: true,
      });
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
    formatDate(missiondate) {
      return new Date(missiondate).toLocaleString("en-GB");
    },
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport;
    },
    coordinates() {
      return this.$store.getters.spacereport.coordinates;
    },
    iscompleted() {
      return this.$store.getters.spacereport.iscompleted;
    },
  },
};
</script>
