<template>
  <div class="w-screen h-screen bg-blue-50">
    <button class="bold absolute top-1 right-1" @click="clearUser">
      <img class="w-10 h-10" src="../assets/img/logout.png" alt="logout" />
    </button>
    <div>
      <h1 class="my-6 text-center">
        Hi, {{ user.first_name }} {{ user.last_name }}
      </h1>
    </div>
    <div class="grid sm:flex justify-items-center">
      <section id="section_layout" class="grid mb-12 sm:grid sm:grid-cols-2">
        <div class="m-2 row-start-2 row-end-2 sm:col-start-1 sm:col-end-2">
          <p>space reports created by {{ user.first_name }}</p>
          <div
            id="report_container"
            class="border border-gray-900 overflow-scroll h-80 rounded"
          >
            <p v-if="!reports.length">no spacereports saved</p>
            <div v-if="reports.length">
              <div
                v-for="(report, index) in reports.filter(
                  (word) => word.missionuser == this.spacereport.missionuser
                )"
                :key="report.missionname"
                class="card grid mx-3 bg-blue-300 rounded sm:grid-cols-3"
              >
                <div class="p-3 sm:col-span-2 sm:row-span-2">
                  <p
                    class="text-left font-bold text-lg uppercase overflow-hidden whitespace-nowrap overflow-ellipsis"
                  >
                    {{ report.missionname }}
                  </p>
                  <p class="text-left text-sm">
                    <span class="font-bold">DATE:</span>
                    {{ report.missiondate }}
                  </p>
                </div>
                <button
                  class="primary-button text-sm sm:m-0"
                  @click="editReport(report)"
                >
                  edit
                </button>
                <button
                  class="secondary-button text-sm"
                  @click="removeReport(index)"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="m-2 sm:m-10 row-start-1 row-end-2 sm:row-start-2 sm:row-end-3"
        >
          <NuxtLink to="/flow/details" class="secondary-button w-full"
            >+ create new space report</NuxtLink
          >
          <p class="font-bold my-4 uppercase">fun space facts</p>
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
</template>

<script>
export default {
  name: "App",
  transition: "index",
  data() {
    return {
      user: "",
      reports: [],
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
