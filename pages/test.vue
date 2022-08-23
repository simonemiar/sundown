<template>
  <main>
    <!-- redirects to logo -->
    <NuxtLink to="/">Home page</NuxtLink>
    <div class="w-screen h-screen bg-white-800">
      <h1>{{ $store.state.test }}</h1>
      <button @click="updateBtn">update test</button>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    updateBtn() {
      console.log('test updateBtn')
      this.$store.commit('setTest', 200)
    },
  },
}
</script>
