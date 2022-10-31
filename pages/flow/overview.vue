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

      <button class="primary-button" @click="finaliseReport">
        FINALISE REPORT
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  layout: "flow",
  data() {
    return {
      reports: [],
      isoverviewcompleted:
        this.$store.state.spacereport.iscompleted.isoverviewcompleted,
      currentreport: {},
    };
  },
  mounted() {
    if (localStorage.reports) {
      let getReport = localStorage.getItem("reports");
      let parseReport = JSON.parse(getReport);

      if (parseReport !== undefined) {
        this.reports = parseReport;
      }
    }

    this.$store.commit("setCompleted", {
      key: "isoverviewcompleted",
      value: true,
    });
    if (localStorage.currentReport) {
      let getCurrentReport = localStorage.getItem("currentReport");
      let parseCurrentReport = JSON.parse(getCurrentReport);
      let realCurrentReport = Object.assign(
        this.currentreport,
        parseCurrentReport
      );

      // set currentreport to spacereport
      this.$store.commit("setCurrentReport", this.currentreport);

      console.log("date", this.currentreport);
      this.updateCurrentStorage();
    } else {
      this.$store.commit("setCurrentReport", this.currentreport);
      // this.$store.state.spacereport = this.currentreport;
      console.log("iscompleted", this.spacereport.iscompleted);
      this.updateCurrentStorage();
    }
  },
  methods: {
    updateCurrentStorage() {
      let getCurrentReport = localStorage.getItem("currentReport");
      let parseCurrentReport = JSON.parse(getCurrentReport);
      console.log("parse report", parseCurrentReport);
      let currentReport = {
        ...parseCurrentReport,
        ...{
          iscompleted: {
            ...parseCurrentReport.iscompleted,
            isoverviewcompleted:
              this.$store.state.spacereport.iscompleted.isoverviewcompleted,
          },
          // iscompleted: {
          //   ...parseCurrentReport.iscompleted,
          //   isoverviewcompleted: this.isoverviewcompleted,
          // },
        },
      };
      localStorage.setItem("currentReport", JSON.stringify(currentReport));
    },
    finaliseReport() {
      console.log(this.reports);

      if (this.reports === null) {
        this.reports = [];
      }
      const findReport = this.reports.find(
        (report) => report.missionid === this.spacereport.missionid
      );
      console.log("find report", findReport);
      if (findReport) {
        // Add to a specified location
        this.reports.splice(
          this.reports.indexOf(findReport),
          1,
          this.spacereport
        );
      } else {
        this.reports.push(this.spacereport);
      }
      this.updateLocalstorage();
      localStorage.removeItem("currentReport");
      this.resetReport();
      this.$router.push({ path: "/" });
    },
    updateLocalstorage() {
      localStorage.setItem("reports", JSON.stringify(this.reports));
    },
    resetReport() {
      console.log("test reset");
      this.$store.commit("resetReport");
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
