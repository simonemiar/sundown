<template>
  <main>
    <!-- redirects to logo -->
    <NuxtLink to="/">Home page</NuxtLink>
    <div class="w-screen h-screen bg-white-800">
      <h1>{{ $store.state.test }}</h1>
      <button @click="updateBtn">update test</button>
      <button @click="updateMessage">update message</button>
      <pre>{{ report }}</pre>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    updateBtn() {
      // console.log('test updateBtn')
      // this.$store.commit('setTest', 200)
      this.$store.commit('setReport', { key: 'name', value: 'john' })
    },
    updateMessage() {
      // console.log('test updateBtn')
      // this.$store.commit('setTest', 200)
      this.$store.commit('setReport', { key: 'message', value: 'hej' })
    },
  },
  computed: {
    report() {
      return this.$store.getters.report
    },
  },
}
</script>
