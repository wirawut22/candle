exports.ids = [3];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/news/index.vue?vue&type=template&id=84302f5a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content-header\">","</div>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row mb-2\">","</div>",[_vm._ssrNode("<div class=\"col-sm-6\"><h1 class=\"m-0 text-dark\">ข่าวสาร</h1></div> "),_vm._ssrNode("<div class=\"col-sm-6\">","</div>",[_vm._ssrNode("<ol class=\"breadcrumb float-sm-right\">","</ol>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/news"}},[_vm._v("หน้าแรก")])],1),_vm._ssrNode(" <li class=\"breadcrumb-item active\">เเสดงข่าวสาร</li>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"content\">","</section>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_c('NewsList',{attrs:{"news":_vm.loadData},on:{"deleteData":_vm.onDeleted}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/news/index.vue?vue&type=template&id=84302f5a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/news/NewsList.vue?vue&type=template&id=2bbebd3e&
var NewsListvue_type_template_id_2bbebd3e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\"><h3 class=\"card-title\">ข่าวสารทั้งหมด</h3></div> "),_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"col-12 float-left clearfix\">","</div>",[_c('nuxt-link',{staticClass:"btn btn-info btn-sm",attrs:{"to":"/admin/news/create"}},[_c('i',{staticClass:"fas fa-plus"}),_vm._v(" เพิ่มข่าวสาร")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-body\" style=\"padding-top:0px;\">","</div>",[_vm._ssrNode("<div class=\"col-12 table-container\">","</div>",[_vm._ssrNode("<table id=\"news-table\" class=\"table table-bordered table-hover\">","</table>",[_vm._ssrNode("<thead><tr><th class=\"text-center\" style=\"width: 5%\">ลำดับ</th> <th class=\"text-left\" style=\"width: 40%\">หัวข้อ</th> <th class=\"text-left\" style=\"width: 10%\">ผู้เขียน</th> <th class=\"text-center\" style=\"width: 20%\">วันที่บันทึก</th> <th class=\"text-center\" style=\"width: 25% !important\">#</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.news),function(item,index){return _vm._ssrNode("<tr"+(_vm._ssrAttr("index",index))+">","</tr>",[_vm._ssrNode("<td class=\"text-center\">"+_vm._ssrEscape(_vm._s(index + 1))+"</td> <td class=\"text-left\">"+_vm._ssrEscape(_vm._s(item.topic.length>100 ? item.topic.slice(0,100)+"..." : item.topic))+"</td> <td class=\"text-left\">"+_vm._ssrEscape("\n                    "+_vm._s(item.author ? item.author : "")+"\n                  ")+"</td> <td class=\"text-center\">"+_vm._ssrEscape(_vm._s(_vm._f("moment")(item.update_dttm)))+"</td> "),_vm._ssrNode("<td class=\"project-actions text-center\">","</td>",[_c('nuxt-link',{staticClass:"btn btn-info btn-sm",attrs:{"to":{ path: 'news/'+item.id}}},[_c('i',{staticClass:"fas fa-pencil-alt"}),_vm._v("\n                      แก้ไข\n                    ")]),_vm._ssrNode(" <a class=\"btn btn-danger btn-sm\"><i class=\"fas fa-trash\"></i>\n                      ลบ\n                    </a>")],2)],2)}),0)],2)])])],2)])]),_vm._ssrNode(" <div id=\"modal-delete-news\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h4 class=\"modal-title\">ข้อความเเจ้งเตือน</h4> <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\" class=\"close\"><span aria-hidden=\"true\">×</span></button></div> <div class=\"modal-body\"><p>ต้องการลบรายการใช่หรือไม่ ?</p></div> <div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-info\">ตกลง</button> <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">ยกเลิก</button></div></div></div></div>")],2)}
var NewsListvue_type_template_id_2bbebd3e_staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/news/NewsList.vue?vue&type=template&id=2bbebd3e&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(69);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/news/NewsList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NewsListvue_type_script_lang_js_ = ({
  data() {
    return {
      id: ""
    };
  },

  mounted: function () {
    $("#news-table").DataTable({
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

    alertDeleteNews(id) {
      this.id = id;
      $('#modal-delete-news').modal("show");
    },

    confirmDeleteNews(id) {
      $('#modal-delete-news').modal("hide");
      this.$emit('deleteData', id);
    }

  },
  props: {
    news: {
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
// CONCATENATED MODULE: ./components/pages/news/NewsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var news_NewsListvue_type_script_lang_js_ = (NewsListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pages/news/NewsList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_NewsListvue_type_script_lang_js_,
  NewsListvue_type_template_id_2bbebd3e_render,
  NewsListvue_type_template_id_2bbebd3e_staticRenderFns,
  false,
  null,
  null,
  "2ddefec8"
  
)

/* harmony default export */ var NewsList = (component.exports);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/news/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var newsvue_type_script_lang_js_ = ({
  layout: "adminLayout",
  components: {
    NewsList: NewsList
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
    if (!store.state.newsData || store.state.newsData.length == 0) {
      return store.dispatch('initNews');
    }
  },

  computed: {
    loadData() {
      var data = [];

      if (this.$store.getters.getAllNews) {
        data = this.$store.getters.getAllNews;
      }

      return data;
    }

  },
  methods: {
    onDeleted(id) {
      $('#loading-modal').modal('show');
      this.$store.dispatch("deleteNews", id).then(() => {
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
// CONCATENATED MODULE: ./pages/admin/news/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_newsvue_type_script_lang_js_ = (newsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/admin/news/index.vue





/* normalize component */

var news_component = Object(componentNormalizer["a" /* default */])(
  admin_newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8642ea4c"
  
)

/* harmony default export */ var news = __webpack_exports__["default"] = (news_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map