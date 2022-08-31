<template>
  <div>
    
      <v-date-picker
        mode="range"
        v-model="selectedDate"
        :min-date="new Date()"
        show-caps
      />
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedDate: {
        start: new Date(2018,10,9),
        end: new Date(2018,10,10)
      }
    }
   }
}