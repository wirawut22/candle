exports.ids = [5];
exports.modules = {

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/place/create.vue?vue&type=template&id=f9a41c70&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content-header\">","</div>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row mb-2\">","</div>",[_vm._ssrNode("<div class=\"col-sm-6\"><h1 class=\"m-0 text-dark\">เพิ่มสถานที่</h1></div> "),_vm._ssrNode("<div class=\"col-sm-6\">","</div>",[_vm._ssrNode("<ol class=\"breadcrumb float-sm-right\">","</ol>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/place"}},[_vm._v("หน้าแรก")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/place"}},[_vm._v("เเสดงสถานที่")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">เพิ่มสถานที่ใหม่</li>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"content\">","</section>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_c('PlaceForm',{attrs:{"placeGroup":_vm.loadGroupData},on:{"placeData":_vm.onSubmitted}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/place/create.vue?vue&type=template&id=f9a41c70&

// EXTERNAL MODULE: ./components/pages/place/PlaceForm.vue + 4 modules
var PlaceForm = __webpack_require__(85);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/place/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var createvue_type_script_lang_js_ = ({
  layout: "adminLayout",
  components: {
    PlaceForm: PlaceForm["a" /* default */]
  },

  fetch({
    store,
    params
  }) {
    if (!store.state.placeGroupData || store.state.placeGroupData.length == 0) {
      return store.dispatch('initPlaceGroup');
    }
  },

  computed: {
    loadGroupData() {
      var data = [];

      if (this.$store.getters.getAllPlaceGroup) {
        data = this.$store.getters.getAllPlaceGroup;
      }

      return data;
    }

  },
  methods: {
    onSubmitted(place) {
      $('#loading-modal').modal('show');
      this.$store.dispatch("addPlace", place).then(() => {
        setTimeout(() => {
          this.$router.push("/admin/place");
          $('#loading-modal').modal('hide');
          toastr.info('บันทึกข้อมูลเรียบร้อยเเล้ว');
        }, 1500);
      }).catch(error => {
        $('#loading-modal').modal('hide');
        toastr.error('ไม่สามารถบันทึกข้อมูลได้');
        console.log('error ', error);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/place/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var place_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/place/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  place_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "239110fc"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("04f2b091", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlaceForm_vue_vue_type_style_index_0_id_3c3498b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlaceForm_vue_vue_type_style_index_0_id_3c3498b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlaceForm_vue_vue_type_style_index_0_id_3c3498b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlaceForm_vue_vue_type_style_index_0_id_3c3498b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PlaceForm_vue_vue_type_style_index_0_id_3c3498b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-3c3498b4]{max-width:100%;max-height:500px;width:auto;border-radius:10px;padding:5px;border:1px solid #dee2e6;box-shadow:0 1px 2px rgba(0,0,0,.075)}.product-image-thumb[data-v-3c3498b4]{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/place/PlaceForm.vue?vue&type=template&id=3c3498b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row place"},[_vm._ssrNode("<div class=\"col-md-12\" data-v-3c3498b4>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-3c3498b4>","</div>",[_vm._ssrNode("<div class=\"card-header\" data-v-3c3498b4><h3 class=\"card-title\" data-v-3c3498b4>เพิ่มสถานที่ใหม่</h3></div> "),_vm._ssrNode("<form id=\"placeForm\" role=\"form\" data-v-3c3498b4>","</form>",[_vm._ssrNode("<div class=\"card-body\" data-v-3c3498b4>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-3c3498b4>","</div>",[_vm._ssrNode("<label for=\"status\" data-v-3c3498b4>กลุ่มสถานที่</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.group_id),expression:"form.group_id"}],staticClass:"form-control",attrs:{"name":"group_id","id":"group_id"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.form, "group_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":""}},[_vm._v("กรุณาเลือก")]),_vm._v(" "),_vm._l((_vm.placeGroup),function(item){return _c('option',{key:item.id,domProps:{"value":item.id}},[_vm._v(_vm._s(item.topic))])})],2)],2),_vm._ssrNode(" <div class=\"form-group\" data-v-3c3498b4><label for=\"topic\" data-v-3c3498b4>ชื่อสถานที่</label> <input type=\"text\" name=\"topic\" id=\"topic\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.topic)))+" class=\"form-control\" data-v-3c3498b4></div> <div class=\"form-group\" data-v-3c3498b4><label for=\"address\" data-v-3c3498b4>ที่อยู่</label> <input type=\"text\" name=\"address\" id=\"address\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.address)))+" class=\"form-control\" data-v-3c3498b4></div> <div class=\"form-group\" data-v-3c3498b4><label for=\"topic\" data-v-3c3498b4>ลติจูด</label> <input type=\"text\" name=\"latitude\" id=\"latitude\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.latitude)))+" class=\"form-control\" data-v-3c3498b4></div> <div class=\"form-group\" data-v-3c3498b4><label for=\"topic\" data-v-3c3498b4>ลองติจูด</label> <input type=\"text\" name=\"longtitude\" id=\"longtitude\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.longtitude)))+" class=\"form-control\" data-v-3c3498b4></div> <div class=\"form-group\" data-v-3c3498b4><label for=\"author\" data-v-3c3498b4>ผู้เขียน</label> <input type=\"text\" name=\"author\" id=\"author\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.author)))+" class=\"form-control\" data-v-3c3498b4></div> <div class=\"form-group\" data-v-3c3498b4><label for=\"image\" data-v-3c3498b4>รูปภาพ</label> "+((_vm.place)?("<div class=\"input-group\" data-v-3c3498b4><div class=\"row\" data-v-3c3498b4><div class=\"col-12\" data-v-3c3498b4><div class=\"col-12\" data-v-3c3498b4>"+((!_vm.imageActive && _vm.place.image.length==0)?("<img src=\"/base/images/lazy.jpg\" max-height=\"500\" class=\"product-image\" data-v-3c3498b4>"):"<!---->")+" "+((!_vm.imageActive && _vm.place.image.length>0)?("<img"+(_vm._ssrAttr("src",_vm.place.image[0]))+" max-height=\"500\" class=\"product-image\" data-v-3c3498b4>"):"<!---->")+" "+((_vm.imageActive)?("<img"+(_vm._ssrAttr("src",_vm.imageActive))+" max-height=\"500\" class=\"product-image\" data-v-3c3498b4>"):"<!---->")+"</div> <div class=\"col-12 product-image-thumbs\" data-v-3c3498b4>"+(_vm._ssrList((_vm.place.image),function(item){return ("<div class=\"product-image-thumb\" data-v-3c3498b4><img"+(_vm._ssrAttr("src",item))+" data-v-3c3498b4></div>")}))+"</div></div></div></div>"):("<div class=\"input-group\" data-v-3c3498b4><div class=\"row\" data-v-3c3498b4><div class=\"col-12\" data-v-3c3498b4><div class=\"col-12\" data-v-3c3498b4><img src=\"/base/images/lazy.jpg\" max-height=\"500\" class=\"product-image\" data-v-3c3498b4></div></div></div></div>"))+" <div class=\"input-group mt-4\" data-v-3c3498b4><div class=\"custom-file\" data-v-3c3498b4><input type=\"file\" id=\"file\" multiple=\"multiple\" placeholder=\"เลือกรูปภาพ\" class=\"custom-file-input\" data-v-3c3498b4> <label for=\"image\" class=\"custom-file-label\" data-v-3c3498b4></label> <input type=\"text\" id=\"newImage\" name=\"newImage\" data-v-3c3498b4></div> <div class=\"input-group-append\" data-v-3c3498b4><span id class=\"input-group-text\" data-v-3c3498b4>อัพโหลด</span></div></div></div> <div class=\"form-group\" data-v-3c3498b4><label for=\"description2\" data-v-3c3498b4>รายละเอียด(Mobile App)</label> <textarea name=\"description2\" id=\"description2\" autocomplete=\"off\" rows=\"5\" class=\"form-control\" data-v-3c3498b4>"+_vm._ssrEscape(_vm._s(_vm.form.description2))+"</textarea></div> <div class=\"form-group\" data-v-3c3498b4><label for=\"description1\" data-v-3c3498b4>รายละเอียด(Web Site)</label> <div class=\"pad\" data-v-3c3498b4><textarea id=\"description1\" placeholder=\"Place some text here\" class=\"textarea\" style=\"width: 100%; height: 700px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\" data-v-3c3498b4>"+_vm._ssrEscape(_vm._s(_vm.form.description1))+"</textarea></div></div>")],2),_vm._ssrNode(" <div class=\"card-footer text-center\" data-v-3c3498b4><button type=\"submit\" class=\"btn btn-secondary\" data-v-3c3498b4>บันทึก</button> <button type=\"reset\" class=\"btn btn-default\" data-v-3c3498b4>ล้างข้อมูล</button></div>")],2)],2)]),_vm._ssrNode(" <div id=\"modal-validate-place\" class=\"modal fade\" data-v-3c3498b4><div class=\"modal-dialog\" data-v-3c3498b4><div class=\"modal-content\" data-v-3c3498b4><div class=\"modal-header\" data-v-3c3498b4><h4 class=\"modal-title\" data-v-3c3498b4>ข้อความเเจ้งเตือน</h4> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" data-v-3c3498b4><span aria-hidden=\"true\" data-v-3c3498b4>×</span></button></div> <div class=\"modal-body\" data-v-3c3498b4><p data-v-3c3498b4>กรุณาเลือกไฟล์(นามสกุลไฟล์ต้องเป็น jpg|jpeg|png|gif เท่านั้น)</p></div> <div class=\"modal-footer\" data-v-3c3498b4><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-info\" data-v-3c3498b4>ตกลง</button></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/place/PlaceForm.vue?vue&type=template&id=3c3498b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/place/PlaceForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PlaceFormvue_type_script_lang_js_ = ({
  data() {
    return {
      imageActive: "",
      form: this.place ? { ...this.place
      } : {
        group_id: "",
        topic: "",
        address: "",
        description1: "",
        description2: "",
        image: "",
        latitude: "",
        longtitude: "",
        author: ""
      }
    };
  },

  mounted: function () {
    //เซต image value เเยกเมื่อ page load 
    if (this.place && this.place.image) {
      var imageStr = this.place.image.toString();
      this.setFileNameInit(imageStr.slice(0, 100) + "...", imageStr);
    }

    $('#placeForm').validate({
      rules: {
        group_id: {
          required: true
        },
        topic: {
          required: true,
          maxlength: 500
        },
        address: {
          required: true
        },
        latitude: {
          maxlength: 20,
          number: true
        },
        longtitude: {
          maxlength: 20,
          number: true
        }
      },
      messages: {
        group_id: {
          required: "กรุณากรอกเลือกกลุ่มสถานที่"
        },
        topic: {
          required: "กรุณากรอกหัวข้อ",
          maxlength: "ขนาดตัวอักษรต้องไม่เกิน 500 ตัวอักษร"
        },
        address: {
          required: "กรุณากรอกที่อยู่"
        },
        latitude: {
          maxlength: "ขนาดตัวอักษรต้องไม่เกิน 20 ตัวอักษร",
          number: "ลติจูดต้องเป็นตัวเลขหรือทศนิยมเท่านั้น"
        },
        longtitude: {
          maxlength: "ขนาดตัวอักษรต้องไม่เกิน 20 ตัวอักษร",
          number: "ลติจูดต้องเป็นตัวเลขหรือทศนิยมเท่านั้น"
        }
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
      },
      ignore: ".note-editor *"
    });
    $(".textarea").summernote({
      height: 500,
      focus: false
    });
  },
  props: {
    place: {
      type: Object,
      required: false
    },
    placeGroup: {
      type: Array,
      required: false
    }
  },
  computed: {},
  methods: {
    handleFileUpload() {
      var fileNames = "";
      const files = this.$refs.file.files;

      for (var index = 0; index < files.length; index++) {
        if (index == 0) {
          fileNames = fileNames + files[index].name;
        } else {
          fileNames = fileNames + "," + files[index].name;
        }
      }

      ;
      $(".custom-file-label").text(fileNames.slice(0, 100) + "...");
    },

    setFileNameInit(image, imageFull) {
      $(".custom-file-label").text(image);
      $("#newImage").val(imageFull); //รูปเดิม
    },

    setActiveImage(item) {
      this.imageActive = item;
    },

    onSubmit(evt) {
      const files = this.$refs.file.files;
      this.form.image = files;
      this.form.description1 = $("#description1").summernote("code");
      this.form.newImage = $("#newImage").val();

      if ($("#placeForm").valid()) {
        //validate other
        // if(this.form.image.length==0){//validate image
        //   $("#modal-validate-place").modal("show");
        //   $("html, body").animate({ scrollTop: 0 }, "fast");
        //   return false;
        // }else{
        this.$emit('placeData', this.form); //} 
      } else {
        console.log("validate is failed");
      }
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.group_id = "";
      this.form.topic = "";
      this.form.address = "";
      this.form.description1 = "";
      this.form.description2 = "";
      this.form.latitude = "";
      this.form.longtitude = "";
      $(".custom-file-label").text(""); //custom clear 

      this.form.author = "";
    }

  }
});
// CONCATENATED MODULE: ./components/pages/place/PlaceForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var place_PlaceFormvue_type_script_lang_js_ = (PlaceFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pages/place/PlaceForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  place_PlaceFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3c3498b4",
  "14f51be4"
  
)

/* harmony default export */ var PlaceForm = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map