<template>
  <main>
    <!-- redirects to logo -->
    <NuxtLink to="/">Home page</NuxtLink>
    <div class="w-screen h-screen bg-white-800">
      <h1>{{ $store.state.test }}</h1>
      <!-- 
      <button @click="updateBtn">update test</button>
      <button @click="updateMessage">update message</button>
      <pre>{{ report }}</pre>
      <br />
      <br />
      <input type="text" placeholder="text" />
      <button @click="updateInput">update input</button>
      <pre>{{ spacereport }}</pre> -->

      <input :value="missionname" @input="updateMissionname" />
      <input v-model="missiondesc" />
      <button @click="updateInput">update input</button>
      <pre>{{ spacereport.missionname }}</pre>
      <!-- <pre>{{ missiondesc }}</pre>
      <pre>{{ missionname }}</pre> -->
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      missionname: '',
      missiondesc: '',
    }
  },
  methods: {
    updateBtn() {
      // console.log('test updateBtn')
      // this.$store.commit('setTest', 200)
      this.$store.commit('setReport', { key: 'name', value: 'john' })
    },
    updateMissionname(e) {
      console.log('test input')
      this.missionname = e.target.value

      // console.log('test updateBtn')
      // this.$store.commit('setTest', 200)
      // this.$store.commit('setReport', { key: 'message', value: 'hej' })
    },

    updateInput() {
      console.log('test input')
      this.$store.commit('setSpacereport', {
        key: 'missionname',
        value: this.missionname,
      })
      this.$store.commit('setSpacereport', {
        key: 'missiondesc',
        value: this.missiondesc,
      })
    },
    // updateMessage(event) {
    //   this.$store.commit('updateMessage', event.target.value)
    // },
  },
  computed: {
    report() {
      return this.$store.getters.report
    },
    spacereport() {
      return this.$store.getters.spacereport
    },
    // message() {
    //   return this.$store.state.message
    // },
  },
}
</script>
