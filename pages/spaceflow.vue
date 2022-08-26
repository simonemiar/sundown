<template>
  <div>
    <Header />
    <section class="max-w-screen-lg"><Images /></section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Images from '../components/Images.vue'
export default {
  name: 'Spaceflow',
  components: Header,
  Images,
}
</script>
