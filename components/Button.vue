<template>
  <button class="primary-button" id="Button">
    {{ text }}
  </button>
</template>
​
<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
  methods: {
    onClickImages() {
      this.$emit('toggle-flow-images')
    },
    onClickMap() {
      this.$emit('toggle-flow-map')
    },
    onClickOverview() {
      this.$emit('toggle-flow-overview')
    },
  },
}
</script>
