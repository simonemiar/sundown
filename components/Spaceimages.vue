<template>
  <div>
    <img class="w-56" :src="product.image" alt="space image" />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
