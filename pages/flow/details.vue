<template>
  <div class="bg-blue-50 w-screen h-screen page-enter-active">
    <section id="section_layout" class="sm:grid sm:grid-cols-2">
      <div class="m-2 h-full">
        <div>
          <label class="font-bold">Mission name</label>
          <span class="text-red-700 text-sm" v-if="errormissionname.length">{{
            errormissionname
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
          <span class="text-red-700 text-sm" v-if="errormissiondesc.length">{{
            errormissiondesc
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
      <button class="secondary-button back-enter-active" @click="backBtn">
        back
      </button>
      <button
        class="primary-button back-enter-active"
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
      errormissiondesc: [],
      errormissionname: [],
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
    // if (this.isdetailscompleted === true) {
    //   console.log(this.spacereport);
    //   let currentReport = {};
    //   this.$store.commit("setSpacereportToCurrentreport", currentReport);
    // }
    if (localStorage.currentReport) {
      let getCurrentReport = localStorage.getItem("currentReport");
      let parseCurrentReport = JSON.parse(getCurrentReport);
      let realCurrentReport = Object.assign(
        this.currentreport,
        parseCurrentReport
      );

      // set currentreport to spacereport
      this.$store.commit("setCurrentReport", this.currentreport);

      this.missiondate = new Date(this.currentreport.missiondate);
      console.log("date", this.currentreport);
    } else {
      this.$store.commit("setCurrentReport", this.currentreport);
      // this.currentreport = this.$store.state.spacereport;
    }
  },
  methods: {
    backBtn() {
      this.$router.push("/");
    },
    validateInput() {
      this.errormissionname = [];
      this.errormissiondesc = [];
      if (
        this.$store.state.spacereport.missionname &&
        this.$store.state.spacereport.missiondesc
      ) {
        console.log("match");
        this.$store.commit("setCompleted", {
          key: "isdetailscompleted",
          value: true,
        });
        this.updateLocalstorage();
        this.$router.push({ path: "/flow/images" });
      } else {
        if (!this.$store.state.spacereport.missionname)
          this.errormissionname = "(Missionname required)";
        if (!this.$store.state.spacereport.missiondesc)
          this.errormissiondesc = "(Missiondesc required)";
      }
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
      if (localStorage.currentReport) {
        const currentReport = this.currentreport;
        localStorage.setItem("currentReport", JSON.stringify(currentReport));
      } else {
        let currentReport = {
          missionuser: this.$store.state.spacereport.missionuser,
          missionid: this.$store.state.spacereport.missionid,
          missionname: this.missionname,
          missiondesc: this.missiondesc,
          missiondate: this.missiondate,
          iscompleted: {
            isdetailscompleted:
              this.$store.state.spacereport.iscompleted.isdetailscompleted,
          },
        };
        localStorage.setItem("currentReport", JSON.stringify(currentReport));
      }
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
          this.$store.getters.spacereport.missionname ||
          this.currentreport.missionname
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
          this.$store.getters.spacereport.missiondesc ||
          this.currentreport.missiondesc
        );
      },
      set(newValue) {
        return this.$store.commit("setSpacereport", {
          key: "missiondesc",
          value: newValue,
        });
      },
    },
  },
};
</script>
