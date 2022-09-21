<template>
  <div class="bg-blue-50 w-screen h-screen">
    <div class="max-w-screen-lg m-auto">
      <p class="m-2 text-red-700" v-if="errors.length">
        <b>please correct the following errors</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">
            {{error}}
          </li>
        </ul>
      </p>
    </div>
    <section id="section_layout" class="sm:grid sm:grid-cols-2">
      <div class="m-2 h-80">
        <div>
          <label class="font-bold">Mission name</label>
          <input
            v-model="missionname"
            id="missionname"
            class="border border-gray-900 overflow-scroll w-full"
            name="missionname"
            required
          />
        </div>
        <div class="h-full">
          <label class="font-bold">Mission description</label>
          <textarea
            v-model="missiondesc"
            id="missiondesc"
            name="missiondesc"
            class="border border-gray-900 overflow-scroll h-2/3 w-full"
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
              :model-config="{
              type: 'string',
              mask: 'YYYY-MM-DD HH:mm:ss',
              }"
              :masks="{ L: 'YYYY-MM-DD-SS' }"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="flex place-content-between max-w-screen-lg m-2 sm:m-auto">
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
      missiondate: this.$store.state.spacereport.missiondate || new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''), // first replace T with a space  // second replace delete the dot and everything after
      errors: [],
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
    };
  },
  mounted() {
    // generate random ID up to 10 thousand unique
    if (this.missionid == null) {
      this.missionid = Math.random().toString(36).substr(2, 9);
    }
    console.log(this.missionid);
  },
  methods: {
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
    resetReport() {
      // console.log("test reset");
      this.$store.dispatch("resetReport"); // calling my action in the store
      this.$router.push("/");
    },
    validateInput() {
      this.errors = []
      if (
        this.$store.state.spacereport.missionname &&
        this.$store.state.spacereport.missiondesc
      ) {
        console.log("match");
        this.$router.push({ path: "/flow/images" });
      } else {
        if (!this.$store.state.spacereport.missionname)
          this.errors.push("Missionname required");
        if (!this.$store.state.spacereport.missiondesc)
          this.errors.push("Missiondesc required");
      }
    },
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport;
    },
    missionname: {
      get() {
        return this.$store.getters.spacereport.missionname;
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
        return this.$store.getters.spacereport.missiondesc;
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
