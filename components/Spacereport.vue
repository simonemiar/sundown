<template>
  <div>
    <div class="flex justify-between p-2 m-1 bg-blue-300 rounded">
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
