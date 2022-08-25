<template>
  <button class="primary-button" id="Button">
    <slot>Button</slot>
  </button>
</template>
​
<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
}
</script>
