<template>
  <div>
    <Header />
    <section class="max-w-screen-lg">
      <div><FlowDetails @toggle-flow-images="toggleflowimages" /></div>
      <div><FlowImages v-if="showFlowImages" /></div>
      <div><FlowMap v-if="showFlowMap" /></div>
      <div><FlowOverview v-if="showFlowOverview" /></div>
    </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import FlowDetails from '../components/FlowDetails.vue'
import FlowImages from '../components/FlowImages.vue'
import FlowMap from '../components/FlowMap.vue'
import FlowOverview from '../components/FlowOverview.vue'
export default {
  name: 'Spaceflow',
  components: Header,
  FlowDetails,
  FlowImages,
  FlowMap,
  FlowOverview,
  data() {
    return {
      showFlowImages: false,
      showFlowMap: false,
      showFlowOverview: false,
    }
  },
  methods: {
    toggleflowimages() {
      this.toggleflowimages = !this.toggleflowimages
    },
  },
}
</script>
