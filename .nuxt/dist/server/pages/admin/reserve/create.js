exports.ids = [11];
exports.modules = {

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/reserve/create.vue?vue&type=template&id=16f1cd40&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content-header\">","</div>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row mb-2\">","</div>",[_vm._ssrNode("<div class=\"col-sm-6\"><h1 class=\"m-0 text-dark\">เพิ่มรายการจอง</h1></div> "),_vm._ssrNode("<div class=\"col-sm-6\">","</div>",[_vm._ssrNode("<ol class=\"breadcrumb float-sm-right\">","</ol>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/news"}},[_vm._v("หน้าแรก")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/reserve"}},[_vm._v("เเสดงรายการจอง")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">เพิ่มรายการจองใหม่</li>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"content\">","</section>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_c('ReserveForm',{attrs:{"zone":_vm.loadZoneData},on:{"reserveData":_vm.onSubmitted}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/reserve/create.vue?vue&type=template&id=16f1cd40&

// EXTERNAL MODULE: ./components/pages/reserve/ReserveForm.vue + 4 modules
var ReserveForm = __webpack_require__(87);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/reserve/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ReserveForm: ReserveForm["a" /* default */]
  },
  methods: {
    onSubmitted(reserve) {
      $('#loading-modal').modal('show');
      this.$store.dispatch("addReserve", reserve).then(() => {
        setTimeout(() => {
          this.$router.push("/admin/reserve");
          $('#loading-modal').modal('hide');
          toastr.info('บันทึกข้อมูลเรียบร้อยเเล้ว');
        }, 1500);
      }).catch(error => {
        $('#loading-modal').modal('hide');
        toastr.error('ไม่สามารถบันทึกข้อมูลได้');
        console.log('error ', error);
      });
    }

  },

  fetch({
    store,
    params
  }) {
    if (!store.state.zoneData || store.state.zoneData.length == 0) {
      return store.dispatch('initZone');
    }
  },

  computed: {
    loadZoneData() {
      var data = [];

      if (this.$store.getters.getAllZone) {
        data = this.$store.getters.getAllZone;
      }

      return data;
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/reserve/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var reserve_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/reserve/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reserve_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d6e39326"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/reserve/ReserveForm.vue?vue&type=template&id=332268fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row reserve"},[_vm._ssrNode("<div class=\"col-md-12\" data-v-332268fa>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-332268fa>","</div>",[_vm._ssrNode("<div class=\"card-header\" data-v-332268fa><h3 class=\"card-title\" data-v-332268fa>เพิ่มรายการจองใหม่</h3></div> "),_vm._ssrNode("<form id=\"reserveForm\" role=\"form\" data-v-332268fa>","</form>",[_vm._ssrNode("<div class=\"card-body\" data-v-332268fa>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-332268fa>","</div>",[_vm._ssrNode("<div class=\"col-sm-6\" data-v-332268fa>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-332268fa>","</div>",[_vm._ssrNode("<label for=\"zone_id\" data-v-332268fa>โซน</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.zone_id),expression:"form.zone_id"}],staticClass:"form-control",attrs:{"name":"zone_id","id":"zone_id"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.form, "zone_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":""}},[_vm._v("กรุณาเลือก")]),_vm._v(" "),_vm._l((_vm.zone),function(item){return _c('option',{key:item.id,domProps:{"value":item.id}},[_vm._v(_vm._s(item.topic))])})],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-sm-6\" data-v-332268fa>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-332268fa>","</div>",[_vm._ssrNode("<label for=\"title\" data-v-332268fa>คำนำหน้า</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.title),expression:"form.title"}],staticClass:"form-control",attrs:{"name":"title","id":"title"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.form, "title", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":""}},[_vm._v("กรุณาเลือก")]),_vm._v(" "),_c('option',{attrs:{"value":"นาย"}},[_vm._v("นาย")]),_vm._v(" "),_c('option',{attrs:{"value":"นาง"}},[_vm._v("นาง")]),_vm._v(" "),_c('option',{attrs:{"value":"นางสาว"}},[_vm._v("นางสาว")])])],2)])],2),_vm._ssrNode(" <div class=\"row\" data-v-332268fa><div class=\"col-sm-6\" data-v-332268fa><div class=\"form-group\" data-v-332268fa><label for=\"first_name\" data-v-332268fa>ชื่อ</label> <input type=\"text\" name=\"first_name\" id=\"first_name\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.first_name)))+" class=\"form-control\" data-v-332268fa></div></div> <div class=\"col-sm-6\" data-v-332268fa><div class=\"form-group\" data-v-332268fa><label for=\"last_name\" data-v-332268fa>นามสกุล</label> <input type=\"text\" name=\"last_name\" id=\"last_name\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.last_name)))+" class=\"form-control\" data-v-332268fa></div></div></div> <div class=\"row\" data-v-332268fa><div class=\"col-sm-6\" data-v-332268fa><div class=\"form-group\" data-v-332268fa><label for=\"mobile\" data-v-332268fa>เบอร์มือถือ</label> <input type=\"text\" name=\"mobile\" id=\"mobile\" maxlength=\"10\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.mobile)))+" class=\"form-control\" data-v-332268fa></div></div> <div class=\"col-sm-6\" data-v-332268fa><div class=\"form-group\" data-v-332268fa><label for=\"amount\" data-v-332268fa>จำนวนที่นั่ง</label> <input type=\"number\" name=\"amount\" id=\"amount\" min=\"0\" max=\"1000\" step=\"1\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.form.amount)))+" class=\"form-control\" data-v-332268fa></div></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-332268fa>","</div>",[_vm._ssrNode("<div class=\"col-sm-6\" data-v-332268fa>","</div>",[_vm._ssrNode("<div class=\"form-group\" data-v-332268fa>","</div>",[_vm._ssrNode("<label for=\"status\" data-v-332268fa>สถานะ</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.status),expression:"form.status"}],staticClass:"form-control",attrs:{"name":"status","id":"status"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":"P"}},[_vm._v("กำลังดำเนินการ")]),_vm._v(" "),_c('option',{attrs:{"value":"A"}},[_vm._v("อนุมัติ")]),_vm._v(" "),_c('option',{attrs:{"value":"I"}},[_vm._v("ไม่อนุมัติ")])])],2)])])],2),_vm._ssrNode(" <div class=\"card-footer text-center\" data-v-332268fa><button type=\"submit\" class=\"btn btn-secondary\" data-v-332268fa>บันทึก</button> <button type=\"reset\" class=\"btn btn-default\" data-v-332268fa>ล้างข้อมูล</button></div>")],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/reserve/ReserveForm.vue?vue&type=template&id=332268fa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/reserve/ReserveForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ReserveFormvue_type_script_lang_js_ = ({
  data() {
    return {
      form: this.reserve ? { ...this.reserve
      } : {
        zone_id: "",
        title: "",
        first_name: "",
        last_name: "",
        mobile: "",
        amount: "0",
        status: "A"
      }
    };
  },

  mounted: function () {
    $('#reserveForm').validate({
      rules: {
        zone_id: {
          required: true
        },
        title: {
          required: true
        },
        first_name: {
          required: true
        },
        last_name: {
          required: true
        },
        mobile: {
          required: true,
          maxlength: 10,
          minlength: 10,
          digits: true
        }
      },
      messages: {
        zone_id: {
          required: "กรุณาเลือกโซน"
        },
        title: {
          required: "กรุณาเลือกคำนำหน้า"
        },
        first_name: {
          required: "กรุณาระบุชื่อ"
        },
        last_name: {
          required: "กรุณาระบุนามสกุล"
        },
        mobile: {
          required: "กรุณาระบุเบอร์มือถือ",
          maxlength: "ขนาดเบอร์มือถือต้อง 10 หลักเท่านั้น",
          minlength: "ขนาดเบอร์มือถือต้อง 10 หลักเท่านั้น",
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
  },
  props: {
    reserve: {
      type: Object,
      required: false
    },
    zone: {
      type: Array,
      required: false
    }
  },
  methods: {
    onSubmit(evt) {
      if ($("#reserveForm").valid()) {
        this.$emit('reserveData', this.form);
      } else {
        console.log("validate is failed");
      }
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.zone_id = "";
      this.form.title = "";
      this.form.first_name = "";
      this.form.last_name = "";
      this.form.mobile = "";
      this.form.amount = "0";
      this.form.status = "A";
    }

  }
});
// CONCATENATED MODULE: ./components/pages/reserve/ReserveForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var reserve_ReserveFormvue_type_script_lang_js_ = (ReserveFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pages/reserve/ReserveForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reserve_ReserveFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "332268fa",
  "4efd728e"
  
)

/* harmony default export */ var ReserveForm = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map