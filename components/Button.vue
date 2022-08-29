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
    onClick() {
      this.$emit('toggle-flow-images')
    },
  },
}
</script>
