exports.ids = [7];
exports.modules = {

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/placeGroup/_id/index.vue?vue&type=template&id=68869259&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content-header\">","</div>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row mb-2\">","</div>",[_vm._ssrNode("<div class=\"col-sm-6\"><h1 class=\"m-0 text-dark\">แก้ไขกลุ่มสถานที่</h1></div> "),_vm._ssrNode("<div class=\"col-sm-6\">","</div>",[_vm._ssrNode("<ol class=\"breadcrumb float-sm-right\">","</ol>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/news"}},[_vm._v("หน้าแรก")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/placeGroup"}},[_vm._v("เเสดงกลุ่มสถานที่")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">แก้ไขกลุ่มสถานที่</li>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"content\">","</section>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_c('PlaceGroupForm',{attrs:{"placeGroup":_vm.placeGroupPost},on:{"placeGroupData":_vm.onSubmitted}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/placeGroup/_id/index.vue?vue&type=template&id=68869259&

// EXTERNAL MODULE: ./components/pages/placeGroup/PlaceGroupForm.vue + 4 modules
var PlaceGroupForm = __webpack_require__(86);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/placeGroup/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: "adminLayout",
  components: {
    PlaceGroupForm: PlaceGroupForm["a" /* default */]
  },

  asyncData(context) {
    return external_axios_default.a.get("https://service.candlesfest.com/api/placeGroup/find/id/" + context.params.id).then(res => {
      return {
        placeGroupPost: { ...res.data.place_group
        }
      };
    }).catch(e => context.error(e));
  },

  methods: {
    onSubmitted(placeGroup) {
      $('#loading-modal').modal('show');
      this.$store.dispatch("editPlaceGroup", placeGroup).then(() => {
        setTimeout(() => {
          this.$router.push("/admin/placeGroup");
          $('#loading-modal').modal('hide');
          toastr.info('แก้ไขข้อมูลเรียบร้อยเเล้ว');
        }, 1500);
      }).catch(error => {
        $('#loading-modal').modal('hide');
        toastr.error('ไม่สามารถเเก้ไขข้อมูลได้');
        console.log('error ', error);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/placeGroup/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var placeGroup_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/placeGroup/_id/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  placeGroup_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c8152c6"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/placeGroup/PlaceGroupForm.vue?vue&type=template&id=32fbb946&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row placeGroup"},[_vm._ssrNode("<div class=\"col-md-12\" data-v-32fbb946><div class=\"card\" data-v-32fbb946><div class=\"card-header\" data-v-32fbb946><h3 class=\"card-title\" data-v-32fbb946>เพิ่มกลุ่มสถานที่</h3></div> <form id=\"placeGroupForm\" role=\"form\" data-v-32fbb946><div class=\"card-body\" data-v-32fbb946><div class=\"row\" data-v-32fbb946><div class=\"col-sm-12\" data-v-32fbb946><div class=\"form-group\" data-v-32fbb946><label for=\"topic\" data-v-32fbb946>กลุ่มสถานที่</label> <input type=\"text\" name=\"topic\" id=\"topic\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.topic)))+" class=\"form-control\" data-v-32fbb946></div></div></div> <div class=\"row\" data-v-32fbb946><div class=\"col-sm-12\" data-v-32fbb946><div class=\"form-group\" data-v-32fbb946><label for=\"description\" data-v-32fbb946>รายละเอียด</label> <input type=\"text\" name=\"description\" id=\"description\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.description)))+" class=\"form-control\" data-v-32fbb946></div></div></div> <div class=\"row\" data-v-32fbb946><div class=\"col-sm-12\" data-v-32fbb946><div class=\"form-group\" data-v-32fbb946><label for=\"icon\" data-v-32fbb946>ไอคอน เช่น <span data-v-32fbb946>'fas fa-box'</span> <a href=\"https://fontawesome.com/icons?m=free\" target=\"_blank\" data-v-32fbb946>ค้นหาไอคอน</a></label> <input type=\"text\" name=\"icon\" id=\"icon\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.icon)))+" class=\"form-control\" data-v-32fbb946></div></div></div> <div class=\"row\" data-v-32fbb946><div class=\"col-sm-12\" data-v-32fbb946><div class=\"form-group\" data-v-32fbb946><label for=\"context_path\" data-v-32fbb946>context path</label> <input type=\"text\" name=\"context_path\" id=\"context_path\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.context_path)))+" class=\"form-control\" data-v-32fbb946></div></div></div></div> <div class=\"card-footer text-center\" data-v-32fbb946><button type=\"submit\" class=\"btn btn-secondary\" data-v-32fbb946>บันทึก</button> <button type=\"reset\" class=\"btn btn-default\" data-v-32fbb946>ล้างข้อมูล</button></div></form></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/placeGroup/PlaceGroupForm.vue?vue&type=template&id=32fbb946&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/placeGroup/PlaceGroupForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PlaceGroupFormvue_type_script_lang_js_ = ({
  data() {
    return {
      form: this.placeGroup ? { ...this.placeGroup
      } : {
        topic: "",
        description: "",
        icon: "",
        context_path: ""
      }
    };
  },

  mounted: function () {
    $('#placeGroupForm').validate({
      rules: {
        topic: {
          required: true,
          maxlength: 500
        }
      },
      messages: {
        topic: {
          required: "กรุณากรอกกลุ่มสถานที่",
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
    placeGroup: {
      type: Object,
      required: false
    }
  },
  methods: {
    onSubmit(evt) {
      if ($("#placeGroupForm").valid()) {
        this.$emit('placeGroupData', this.form);
      } else {
        console.log("validate is failed");
      }
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.topic = "";
      this.form.description = "";
      this.form.icon = "";
      this.form.context_path = "";
    }

  }
});
// CONCATENATED MODULE: ./components/pages/placeGroup/PlaceGroupForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var placeGroup_PlaceGroupFormvue_type_script_lang_js_ = (PlaceGroupFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pages/placeGroup/PlaceGroupForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  placeGroup_PlaceGroupFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "32fbb946",
  "7fdeeb0e"
  
)

/* harmony default export */ var PlaceGroupForm = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map