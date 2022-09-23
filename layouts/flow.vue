<template>
  <div class="bg-blue-50">
    <Header />
    <!-- container -->
    <section class="mx-auto my-5">
      <!-- progress bar -->
      <div class="w-11/12 lg:w-4/6 mx-auto relative">
        <div
          id="progressbar"
          ref="progressbar"
          class="bg-blue-700 h-1 flex items-center absolute"
          v-bind:class="{
            progressbar1: $route.path === '/flow/details',
            progressbar2: $route.path === '/flow/images',
            progressbar3: $route.path === '/flow/map',
            progressbar4: $route.path === '/flow/overview',
          }"
        ></div>

        <div class="bg-gray-400 h-1 flex items-center justify-between">
          <router-link to="/flow/details" class="activecolor"
            ><div>1</div></router-link
          >

          <button
            @click.prevent="isDetailsCompleted"
            class="progressstep"
            v-bind:class="{
              activecolor:
                this.$store.state.spacereport.iscompleted.isdetailscompleted,
            }"
          >
            <div>2</div>
          </button>
          <button
            @click.prevent="isImagesCompleted"
            class="progressstep"
            v-bind:class="{
              activecolor:
                this.$store.state.spacereport.iscompleted.isimagescompleted,
            }"
          >
            <div>3</div>
          </button>
          <button
            @click.prevent="isMapCompleted"
            class="progressstep"
            v-bind:class="{
              activecolor:
                this.$store.state.spacereport.iscompleted.ismapcompleted,
            }"
          >
            <div>4</div>
          </button>
        </div>
      </div>
    </section>
    <br />
    <Nuxt />
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: { Button },
  name: "flow",
  methods: {
    isDetailsCompleted(event) {
      if (this.$store.state.spacereport.iscompleted.isdetailscompleted) {
        // else continue to route
        this.$router.push({ path: "/flow/images" });
      } else {
        event.preventDefault();
        alert("Please fill out all the required information to proceed");
      }
    },
    isImagesCompleted(event) {
      if (this.$store.state.spacereport.iscompleted.isimagescompleted) {
        // else continue to route
        this.$router.push({ path: "/flow/map" });
      } else {
        event.preventDefault();
        alert("Please fill out all the required information to proceed");
      }
    },
    isMapCompleted(event) {
      if (this.$store.state.spacereport.iscompleted.ismapcompleted) {
        // else continue to route
        this.$router.push({ path: "/flow/overview" });
      } else {
        event.preventDefault();
        alert("Please fill out all the required information to proceed");
      }
    },
  },
};
</script>
