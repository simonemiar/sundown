<template>
  <div>
    <div class="secondary-button flex justify-between mx-3 bg-blue-300 rounded">
      <h3>{{ spacereport.id }}</h3>
      <p>{{ spacereport.missionname }}</p>
      <button class="text-white bg-black px-2">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spacereport',
  props: {
    spacereport: Object,
  },
}
</script>
