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
              :min-date="new Date()"
              show-caps
            />
          </div>
        </div>
      </div>
    </section>
    <div class="flex place-content-between">
      <NuxtLink to="/" class="secondary-button"><button>back</button></NuxtLink>
      <NuxtLink to="/flow/images" class="primary-button">
        <button @click="updateInput">forward</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      missionname: '',
      missiondesc: '',
      missiondate: '',
      missiondate: new Date(),
    }
  },
  methods: {
    updateInput() {
      console.log('test detazils')
      this.$store.commit('setSpacereport', {
        key: 'missionname',
        value: this.missionname,
      })
      this.$store.commit('setSpacereport', {
        key: 'missiondesc',
        value: this.missiondesc,
      })
      this.$store.commit('setSpacereport', {
        key: 'missiondate',
        value: this.missiondate,
      })
    },
  },
}
</script>
