exports.ids = [2];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/news/create.vue?vue&type=template&id=662fc33e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content-header\">","</div>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row mb-2\">","</div>",[_vm._ssrNode("<div class=\"col-sm-6\"><h1 class=\"m-0 text-dark\">เพิ่มข่าวสาร</h1></div> "),_vm._ssrNode("<div class=\"col-sm-6\">","</div>",[_vm._ssrNode("<ol class=\"breadcrumb float-sm-right\">","</ol>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/news"}},[_vm._v("หน้าแรก")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/news"}},[_vm._v("เเสดงข่าวสาร")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">เพิ่มข่าวสารใหม่</li>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"content\">","</section>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_c('NewsForm',{on:{"newsData":_vm.onSubmitted}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/news/create.vue?vue&type=template&id=662fc33e&

// EXTERNAL MODULE: ./components/pages/news/NewsForm.vue + 4 modules
var NewsForm = __webpack_require__(84);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/news/create.vue?vue&type=script&lang=js&
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
    NewsForm: NewsForm["a" /* default */]
  },
  methods: {
    onSubmitted(news) {
      $('#loading-modal').modal('show');
      this.$store.dispatch("addNews", news).then(() => {
        setTimeout(() => {
          this.$router.push("/admin/news");
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
// CONCATENATED MODULE: ./pages/admin/news/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var news_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/news/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "06a71b24"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("25c280b2", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsForm_vue_vue_type_style_index_0_id_13759776_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsForm_vue_vue_type_style_index_0_id_13759776_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsForm_vue_vue_type_style_index_0_id_13759776_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsForm_vue_vue_type_style_index_0_id_13759776_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsForm_vue_vue_type_style_index_0_id_13759776_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-13759776]{max-width:100%;max-height:500px;width:auto;border-radius:10px;padding:5px;border:1px solid #dee2e6;box-shadow:0 1px 2px rgba(0,0,0,.075)}.product-image-thumb[data-v-13759776]{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/news/NewsForm.vue?vue&type=template&id=13759776&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row news"},[_vm._ssrNode("<div class=\"col-md-12\" data-v-13759776><div class=\"card\" data-v-13759776><div class=\"card-header\" data-v-13759776><h3 class=\"card-title\" data-v-13759776>เพิ่มข่าวสารใหม่</h3></div> <form id=\"newsForm\" role=\"form\" data-v-13759776><div class=\"card-body\" data-v-13759776><div class=\"form-group\" data-v-13759776><label for=\"topic\" data-v-13759776>หัวข้อ</label> <input type=\"text\" name=\"topic\" id=\"topic\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.topic)))+" class=\"form-control\" data-v-13759776></div> <div class=\"form-group\" data-v-13759776><label for=\"author\" data-v-13759776>ผู้เขียน</label> <input type=\"text\" name=\"author\" id=\"author\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.author)))+" class=\"form-control\" data-v-13759776></div> <div class=\"form-group\" data-v-13759776><label for=\"image\" data-v-13759776>รูปภาพ</label> "+((_vm.news)?("<div class=\"input-group\" data-v-13759776><div class=\"row\" data-v-13759776><div class=\"col-12\" data-v-13759776><div class=\"col-12\" data-v-13759776>"+((!_vm.imageActive && _vm.news.image.length==0)?("<img src=\"/base/images/lazy.jpg\" max-height=\"500\" class=\"product-image\" data-v-13759776>"):"<!---->")+" "+((!_vm.imageActive && _vm.news.image.length>0)?("<img"+(_vm._ssrAttr("src",_vm.news.image[0]))+" max-height=\"500\" class=\"product-image\" data-v-13759776>"):"<!---->")+" "+((_vm.imageActive)?("<img"+(_vm._ssrAttr("src",_vm.imageActive))+" max-height=\"500\" class=\"product-image\" data-v-13759776>"):"<!---->")+"</div> <div class=\"col-12 product-image-thumbs\" data-v-13759776>"+(_vm._ssrList((_vm.news.image),function(item){return ("<div"+(_vm._ssrAttr("index",_vm.index))+" class=\"product-image-thumb\" data-v-13759776><img"+(_vm._ssrAttr("src",item))+" data-v-13759776></div>")}))+"</div></div></div></div>"):("<div class=\"input-group\" data-v-13759776><div class=\"row\" data-v-13759776><div class=\"col-12\" data-v-13759776><div class=\"col-12\" data-v-13759776><img src=\"/base/images/lazy.jpg\" max-height=\"500\" class=\"product-image\" data-v-13759776></div></div></div></div>"))+" <div class=\"input-group mt-4\" data-v-13759776><div class=\"custom-file\" data-v-13759776><input type=\"file\" id=\"file\" multiple=\"multiple\" placeholder=\"เลือกรูปภาพ\" class=\"custom-file-input\" data-v-13759776> <label for=\"image\" class=\"custom-file-label\" data-v-13759776></label> <input type=\"text\" id=\"newImage\" name=\"newImage\" data-v-13759776></div> <div class=\"input-group-append\" data-v-13759776><span id class=\"input-group-text\" data-v-13759776>อัพโหลด</span></div></div></div> <div class=\"form-group\" data-v-13759776><label for=\"รายละเอียด\" data-v-13759776>รายละเอียด(Mobile App)</label> <textarea name=\"description2\" id=\"description2\" autocomplete=\"off\" rows=\"5\" class=\"form-control\" data-v-13759776>"+_vm._ssrEscape(_vm._s(_vm.form.description2))+"</textarea></div> <div class=\"form-group\" data-v-13759776><label for=\"description1\" data-v-13759776>รายละเอียด(Web Site)</label> <div class=\"pad\" data-v-13759776><textarea id=\"description1\" placeholder=\"Place some text here\" class=\"textarea\" style=\"width: 100%; height: 700px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\" data-v-13759776>"+_vm._ssrEscape(_vm._s(_vm.form.description1))+"</textarea></div></div></div> <div class=\"card-footer text-center\" data-v-13759776><button type=\"submit\" class=\"btn btn-secondary\" data-v-13759776>บันทึก</button> <button type=\"reset\" class=\"btn btn-default\" data-v-13759776>ล้างข้อมูล</button></div></form></div></div> <div id=\"modal-validate-news\" class=\"modal fade\" data-v-13759776><div class=\"modal-dialog\" data-v-13759776><div class=\"modal-content\" data-v-13759776><div class=\"modal-header\" data-v-13759776><h4 class=\"modal-title\" data-v-13759776>ข้อความเเจ้งเตือน</h4> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\" data-v-13759776><span aria-hidden=\"true\" data-v-13759776>×</span></button></div> <div class=\"modal-body\" data-v-13759776><p data-v-13759776>กรุณาเลือกไฟล์(นามสกุลไฟล์ต้องเป็น jpg|jpeg|png|gif เท่านั้น)</p></div> <div class=\"modal-footer\" data-v-13759776><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-info\" data-v-13759776>ตกลง</button></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/news/NewsForm.vue?vue&type=template&id=13759776&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/news/NewsForm.vue?vue&type=script&lang=js&
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
/* harmony default export */ var NewsFormvue_type_script_lang_js_ = ({
  data() {
    return {
      imageActive: "",
      form: this.news ? { ...this.news
      } : {
        topic: "",
        description1: "",
        description2: "",
        image: "",
        author: ""
      }
    };
  },

  computed: {},
  mounted: function () {
    //เซต image value เเยกเมื่อ page load 
    if (this.news && this.news.image) {
      var imageStr = this.news.image.toString();
      this.setFileNameInit(imageStr.slice(0, 100) + "...", imageStr);
    }

    $('#newsForm').validate({
      rules: {
        topic: {
          required: true,
          maxlength: 500
        }
      },
      messages: {
        topic: {
          required: "กรุณากรอกหัวข้อ",
          maxlength: "ขนาดตัวอักษรต้องไม่เกิน 500 ตัวอักษร"
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
    news: {
      type: Object,
      required: false
    }
  },
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

      if ($("#newsForm").valid()) {
        //validate other
        this.$emit('newsData', this.form);
      } else {
        console.log("validate is failed");
      }
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.topic = "";
      this.form.description1 = "";
      this.form.description2 = "";
      $(".custom-file-label").text(""); //custom clear 

      this.form.author = "";
    }

  }
});
// CONCATENATED MODULE: ./components/pages/news/NewsForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var news_NewsFormvue_type_script_lang_js_ = (NewsFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pages/news/NewsForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_NewsFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13759776",
  "0c345024"
  
)

/* harmony default export */ var NewsForm = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map