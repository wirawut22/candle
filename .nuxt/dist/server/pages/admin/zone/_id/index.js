exports.ids = [13];
exports.modules = {

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/zone/_id/index.vue?vue&type=template&id=529bdb5e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content-header\">","</div>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row mb-2\">","</div>",[_vm._ssrNode("<div class=\"col-sm-6\"><h1 class=\"m-0 text-dark\">แก้ไขโซน</h1></div> "),_vm._ssrNode("<div class=\"col-sm-6\">","</div>",[_vm._ssrNode("<ol class=\"breadcrumb float-sm-right\">","</ol>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/news"}},[_vm._v("หน้าแรก")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/zone"}},[_vm._v("เเสดงโซน")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">แก้ไขโซน</li>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"content\">","</section>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_c('ZoneForm',{attrs:{"zone":_vm.zonePost},on:{"zoneData":_vm.onSubmitted}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/zone/_id/index.vue?vue&type=template&id=529bdb5e&

// EXTERNAL MODULE: ./components/pages/zone/ZoneForm.vue + 4 modules
var ZoneForm = __webpack_require__(88);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/zone/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ZoneForm: ZoneForm["a" /* default */]
  },

  asyncData(context) {
    return external_axios_default.a.get("https://service.candlesfest.com/api/zone/find/id/" + context.params.id) //return axios.get("https://service.candlesfest.com/api/zone/find/id/"+context.params.id)
    .then(res => {
      return {
        zonePost: { ...res.data.zone
        }
      };
    }).catch(e => context.error(e));
  },

  methods: {
    onSubmitted(zone) {
      $('#loading-modal').modal('show');
      this.$store.dispatch("editZone", zone).then(() => {
        setTimeout(() => {
          this.$router.push("/admin/zone");
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
// CONCATENATED MODULE: ./pages/admin/zone/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var zone_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/zone/_id/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  zone_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a0b7975e"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/zone/ZoneForm.vue?vue&type=template&id=7e773830&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row zone"},[_vm._ssrNode("<div class=\"col-md-12\" data-v-7e773830>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-7e773830>","</div>",[_vm._ssrNode("<div class=\"card-header\" data-v-7e773830><h3 class=\"card-title\" data-v-7e773830>เพิ่มโซนใหม่</h3></div> "),_vm._ssrNode("<form id=\"zoneForm\" role=\"form\" data-v-7e773830>","</form>",[_vm._ssrNode("<div class=\"card-body\" data-v-7e773830>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-7e773830><div class=\"col-sm-12\" data-v-7e773830><div class=\"form-group\" data-v-7e773830><label for=\"topic\" data-v-7e773830>ชื่อโซน</label> <input type=\"text\" name=\"topic\" id=\"topic\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.topic)))+" class=\"form-control\" data-v-7e773830></div></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-7e773830>","</div>",[_vm._ssrNode("<div class=\"col-sm-6\" data-v-7e773830><div class=\"form-group\" data-v-7e773830><label for=\"amount\" data-v-7e773830>จำนวนที่นั่ง</label> <input type=\"number\" name=\"amount\" id=\"amount\" min=\"0\" max=\"1000\" step=\"1\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.amount)))+" class=\"form-control\" data-v-7e773830></div></div> "),_vm._ssrNode("<div class=\"col-sm-6\" data-v-7e773830>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-7e773830>","</div>",[_vm._ssrNode("<label for=\"status\" data-v-7e773830>สถานะ</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.status),expression:"form.status"}],staticClass:"form-control",attrs:{"name":"status","id":"status"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"A"}},[_vm._v("เปิดใช้งาน")]),_vm._v(" "),_c('option',{attrs:{"value":"I"}},[_vm._v("ปิดใช้งาน")])])],2)])],2)],2),_vm._ssrNode(" <div class=\"card-footer text-center\" data-v-7e773830><button type=\"submit\" class=\"btn btn-secondary\" data-v-7e773830>บันทึก</button> <button type=\"reset\" class=\"btn btn-default\" data-v-7e773830>ล้างข้อมูล</button></div>")],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/zone/ZoneForm.vue?vue&type=template&id=7e773830&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/zone/ZoneForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ZoneFormvue_type_script_lang_js_ = ({
  data() {
    return {
      form: this.zone ? { ...this.zone
      } : {
        topic: "",
        amount: "0",
        status: "A"
      }
    };
  },

  mounted: function () {
    $('#zoneForm').validate({
      rules: {
        topic: {
          required: true
        },
        amount: {
          required: true,
          digits: true
        }
      },
      messages: {
        topic: {
          required: "กรุณากรอกหัวข้อ"
        },
        amount: {
          required: "กรุณาระบุจำนวนที่นั่ง",
          digits: "จำนวนที่นั่งต้องเป็นตัวเลขเท่านั้น"
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
    zone: {
      type: Object,
      required: false
    }
  },
  methods: {
    onSubmit(evt) {
      if ($("#zoneForm").valid()) {
        this.$emit('zoneData', this.form);
      } else {
        console.log("validate is failed");
      }
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.topic = "";
      this.form.amount = "0";
      this.form.status = "A";
    }

  }
});
// CONCATENATED MODULE: ./components/pages/zone/ZoneForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var zone_ZoneFormvue_type_script_lang_js_ = (ZoneFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pages/zone/ZoneForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  zone_ZoneFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e773830",
  "ecb250e4"
  
)

/* harmony default export */ var ZoneForm = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map