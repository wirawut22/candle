(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{243:function(t,e,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("d310d158",content,!0,{sourceMap:!1})},244:function(t,e,n){"use strict";n(243)},245:function(t,e,n){var l=n(34)(!1);l.push([t.i,".tab_menu ul[data-v-203a8359]{text-align:center}.tab_menu ul li[data-v-203a8359]{display:inline-grid;width:120px;float:none;padding:15px 5px;justify-content:center;cursor:pointer}.tab_menu ul li.active[data-v-203a8359],.tab_menu ul li[data-v-203a8359]:focus,.tab_menu ul li[data-v-203a8359]:hover{display:inline-grid;width:120px;float:none;padding:15px 0;justify-content:center;background:#002147;border-radius:8px}.tab_menu ul li[data-v-203a8359]:focus,.tab_menu ul li[data-v-203a8359]:hover{color:#fff!important;cursor:pointer}.tab_menu ul li.active a[data-v-203a8359],.tab_menu ul li a[data-v-203a8359]:hover{color:#fff!important}.tab_menu ul[data-v-203a8359]{width:950px;margin:auto;padding:10px}.nav-link[data-v-203a8359]{padding:0!important}.tabbar_menu .container .row div[data-v-203a8359]{background-color:#fff!important}",""]),t.exports=l},246:function(t,e,n){"use strict";var l={mounted:function(){var t=this.$store.getters.getTabActive;$(".tab_menu ul li").removeClass("active"),$(".tab_menu ul li#"+t).addClass("active")},props:{placeGroupList:{type:Array,required:!1}},methods:{activeTab:function(t){this.$store.dispatch("activeTab",t)}}},c=(n(244),n(4)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section tabbar_menu"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12",staticStyle:{padding:"0px"}},[n("div",{staticClass:"tab_menu"},[n("ul",[n("li",{staticClass:"tab active",attrs:{id:"tab-home"},on:{click:function(e){return t.activeTab("tab-home")}}},[n("nuxt-link",{attrs:{to:"/"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-home"})]),t._v("หน้าเเรก")])],1),t._v(" "),n("li",{staticClass:"tab",attrs:{id:"tab-news"},on:{click:function(e){return t.activeTab("tab-news")}}},[n("nuxt-link",{attrs:{to:"/news"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"far fa-newspaper"})]),t._v("ข่าวสาร")])],1),t._v(" "),n("li",{staticClass:"tab",staticStyle:{"margin-right":"-5px"},attrs:{id:"tab-reserve"},on:{click:function(e){return t.activeTab("tab-reserve")}}},[n("nuxt-link",{attrs:{to:"/reserve"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-newspaper"})]),t._v("จองที่นั่ง")])],1),t._v(" "),t._l(t.placeGroupList,(function(e,l){return n("li",{key:e.id,staticClass:"tab",staticStyle:{"margin-left":"5px"},attrs:{id:"tab-"+e.id,index:l},on:{click:function(n){return t.activeTab("tab-"+e.id)}}},[n("nuxt-link",{staticClass:"nav-link",attrs:{to:e.context_path+"/"+e.id}},[n("span",{staticClass:"icon"},[n("i",{class:e.icon})]),t._v("\n\t\t\t\t\t\t\t"+t._s(e.topic)+"\n\t\t\t\t\t\t   ")])],1)}))],2)])])])])])}),[],!1,null,"203a8359",null);e.a=component.exports},247:function(t,e,n){"use strict";var l=n(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{staticClass:"footer-box"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-3"},[n("div",{staticClass:"footer_blog"},[n("h3",[t._v("วัตถุประสงค์")]),t._v(" "),n("div",{staticClass:"full white_fonts"},[n("p",[t._v("วัตถุประสงค์ของการจัดงานประเพณีแห่เทียนพรรษา ๑. เพื่อเป็นการส่งเสริม อนุรักษ์สืบสาน ประเพณีของไทยให้คงอยู่สืบไป รสมานสามัคคี ๓. เพื่อปลูกฝัง ขนบธรรมเนียม ประเพณีวัฒนธรรมของไทย ให้กับเด็กและ เยาวชนได้ถือปฏิบัติและร่วมกันสืบสานต่อ…")])])])]),t._v(" "),n("div",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-3"},[n("div",{staticClass:"footer_blog footer_menu white_fonts"},[n("h3",[t._v("หมวดหมู่")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#"}},[t._v(" วัฒนธรรมอีสาน")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v(" วัฒนธรรมไทย")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v(" ประเพณีเเห่เทียนเข้าพรรษา")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v(" ศิลปะวัฒนธรรมท้องถิ่น")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v(" จังหวัดอุบลราชธานี")])])])])]),t._v(" "),n("div",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-3"},[n("div",{staticClass:"footer_blog full white_fonts"},[n("h3",[t._v("รับข้อมูลข่าวสาร")]),t._v(" "),n("p",[t._v("กรอกอีเมล์เพื่อรับข่าวสารจากเรา")]),t._v(" "),n("div",{staticClass:"newsletter_form"},[n("form",{attrs:{action:"index.html"}},[n("input",{attrs:{type:"email",placeholder:"กรอกอีเมล์",name:"#",required:""}}),t._v(" "),n("button",[t._v("ส่ง")])])])])]),t._v(" "),n("div",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-3"},[n("div",{staticClass:"footer_blog full white_fonts"},[n("h3",[t._v("ติดต่อเรา")]),t._v(" "),n("ul",{staticClass:"full"},[n("li",[n("img",{attrs:{src:"/base/images/i5.png"}}),t._v(" "),n("span",[t._v("\n                    ธรรมวิถี ตำบล ในเมือง อำเภอเมือง อุบลราชธานี อุบลราชธานี 34000\n                  ")])]),t._v(" "),n("li",[n("img",{attrs:{src:"/base/images/i6.png"}}),t._v(" "),n("span",[t._v("candlesfest@gmail.com")])]),t._v(" "),n("li",[n("img",{attrs:{src:"/base/images/i7.png"}}),t._v(" "),n("span",[t._v("099-999-9999")])])])])])])])])])}],!1,null,null,null);e.a=component.exports},248:function(t,e,n){"use strict";var l=n(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"section layout_padding padding_bottom-0"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"full"},[n("div",{staticClass:"heading_main text_align_center"},[n("h2",[n("span",[t._v("ติดต่อเรา")])])])])])])])]),t._v(" "),n("div",{staticClass:"section contact_section",staticStyle:{background:"#12385b"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[n("div",{staticClass:"full float-right_img"},[n("img",{attrs:{src:"https://cdn.pixabay.com/photo/2019/05/10/14/23/contact-us-4193637_960_720.jpg",alt:"#"}})])]),t._v(" "),n("div",{staticClass:"layout_padding col-lg-6 col-md-6 col-sm-12"},[n("div",{staticClass:"contact_form"},[n("form",{attrs:{action:"contact.html"}},[n("fieldset",[n("div",{staticClass:"full field"},[n("input",{attrs:{type:"text",placeholder:"กรอกชื่อ",name:"ชื่อ"}})]),t._v(" "),n("div",{staticClass:"full field"},[n("input",{attrs:{type:"email",placeholder:"กรอกอีเมล์",name:"อีเมล์"}})]),t._v(" "),n("div",{staticClass:"full field"},[n("input",{attrs:{type:"phn",placeholder:"กรอกเบอร์โทร",name:"เบอร์โทรศัพท์"}})]),t._v(" "),n("div",{staticClass:"full field"},[n("textarea",{attrs:{placeholder:"รายละเอียด"}})]),t._v(" "),n("div",{staticClass:"full field"},[n("div",{staticClass:"center"},[n("button",[t._v("ส่งข้อความ")])])])])])])])])])])])}],!1,null,null,null);e.a=component.exports},249:function(t,e,n){"use strict";var l=n(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"footer_bottom"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",{staticClass:"crp"},[t._v("© Copyright © 2020 "),n("b",[t._v("https://candlesfest.com")]),t._v(". All rights reserved.")])])])])]),t._v(" "),n("a",{staticClass:"hvr-radial-out",attrs:{href:"#",id:"scroll-to-top"}},[n("i",{staticClass:"fa fa-angle-up"})])])}],!1,null,null,null);e.a=component.exports},384:function(t,e,n){var map={"./af":250,"./af.js":250,"./ar":251,"./ar-dz":252,"./ar-dz.js":252,"./ar-kw":253,"./ar-kw.js":253,"./ar-ly":254,"./ar-ly.js":254,"./ar-ma":255,"./ar-ma.js":255,"./ar-sa":256,"./ar-sa.js":256,"./ar-tn":257,"./ar-tn.js":257,"./ar.js":251,"./az":258,"./az.js":258,"./be":259,"./be.js":259,"./bg":260,"./bg.js":260,"./bm":261,"./bm.js":261,"./bn":262,"./bn-bd":263,"./bn-bd.js":263,"./bn.js":262,"./bo":264,"./bo.js":264,"./br":265,"./br.js":265,"./bs":266,"./bs.js":266,"./ca":267,"./ca.js":267,"./cs":268,"./cs.js":268,"./cv":269,"./cv.js":269,"./cy":270,"./cy.js":270,"./da":271,"./da.js":271,"./de":272,"./de-at":273,"./de-at.js":273,"./de-ch":274,"./de-ch.js":274,"./de.js":272,"./dv":275,"./dv.js":275,"./el":276,"./el.js":276,"./en-au":277,"./en-au.js":277,"./en-ca":278,"./en-ca.js":278,"./en-gb":279,"./en-gb.js":279,"./en-ie":280,"./en-ie.js":280,"./en-il":281,"./en-il.js":281,"./en-in":282,"./en-in.js":282,"./en-nz":283,"./en-nz.js":283,"./en-sg":284,"./en-sg.js":284,"./eo":285,"./eo.js":285,"./es":286,"./es-do":287,"./es-do.js":287,"./es-mx":288,"./es-mx.js":288,"./es-us":289,"./es-us.js":289,"./es.js":286,"./et":290,"./et.js":290,"./eu":291,"./eu.js":291,"./fa":292,"./fa.js":292,"./fi":293,"./fi.js":293,"./fil":294,"./fil.js":294,"./fo":295,"./fo.js":295,"./fr":296,"./fr-ca":297,"./fr-ca.js":297,"./fr-ch":298,"./fr-ch.js":298,"./fr.js":296,"./fy":299,"./fy.js":299,"./ga":300,"./ga.js":300,"./gd":301,"./gd.js":301,"./gl":302,"./gl.js":302,"./gom-deva":303,"./gom-deva.js":303,"./gom-latn":304,"./gom-latn.js":304,"./gu":305,"./gu.js":305,"./he":306,"./he.js":306,"./hi":307,"./hi.js":307,"./hr":308,"./hr.js":308,"./hu":309,"./hu.js":309,"./hy-am":310,"./hy-am.js":310,"./id":311,"./id.js":311,"./is":312,"./is.js":312,"./it":313,"./it-ch":314,"./it-ch.js":314,"./it.js":313,"./ja":315,"./ja.js":315,"./jv":316,"./jv.js":316,"./ka":317,"./ka.js":317,"./kk":318,"./kk.js":318,"./km":319,"./km.js":319,"./kn":320,"./kn.js":320,"./ko":321,"./ko.js":321,"./ku":322,"./ku.js":322,"./ky":323,"./ky.js":323,"./lb":324,"./lb.js":324,"./lo":325,"./lo.js":325,"./lt":326,"./lt.js":326,"./lv":327,"./lv.js":327,"./me":328,"./me.js":328,"./mi":329,"./mi.js":329,"./mk":330,"./mk.js":330,"./ml":331,"./ml.js":331,"./mn":332,"./mn.js":332,"./mr":333,"./mr.js":333,"./ms":334,"./ms-my":335,"./ms-my.js":335,"./ms.js":334,"./mt":336,"./mt.js":336,"./my":337,"./my.js":337,"./nb":338,"./nb.js":338,"./ne":339,"./ne.js":339,"./nl":340,"./nl-be":341,"./nl-be.js":341,"./nl.js":340,"./nn":342,"./nn.js":342,"./oc-lnc":343,"./oc-lnc.js":343,"./pa-in":344,"./pa-in.js":344,"./pl":345,"./pl.js":345,"./pt":346,"./pt-br":347,"./pt-br.js":347,"./pt.js":346,"./ro":348,"./ro.js":348,"./ru":349,"./ru.js":349,"./sd":350,"./sd.js":350,"./se":351,"./se.js":351,"./si":352,"./si.js":352,"./sk":353,"./sk.js":353,"./sl":354,"./sl.js":354,"./sq":355,"./sq.js":355,"./sr":356,"./sr-cyrl":357,"./sr-cyrl.js":357,"./sr.js":356,"./ss":358,"./ss.js":358,"./sv":359,"./sv.js":359,"./ta":360,"./ta.js":360,"./te":361,"./te.js":361,"./tet":362,"./tet.js":362,"./tg":363,"./tg.js":363,"./th":364,"./th.js":364,"./tk":365,"./tk.js":365,"./tl-ph":366,"./tl-ph.js":366,"./tlh":367,"./tlh.js":367,"./tr":368,"./tr.js":368,"./tzl":369,"./tzl.js":369,"./tzm":370,"./tzm-latn":371,"./tzm-latn.js":371,"./tzm.js":370,"./ug-cn":372,"./ug-cn.js":372,"./uk":373,"./uk.js":373,"./ur":374,"./ur.js":374,"./uz":375,"./uz-latn":376,"./uz-latn.js":376,"./uz.js":375,"./vi":377,"./vi.js":377,"./x-pseudo":378,"./x-pseudo.js":378,"./yo":379,"./yo.js":379,"./zh-cn":380,"./zh-cn.js":380,"./zh-hk":381,"./zh-hk.js":381,"./zh-mo":382,"./zh-mo.js":382,"./zh-tw":383,"./zh-tw.js":383};function l(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=c,t.exports=l,l.id=384},387:function(t,e,n){"use strict";var l=n(4),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ulockd-home-slider"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"pogoSlider",attrs:{id:"js-main-slider"}},[n("div",{staticClass:"pogoSlider-slide",staticStyle:{"background-image":"url(/base/images/buddhist-1793421_960_720.png)"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"slide_text"},[n("h3",[n("span",{staticClass:"theme_color",staticStyle:{color:"#fff"},attrs:{span:""}},[t._v("ขอเชิญร่วมงานประเพณีแห่เทียนเข้าพรรษา")])]),t._v(" "),n("h4",[t._v("ณ จังหวัดอุบลราชธานี")])])])])])]),t._v(" "),n("div",{staticClass:"pogoSlider-slide",staticStyle:{"background-image":"url(/base/images/monks-1822569_960_720.png)"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"slide_text"},[n("h3",[n("span",{staticClass:"theme_color",staticStyle:{color:"#fff"},attrs:{span:""}},[t._v("ขอเชิญร่วมงานประเพณีแห่เทียนเข้าพรรษา")])]),t._v(" "),n("h4",[t._v("ณ จังหวัดอุบลราชธานี")])])])])])])])])])])}],!1,null,null,null);e.a=component.exports},404:function(t,e,n){var content=n(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("1caa6023",content,!0,{sourceMap:!1})},423:function(t,e,n){"use strict";n(404)},424:function(t,e,n){var l=n(34)(!1);l.push([t.i,".tab_menu[data-v-ccc34dae]{margin-top:0!important}.section[data-v-ccc34dae]{background-color:#eee}.blog_img_popular[data-v-ccc34dae]{text-align:center}.blog_img_popular img[data-v-ccc34dae]{width:auto}.product-image[data-v-ccc34dae]{max-width:100%;max-height:500px;width:auto;border-radius:10px;padding:5px;border:1px solid #dee2e6;box-shadow:0 1px 2px rgba(0,0,0,.075)}.product-image-thumb[data-v-ccc34dae]{cursor:pointer}",""]),t.exports=l},436:function(t,e,n){"use strict";n.r(e);n(28),n(18),n(19),n(46),n(47);var l=n(9),c=n(242),r=n.n(c),o=n(387),d=n(246),v=n(247),m=n(248),f=n(249),_=n(3),j=n.n(_);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={layout:"coreLayout",components:{Slider:o.a,TabBar:d.a,Footer:v.a,About:m.a,CopyRight:f.a},mounted:function(){this.$nextTick((function(){$("#loading-modal").modal("show"),setTimeout((function(){return $("#loading-modal").modal("hide")}),1500)}))},data:function(){return{imageActive:"",newsActive:"active",newsPost:C({},this.post)}},methods:{moment:function(){return r()()},setActiveImage:function(t){this.imageActive=t}},props:{post:{type:Object,required:!1}},computed:{placeGroupList:function(){var data=[];return this.$store.getters.getAllPlaceGroup&&(data=this.$store.getters.getAllPlaceGroup),data}},filters:{moment:function(t){return r()(t).format("YYYY-MM-DD HH:mm:ss")}}},w=(n(423),n(4)),x={layout:"coreLayout",components:{NewsPost:Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner_page"},[n("header",{staticClass:"top-header",staticStyle:{"margin-top":"50px"}},[n("TabBar",{attrs:{placeGroupList:t.placeGroupList}})],1),t._v(" "),n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 layout_padding_2 mt-3"},[n("div",{staticClass:"full"},[n("div",{staticClass:"row"},[n("div",{staticClass:"heading_main text_align_left"},[n("h2",[n("span",[t._v(t._s(t.newsPost.topic))])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12",attrs:{id:"other-detail"}},[n("i",{staticClass:"fas fa-user",attrs:{title:"ผู้เขียน"}}),t._v(" ผู้เขียน : "+t._s(t.newsPost.author)+" | \n                                "),n("i",{staticClass:"fas fa-calendar-alt",attrs:{title:"อัพเดทล่าสุด"}}),t._v(" อัพเดทล่าสุด : "+t._s(t._f("moment")(t.newsPost.update_dttm))+"\n                            ")])]),t._v(" "),n("div",{staticClass:"row mt-3 mb-3"},[t.newsPost?n("div",{staticClass:"input-group"},[n("div",{staticClass:"col-12 text-center"},[t.imageActive||0!=t.newsPost.image.length?t._e():n("img",{staticClass:"product-image",attrs:{src:"/base/images/lazy.jpg","max-height":"500"}}),t._v(" "),!t.imageActive&&t.newsPost.image.length>0?n("img",{staticClass:"product-image",attrs:{src:t.newsPost.image[0],"max-height":"500"}}):t._e(),t._v(" "),t.imageActive?n("img",{staticClass:"product-image",attrs:{src:t.imageActive,"max-height":"500"}}):t._e()]),t._v(" "),n("div",{staticClass:"col-12 product-image-thumbs"},t._l(t.newsPost.image,(function(e){return n("div",{key:e,staticClass:"product-image-thumb",attrs:{index:t.index},on:{click:function(n){return t.setActiveImage(e)}}},[n("img",{staticClass:"img-responsive lazyload",attrs:{"data-src":e,"data-srcset":e},on:{error:function(t){t.target.src="/base/images/lazy.jpg"}}})])})),0)]):t._e()]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"full view"},[n("div",{domProps:{innerHTML:t._s(t.newsPost.description1)}})])])])])])])]),t._v(" "),n("Footer"),t._v(" "),n("CopyRight")],1)}),[],!1,null,"ccc34dae",null).exports},mounted:function(){this.$nextTick((function(){$("#loading-modal").modal("show"),setTimeout((function(){return $("#loading-modal").modal("hide")}),1500)}))},asyncData:function(t){return j.a.get("https://service.candlesfest.com/api/news/find/id/"+t.params.id).then((function(t){return{newsPost:t.data.news}})).catch((function(e){return t.error(e)}))}},k=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NewsPost",{attrs:{post:t.newsPost}})],1)}),[],!1,null,null,null);e.default=k.exports}}]);