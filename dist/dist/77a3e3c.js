(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{384:function(t,e,n){var map={"./af":250,"./af.js":250,"./ar":251,"./ar-dz":252,"./ar-dz.js":252,"./ar-kw":253,"./ar-kw.js":253,"./ar-ly":254,"./ar-ly.js":254,"./ar-ma":255,"./ar-ma.js":255,"./ar-sa":256,"./ar-sa.js":256,"./ar-tn":257,"./ar-tn.js":257,"./ar.js":251,"./az":258,"./az.js":258,"./be":259,"./be.js":259,"./bg":260,"./bg.js":260,"./bm":261,"./bm.js":261,"./bn":262,"./bn-bd":263,"./bn-bd.js":263,"./bn.js":262,"./bo":264,"./bo.js":264,"./br":265,"./br.js":265,"./bs":266,"./bs.js":266,"./ca":267,"./ca.js":267,"./cs":268,"./cs.js":268,"./cv":269,"./cv.js":269,"./cy":270,"./cy.js":270,"./da":271,"./da.js":271,"./de":272,"./de-at":273,"./de-at.js":273,"./de-ch":274,"./de-ch.js":274,"./de.js":272,"./dv":275,"./dv.js":275,"./el":276,"./el.js":276,"./en-au":277,"./en-au.js":277,"./en-ca":278,"./en-ca.js":278,"./en-gb":279,"./en-gb.js":279,"./en-ie":280,"./en-ie.js":280,"./en-il":281,"./en-il.js":281,"./en-in":282,"./en-in.js":282,"./en-nz":283,"./en-nz.js":283,"./en-sg":284,"./en-sg.js":284,"./eo":285,"./eo.js":285,"./es":286,"./es-do":287,"./es-do.js":287,"./es-mx":288,"./es-mx.js":288,"./es-us":289,"./es-us.js":289,"./es.js":286,"./et":290,"./et.js":290,"./eu":291,"./eu.js":291,"./fa":292,"./fa.js":292,"./fi":293,"./fi.js":293,"./fil":294,"./fil.js":294,"./fo":295,"./fo.js":295,"./fr":296,"./fr-ca":297,"./fr-ca.js":297,"./fr-ch":298,"./fr-ch.js":298,"./fr.js":296,"./fy":299,"./fy.js":299,"./ga":300,"./ga.js":300,"./gd":301,"./gd.js":301,"./gl":302,"./gl.js":302,"./gom-deva":303,"./gom-deva.js":303,"./gom-latn":304,"./gom-latn.js":304,"./gu":305,"./gu.js":305,"./he":306,"./he.js":306,"./hi":307,"./hi.js":307,"./hr":308,"./hr.js":308,"./hu":309,"./hu.js":309,"./hy-am":310,"./hy-am.js":310,"./id":311,"./id.js":311,"./is":312,"./is.js":312,"./it":313,"./it-ch":314,"./it-ch.js":314,"./it.js":313,"./ja":315,"./ja.js":315,"./jv":316,"./jv.js":316,"./ka":317,"./ka.js":317,"./kk":318,"./kk.js":318,"./km":319,"./km.js":319,"./kn":320,"./kn.js":320,"./ko":321,"./ko.js":321,"./ku":322,"./ku.js":322,"./ky":323,"./ky.js":323,"./lb":324,"./lb.js":324,"./lo":325,"./lo.js":325,"./lt":326,"./lt.js":326,"./lv":327,"./lv.js":327,"./me":328,"./me.js":328,"./mi":329,"./mi.js":329,"./mk":330,"./mk.js":330,"./ml":331,"./ml.js":331,"./mn":332,"./mn.js":332,"./mr":333,"./mr.js":333,"./ms":334,"./ms-my":335,"./ms-my.js":335,"./ms.js":334,"./mt":336,"./mt.js":336,"./my":337,"./my.js":337,"./nb":338,"./nb.js":338,"./ne":339,"./ne.js":339,"./nl":340,"./nl-be":341,"./nl-be.js":341,"./nl.js":340,"./nn":342,"./nn.js":342,"./oc-lnc":343,"./oc-lnc.js":343,"./pa-in":344,"./pa-in.js":344,"./pl":345,"./pl.js":345,"./pt":346,"./pt-br":347,"./pt-br.js":347,"./pt.js":346,"./ro":348,"./ro.js":348,"./ru":349,"./ru.js":349,"./sd":350,"./sd.js":350,"./se":351,"./se.js":351,"./si":352,"./si.js":352,"./sk":353,"./sk.js":353,"./sl":354,"./sl.js":354,"./sq":355,"./sq.js":355,"./sr":356,"./sr-cyrl":357,"./sr-cyrl.js":357,"./sr.js":356,"./ss":358,"./ss.js":358,"./sv":359,"./sv.js":359,"./ta":360,"./ta.js":360,"./te":361,"./te.js":361,"./tet":362,"./tet.js":362,"./tg":363,"./tg.js":363,"./th":364,"./th.js":364,"./tk":365,"./tk.js":365,"./tl-ph":366,"./tl-ph.js":366,"./tlh":367,"./tlh.js":367,"./tr":368,"./tr.js":368,"./tzl":369,"./tzl.js":369,"./tzm":370,"./tzm-latn":371,"./tzm-latn.js":371,"./tzm.js":370,"./ug-cn":372,"./ug-cn.js":372,"./uk":373,"./uk.js":373,"./ur":374,"./ur.js":374,"./uz":375,"./uz-latn":376,"./uz-latn.js":376,"./uz.js":375,"./vi":377,"./vi.js":377,"./x-pseudo":378,"./x-pseudo.js":378,"./yo":379,"./yo.js":379,"./zh-cn":380,"./zh-cn.js":380,"./zh-hk":381,"./zh-hk.js":381,"./zh-mo":382,"./zh-mo.js":382,"./zh-tw":383,"./zh-tw.js":383};function l(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=r,t.exports=l,l.id=384},434:function(t,e,n){"use strict";n.r(e);var l=n(242),r=n.n(l),o={data:function(){return{id:""}},mounted:function(){$("#reserve-table").DataTable({paging:!0,lengthChange:!1,searching:!0,ordering:!1,info:!0,autoWidth:!0,responsive:!0,lengthMenu:[[10,25,50,-1],[10,25,50,"All"]],language:{info:"เเสดง _START_ ถึง _END_ ของ _TOTAL_ รายการ",infoEmpty:"แสดง 0 ถึง 0 ของ 0 รายการ",lengthMenu:"เเสดง _MENU_ รายการ",loadingRecords:"กำลังโหลด...",processing:"ประมวลผล...",search:"ค้นหา:",emptyTable:"ไม่พบข้อมูล",paginate:{previous:"ก่อนหน้า",next:"ถัดไป",first:"เเรกสุด",last:"สุดท้าย",infoEmpty:"ไม่พบข้อมูล"}}})},methods:{moment:function(){return r()()},alertDeleteReserve:function(t){this.id=t,$("#modal-delete-reserve").modal("show")},confirmDeleteReserve:function(t){$("#modal-delete-reserve").modal("hide"),this.$emit("deleteData",t)}},props:{reserve:{type:Array,required:!0}},filters:{moment:function(t){return r()(t).format("YYYY-MM-DD HH:mm:ss")}}},c=n(4),d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"col-12 float-left clearfix"},[n("nuxt-link",{staticClass:"btn btn-info btn-sm",attrs:{to:"/admin/reserve/create"}},[n("i",{staticClass:"fas fa-plus"}),t._v(" เพิ่มรายการจอง")])],1)]),t._v(" "),n("div",{staticClass:"card-body",staticStyle:{"padding-top":"0px"}},[n("div",{staticClass:"col-12 table-container"},[n("table",{staticClass:"table table-bordered table-hover",attrs:{id:"reserve-table"}},[t._m(1),t._v(" "),n("tbody",t._l(t.reserve,(function(e,l){return n("tr",{key:e.id,attrs:{index:l}},[n("td",{staticClass:"text-center"},[t._v(t._s(l+1))]),t._v(" "),n("td",{staticClass:"text-left"},[t._v("\n                    "+t._s(e.zone?e.zone.zone_topic:"")+"\n                  ")]),t._v(" "),n("td",{staticClass:"text-left"},[t._v("\n                    "+t._s(e.title?e.title:"")+" "+t._s(e.first_name?e.first_name:"")+" "+t._s(e.last_name?e.last_name:"")+"\n                  ")]),t._v(" "),n("td",{staticClass:"text-left"},[t._v("\n                    "+t._s(e.mobile?e.mobile:"")+"\n                  ")]),t._v(" "),n("td",{staticClass:"text-left"},[t._v("\n                    "+t._s(e.amount?e.amount:"0")+"\n                  ")]),t._v(" "),n("td",{staticClass:"text-center"},["P"==e.status?n("span",[n("b",{staticStyle:{color:"#007bff"}},[t._v("กำลังดำเนินการ")])]):t._e(),t._v(" "),"A"==e.status?n("span",[n("b",{staticStyle:{color:"#17a2b8"}},[t._v("อนุมัติ")])]):t._e(),t._v(" "),"I"==e.status?n("span",[n("b",{staticStyle:{color:"#dc3545"}},[t._v("ไม่อนุมัติ")])]):t._e()]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(t._f("moment")(e.update_dttm)))]),t._v(" "),n("td",{staticClass:"project-actions text-center"},[n("nuxt-link",{staticClass:"btn btn-info btn-sm",attrs:{to:{path:"reserve/"+e.id}}},[n("i",{staticClass:"fas fa-pencil-alt"}),t._v("\n                      แก้ไข\n                    ")]),t._v(" "),n("a",{staticClass:"btn btn-danger btn-sm",on:{click:function(n){return t.alertDeleteReserve(e.id)}}},[n("i",{staticClass:"fas fa-trash"}),t._v("\n                      ลบ\n                    ")])],1)])})),0)])])])])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"modal-delete-reserve"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){return t.confirmDeleteReserve(t.id)}}},[t._v("ตกลง")]),t._v(" "),n("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("ยกเลิก")])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("h3",{staticClass:"card-title"},[t._v("รายการจองทั้งหมด")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"text-center",staticStyle:{width:"5%"}},[t._v("ลำดับ")]),t._v(" "),n("th",{staticClass:"text-left",staticStyle:{width:"10%"}},[t._v("โซน")]),t._v(" "),n("th",{staticClass:"text-left",staticStyle:{width:"19%"}},[t._v("ชื่อ-สกุล")]),t._v(" "),n("th",{staticClass:"text-left",staticStyle:{width:"8%"}},[t._v("เบอร์มือถือ")]),t._v(" "),n("th",{staticClass:"text-left",staticStyle:{width:"8%"}},[t._v("จำนวน")]),t._v(" "),n("th",{staticClass:"text-center",staticStyle:{width:"10%"}},[t._v("สถานะ")]),t._v(" "),n("th",{staticClass:"text-center",staticStyle:{width:"15%"}},[t._v("วันที่แก้ไข")]),t._v(" "),n("th",{staticClass:"text-center",staticStyle:{width:"20% !important"}},[t._v("#")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header"},[n("h4",{staticClass:"modal-title"},[t._v("ข้อความเเจ้งเตือน")]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-body"},[n("p",[t._v("ต้องการลบรายการใช่หรือไม่ ?")])])}],!1,null,null,null).exports,j=(n(3),{layout:"adminLayout",components:{ReserveList:d},mounted:function(){this.$nextTick((function(){$("#loading-modal").modal("show"),setTimeout((function(){return $("#loading-modal").modal("hide")}),1500)}))},fetch:function(t){var e=t.store;t.params;if(!e.state.reserveData||0==e.state.reserveData.length)return e.dispatch("initReserve")},computed:{loadData:function(){var data=[];return this.$store.getters.getAllReserve&&(data=this.$store.getters.getAllReserve),data}},methods:{onDeleted:function(t){$("#loading-modal").modal("show"),this.$store.dispatch("deleteReserve",t).then((function(){setTimeout((function(){$("#loading-modal").modal("hide"),toastr.info("ลบข้อมูลเรียบร้อยเเล้ว")}),1500)})).catch((function(t){$("#loading-modal").modal("้hide"),toastr.error("ไม่สามารถลบข้อมูลได้"),console.log("error ",t)}))}}}),v=Object(c.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content-header"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row mb-2"},[t._m(0),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("ol",{staticClass:"breadcrumb float-sm-right"},[n("li",{staticClass:"breadcrumb-item"},[n("nuxt-link",{attrs:{to:"/admin/news"}},[t._v("หน้าแรก")])],1),t._v(" "),n("li",{staticClass:"breadcrumb-item active"},[t._v("เเสดงรายการจอง")])])])])])]),t._v(" "),n("section",{staticClass:"content"},[n("div",{staticClass:"container-fluid"},[n("ReserveList",{attrs:{reserve:t.loadData},on:{deleteData:t.onDeleted}})],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-6"},[n("h1",{staticClass:"m-0 text-dark"},[t._v("รายการจอง")])])}],!1,null,null,null);e.default=v.exports}}]);