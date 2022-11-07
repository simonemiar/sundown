(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{348:function(t,e,o){"use strict";o.r(e);var r=o(21),n=o(11),l=(o(73),o(74),o(13),o(56),o(27),o(35),o(26),o(34),o(43),o(44),o(337),o(339)),c=o.n(l);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"Map",layout:"flow",data:function(){return{test:"Test",map:null,marker:null,missionlongitude:"",missionlatitude:"",ismapcompleted:this.$store.state.spacereport.iscompleted.ismapcompleted,currentreport:{},allCoordinates:[]}},head:{link:[{rel:"stylesheet",href:"https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css"}]},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.createMap(),t.populateMapWithOldCoordinates(),e.next=4,t.fetchData();case 4:console.log("fetch baby"),setInterval(t.fetchData,6e4),t.setLocalStorage();case 7:case"end":return e.stop()}}),e)})))()},methods:{setLocalStorage:function(){if(localStorage.currentReport){var t=localStorage.getItem("currentReport"),e=JSON.parse(t);Object.assign(this.currentreport,e);this.$store.commit("setCurrentReport",this.currentreport)}else this.$store.commit("setCurrentReport",this.currentreport)},fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,r,data,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Math.floor(Date.now()/1e3),e.next=3,fetch("https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=".concat(o));case 3:return r=e.sent,e.next=6,r.json();case 6:data=e.sent,n=data[0].longitude,l=data[0].latitude,t.missionlongitude=n,t.missionlatitude=l,t.allCoordinates.push({missionlongitude:n,missionlatitude:l}),t.marker=(new c.a.Marker).setLngLat([n,l]).addTo(t.map),t.map.setCenter([n,l]);case 14:case"end":return e.stop()}}),e)})))()},populateMapWithOldCoordinates:function(){var t=this,e=this.$store.state.spacereport.allCoordinates;e.length&&e.forEach((function(e){(new c.a.Marker).setLngLat([e.missionlongitude,e.missionlatitude]).addTo(t.map)}))},createMap:function(){this.map=new c.a.Map({accessToken:"pk.eyJ1Ijoic2ltb25lbWlhciIsImEiOiJjbDdybG5ndWowNWFoM3dxcmQwM2Fkd2p6In0.Sz0xWuvcc431FpZdXOwBsQ",container:"map",style:"mapbox://styles/mapbox/streets-v11",zoom:3})},updateStore:function(){this.$store.commit("setCompleted",{key:"ismapcompleted",value:!0}),this.$store.commit("setCoordinates",{key:"missionlongitude",value:this.missionlongitude}),this.$store.commit("setCoordinates",{key:"missionlatitude",value:this.missionlatitude}),this.$store.commit("setAllCoordinates",this.allCoordinates),this.updateLocalstorage(),this.$router.push("/flow/overview")},updateLocalstorage:function(){var t=localStorage.getItem("currentReport"),e=JSON.parse(t);console.log("parse report",e);var o=m(m({},e),{},{allCoordinates:this.allCoordinates},{coordinates:{missionlongitude:this.missionlongitude,missionlatitude:this.missionlatitude},allCoordinates:this.allCoordinates,iscompleted:m(m({},e.iscompleted),{},{ismapcompleted:this.$store.state.spacereport.iscompleted.ismapcompleted})});localStorage.setItem("currentReport",JSON.stringify(o))}},computed:{spacereport:function(){return this.$store.getters.spacereport.spacereport},iscompleted:function(){return this.$store.getters.spacereport.iscompleted}}},f=o(9),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-blue-50 w-screen h-screen"},[e("section",{staticClass:"sm:grid sm:grid-cols-2",attrs:{id:"section_layout"}},[t._m(0),t._v(" "),e("div",{staticClass:"m-2 h-80"},[e("div",[e("p",{staticClass:"font-bold"},[t._v("Lat:")]),t._v(" "),e("div",{staticClass:"border border-gray-300 bg-white p-2 w-full h-full rounded",attrs:{missionlongitude:t.missionlatitude}},[t._v("\n          "+t._s(t.missionlatitude)+"\n        ")])]),t._v(" "),e("div",{staticClass:"h-full"},[e("p",{staticClass:"font-bold"},[t._v("Long:")]),t._v(" "),e("div",{staticClass:"border border-gray-300 bg-white p-2 w-full rounded",attrs:{missionlatitude:t.missionlongitude}},[t._v("\n          "+t._s(t.missionlongitude)+"\n        ")])])])]),t._v(" "),e("div",{staticClass:"flex px-8 place-content-between max-w-screen-lg sm:m-auto"},[e("NuxtLink",{staticClass:"secondary-button",attrs:{to:"/flow/images"}},[e("button",[t._v("BACK")])]),t._v(" "),e("button",{staticClass:"primary-button",on:{click:function(e){return t.updateStore()}}},[t._v("FORWARD")])],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-2"},[e("p",{staticClass:"font-bold"},[t._v("Current position over earth:")]),t._v(" "),e("div",{staticClass:"border rounded border-gray-300 bg-white h-5/6",attrs:{id:"map_container"}},[e("div",{staticClass:"w-full h-60 sm:h-full sm:w-full",attrs:{id:"map"}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:o(91).default})}}]);