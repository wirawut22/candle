(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{386:function(t,e,r){var content=r(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("04f2b091",content,!0,{sourceMap:!1})},390:function(t,e,r){"use strict";r(386)},391:function(t,e,r){var o=r(34)(!1);o.push([t.i,".product-image[data-v-3c3498b4]{max-width:100%;max-height:500px;width:auto;border-radius:10px;padding:5px;border:1px solid #dee2e6;box-shadow:0 1px 2px rgba(0,0,0,.075)}.product-image-thumb[data-v-3c3498b4]{cursor:pointer}",""]),t.exports=o},393:function(t,e,r){"use strict";r(28),r(18),r(19),r(46),r(47);var o=r(9);r(11),r(60),r(61),r(29),r(20);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={data:function(){return{imageActive:"",form:this.place?n({},this.place):{group_id:"",topic:"",address:"",description1:"",description2:"",image:"",latitude:"",longtitude:"",author:""}}},mounted:function(){if(this.place&&this.place.image){var t=this.place.image.toString();this.setFileNameInit(t.slice(0,100)+"...",t)}$("#placeForm").validate({rules:{group_id:{required:!0},topic:{required:!0,maxlength:500},address:{required:!0},latitude:{maxlength:20,number:!0},longtitude:{maxlength:20,number:!0}},messages:{group_id:{required:"กรุณากรอกเลือกกลุ่มสถานที่"},topic:{required:"กรุณากรอกหัวข้อ",maxlength:"ขนาดตัวอักษรต้องไม่เกิน 500 ตัวอักษร"},address:{required:"กรุณากรอกที่อยู่"},latitude:{maxlength:"ขนาดตัวอักษรต้องไม่เกิน 20 ตัวอักษร",number:"ลติจูดต้องเป็นตัวเลขหรือทศนิยมเท่านั้น"},longtitude:{maxlength:"ขนาดตัวอักษรต้องไม่เกิน 20 ตัวอักษร",number:"ลติจูดต้องเป็นตัวเลขหรือทศนิยมเท่านั้น"}},errorElement:"span",errorPlacement:function(t,element){t.addClass("invalid-feedback"),element.closest(".form-group").append(t)},highlight:function(element,t,e){$(element).addClass("is-invalid")},unhighlight:function(element,t,e){$(element).removeClass("is-invalid")},ignore:".note-editor *"}),$(".textarea").summernote({height:500,focus:!1})},props:{place:{type:Object,required:!1},placeGroup:{type:Array,required:!1}},computed:{},methods:{handleFileUpload:function(){for(var t="",e=this.$refs.file.files,r=0;r<e.length;r++)0==r?t+=e[r].name:t=t+","+e[r].name;$(".custom-file-label").text(t.slice(0,100)+"...")},setFileNameInit:function(image,t){$(".custom-file-label").text(image),$("#newImage").val(t)},setActiveImage:function(t){this.imageActive=t},onSubmit:function(t){var e=this.$refs.file.files;this.form.image=e,this.form.description1=$("#description1").summernote("code"),this.form.newImage=$("#newImage").val(),$("#placeForm").valid()?this.$emit("placeData",this.form):console.log("validate is failed")},onReset:function(t){t.preventDefault(),this.form.group_id="",this.form.topic="",this.form.address="",this.form.description1="",this.form.description2="",this.form.latitude="",this.form.longtitude="",$(".custom-file-label").text(""),this.form.author=""}}},d=(r(390),r(4)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row place"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("form",{attrs:{id:"placeForm",role:"form"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)},reset:t.onReset}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"status"}},[t._v("กลุ่มสถานที่")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.group_id,expression:"form.group_id"}],staticClass:"form-control",attrs:{name:"group_id",id:"group_id"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"group_id",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("กรุณาเลือก")]),t._v(" "),t._l(t.placeGroup,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.topic))])}))],2)]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"topic"}},[t._v("ชื่อสถานที่")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.topic,expression:"form.topic"}],staticClass:"form-control",attrs:{type:"text",name:"topic",id:"topic",autocomplete:"off"},domProps:{value:t.form.topic},on:{input:function(e){e.target.composing||t.$set(t.form,"topic",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("ที่อยู่")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"address",autocomplete:"off"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"topic"}},[t._v("ลติจูด")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.latitude,expression:"form.latitude"}],staticClass:"form-control",attrs:{type:"text",name:"latitude",id:"latitude",autocomplete:"off"},domProps:{value:t.form.latitude},on:{input:function(e){e.target.composing||t.$set(t.form,"latitude",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"topic"}},[t._v("ลองติจูด")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.longtitude,expression:"form.longtitude"}],staticClass:"form-control",attrs:{type:"text",name:"longtitude",id:"longtitude",autocomplete:"off"},domProps:{value:t.form.longtitude},on:{input:function(e){e.target.composing||t.$set(t.form,"longtitude",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"author"}},[t._v("ผู้เขียน")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.author,expression:"form.author"}],staticClass:"form-control",attrs:{type:"text",name:"author",id:"author",autocomplete:"off"},domProps:{value:t.form.author},on:{input:function(e){e.target.composing||t.$set(t.form,"author",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("รูปภาพ")]),t._v(" "),t.place?r("div",{staticClass:"input-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"col-12"},[t.imageActive||0!=t.place.image.length?t._e():r("img",{staticClass:"product-image",attrs:{src:"/base/images/lazy.jpg","max-height":"500"}}),t._v(" "),!t.imageActive&&t.place.image.length>0?r("img",{staticClass:"product-image",attrs:{src:t.place.image[0],"max-height":"500"}}):t._e(),t._v(" "),t.imageActive?r("img",{staticClass:"product-image",attrs:{src:t.imageActive,"max-height":"500"}}):t._e()]),t._v(" "),r("div",{staticClass:"col-12 product-image-thumbs"},t._l(t.place.image,(function(e){return r("div",{key:e,staticClass:"product-image-thumb",on:{click:function(r){return t.setActiveImage(e)}}},[r("img",{attrs:{src:e}})])})),0)])])]):r("div",{staticClass:"input-group"},[t._m(1)]),t._v(" "),r("div",{staticClass:"input-group mt-4"},[r("div",{staticClass:"custom-file"},[r("input",{ref:"file",staticClass:"custom-file-input",attrs:{type:"file",id:"file",multiple:"",placeholder:"เลือกรูปภาพ"},on:{change:function(e){return t.handleFileUpload()}}}),t._v(" "),r("label",{staticClass:"custom-file-label",attrs:{for:"image"}}),t._v(" "),r("input",{attrs:{type:"text",id:"newImage",name:"newImage"}})]),t._v(" "),t._m(2)])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description2"}},[t._v("รายละเอียด(Mobile App)")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description2,expression:"form.description2"}],staticClass:"form-control",attrs:{name:"description2",id:"description2",autocomplete:"off",rows:"5"},domProps:{value:t.form.description2},on:{input:function(e){e.target.composing||t.$set(t.form,"description2",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description1"}},[t._v("รายละเอียด(Web Site)")]),t._v(" "),r("div",{staticClass:"pad"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description1,expression:"form.description1"}],staticClass:"textarea",staticStyle:{width:"100%",height:"700px","font-size":"14px","line-height":"18px",border:"1px solid #dddddd",padding:"10px"},attrs:{id:"description1",placeholder:"Place some text here"},domProps:{value:t.form.description1},on:{input:function(e){e.target.composing||t.$set(t.form,"description1",e.target.value)}}})])])]),t._v(" "),t._m(3)])])]),t._v(" "),t._m(4)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header"},[r("h3",{staticClass:"card-title"},[t._v("เพิ่มสถานที่ใหม่")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"col-12"},[e("img",{staticClass:"product-image",attrs:{src:"/base/images/lazy.jpg","max-height":"500"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-group-append"},[r("span",{staticClass:"input-group-text",attrs:{id:""}},[t._v("อัพโหลด")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-footer text-center"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("บันทึก")]),t._v(" "),r("button",{staticClass:"btn btn-default",attrs:{type:"reset"}},[t._v("ล้างข้อมูล")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal fade",attrs:{id:"modal-validate-place"}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[r("h4",{staticClass:"modal-title"},[t._v("ข้อความเเจ้งเตือน")]),t._v(" "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",[t._v("กรุณาเลือกไฟล์(นามสกุลไฟล์ต้องเป็น jpg|jpeg|png|gif เท่านั้น)")])]),t._v(" "),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-info",attrs:{type:"button","data-dismiss":"modal"}},[t._v("ตกลง")])])])])])}],!1,null,"3c3498b4",null);e.a=component.exports},447:function(t,e,r){"use strict";r.r(e);r(28),r(18),r(19),r(46),r(47);var o=r(9),l=r(393),n=r(3),c=r.n(n);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={layout:"adminLayout",components:{PlaceForm:l.a},asyncData:function(t){return c.a.get("https://service.candlesfest.com/api/place/find/id/"+t.params.id).then((function(t){return{placePost:m({},t.data.place)}})).catch((function(e){return t.error(e)}))},fetch:function(t){var e=t.store;t.params;if(!e.state.placeGroupData||0==e.state.placeGroupData.length)return e.dispatch("initPlaceGroup")},computed:{loadGroupData:function(){var data=[];return this.$store.getters.getAllPlaceGroup&&(data=this.$store.getters.getAllPlaceGroup),data}},methods:{onSubmitted:function(t){var e=this;$("#loading-modal").modal("show"),this.$store.dispatch("editPlace",t).then((function(){setTimeout((function(){e.$router.push("/admin/place"),$("#loading-modal").modal("hide"),toastr.info("แก้ไขข้อมูลเรียบร้อยเเล้ว")}),1500)})).catch((function(t){$("#loading-modal").modal("hide"),toastr.error("ไม่สามารถเเก้ไขข้อมูลได้"),console.log("error ",t)}))}}},v=r(4),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"content-header"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row mb-2"},[t._m(0),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("ol",{staticClass:"breadcrumb float-sm-right"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/admin/news"}},[t._v("หน้าแรก")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/admin/place"}},[t._v("เเสดงสถานที่")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("แก้ไขสถานที่")])])])])])]),t._v(" "),r("section",{staticClass:"content"},[r("div",{staticClass:"container-fluid"},[r("PlaceForm",{attrs:{place:t.placePost,placeGroup:t.loadGroupData},on:{placeData:t.onSubmitted}})],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-6"},[r("h1",{staticClass:"m-0 text-dark"},[t._v("แก้ไขสถานที่")])])}],!1,null,null,null);e.default=component.exports}}]);