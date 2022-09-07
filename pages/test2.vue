<template>
  <div>
    <input type="text" v-model="test" class="border" />
    <h1>{{ test }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'Test',
    }
  },
  watch: {
    test() {
      console.log(this.test)
    },
  },
}
</script>

<style></style>
