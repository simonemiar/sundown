<template>
  <div>
    <Header />
    <!-- container -->
    <div class="w-full mx-auto my-5">
      <!-- progress bar -->
      <div class="w-11/12 lg:w-4/6 mx-auto">
        <div class="bg-gray-400 h-1 flex items-center justify-between">
          <div class="w-1/3 bg-blue-700 h-1 flex items-center absolute"></div>
          <router-link
            to="/flow/details"
            active-class="activecolor"
            class="progressbar"
            ><div>1</div></router-link
          >

          <router-link
            to="/flow/images"
            active-class="activecolor"
            class="progressbar"
            ><div>2</div></router-link
          >
          <router-link
            to="/flow/map"
            active-class="activecolor"
            class="progressbar"
            ><div>3</div></router-link
          >
          <router-link
            to="/flow/overview"
            active-class="activecolor"
            class="progressbar"
            ><div>4</div></router-link
          >
        </div>
      </div>

      <!-- <ul class="focus:shadow-lg flex justify-center">
        <li class="progressbar">1</li>
        <li class="progressbar">2</li>
        <li class="progressbar">3</li>
        <li class="progressbar">4</li>
      </ul> -->
    </div>
    <br />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "flow",
  linkActiveClass: "activecolor",
};
</script>
