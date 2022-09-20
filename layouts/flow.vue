<template>
  <div>
    <Header />
    <!-- container -->
    <div class="w-full mx-auto my-5">
      <!-- progress bar -->
      <div class="w-11/12 lg:w-4/6 mx-auto">
        <div class="bg-gray-400 h-1 flex items-center justify-between">
          <!-- <div class="w-1/3 bg-indigo-700 h-1 flex items-center"> -->
          <div class="progressbar">
            <button>1</button>
          </div>
          <div class="progressbar"><button>2</button></div>
          <div class="progressbar"><button>3</button></div>
          <div class="progressbar"><button>4</button></div>
          <!-- </div> -->
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
export default {};
</script>
