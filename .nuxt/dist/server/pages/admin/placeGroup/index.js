exports.ids = [9];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/placeGroup/index.vue?vue&type=template&id=2774703b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content-header\">","</div>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row mb-2\">","</div>",[_vm._ssrNode("<div class=\"col-sm-6\"><h1 class=\"m-0 text-dark\">กลุ่มสถานที่</h1></div> "),_vm._ssrNode("<div class=\"col-sm-6\">","</div>",[_vm._ssrNode("<ol class=\"breadcrumb float-sm-right\">","</ol>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/news"}},[_vm._v("หน้าแรก")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">เเสดงกลุ่มสถานที่</li>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"content\">","</section>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_c('PlaceGroupList',{attrs:{"placeGroup":_vm.loadData},on:{"deleteData":_vm.onDeleted}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/placeGroup/index.vue?vue&type=template&id=2774703b&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/placeGroup/PlaceGroupList.vue?vue&type=template&id=5874fa0a&
var PlaceGroupListvue_type_template_id_5874fa0a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h3 class=\"card-title\">กลุ่มสถานที่ทั้งหมด</h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"col-12 float-left clearfix\">","</div>",[_c('nuxt-link',{staticClass:"btn btn-info btn-sm",attrs:{"to":"/admin/placeGroup/create"}},[_c('i',{staticClass:"fas fa-plus"}),_vm._v(" เพิ่มกลุ่มสถานที่")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-body\" style=\"padding-top:0px;\">","</div>",[_vm._ssrNode("<div class=\"col-12 table-container\">","</div>",[_vm._ssrNode("<table id=\"placeGroup-table\" class=\"table table-bordered table-hover\">","</table>",[_vm._ssrNode("<thead><tr><th class=\"text-center\" style=\"width: 10%\">ลำดับ</th> <th class=\"text-left\" style=\"width: 15%\">กลุ่มสถานที่</th> <th class=\"text-left\" style=\"width: 15%\">ไอคอน</th> <th class=\"text-left\" style=\"width: 15%\">context path</th> <th class=\"text-center\" style=\"width: 20%\">วันที่แก้ไข</th> <th class=\"text-center\" style=\"width: 25% !important\">#</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.placeGroup),function(item,index){return _vm._ssrNode("<tr"+(_vm._ssrAttr("index",index))+">","</tr>",[_vm._ssrNode("<td class=\"text-center\">"+_vm._ssrEscape(_vm._s(index + 1))+"</td> <td class=\"text-left\">"+_vm._ssrEscape(_vm._s(item.topic.length>65 ? item.topic.slice(0,65)+"..." : item.topic))+"</td> <td class=\"text-left\">"+_vm._ssrEscape(_vm._s(item.icon? item.icon : ""))+"</td> <td class=\"text-left\">"+_vm._ssrEscape(_vm._s(item.context_path? item.context_path : ""))+"</td> <td class=\"text-center\">"+_vm._ssrEscape(_vm._s(_vm._f("moment")(item.update_dttm)))+"</td> "),_vm._ssrNode("<td class=\"project-actions text-center\">","</td>",[_c('nuxt-link',{staticClass:"btn btn-info btn-sm",attrs:{"to":{ path: 'placeGroup/'+item.id}}},[_c('i',{staticClass:"fas fa-pencil-alt"}),_vm._v("\n                      แก้ไข\n                    ")]),_vm._ssrNode(" <a class=\"btn btn-danger btn-sm\"><i class=\"fas fa-trash\"></i>\n                      ลบ\n                    </a>")],2)],2)}),0)],2)])])],2)])]),_vm._ssrNode(" <div id=\"modal-delete-placeGroup\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h4 class=\"modal-title\">ข้อความเเจ้งเตือน</h4> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\"><span aria-hidden=\"true\">×</span></button></div> <div class=\"modal-body\"><p>ต้องการลบรายการใช่หรือไม่ ?</p></div> <div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-info\">ตกลง</button> <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">ยกเลิก</button></div></div></div></div>")],2)}
var PlaceGroupListvue_type_template_id_5874fa0a_staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/placeGroup/PlaceGroupList.vue?vue&type=template&id=5874fa0a&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(69);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/placeGroup/PlaceGroupList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PlaceGroupListvue_type_script_lang_js_ = ({
  data() {
    return {
      id: ""
    };
  },

  mounted: function () {
    $("#placeGroup-table").DataTable({
      paging: true,
      lengthChange: false,
      searching: true,
      ordering: false,
      info: true,
      autoWidth: true,
      responsive: true,
      lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
      language: {
        info: "เเสดง _START_ ถึง _END_ ของ _TOTAL_ รายการ",
        infoEmpty: "แสดง 0 ถึง 0 ของ 0 รายการ",
        lengthMenu: "เเสดง _MENU_ รายการ",
        loadingRecords: "กำลังโหลด...",
        processing: "ประมวลผล...",
        search: "ค้นหา:",
        emptyTable: "ไม่พบข้อมูล",
        paginate: {
          previous: "ก่อนหน้า",
          next: "ถัดไป",
          first: "เเรกสุด",
          last: "สุดท้าย",
          infoEmpty: "ไม่พบข้อมูล"
        }
      }
    });
  },
  methods: {
    moment: function () {
      return external_moment_default()();
    },

    alertDeletePlaceGroup(id) {
      this.id = id;
      $('#modal-delete-placeGroup').modal("show");
    },

    confirmDeletePlaceGroup(id) {
      $('#modal-delete-placeGroup').modal("hide");
      this.$emit('deleteData', id);
    }

  },
  props: {
    placeGroup: {
      type: Array,
      required: true
    }
  },
  filters: {
    moment: function (date) {
      return external_moment_default()(date).format("YYYY-MM-DD HH:mm:ss");
    }
  }
});
// CONCATENATED MODULE: ./components/pages/placeGroup/PlaceGroupList.vue?vue&type=script&lang=js&
 /* harmony default export */ var placeGroup_PlaceGroupListvue_type_script_lang_js_ = (PlaceGroupListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pages/placeGroup/PlaceGroupList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  placeGroup_PlaceGroupListvue_type_script_lang_js_,
  PlaceGroupListvue_type_template_id_5874fa0a_render,
  PlaceGroupListvue_type_template_id_5874fa0a_staticRenderFns,
  false,
  null,
  null,
  "984fdc30"
  
)

/* harmony default export */ var PlaceGroupList = (component.exports);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/placeGroup/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var placeGroupvue_type_script_lang_js_ = ({
  layout: "adminLayout",
  components: {
    PlaceGroupList: PlaceGroupList
  },

  mounted() {
    this.$nextTick(() => {
      $('#loading-modal').modal('show');
      setTimeout(() => $('#loading-modal').modal('hide'), 1500);
    });
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
    loadData() {
      var data = [];

      if (this.$store.getters.getAllPlaceGroup) {
        data = this.$store.getters.getAllPlaceGroup;
      }

      return data;
    }

  },
  methods: {
    onDeleted(id) {
      $('#loading-modal').modal('show');
      this.$store.dispatch("deletePlaceGroup", id).then(() => {
        setTimeout(() => {
          $('#loading-modal').modal('hide');
          toastr.info('ลบข้อมูลเรียบร้อยเเล้ว');
        }, 1500);
      }).catch(error => {
        $('#loading-modal').modal('้hide');
        toastr.error('ไม่สามารถลบข้อมูลได้');
        console.log('error ', error);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/placeGroup/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_placeGroupvue_type_script_lang_js_ = (placeGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/admin/placeGroup/index.vue





/* normalize component */

var placeGroup_component = Object(componentNormalizer["a" /* default */])(
  admin_placeGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "64e1d0bf"
  
)

/* harmony default export */ var placeGroup = __webpack_exports__["default"] = (placeGroup_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map