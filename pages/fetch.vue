<template>
  <article><h1>Fetching situation</h1></article>
</template>

<script>
import astronauts from '/assets/astronauts.json'

export default {
  asyncData({ params }) {
    console.log('astronauts onboard', astronauts)
  },
}
</script>
