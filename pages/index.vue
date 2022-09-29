<template>
  <div class="w-screen h-screen page-enter-active">
    <button class="bold absolute top-1 right-1" @click="clearUser">
      <img class="w-10 h-10" src="../assets/img/logout.png" alt="logout" />
    </button>
    <div>
      <h1 class="my-6 text-center">
        Hi, {{ user.first_name }} {{ user.last_name }}
      </h1>
    </div>
    <div class="grid sm:flex justify-items-center bg-blue-50">
      <section id="section_layout" class="grid mb-12 sm:grid sm:grid-cols-2">
        <div class="row-start-2 row-end-2 sm:col-start-1 sm:col-end-2">
          <p class="my-2">space reports created by {{ user.first_name }}</p>
          <div
            id="report_container"
            class="border border-gray-300 overflow-scroll h-4/5 rounded"
          >
            <p
              class="h-full flex items-center justify-center"
              v-if="!reports.length"
            >
              no spacereports saved
            </p>
            <div v-if="reports.length">
              <transition-group
                appear
                tag="ul"
                @before-enter="beforeEnter"
                @enter="enter"
              >
                <div
                  v-for="(report, index) in reportsFilterAndSort()"
                  :key="report.missionid"
                  :data-index="index"
                  class="card grid mx-3 bg-blue-300 rounded sm:grid-cols-3"
                >
                  <div class="p-3 sm:col-span-2">
                    <p
                      class="text-left font-bold text-lg uppercase overflow-hidden whitespace-nowrap overflow-ellipsis"
                    >
                      {{ report.missionname }}
                    </p>
                    <p class="text-left text-sm">
                      <span class="font-bold">DATE:</span>
                      {{ formatDate(report.missiondate) }}
                      <!-- {{ displaydate }} -->
                    </p>
                  </div>
                  <div class="grid sm:col-span-1 sm:row-span-2">
                    <button
                      class="edit-button text-sm sm:m-0"
                      @click="editReport(report)"
                    >
                      edit
                    </button>
                    <button
                      class="delete-button text-sm"
                      @click="removeReport(index, report)"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
        <div
          class="sm:m-10 sm:p-4 row-start-1 row-end-2 sm:row-start-2 sm:row-end-3"
        >
          <button class="report-button grid" @click="resetReport">
            + create new space report
          </button>

          <p class="font-bold sm:text-xl mt-4 uppercase">fun space facts</p>
          <p>
            From Siberia to the Sahara, Earth experiences an extensive range of
            temperatures. Records exist as high as 57°C and all the way down to
            -89°C. But what we consider extreme on Earth is average in space. On
            planets without an insulating atmosphere, temperatures wildly
            fluctuate between day and night.
          </p>
          <p class="my-4">
            Mercury regularly sees days around 449°C and and frigid nights as
            low as -171°C. And in space itself, some spacecraft experience
            temperature differences of 33°C just between their sunlit and shady
            sides. That would be like having a glass of water in the shade
            freeze on a hot summer day!
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  setup() {
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        onComplete: done,
        delay: el.dataset.index * 0.1,
      });
    };
    return { beforeEnter, enter };
  },
  name: "App",
  transition: "indexpage",
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
    let currentReport = {};
    this.$store.commit("setSpacereportToCurrentreport", currentReport);

    if (localStorage.reports) {
      this.reports = JSON.parse(localStorage.reports);
    }
  },
  methods: {
    reportsFilterAndSort() {
      return this.reports
        .filter((word) => word.missionuser == this.spacereport.missionuser)
        .sort((a, b) => new Date(b.missiondate) - new Date(a.missiondate));
    },
    clearUser() {
      localStorage.removeItem("user");
      this.$router.push({ path: "/login" });
    },
    removeReport(index, report) {
      let response = confirm(
        `Are you sure you want to delete ${report.missionname}`
      );
      if (response) {
        this.reports.splice(this.reports.indexOf(report), 1);
        localStorage.setItem("reports", JSON.stringify(this.reports));
      }
    },
    editReport(report) {
      console.log("edit test");
      this.$router.push({ path: "/flow/details" });
      this.$store.commit("editReport", { report: report });
    },
    formatDate(missiondate) {
      return new Date(missiondate).toLocaleString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    resetReport() {
      console.log("test 2 reset");
      localStorage.removeItem("currentReport");
      this.$store.commit("resetReport");
      this.$router.push("/flow/details");
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
