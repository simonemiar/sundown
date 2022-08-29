<template>
  <div>
    <div>
      <Header />
    </div>
    <section class="max-w-screen-lg">
      <div v-if="showFlowDetails">
        <FlowDetails @toggle-flow-images="toggleflowimages" />
      </div>
      <div v-if="showFlowImages">
        <FlowImages @toggle-flow-map="toggleflowmap" />
      </div>
      <div v-if="showFlowMap">
        <FlowMap @toggle-flow-overview="toggleflowoverview" />
      </div>
      <div v-if="showFlowOverview"><FlowOverview /></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Spaceflow',

  data() {
    return {
      showFlowDetails: true,
      showFlowImages: false,
      showFlowMap: false,
      showFlowOverview: false,
    }
  },
  methods: {
    toggleflowimages() {
      this.showFlowImages = !this.showFlowImages
      this.showFlowDetails = !this.showFlowDetails
    },
    toggleflowmap() {
      this.showFlowMap = !this.showFlowMap
      this.showFlowImages = !this.showFlowImages
    },
    toggleflowoverview() {
      this.showFlowOverview = !this.showFlowOverview
      this.showFlowMap = !this.showFlowMap
    },
  },
}
</script>
