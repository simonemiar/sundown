<template>
  <div>
    <Header />
    <h3 class="text-center">space details</h3>
    <section id="section_layout" class="grid grid-cols-2">
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
            class="border border-gray-900 overflow-scroll h-5/6 w-full"
            required
          />
        </div>
      </div>
      <div class="m-2">
        <p class="font-bold">Mission start date (calender)</p>
        <div id="calender_container" class="h-full">
          <div>
            <v-date-picker
              mode="date"
              v-model="missiondate"
              :max-date="new Date()"
              show-caps
            />
          </div>
        </div>
      </div>
    </section>
    <div class="flex place-content-between">
      <NuxtLink to="/" class="secondary-button"><button>back</button></NuxtLink>
      <NuxtLink to="/flow/images" class="primary-button">
        <!-- <button @click="updateStore">forward</button> -->
        <button @click="updateStore">forward</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      missionid: this.$store.state.spacereport.missionid,
    }
  },
  mounted() {
    // generate random ID up to 10 thousand unique
    if (this.missionid == null) {
      this.missionid = Math.random().toString(36).substr(2, 9)
    }
    console.log(this.missionid)
  },
  methods: {
    updateStore() {
      this.$store.commit('setSpacereport', {
        key: 'missionid',
        value: this.missionid,
      })
    },
    // resetReport() {
    // can I call a action more times? only works once
    //   console.log('test reset')
    //   this.$store.dispatch('resetReport') // calling my action in the store
    // },
  },
  computed: {
    spacereport() {
      return this.$store.getters.spacereport
    },
    missionname: {
      get() {
        return this.$store.getters.spacereport.missionname
      },
      set(newValue) {
        console.log('set test', newValue)
        return this.$store.commit('setSpacereport', {
          key: 'missionname',
          value: newValue,
        })
      },
    },
    missiondesc: {
      get() {
        return this.$store.getters.spacereport.missiondesc
      },
      set(newValue) {
        return this.$store.commit('setSpacereport', {
          key: 'missiondesc',
          value: newValue,
        })
      },
    },
    missiondate: {
      get() {
        return this.$store.getters.spacereport.missiondate
      },
      set(newValue) {
        return this.$store.commit('setSpacereport', {
          key: 'missiondate',
          value: newValue,
        })
      },
    },
  },
}
</script>
