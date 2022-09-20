<template>
  <div class="w-screen h-screen bg-graycolor">
    <div class="grid justify-items-center">
      <button class="bold" @click="clearUser">LOGOUT</button>
      <div>
        <h1 class="text-center">
          Hi, {{ user.first_name }} {{ user.last_name }}
        </h1>
        <section id="section_layout" class="grid grid-cols-2">
          <div class="m-2">
            <p>space reports created by {{ user.first_name }}</p>
            <div id="report_container" class="border border-gray-900 h-full">
              <p v-if="!reports.length">no spacereports saved</p>
              <div v-if="reports.length">
                <div
                  v-for="(report, index) in reports.filter(
                    (word) => word.missionuser == this.spacereport.missionuser
                  )"
                  :key="report.missionname"
                  class="secondary-button mx-3 bg-blue-300 rounded"
                >
                  {{ report.missionname }}
                  <button class="primary-button" @click="editReport(report)">
                    edit
                  </button>
                  <button class="secondary-button" @click="removeReport(index)">
                    delete
                  </button>
                </div>
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
  name: "App",
  transition: "index",
  data() {
    return {
      user: "",
      reports: [],
      // missionuser: '',
    };
  },

  mounted() {
    if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
      this.$store.commit("setSpacereport", {
        key: "missionuser",
        value: this.user.id,
      });
      // test of the user in the vuex
      console.log(this.spacereport.missionuser);
    } else {
      this.$router.push({ path: "/login" });
    }
    if (localStorage.reports) {
      this.reports = JSON.parse(localStorage.reports);
    }
  },
  methods: {
    clearUser() {
      localStorage.removeItem("user");
      this.$router.push({ path: "/login" });
    },
    removeReport(index) {
      let response = confirm(`Are you sure you want to delete ${this.report}`);
      if (response) {
        this.reports.splice(index, 1);
        localStorage.setItem("reports", JSON.stringify(this.reports));
      }
    },
    editReport(report) {
      console.log("edit test");
      this.$router.push({ path: "/flow/details" });
      // console.log(report)
      this.$store.commit("editReport", { report: report });
    },
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport;
    },
    spacereports() {
      return this.$store.getters.spacereports;
    },
  },
  watch: {
    user(newUser) {
      localStorage.user = JSON.stringify(newUser);
    },
    report(newReport) {
      localStorage.report = JSON.stringify(newReport);
    },
  },
};
</script>
