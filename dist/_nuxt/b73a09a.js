(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{340:function(t,e,r){t.exports=r.p+"img/logout.ca5715b.png"},341:function(t,e,r){"use strict";var o=r(2),n=r(4),c=r(45),l=r(30),d=r(40),f=r(223),m=r(15),h=r(3),v=r(222),w=r(154),_=r(342),y=r(343),C=r(94),x=r(344),S=[],k=n(S.sort),A=n(S.push),R=h((function(){S.sort(void 0)})),$=h((function(){S.sort(null)})),J=w("sort"),O=!h((function(){if(C)return C<70;if(!(_&&_>3)){if(y)return!0;if(x)return x<603;var code,t,e,r,o="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)S.push({k:t+r,v:e})}for(S.sort((function(a,b){return b.v-a.v})),r=0;r<S.length;r++)t=S[r].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:R||!$||!J||!O},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(O)return void 0===t?k(e):k(e,t);var r,o,n=[],h=d(e);for(o=0;o<h;o++)o in e&&A(n,e[o]);for(v(n,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:m(e)>m(r)?1:-1}}(t)),r=n.length,o=0;o<r;)e[o]=n[o++];for(;o<h;)f(e,o++);return e}})},342:function(t,e,r){var o=r(72).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},343:function(t,e,r){var o=r(72);t.exports=/MSIE|Trident/.test(o)},344:function(t,e,r){var o=r(72).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},350:function(t,e,r){"use strict";r.r(e);r(341),r(34),r(13),r(153);var o=r(70),n={name:"App",transition:"indexpage",data:function(){return{user:"",reports:[]}},mounted:function(){localStorage.user?(this.user=JSON.parse(localStorage.user),this.$store.commit("setSpacereport",{key:"missionuser",value:this.user.id}),console.log(this.spacereport.missionuser)):this.$router.push({path:"/login"}),localStorage.reports&&(this.reports=JSON.parse(localStorage.reports))},methods:{beforeEnter:function(t){t.style.opacity=0,t.style.transform="translateY(100px)"},enter:function(t,e){o.a.to(t,{opacity:1,y:0,duration:.2,onComplete:e,delay:.5*t.dataset.index})},reportsFilterAndSort:function(){var t=this;return this.reports.filter((function(e){return e.missionuser==t.spacereport.missionuser})).sort((function(a,b){return new Date(b.missiondate)-new Date(a.missiondate)}))},clearUser:function(){localStorage.removeItem("user"),this.$router.push({path:"/login"})},removeReport:function(t,e){confirm("Are you sure you want to delete ".concat(e.missionname))&&(this.reports.splice(this.reports.indexOf(e),1),localStorage.setItem("reports",JSON.stringify(this.reports)))},editReport:function(t){console.log("edit test"),this.$router.push({path:"/flow/details"}),this.$store.commit("editReport",{report:t})},formatDate:function(t){return new Date(t).toLocaleString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"})},resetReport:function(){console.log("test 2 reset"),localStorage.removeItem("currentReport"),this.$store.commit("resetReport"),this.$router.push("/flow/details")}},computed:{spacereport:function(){return this.$store.getters.spacereport},spacereports:function(){return this.$store.getters.spacereports}},watch:{user:function(t){localStorage.user=JSON.stringify(t)},report:function(t){localStorage.report=JSON.stringify(t)}}},c=r(9),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-screen h-screen page-enter-active"},[e("button",{staticClass:"absolute bold top-1 right-1",on:{click:t.clearUser}},[e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"w-10 h-10",attrs:{"data-src":r(340),alt:"logout"}})]),t._v(" "),e("div",[e("h1",{staticClass:"my-6 text-center"},[t._v("\n      Hi, "+t._s(t.user.first_name)+" "+t._s(t.user.last_name)+"\n    ")])]),t._v(" "),e("div",{staticClass:"grid sm:flex justify-items-center bg-blue-50"},[e("section",{staticClass:"grid mb-12 sm:grid sm:grid-cols-2",attrs:{id:"section_layout"}},[e("div",{staticClass:"row-start-2 row-end-2 sm:col-start-1 sm:col-end-2"},[e("p",{staticClass:"my-2"},[t._v("space reports created by "+t._s(t.user.first_name))]),t._v(" "),e("div",{staticClass:"overflow-scroll border border-gray-300 rounded h-4/5",attrs:{id:"report_container"}},[t.reports.length?t._e():e("p",{staticClass:"flex items-center justify-center h-full"},[t._v("\n            no spacereports saved\n          ")]),t._v(" "),t.reports.length?e("div",[e("transition-group",{attrs:{appear:"",tag:"ul"},on:{"before-enter":t.beforeEnter,enter:t.enter}},t._l(t.reportsFilterAndSort(),(function(r,o){return e("div",{key:r.missionid,staticClass:"grid mx-3 bg-blue-300 rounded card sm:grid-cols-3",attrs:{"data-index":o}},[e("div",{staticClass:"p-3 sm:col-span-2"},[e("p",{staticClass:"overflow-hidden text-lg font-bold text-left uppercase whitespace-nowrap overflow-ellipsis"},[t._v("\n                    "+t._s(r.missionname)+"\n                  ")]),t._v(" "),e("p",{staticClass:"text-sm text-left"},[e("span",{staticClass:"font-bold"},[t._v("DATE:")]),t._v("\n                    "+t._s(t.formatDate(r.missiondate))+"\n                    ")])]),t._v(" "),e("div",{staticClass:"grid sm:col-span-1 sm:row-span-2"},[e("button",{staticClass:"text-sm edit-button sm:m-0",on:{click:function(e){return t.editReport(r)}}},[t._v("\n                    edit\n                  ")]),t._v(" "),e("button",{staticClass:"text-sm delete-button",on:{click:function(e){return t.removeReport(o,r)}}},[t._v("\n                    delete\n                  ")])])])})),0)],1):t._e()])]),t._v(" "),e("div",{staticClass:"row-start-1 row-end-2 sm:m-10 sm:p-4 sm:row-start-2 sm:row-end-3"},[e("button",{staticClass:"grid report-button",on:{click:t.resetReport}},[t._v("\n          + create new space report\n        ")]),t._v(" "),e("p",{staticClass:"mt-4 font-bold uppercase sm:text-xl"},[t._v("fun space facts")]),t._v(" "),e("p",[t._v("\n          From Siberia to the Sahara, Earth experiences an extensive range of\n          temperatures. Records exist as high as 57°C and all the way down to\n          -89°C. But what we consider extreme on Earth is average in space. On\n          planets without an insulating atmosphere, temperatures wildly\n          fluctuate between day and night.\n        ")]),t._v(" "),e("p",{staticClass:"my-4"},[t._v("\n          Mercury regularly sees days around 449°C and and frigid nights as\n          low as -171°C. And in space itself, some spacecraft experience\n          temperature differences of 33°C just between their sunlit and shady\n          sides. That would be like having a glass of water in the shade\n          freeze on a hot summer day!\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(91).default})}}]);