<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    return { ip }
  },
}
</script>
