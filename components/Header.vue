<template>
  <div>
    <h1
      class="text-fourth text-5xl font-bold text-center text-blue-800"
      @click="resetReport"
    >
      MRT
    </h1>
    <div class="tabs"></div>
  </div>
</template>

<script>
export default {
  methods: {
    resetReport() {
      console.log("test reset");
      this.$store.dispatch("resetReport"); // calling my action in the store
      this.$router.push("/");
    },
  },
};
</script>
