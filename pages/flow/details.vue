<template>
  <div class="bg-blue-50 w-screen h-screen">
    <!-- <div class="max-w-screen-lg m-auto px-6">
      <p class="m-2 text-red-700" v-if="errors.length">
        <b>please correct the following errors</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">
            {{error}}
          </li>
        </ul>
      </p>
    </div> -->
    <section id="section_layout" class="sm:grid sm:grid-cols-2">
      <div class="m-2 h-full">
        <div>
          <label class="font-bold">Mission name</label>
          <span class="text-red-700 text-sm" v-if="msg.missionname">{{
            msg.missionname
          }}</span>
          <input
            v-model="missionname"
            id="missionname"
            class="border border-gray-300 overflow-scroll w-full p-1"
            name="missionname"
            required
          />
        </div>

        <div class="h-full mt-1">
          <label class="font-bold">Mission description</label>
          <span class="text-red-700 text-sm" v-if="msg.missiondesc">{{
            msg.missiondesc
          }}</span>
          <textarea
            v-model="missiondesc"
            id="missiondesc"
            name="missiondesc"
            class="border border-gray-300 overflow-scroll h-52 w-full p-1"
            required
          />
        </div>
      </div>
      <div class="m-2">
        <p class="font-bold">Mission start date (calender)</p>
        <div id="calender_container" class="h-full">
          <div>
            <v-date-picker
              is-expanded
              mode="date"
              v-model="missiondate"
              :max-date="new Date()"
              show-caps
            />
          </div>
        </div>
      </div>
    </section>
    <div class="flex px-8 place-content-between max-w-screen-lg sm:m-auto">
      <button class="secondary-button" @click="resetReport">back</button>
      <button
        class="primary-button"
        @click="
          updateStore();
          validateInput();
        "
      >
        forward
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  layout: "flow",
  data() {
    return {
      missionid: this.$store.state.spacereport.missionid,
      missiondate: new Date(this.$store.state.spacereport.missiondate),
      // errors: [],
      msg: [],
      currentreport: {},
      isdetailscompleted:
        this.$store.state.spacereport.iscompleted.isdetailscompleted,
    };
  },
  mounted() {
    // generate random ID up to 10 thousand unique
    if (this.missionid == null) {
      this.missionid = Math.random().toString(36).substr(2, 9);
    }
    console.log(this.missionid);
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
    if (localStorage.currentReport) {
      let getCurrentReport = localStorage.getItem("currentReport");
      let parseCurrentReport = JSON.parse(getCurrentReport);
      let realCurrentReport = Object.assign(
        this.currentreport,
        parseCurrentReport
      );
      realCurrentReport = this.$store.state.spacereport;
      // test of the user in the vuex

      this.missiondate = new Date(this.currentreport.missiondate);
      console.log("date", this.currentreport);
    } else {
      this.currentreport = this.$store.state.spacereport;
    }
  },
  methods: {
    resetReport() {
      console.log("reset details");
      this.$router.push("/");
    },
    validateInput() {
      if (!this.missionname.length && !this.missiondesc.length) {
        console.log("there is no missionname or mission description");
        this.msg["missionname"] = "(Missionname required)";
        this.msg["missiondesc"] = "(Mission description required)";
      } else if (this.missionname === "") {
        console.log("there is no missionname");
        this.msg["missionname"] = "(Missionname required)";
        this.msg["missiondesc"] = "";
      } else if (this.missiondesc === "") {
        console.log("there is no missiondesc");
        this.msg["missiondesc"] = "(Mission description required)";
        this.msg["missionname"] = "";
      } else {
        console.log("match");
        this.msg["missionname"] = "";
        this.msg["missiondesc"] = "";
        this.$store.commit("setCompleted", {
          key: "isdetailscompleted",
          value: true,
        });
        this.updateLocalstorage();
        this.$router.push({ path: "/flow/images" });
      }
      // this.errors = []
      // if (
      //   this.$store.state.spacereport.missionname &&
      //   this.$store.state.spacereport.missiondesc
      // ) {
      //   console.log("match");
      //   this.$router.push({ path: "/flow/images" });
      // } else {
      //   if (!this.$store.state.spacereport.missionname)
      //     this.errors.push("Missionname required");
      //   if (!this.$store.state.spacereport.missiondesc)
      //     this.errors.push("Missiondesc required");
      // }
    },
    updateStore() {
      this.$store.commit("setSpacereport", {
        key: "missionid",
        value: this.missionid,
      });
      this.$store.commit("setSpacereport", {
        key: "missiondate",
        value: this.missiondate,
      });
    },
    updateLocalstorage() {
      let currentReport = {
        missionuser: this.$store.state.spacereport.missionuser,
        missionid: this.missionid,
        missionname: this.missionname,
        missiondesc: this.missiondesc,
        missiondate: this.missiondate,
        iscompleted: {
          isdetailscompleted:
            this.$store.state.spacereport.iscompleted.isdetailscompleted,
        },
      };
      console.log("local test");
      localStorage.setItem("currentReport", JSON.stringify(currentReport));
    },
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport;
    },
    iscompleted() {
      return this.$store.getters.spacereport.iscompleted;
    },
    missionname: {
      get() {
        return (
          this.currentreport.missionname ||
          this.$store.getters.spacereport.missionname
        );
      },
      set(newValue) {
        // console.log("set test", newValue);
        return this.$store.commit("setSpacereport", {
          key: "missionname",
          value: newValue,
        });
      },
    },
    missiondesc: {
      get() {
        return (
          this.currentreport.missiondesc ||
          this.$store.getters.spacereport.missiondesc
        );
      },
      set(newValue) {
        return this.$store.commit("setSpacereport", {
          key: "missiondesc",
          value: newValue,
        });
      },
    },
    // watch: {
    //   currentreport(newReport) {
    //     localStorage.currentReport = newReport;
    //   },
    // },
  },
};
</script>
