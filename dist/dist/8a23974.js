(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{385:function(t,e,o){var content=o(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("25c280b2",content,!0,{sourceMap:!1})},388:function(t,e,o){"use strict";o(385)},389:function(t,e,o){var r=o(34)(!1);r.push([t.i,".product-image[data-v-13759776]{max-width:100%;max-height:500px;width:auto;border-radius:10px;padding:5px;border:1px solid #dee2e6;box-shadow:0 1px 2px rgba(0,0,0,.075)}.product-image-thumb[data-v-13759776]{cursor:pointer}",""]),t.exports=r},392:function(t,e,o){"use strict";o(28),o(18),o(19),o(46),o(47);var r=o(9);o(11),o(60),o(61),o(29),o(20);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={data:function(){return{imageActive:"",form:this.news?l({},this.news):{topic:"",description1:"",description2:"",image:"",author:""}}},computed:{},mounted:function(){if(this.news&&this.news.image){var t=this.news.image.toString();this.setFileNameInit(t.slice(0,100)+"...",t)}$("#newsForm").validate({rules:{topic:{required:!0,maxlength:500}},messages:{topic:{required:"กรุณากรอกหัวข้อ",maxlength:"ขนาดตัวอักษรต้องไม่เกิน 500 ตัวอักษร"}},errorElement:"span",errorPlacement:function(t,element){t.addClass("invalid-feedback"),element.closest(".form-group").append(t)},highlight:function(element,t,e){$(element).addClass("is-invalid")},unhighlight:function(element,t,e){$(element).removeClass("is-invalid")},ignore:".note-editor *"}),$(".textarea").summernote({height:500,focus:!1})},props:{news:{type:Object,required:!1}},methods:{handleFileUpload:function(){for(var t="",e=this.$refs.file.files,o=0;o<e.length;o++)0==o?t+=e[o].name:t=t+","+e[o].name;$(".custom-file-label").text(t.slice(0,100)+"...")},setFileNameInit:function(image,t){$(".custom-file-label").text(image),$("#newImage").val(t)},setActiveImage:function(t){this.imageActive=t},onSubmit:function(t){var e=this.$refs.file.files;this.form.image=e,this.form.description1=$("#description1").summernote("code"),this.form.newImage=$("#newImage").val(),$("#newsForm").valid()?this.$emit("newsData",this.form):console.log("validate is failed")},onReset:function(t){t.preventDefault(),this.form.topic="",this.form.description1="",this.form.description2="",$(".custom-file-label").text(""),this.form.author=""}}},d=(o(388),o(4)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row news"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"card"},[t._m(0),t._v(" "),o("form",{attrs:{id:"newsForm",role:"form"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)},reset:t.onReset}},[o("div",{staticClass:"card-body"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"topic"}},[t._v("หัวข้อ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.topic,expression:"form.topic"}],staticClass:"form-control",attrs:{type:"text",name:"topic",id:"topic",autocomplete:"off"},domProps:{value:t.form.topic},on:{input:function(e){e.target.composing||t.$set(t.form,"topic",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"author"}},[t._v("ผู้เขียน")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.author,expression:"form.author"}],staticClass:"form-control",attrs:{type:"text",name:"author",id:"author",autocomplete:"off"},domProps:{value:t.form.author},on:{input:function(e){e.target.composing||t.$set(t.form,"author",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"image"}},[t._v("รูปภาพ")]),t._v(" "),t.news?o("div",{staticClass:"input-group"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"col-12"},[t.imageActive||0!=t.news.image.length?t._e():o("img",{staticClass:"product-image",attrs:{src:"/base/images/lazy.jpg","max-height":"500"}}),t._v(" "),!t.imageActive&&t.news.image.length>0?o("img",{staticClass:"product-image",attrs:{src:t.news.image[0],"max-height":"500"}}):t._e(),t._v(" "),t.imageActive?o("img",{staticClass:"product-image",attrs:{src:t.imageActive,"max-height":"500"}}):t._e()]),t._v(" "),o("div",{staticClass:"col-12 product-image-thumbs"},t._l(t.news.image,(function(e){return o("div",{key:e,staticClass:"product-image-thumb",attrs:{index:t.index},on:{click:function(o){return t.setActiveImage(e)}}},[o("img",{attrs:{src:e}})])})),0)])])]):o("div",{staticClass:"input-group"},[t._m(1)]),t._v(" "),o("div",{staticClass:"input-group mt-4"},[o("div",{staticClass:"custom-file"},[o("input",{ref:"file",staticClass:"custom-file-input",attrs:{type:"file",id:"file",multiple:"",placeholder:"เลือกรูปภาพ"},on:{change:function(e){return t.handleFileUpload()}}}),t._v(" "),o("label",{staticClass:"custom-file-label",attrs:{for:"image"}}),t._v(" "),o("input",{attrs:{type:"text",id:"newImage",name:"newImage"}})]),t._v(" "),t._m(2)])]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"รายละเอียด"}},[t._v("รายละเอียด(Mobile App)")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description2,expression:"form.description2"}],staticClass:"form-control",attrs:{name:"description2",id:"description2",autocomplete:"off",rows:"5"},domProps:{value:t.form.description2},on:{input:function(e){e.target.composing||t.$set(t.form,"description2",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"description1"}},[t._v("รายละเอียด(Web Site)")]),t._v(" "),o("div",{staticClass:"pad"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description1,expression:"form.description1"}],staticClass:"textarea",staticStyle:{width:"100%",height:"700px","font-size":"14px","line-height":"18px",border:"1px solid #dddddd",padding:"10px"},attrs:{id:"description1",placeholder:"Place some text here"},domProps:{value:t.form.description1},on:{input:function(e){e.target.composing||t.$set(t.form,"description1",e.target.value)}}})])])]),t._v(" "),t._m(3)])])]),t._v(" "),t._m(4)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card-header"},[o("h3",{staticClass:"card-title"},[t._v("เพิ่มข่าวสารใหม่")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"col-12"},[e("img",{staticClass:"product-image",attrs:{src:"/base/images/lazy.jpg","max-height":"500"}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-group-append"},[o("span",{staticClass:"input-group-text",attrs:{id:""}},[t._v("อัพโหลด")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card-footer text-center"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("บันทึก")]),t._v(" "),o("button",{staticClass:"btn btn-default",attrs:{type:"reset"}},[t._v("ล้างข้อมูล")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal fade",attrs:{id:"modal-validate-news"}},[o("div",{staticClass:"modal-dialog"},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("h4",{staticClass:"modal-title"},[t._v("ข้อความเเจ้งเตือน")]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),o("div",{staticClass:"modal-body"},[o("p",[t._v("กรุณาเลือกไฟล์(นามสกุลไฟล์ต้องเป็น jpg|jpeg|png|gif เท่านั้น)")])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-info",attrs:{type:"button","data-dismiss":"modal"}},[t._v("ตกลง")])])])])])}],!1,null,"13759776",null);e.a=component.exports},441:function(t,e,o){"use strict";o.r(e);var r=o(392),n=(o(3),{layout:"adminLayout",components:{NewsForm:r.a},methods:{onSubmitted:function(t){var e=this;$("#loading-modal").modal("show"),this.$store.dispatch("addNews",t).then((function(){setTimeout((function(){e.$router.push("/admin/news"),$("#loading-modal").modal("hide"),toastr.info("บันทึกข้อมูลเรียบร้อยเเล้ว")}),1500)})).catch((function(t){$("#loading-modal").modal("hide"),toastr.error("ไม่สามารถบันทึกข้อมูลได้"),console.log("error ",t)}))}}}),l=o(4),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"content-header"},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row mb-2"},[t._m(0),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("ol",{staticClass:"breadcrumb float-sm-right"},[o("li",{staticClass:"breadcrumb-item"},[o("nuxt-link",{attrs:{to:"/admin/news"}},[t._v("หน้าแรก")])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item"},[o("nuxt-link",{attrs:{to:"/admin/news"}},[t._v("เเสดงข่าวสาร")])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item active"},[t._v("เพิ่มข่าวสารใหม่")])])])])])]),t._v(" "),o("section",{staticClass:"content"},[o("div",{staticClass:"container-fluid"},[o("NewsForm",{on:{newsData:t.onSubmitted}})],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-sm-6"},[o("h1",{staticClass:"m-0 text-dark"},[t._v("เพิ่มข่าวสาร")])])}],!1,null,null,null);e.default=component.exports}}]);