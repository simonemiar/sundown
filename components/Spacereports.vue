<template>
  <div>
    <!-- looper igennem for at lave en liste - og herunder få adgang til hver enkel report -->
    <div :key="spacereport.id" v-for="spacereport in spacereports">
      <h3>
        <Spacereport :spacereport="spacereport" />
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spacereports',
  props: {
    spacereports: Array,
  },
}
</script>
