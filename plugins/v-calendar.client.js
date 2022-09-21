import Vue from "vue";
import Vcalendar from "v-calendar";
// import 'v-calendar/lib/v-calendar.min.css'
Vue.use(Vcalendar, {
  // second is optional
  datePickerTintColor: "#F00",
  datePickerShowDayPopover: false,
  screens: {
    tablet: "576px",
    laptop: "992px",
    desktop: "1200px",
  },
});
