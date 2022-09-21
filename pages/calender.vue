<template>
  <div>
    <div class="m-2">
      <p class="font-bold">Mission start date (calender)</p>
      <div id="calender_container" class="h-full">
        <div>
          <v-date-picker
            mode="date"
            v-model="missiondate"
            :model-config="{
              type: 'string',
              mask: 'YYYY-MM-DD HH:mm',
            }"
            :masks="{ L: 'YYYY-MM-DD' }"
          />
        </div>
        <pre>{{ missiondate }}</pre>
        <pre>{{ new Date() }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      missiondate: this.$store.state.spacereport.missiondate,
      //   modelConfig: {
      //     type: "string",
      //     mask: "YYYY-MM-DD", // Uses 'iso' if missing
      //   },
    };
  },
  formattedDate() {
    return moment(this.missiondate).format("YYYY-MM-DD");
  },
};
</script>
