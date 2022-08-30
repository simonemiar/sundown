<template>
  <div>
    <h3 class="text-center">space overview</h3>
    <section id="section_layout" class="grid grid-cols-2">
      <div class="m-2">
        <p class="font-bold">Mission name:</p>
        <p>{{ missionname }}</p>
        <div>
          <p class="font-bold">Mission Descripton</p>
          <p>{{ missiondesc }}</p>
        </div>
        <div>
          <p class="font-bold">Mission start date</p>
          <p>{{ missiondesc }}</p>
        </div>
        <div>
          <p class="font-bold">Lat:</p>
          <p>display lat</p>
        </div>
        <div>
          <p class="font-bold">Long:</p>
          <p>display long</p>
        </div>
      </div>
      <div class="m-2 h-80">
        <div>
          <p class="font-bold">Images</p>
          <p>display images</p>
        </div>
      </div>
    </section>
    <div class="flex place-content-between">
      <Button text="back" />
      <Button text="forward" />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'FlowDetails',
  components: { 'v-button': Button },
}
</script>
