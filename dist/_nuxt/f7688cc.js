(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{334:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{}},props:{image:{type:Object,default:function(){}}},methods:{clickImage:function(image){this.$emit("click-image",image)}},computed:{spacereport:function(){return this.$store.getters.spacereport}}},n=r(9),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inline-flex"},[e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"w-40 h-40 m-2",attrs:{"data-src":t.image.img_src,alt:"space image",loading:"lazy"},on:{click:function(e){return t.clickImage(t.image)}}})])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,r){"use strict";var o=r(2),n=r(93).find,c=r(152),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},349:function(t,e,r){"use strict";r.r(e);r(35),r(26),r(34),r(43),r(27),r(44);var o=r(21);r(335),r(13),r(153);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"Overview",layout:"flow",data:function(){return{reports:[],isoverviewcompleted:this.$store.state.spacereport.iscompleted.isoverviewcompleted,currentreport:{}}},mounted:function(){if(localStorage.reports){var t=localStorage.getItem("reports"),e=JSON.parse(t);void 0!==e&&(this.reports=e)}if(this.$store.commit("setCompleted",{key:"isoverviewcompleted",value:!0}),localStorage.currentReport){var r=localStorage.getItem("currentReport"),o=JSON.parse(r);Object.assign(this.currentreport,o);this.$store.commit("setCurrentReport",this.currentreport),console.log("date",this.currentreport),this.updateCurrentStorage()}else this.$store.commit("setCurrentReport",this.currentreport),console.log("iscompleted",this.spacereport.iscompleted),this.updateCurrentStorage()},methods:{updateCurrentStorage:function(){var t=localStorage.getItem("currentReport"),e=JSON.parse(t);console.log("parse report",e);var r=c(c({},e),{iscompleted:c(c({},e.iscompleted),{},{isoverviewcompleted:this.$store.state.spacereport.iscompleted.isoverviewcompleted})});localStorage.setItem("currentReport",JSON.stringify(r))},finaliseReport:function(){var t=this;console.log(this.reports),null===this.reports&&(this.reports=[]);var e=this.reports.find((function(e){return e.missionid===t.spacereport.missionid}));console.log("find report",e),e?this.reports.splice(this.reports.indexOf(e),1,this.spacereport):this.reports.push(this.spacereport),this.updateLocalstorage(),localStorage.removeItem("currentReport"),this.resetReport(),this.$router.push({path:"/"})},updateLocalstorage:function(){localStorage.setItem("reports",JSON.stringify(this.reports))},resetReport:function(){console.log("test reset"),this.$store.commit("resetReport")},formatDate:function(t){return new Date(t).toLocaleString("en-GB")}},computed:{spacereport:function(){return this.$store.getters.spacereport},coordinates:function(){return this.$store.getters.spacereport.coordinates},iscompleted:function(){return this.$store.getters.spacereport.iscompleted}}},d=r(9),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-blue-50 w-screen h-screen"},[e("section",{staticClass:"sm:grid sm:grid-cols-2",attrs:{id:"section_layout"}},[e("div",{staticClass:"m-2 p-2 bg-white rounded border border-gray-300 h-80"},[e("p",{staticClass:"font-bold"},[t._v("Mission name:")]),t._v(" "),e("p",[t._v(t._s(t.spacereport.missionname))]),t._v(" "),e("div",[e("p",{staticClass:"font-bold"},[t._v("Mission Descripton")]),t._v(" "),e("p",[t._v(t._s(t.spacereport.missiondesc))])]),t._v(" "),e("div",[e("p",{staticClass:"font-bold"},[t._v("Mission start date")]),t._v(" "),e("p",[t._v(t._s(t.formatDate(t.spacereport.missiondate)))])]),t._v(" "),e("div",[e("p",{staticClass:"font-bold"},[t._v("Lat:")]),t._v(" "),e("p",[t._v(t._s(t.coordinates.missionlatitude))])]),t._v(" "),e("div",[e("p",{staticClass:"font-bold"},[t._v("Long:")]),t._v(" "),e("p",[t._v(t._s(t.coordinates.missionlongitude))])])]),t._v(" "),e("div",{staticClass:"m-2 p-2 bg-white rounded border border-gray-300 overflow-scroll h-80"},[e("div",[e("p",{staticClass:"font-bold"},[t._v("Images")]),t._v(" "),t._l(t.spacereport.newmissionimages,(function(image){return e("Missionimage",{key:image.id,attrs:{image:image}})}))],2)])]),t._v(" "),e("div",{staticClass:"flex px-8 place-content-between max-w-screen-lg sm:m-auto"},[e("NuxtLink",{staticClass:"secondary-button",attrs:{to:"/flow/map"}},[e("button",[t._v("BACK")])]),t._v(" "),e("button",{staticClass:"primary-button",on:{click:t.finaliseReport}},[t._v("\n      FINALISE REPORT\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Missionimage:r(334).default,Button:r(91).default})}}]);