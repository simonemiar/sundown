<template>
  <div>
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
          <router-link
            to="/flow/details"
            active-class="activecolor"
            class="progressstep"
            ><div>1</div></router-link
          >

          <router-link
            to="/flow/images"
            active-class="activecolor"
            class="progressstep"
            ><div>2</div></router-link
          >
          <router-link
            to="/flow/map"
            active-class="activecolor"
            class="progressstep"
            ><div>3</div></router-link
          >
          <router-link
            to="/flow/overview"
            active-class="activecolor"
            class="progressstep"
            ><div>4</div></router-link
          >
        </div>
      </div>
    </section>
    <br />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "flow",
  mounted() {
    // console.log(this.$refs.progressbar);
  },
};
</script>
