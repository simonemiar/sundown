(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{346:function(e,t,o){"use strict";o.r(t);o(13),o(92);var r={name:"Details",layout:"flow",data:function(){return{missionid:this.$store.state.spacereport.missionid,missiondate:new Date(this.$store.state.spacereport.missiondate),errormissiondesc:[],errormissionname:[],currentreport:{},isdetailscompleted:this.$store.state.spacereport.iscompleted.isdetailscompleted}},mounted:function(){if(null==this.missionid&&(this.missionid=Math.random().toString(36).substr(2,9)),console.log(this.missionid),localStorage.user?(this.user=JSON.parse(localStorage.user),this.$store.commit("setSpacereport",{key:"missionuser",value:this.user.id}),console.log(this.spacereport.missionuser)):this.$router.push({path:"/login"}),localStorage.currentReport){var e=localStorage.getItem("currentReport"),t=JSON.parse(e);Object.assign(this.currentreport,t);this.$store.commit("setCurrentReport",this.currentreport),this.missiondate=new Date(this.currentreport.missiondate),console.log("date",this.currentreport)}else this.$store.commit("setCurrentReport",this.currentreport)},methods:{backBtn:function(){this.$router.push("/")},validateInput:function(){this.errormissionname=[],this.errormissiondesc=[],this.$store.state.spacereport.missionname&&this.$store.state.spacereport.missiondesc?(console.log("match"),this.$store.commit("setCompleted",{key:"isdetailscompleted",value:!0}),this.updateLocalstorage(),this.$router.push({path:"/flow/images"})):(this.$store.state.spacereport.missionname||(this.errormissionname="(Missionname required)"),this.$store.state.spacereport.missiondesc||(this.errormissiondesc="(Missiondesc required)"))},updateStore:function(){this.$store.commit("setSpacereport",{key:"missionid",value:this.missionid}),this.$store.commit("setSpacereport",{key:"missiondate",value:this.missiondate})},updateLocalstorage:function(){if(localStorage.currentReport){var e=this.currentreport;localStorage.setItem("currentReport",JSON.stringify(e))}else{var t={missionuser:this.$store.state.spacereport.missionuser,missionid:this.$store.state.spacereport.missionid,missionname:this.missionname,missiondesc:this.missiondesc,missiondate:this.missiondate,iscompleted:{isdetailscompleted:this.$store.state.spacereport.iscompleted.isdetailscompleted}};localStorage.setItem("currentReport",JSON.stringify(t))}}},computed:{spacereport:function(){return this.$store.getters.spacereport},iscompleted:function(){return this.$store.getters.spacereport.iscompleted},missionname:{get:function(){return this.$store.getters.spacereport.missionname||this.currentreport.missionname},set:function(e){return this.$store.commit("setSpacereport",{key:"missionname",value:e})}},missiondesc:{get:function(){return this.$store.getters.spacereport.missiondesc||this.currentreport.missiondesc},set:function(e){return this.$store.commit("setSpacereport",{key:"missiondesc",value:e})}}}},n=o(9),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-blue-50 w-screen h-screen page-enter-active"},[t("section",{staticClass:"sm:grid sm:grid-cols-2",attrs:{id:"section_layout"}},[t("div",{staticClass:"m-2 h-full"},[t("div",[t("label",{staticClass:"font-bold"},[e._v("Mission name")]),e._v(" "),e.errormissionname.length?t("span",{staticClass:"text-red-700 text-sm"},[e._v(e._s(e.errormissionname))]):e._e(),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.missionname,expression:"missionname"}],staticClass:"border border-gray-300 overflow-scroll w-full p-1",attrs:{id:"missionname",name:"missionname",required:""},domProps:{value:e.missionname},on:{input:function(t){t.target.composing||(e.missionname=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"h-full mt-1"},[t("label",{staticClass:"font-bold"},[e._v("Mission description")]),e._v(" "),e.errormissiondesc.length?t("span",{staticClass:"text-red-700 text-sm"},[e._v(e._s(e.errormissiondesc))]):e._e(),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.missiondesc,expression:"missiondesc"}],staticClass:"border border-gray-300 overflow-scroll h-52 w-full p-1",attrs:{id:"missiondesc",name:"missiondesc",required:""},domProps:{value:e.missiondesc},on:{input:function(t){t.target.composing||(e.missiondesc=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"m-2"},[t("p",{staticClass:"font-bold"},[e._v("Mission start date (calender)")]),e._v(" "),t("div",{staticClass:"h-full",attrs:{id:"calender_container"}},[t("div",[t("v-date-picker",{attrs:{"is-expanded":"",mode:"date","max-date":new Date,"show-caps":""},model:{value:e.missiondate,callback:function(t){e.missiondate=t},expression:"missiondate"}})],1)])])]),e._v(" "),t("div",{staticClass:"flex px-8 place-content-between max-w-screen-lg sm:m-auto"},[t("button",{staticClass:"secondary-button back-enter-active",on:{click:e.backBtn}},[e._v("\n      back\n    ")]),e._v(" "),t("button",{staticClass:"primary-button back-enter-active",on:{click:function(t){e.updateStore(),e.validateInput()}}},[e._v("\n      forward\n    ")])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:o(91).default})}}]);