module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/admin/news/_id/index","2":"pages/admin/news/create","3":"pages/admin/news/index","4":"pages/admin/place/_id/index","5":"pages/admin/place/create","6":"pages/admin/place/index","7":"pages/admin/placeGroup/_id/index","8":"pages/admin/placeGroup/create","9":"pages/admin/placeGroup/index","10":"pages/admin/reserve/_id/index","11":"pages/admin/reserve/create","12":"pages/admin/reserve/index","13":"pages/admin/zone/_id/index","14":"pages/admin/zone/create","15":"pages/admin/zone/index","16":"pages/coffee/_id/index","17":"pages/food/_id/index","18":"pages/hotel/_id/index","19":"pages/index","20":"pages/login/index","21":"pages/map/_id/index","22":"pages/news/_id/index","23":"pages/news/index","24":"pages/place/_id/index","25":"pages/reserve/index","26":"pages/travel/_id/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (options) {
  var mappedProps = options.mappedProps,
      name = options.name,
      ctr = options.ctr,
      ctrArgs = options.ctrArgs,
      events = options.events,
      beforeCreate = options.beforeCreate,
      afterCreate = options.afterCreate,
      props = options.props,
      rest = _objectWithoutProperties(options, ['mappedProps', 'name', 'ctr', 'ctrArgs', 'events', 'beforeCreate', 'afterCreate', 'props']);

  var promiseName = '$' + name + 'Promise';
  var instanceName = '$' + name + 'Object';

  assert(!(rest.props instanceof Array), '`props` should be an object, not Array');

  return _extends({}, typeof GENERATE_DOC !== 'undefined' ? { $vgmOptions: options } : {}, {
    mixins: [_mapElementMixin2.default],
    props: _extends({}, props, mappedPropsToVueProps(mappedProps)),
    render: function render() {
      return '';
    },
    provide: function provide() {
      var _this = this;

      var promise = this.$mapPromise.then(function (map) {
        // Infowindow needs this to be immediately available
        _this.$map = map;

        // Initialize the maps with the given options
        var options = _extends({}, _this.options, {
          map: map
        }, (0, _bindProps.getPropsValues)(_this, mappedProps));
        delete options.options; // delete the extra options

        if (beforeCreate) {
          var result = beforeCreate.bind(_this)(options);

          if (result instanceof Promise) {
            return result.then(function () {
              return { options: options };
            });
          }
        }
        return { options: options };
      }).then(function (_ref) {
        var _Function$prototype$b;

        var options = _ref.options;

        var ConstructorObject = ctr();
        // https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
        _this[instanceName] = ctrArgs ? new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [ConstructorObject, null].concat(_toConsumableArray(ctrArgs(options, (0, _bindProps.getPropsValues)(_this, props || {}))))))() : new ConstructorObject(options);

        (0, _bindProps.bindProps)(_this, _this[instanceName], mappedProps);
        (0, _bindEvents2.default)(_this, _this[instanceName], events);

        if (afterCreate) {
          afterCreate.bind(_this)(_this[instanceName]);
        }
        return _this[instanceName];
      });
      this[promiseName] = promise;
      return _defineProperty({}, promiseName, promise);
    },
    destroyed: function destroyed() {
      // Note: not all Google Maps components support maps
      if (this[instanceName] && this[instanceName].setMap) {
        this[instanceName].setMap(null);
      }
    }
  }, rest);
};

exports.mappedPropsToVueProps = mappedPropsToVueProps;

var _bindEvents = __webpack_require__(12);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(8);

var _mapElementMixin = __webpack_require__(25);

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 *
 * @param {Object} options
 * @param {Object} options.mappedProps - Definitions of props
 * @param {Object} options.mappedProps.PROP.type - Value type
 * @param {Boolean} options.mappedProps.PROP.twoWay
 *  - Whether the prop has a corresponding PROP_changed
 *   event
 * @param {Boolean} options.mappedProps.PROP.noBind
 *  - If true, do not apply the default bindProps / bindEvents.
 * However it will still be added to the list of component props
 * @param {Object} options.props - Regular Vue-style props.
 *  Note: must be in the Object form because it will be
 *  merged with the `mappedProps`
 *
 * @param {Object} options.events - Google Maps API events
 *  that are not bound to a corresponding prop
 * @param {String} options.name - e.g. `polyline`
 * @param {=> String} options.ctr - constructor, e.g.
 *  `google.maps.Polyline`. However, since this is not
 *  generally available during library load, this becomes
 *  a function instead, e.g. () => google.maps.Polyline
 *  which will be called only after the API has been loaded
 * @param {(MappedProps, OtherVueProps) => Array} options.ctrArgs -
 *   If the constructor in `ctr` needs to be called with
 *   arguments other than a single `options` object, e.g. for
 *   GroundOverlay, we call `new GroundOverlay(url, bounds, options)`
 *   then pass in a function that returns the argument list as an array
 *
 * Otherwise, the constructor will be called with an `options` object,
 *   with property and values merged from:
 *
 *   1. the `options` property, if any
 *   2. a `map` property with the Google Maps
 *   3. all the properties passed to the component in `mappedProps`
 * @param {Object => Any} options.beforeCreate -
 *  Hook to modify the options passed to the initializer
 * @param {(options.ctr, Object) => Any} options.afterCreate -
 *  Hook called when
 *
 */


function assert(v, message) {
  if (!v) throw new Error(message);
}

/**
 * Strips out the extraneous properties we have in our
 * props definitions
 * @param {Object} props
 */
function mappedPropsToVueProps(mappedProps) {
  return Object.entries(mappedProps).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        prop = _ref4[1];

    var value = {};

    if ('type' in prop) value.type = prop.type;
    if ('default' in prop) value.default = prop.default;
    if ('required' in prop) value.required = prop.required;

    return [key, value];
  }).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        val = _ref6[1];

    acc[key] = val;
    return acc;
  }, {});
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropsValues = getPropsValues;
exports.bindProps = bindProps;

var _WatchPrimitiveProperties = __webpack_require__(13);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPropsValues(vueInst, props) {
  return Object.keys(props).reduce(function (acc, prop) {
    if (vueInst[prop] !== undefined) {
      acc[prop] = vueInst[prop];
    }
    return acc;
  }, {});
}

/**
  * Binds the properties defined in props to the google maps instance.
  * If the prop is an Object type, and we wish to track the properties
  * of the object (e.g. the lat and lng of a LatLng), then we do a deep
  * watch. For deep watch, we also prevent the _changed event from being
  * emitted if the data source was external.
  */
function bindProps(vueInst, googleMapsInst, props) {
  var _loop = function (attribute) {
    var _props$attribute = props[attribute],
        twoWay = _props$attribute.twoWay,
        type = _props$attribute.type,
        trackProperties = _props$attribute.trackProperties,
        noBind = _props$attribute.noBind;


    if (noBind) return 'continue';

    var setMethodName = 'set' + capitalizeFirstLetter(attribute);
    var getMethodName = 'get' + capitalizeFirstLetter(attribute);
    var eventName = attribute.toLowerCase() + '_changed';
    var initialValue = vueInst[attribute];

    if (typeof googleMapsInst[setMethodName] === 'undefined') {
      throw new Error(setMethodName + ' is not a method of (the Maps object corresponding to) ' + vueInst.$options._componentTag);
    }

    // We need to avoid an endless
    // propChanged -> event emitted -> propChanged -> event emitted loop
    // although this may really be the user's responsibility
    if (type !== Object || !trackProperties) {
      // Track the object deeply
      vueInst.$watch(attribute, function () {
        var attributeValue = vueInst[attribute];

        googleMapsInst[setMethodName](attributeValue);
      }, {
        immediate: typeof initialValue !== 'undefined',
        deep: type === Object
      });
    } else {
      (0, _WatchPrimitiveProperties2.default)(vueInst, trackProperties.map(function (prop) {
        return attribute + '.' + prop;
      }), function () {
        googleMapsInst[setMethodName](vueInst[attribute]);
      }, vueInst[attribute] !== undefined);
    }

    if (twoWay && (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName])) {
      googleMapsInst.addListener(eventName, function () {
        // eslint-disable-line no-unused-vars
        vueInst.$emit(eventName, googleMapsInst[getMethodName]());
      });
    }
  };

  for (var attribute in props) {
    var _ret = _loop(attribute);

    if (_ret === 'continue') continue;
  }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindProps = __webpack_require__(8);

var _simulateArrowDown = __webpack_require__(29);

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var props = {
  bounds: {
    type: Object
  },
  defaultPlace: {
    type: String,
    default: ''
  },
  componentRestrictions: {
    type: Object,
    default: null
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  placeholder: {
    required: false,
    type: String
  },
  className: {
    required: false,
    type: String
  },
  label: {
    required: false,
    type: String,
    default: null
  },
  selectFirstOnEnter: {
    require: false,
    type: Boolean,
    default: false
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    var input = this.$refs.input;

    // Allow default place to be set
    input.value = this.defaultPlace;
    this.$watch('defaultPlace', function () {
      input.value = _this.defaultPlace;
    });

    this.$gmapApiPromiseLazy().then(function () {
      var options = (0, _bindProps.getPropsValues)(_this, props);
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      _this.autoCompleter = new google.maps.places.Autocomplete(_this.$refs.input, options);

      var placeholder = props.placeholder,
          place = props.place,
          defaultPlace = props.defaultPlace,
          className = props.className,
          label = props.label,
          selectFirstOnEnter = props.selectFirstOnEnter,
          rest = _objectWithoutProperties(props, ['placeholder', 'place', 'defaultPlace', 'className', 'label', 'selectFirstOnEnter']); // eslint-disable-line


      (0, _bindProps.bindProps)(_this, _this.autoCompleter, rest);

      _this.autoCompleter.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.autoCompleter.getPlace());
      });
    });
  },
  created: function created() {
    console.warn('The PlaceInput class is deprecated! Please consider using the Autocomplete input instead'); // eslint-disable-line no-console
  },

  props: props
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (vueInst, googleMapsInst, events) {
  var _loop = function (eventName) {
    if (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName]) {
      googleMapsInst.addListener(eventName, function (ev) {
        vueInst.$emit(eventName, ev);
      });
    }
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WatchPrimitiveProperties;
/**
 * Watch the individual properties of a PoD object, instead of the object
 * per se. This is different from a deep watch where both the reference
 * and the individual values are watched.
 *
 * In effect, it throttles the multiple $watch to execute at most once per tick.
 */
function WatchPrimitiveProperties(vueInst, propertiesToTrack, handler) {
  var immediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var isHandled = false;

  function requestHandle() {
    if (!isHandled) {
      isHandled = true;
      vueInst.$nextTick(function () {
        isHandled = false;
        handler();
      });
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propertiesToTrack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;

      vueInst.$watch(prop, requestHandle, { immediate: immediate });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
Mixin for objects that are mounted by Google Maps
Javascript API.

These are objects that are sensitive to element resize
operations so it exposes a property which accepts a bus

*/

exports.default = {
  props: ['resizeBus'],

  data: function data() {
    return {
      _actualResizeBus: null
    };
  },
  created: function created() {
    if (typeof this.resizeBus === 'undefined') {
      this.$data._actualResizeBus = this.$gmapDefaultResizeBus;
    } else {
      this.$data._actualResizeBus = this.resizeBus;
    }
  },


  methods: {
    _resizeCallback: function _resizeCallback() {
      this.resize();
    },
    _delayedResizeCallback: function _delayedResizeCallback() {
      var _this = this;

      this.$nextTick(function () {
        return _this._resizeCallback();
      });
    }
  },

  watch: {
    resizeBus: function resizeBus(newVal) {
      // eslint-disable-line no-unused-vars
      this.$data._actualResizeBus = newVal;
    },
    '$data._actualResizeBus': function $data_actualResizeBus(newVal, oldVal) {
      if (oldVal) {
        oldVal.$off('resize', this._delayedResizeCallback);
      }
      if (newVal) {
        newVal.$on('resize', this._delayedResizeCallback);
      }
    }
  },

  destroyed: function destroyed() {
    if (this.$data._actualResizeBus) {
      this.$data._actualResizeBus.$off('resize', this._delayedResizeCallback);
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=13bfbbee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_vm._ssrNode("<span>"+_vm._ssrEscape(_vm._s(_vm.label))+"</span> <input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrClass(null,_vm.className))+">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=13bfbbee&


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("72daabed", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2ebef567", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1a80627c", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("932a8f60", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @class MapElementMixin
 *
 * Extends components to include the following fields:
 *
 * @property $map        The Google map (valid only after the promise returns)
 *
 *
 * */
exports.default = {
  inject: {
    '$mapPromise': { default: 'abcdef' }
  },

  provide: function provide() {
    var _this = this;

    // Note: although this mixin is not "providing" anything,
    // components' expect the `$map` property to be present on the component.
    // In order for that to happen, this mixin must intercept the $mapPromise
    // .then(() =>) first before its component does so.
    //
    // Since a provide() on a mixin is executed before a provide() on the
    // component, putting this code in provide() ensures that the $map is
    // already set by the time the
    // component's provide() is called.
    this.$mapPromise.then(function (map) {
      _this.$map = map;
    });

    return {};
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TwoWayBindingWrapper;
/**
 * When you have two-way bindings, but the actual bound value will not equal
 * the value you initially passed in, then to avoid an infinite loop you
 * need to increment a counter every time you pass in a value, decrement the
 * same counter every time the bound value changed, but only bubble up
 * the event when the counter is zero.
 *
Example:

Let's say DrawingRecognitionCanvas is a deep-learning backed canvas
that, when given the name of an object (e.g. 'dog'), draws a dog.
But whenever the drawing on it changes, it also sends back its interpretation
of the image by way of the @newObjectRecognized event.

<input
  type="text"
  placeholder="an object, e.g. Dog, Cat, Frog"
  v-model="identifiedObject" />
<DrawingRecognitionCanvas
  :object="identifiedObject"
  @newObjectRecognized="identifiedObject = $event"
  />

new TwoWayBindingWrapper((increment, decrement, shouldUpdate) => {
  this.$watch('identifiedObject', () => {
    // new object passed in
    increment()
  })
  this.$deepLearningBackend.on('drawingChanged', () => {
    recognizeObject(this.$deepLearningBackend)
      .then((object) => {
        decrement()
        if (shouldUpdate()) {
          this.$emit('newObjectRecognized', object.name)
        }
      })
  })
})
 */
function TwoWayBindingWrapper(fn) {
  var counter = 0;

  fn(function () {
    counter += 1;
  }, function () {
    counter = Math.max(0, counter - 1);
  }, function () {
    return counter === 0;
  });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("78d5fb28", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("81c3769c", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by amirnissim and can be seen here
// http://stackoverflow.com/a/11703018/2694653
// This has been ported to Vanilla.js by GuillaumeLeclerc
exports.default = function (input) {
  var _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent;

  function addEventListenerWrapper(type, listener) {
    // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
    // and then trigger the original listener.
    if (type === 'keydown') {
      var origListener = listener;
      listener = function (event) {
        var suggestionSelected = document.getElementsByClassName('pac-item-selected').length > 0;
        if (event.which === 13 && !suggestionSelected) {
          var simulatedEvent = document.createEvent('Event');
          simulatedEvent.keyCode = 40;
          simulatedEvent.which = 40;
          origListener.apply(input, [simulatedEvent]);
        }
        origListener.apply(input, [event]);
      };
    }
    _addEventListener.apply(input, [type, listener]);
  }

  input.addEventListener = addEventListenerWrapper;
  input.attachEvent = addEventListenerWrapper;
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  gmap_key: 'AIzaSyB4UH9t_QJ7nVypuKbNqbx25ffRSD-pvTA',
  contentful: {
    space_id: 'j99xtunjmy05',
    access_token: '390e98821ac3f05a725d7ae061b96f341f70f5160d2a68e7cb531304f9fa91f8',
    env: 'master'
  }
});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("vue-lazyload");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreetViewPanorama = exports.MountableMixin = exports.Autocomplete = exports.MapElementFactory = exports.MapElementMixin = exports.PlaceInput = exports.Map = exports.InfoWindow = exports.Rectangle = exports.Cluster = exports.Circle = exports.Polygon = exports.Polyline = exports.Marker = exports.loadGmapApi = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Vue component imports


exports.install = install;
exports.gmapApi = gmapApi;

var _lazyValue = __webpack_require__(48);

var _lazyValue2 = _interopRequireDefault(_lazyValue);

var _manager = __webpack_require__(49);

var _marker = __webpack_require__(50);

var _marker2 = _interopRequireDefault(_marker);

var _polyline = __webpack_require__(51);

var _polyline2 = _interopRequireDefault(_polyline);

var _polygon = __webpack_require__(52);

var _polygon2 = _interopRequireDefault(_polygon);

var _circle = __webpack_require__(53);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = __webpack_require__(54);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _infoWindow = __webpack_require__(65);

var _infoWindow2 = _interopRequireDefault(_infoWindow);

var _map = __webpack_require__(66);

var _map2 = _interopRequireDefault(_map);

var _streetViewPanorama = __webpack_require__(67);

var _streetViewPanorama2 = _interopRequireDefault(_streetViewPanorama);

var _placeInput = __webpack_require__(62);

var _placeInput2 = _interopRequireDefault(_placeInput);

var _autocomplete = __webpack_require__(68);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _mapElementMixin = __webpack_require__(25);

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

var _mapElementFactory = __webpack_require__(4);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

var _mountableMixin = __webpack_require__(14);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HACK: Cluster should be loaded conditionally
// However in the web version, it's not possible to write
// `import 'vue2-google-maps/src/components/cluster'`, so we need to
// import it anyway (but we don't have to register it)
// Therefore we use babel-plugin-transform-inline-environment-variables to
// set BUILD_DEV to truthy / falsy
var Cluster = undefined;

var GmapApi = null;

// export everything
exports.loadGmapApi = _manager.loadGmapApi;
exports.Marker = _marker2.default;
exports.Polyline = _polyline2.default;
exports.Polygon = _polygon2.default;
exports.Circle = _circle2.default;
exports.Cluster = Cluster;
exports.Rectangle = _rectangle2.default;
exports.InfoWindow = _infoWindow2.default;
exports.Map = _map2.default;
exports.PlaceInput = _placeInput2.default;
exports.MapElementMixin = _mapElementMixin2.default;
exports.MapElementFactory = _mapElementFactory2.default;
exports.Autocomplete = _autocomplete2.default;
exports.MountableMixin = _mountableMixin2.default;
exports.StreetViewPanorama = _streetViewPanorama2.default;
function install(Vue, options) {
  // Set defaults
  options = _extends({
    installComponents: true,
    autobindAllEvents: false
  }, options);

  // Update the global `GmapApi`. This will allow
  // components to use the `google` global reactively
  // via:
  //   import {gmapApi} from 'vue2-google-maps'
  //   export default {  computed: { google: gmapApi }  }
  GmapApi = new Vue({ data: { gmapApi: null } });

  var defaultResizeBus = new Vue();

  // Use a lazy to only load the API when
  // a VGM component is loaded
  var gmapApiPromiseLazy = makeGmapApiPromiseLazy(options);

  Vue.mixin({
    created: function created() {
      this.$gmapDefaultResizeBus = defaultResizeBus;
      this.$gmapOptions = options;
      this.$gmapApiPromiseLazy = gmapApiPromiseLazy;
    }
  });
  Vue.$gmapDefaultResizeBus = defaultResizeBus;
  Vue.$gmapApiPromiseLazy = gmapApiPromiseLazy;

  if (options.installComponents) {
    Vue.component('GmapMap', _map2.default);
    Vue.component('GmapMarker', _marker2.default);
    Vue.component('GmapInfoWindow', _infoWindow2.default);
    Vue.component('GmapPolyline', _polyline2.default);
    Vue.component('GmapPolygon', _polygon2.default);
    Vue.component('GmapCircle', _circle2.default);
    Vue.component('GmapRectangle', _rectangle2.default);
    Vue.component('GmapAutocomplete', _autocomplete2.default);
    Vue.component('GmapPlaceInput', _placeInput2.default);
    Vue.component('GmapStreetViewPanorama', _streetViewPanorama2.default);
  }
}

function makeGmapApiPromiseLazy(options) {
  // Things to do once the API is loaded
  function onApiLoaded() {
    GmapApi.gmapApi = {};
    return window.google;
  }

  if (options.load) {
    // If library should load the API
    return (0, _lazyValue2.default)(function () {
      // Load the
      // This will only be evaluated once
      if (typeof window === 'undefined') {
        // server side -- never resolve this promise
        return new Promise(function () {}).then(onApiLoaded);
      } else {
        return new Promise(function (resolve, reject) {
          try {
            window['vueGoogleMapsInit'] = resolve;
            (0, _manager.loadGmapApi)(options.load, options.loadCn);
          } catch (err) {
            reject(err);
          }
        }).then(onApiLoaded);
      }
    });
  } else {
    // If library should not handle API, provide
    // end-users with the global `vueGoogleMapsInit: () => undefined`
    // when the Google Maps API has been loaded
    var promise = new Promise(function (resolve) {
      if (typeof window === 'undefined') {
        // Do nothing if run from server-side
        return;
      }
      window['vueGoogleMapsInit'] = resolve;
    }).then(onApiLoaded);

    return (0, _lazyValue2.default)(function () {
      return promise;
    });
  }
}

function gmapApi() {
  return GmapApi.gmapApi && window.google;
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(64);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_e0706544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_e0706544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_e0706544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_e0706544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_e0706544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-link[data-v-e0706544]{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_434fb580_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_434fb580_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_434fb580_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_434fb580_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_434fb580_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-link-active[data-v-434fb580]{background-color:rgba(0,0,0,.1);color:#212529}.nuxt-link-active p[data-v-434fb580]{font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{font-family:\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



const createStore = () => {
  return new vuex__WEBPACK_IMPORTED_MODULE_0___default.a.Store({
    state: {
      //ข้อมูล
      newsData: [],
      placeData: [],
      placeGroupData: [],
      zoneData: [],
      reserveData: [],
      reserveCheckingData: [],
      activeTab: 'tab-home' //showModal: false

    },
    mutations: {
      //จัดการข้อมูลใน state 
      // toggleModal (state) { 
      //     state.showModal = !state.showModal
      // },
      setActiveTabState(state, activeTab) {
        debugger;
        state.activeTab = activeTab;
      },

      setNewsState(state, news) {
        state.newsData = news;
      },

      addNewsState(state, createNews) {
        state.newsData.push(createNews);
      },

      editNewsState(state, editNews) {
        const newsIndex = state.newsData.findIndex(news => news.id === parseInt(editNews.id));
        console.log("newsIndex = " + newsIndex);
        state.newsData[newsIndex] = editNews;
      },

      deleteNewsState(state, id) {
        console.log("06");
        const newsIndex = state.newsData.findIndex(news => news.id === parseInt(id));
        console.log("newsIndex = " + newsIndex);
        state.newsData.splice(newsIndex, 1);
      },

      setZoneState(state, zone) {
        state.zoneData = zone;
      },

      addZoneState(state, createZone) {
        state.zoneData.push(createZone);
      },

      editZoneState(state, editZone) {
        const zoneIndex = state.zoneData.findIndex(zone => zone.id === parseInt(editZone.id));
        console.log("zoneIndex = " + zoneIndex);
        state.zoneData[zoneIndex] = editZone;
      },

      deleteZoneState(state, id) {
        const zoneIndex = state.zoneData.findIndex(zone => zone.id === parseInt(id));
        console.log("zoneIndex = " + zoneIndex);
        state.zoneData.splice(zoneIndex, 1);
      },

      setPlaceGroupState(state, placeGroup) {
        state.placeGroupData = placeGroup;
      },

      addPlaceGroupState(state, createPlaceGroup) {
        state.placeGroupData.push(createPlaceGroup);
      },

      editPlaceGroupState(state, editPlaceGroup) {
        const placeGroupIndex = state.placeGroupData.findIndex(placeGroup => placeGroup.id === parseInt(editPlaceGroup.id));
        console.log("placeGroupIndex = " + placeGroupIndex);
        state.placeGroupData[placeGroupIndex] = editPlaceGroup;
      },

      deletePlaceGroupState(state, id) {
        const placeGroupIndex = state.placeGroupData.findIndex(placeGroup => placeGroup.id === parseInt(id));
        console.log("placeGroupIndex = " + placeGroupIndex);
        state.placeGroupData.splice(placeGroupIndex, 1);
      },

      setPlaceState(state, place) {
        state.placeData = place;
      },

      setPlaceOrderState(state, placeOrder) {
        state.placeOrderData = placeOrder;
      },

      addPlaceState(state, createPlace) {
        state.placeData.push(createPlace);
      },

      editPlaceState(state, editPlace) {
        const placeIndex = state.placeData.findIndex(place => place.id === parseInt(editPlace.id));
        console.log("placeIndex = " + placeIndex);
        state.placeData[placeIndex] = editPlace;
      },

      deletePlaceState(state, id) {
        const placeIndex = state.placeData.findIndex(place => place.id === parseInt(id));
        console.log("placeIndex = " + placeIndex);
        state.placeData.splice(placeIndex, 1);
      },

      setReserveState(state, reserve) {
        state.reserveData = reserve;
      },

      checkReserveState(state, reserve) {
        debugger;
        state.reserveCheckingData = reserve;
      },

      addReserveState(state, createReserve) {
        debugger;
        state.reserveData.push(createReserve);
      },

      editReserveState(state, editReserve) {
        const reserveIndex = state.reserveData.findIndex(reserve => reserve.id === parseInt(editReserve.id));
        console.log("reserveIndex = " + reserveIndex);
        state.reserveData[reserveIndex] = editReserve;
      },

      deleteReserveState(state, id) {
        const reserveIndex = state.reserveData.findIndex(reserve => reserve.id === parseInt(id));
        console.log("reserveIndex = " + reserveIndex);
        state.reserveData.splice(reserveIndex, 1);
      }

    },
    actions: {
      //ทำงานร่วมกับ backend เรียกใช้ผ่าน component
      async nuxtServerInit(vuexContext) {
        await vuexContext.dispatch('initNews');
        await vuexContext.dispatch('initPlaceOrder');
        await vuexContext.dispatch('initPlaceGroup');
        await vuexContext.dispatch('initZone');
      },

      async activeTab(vuexContext, tab) {
        debugger;
        vuexContext.commit("setActiveTabState", tab);
      },

      async initNews(vuexContext) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://service.candlesfest.com/api/news/find/all").then(res => {
          vuexContext.commit("setNewsState", res.data.news_list);
        }).catch(e => context.error(e));
      },

      async addNews(vuexContext, news) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch   
        const headers = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        const createNews = { ...news
        };
        var fullPathStr = ""; //อาจจะเก็บเป็น filename หรือ fullpath จริงๆ        

        let formData = new FormData();
        formData.append('topic', createNews.topic);
        formData.append('description1', createNews.description1);
        formData.append('description2', createNews.description2); //formData.append('image', createNews.image); 

        formData.append('author', createNews.author);

        for (var index = 0; index < createNews.image.length; index++) {
          formData.append('images[' + index + ']', createNews.image[index]); //ส่งไฟล์ไป

          if (index == 0) {
            fullPathStr = "https://service.candlesfest.com/api/news/" + createNews.image[index].name;
          } else {
            fullPathStr = fullPathStr + "," + "https://service.candlesfest.com/api/news/" + createNews.image[index].name; //สร้าง path ขึ้นมาไว้ set state
          }
        }

        createNews.image = fullPathStr;
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://service.candlesfest.com/api/news/create", formData, headers).then(res => {
          //setTimeout(() => {
          //$('#loading-modal').modal('hide');
          const data = res.data;

          if (data) {
            if (res.data.status_code == 200) {
              //toastr.info('บันทึกข้อมูลเรียบร้อยเเล้ว');
              vuexContext.commit("addNewsState", { ...createNews,
                id: res.data.news.id
              });
            } else {
              //toastr.error('ไม่สามารถบันทึกข้อมูลได้');
              console.log(res.data.message);
            }
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async editNews(vuexContext, news) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch 
        const headers = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        const editNews = { ...news
        };
        var fullPathStr = ""; //อาจจะเก็บเป็น filename หรือ fullpath จริงๆ        

        let formData = new FormData();
        formData.append('topic', editNews.topic);
        formData.append('description1', editNews.description1);
        formData.append('description2', editNews.description2); //formData.append('image', createNews.image);

        formData.append('author', editNews.author);

        for (var index = 0; index < editNews.image.length; index++) {
          formData.append('images[' + index + ']', editNews.image[index]); //ส่งไฟล์ไป

          if (index == 0) {
            fullPathStr = "https://service.candlesfest.com/api/news/" + editNews.image[index].name;
          } else {
            fullPathStr = fullPathStr + "," + "https://service.candlesfest.com/api/news/" + editNews.image[index].name; //สร้าง path ขึ้นมาไว้ set state
          }
        }

        if (fullPathStr && editNews.newImage) {
          editNews.image = editNews.newImage + "," + fullPathStr;
        } else if (fullPathStr && !editNews.newImage) {
          editNews.image = fullPathStr;
        } else if (!fullPathStr && editNews.newImage) {
          editNews.image = editNews.newImage;
        } else {
          editNews.image = "";
        }

        formData.append('newImage', editNews.image);
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("https://service.candlesfest.com/api/news/update/" + editNews.id, formData, headers).then(res => {
          //setTimeout(() => {
          //$('#loading-modal').modal('hide');
          const data = res.data;

          if (data) {
            if (res.data.status_code == 200) {
              //toastr.info('แก้ไขข้อมูลเรียบร้อยเเล้ว');
              vuexContext.commit("editNewsState", { ...data.news
              });
            } else {
              //toastr.error('ไม่สามารถแก้ไขข้อมูลได้');
              console.log(res.data.message);
            }
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async deleteNews(vuexContext, id) {
        console.log("03");
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("https://service.candlesfest.com/api/news/delete/" + id).then(res => {
          console.log("04"); //setTimeout(() => {   

          console.log("id = " + res.data.id);

          if (res.data.status_code == 200) {
            //$('#loading-modal').modal('hide'); 
            //toastr.info('ลบข้อมูลเรียบร้อยเเล้ว');
            vuexContext.commit("deleteNewsState", res.data.id);
          } else {
            //$('#loading-modal').modal('hide'); 
            //toastr.error('ไม่สามารถลบข้อมูลได้');
            console.log(res.data.message);
          } //}, 1000);

        }).catch(error => {
          console.log("05");
          console.log('error ', error);
        });
      },

      async initZone(vuexContext) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://service.candlesfest.com/api/zone/find/all/active").then(res => {
          vuexContext.commit("setZoneState", res.data.zone_list);
        }).catch(e => context.error(e));
      },

      async addZone(vuexContext, zone) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch  
        const createZone = { ...zone
        };
        var fullPathStr = ""; //อาจจะเก็บเป็น filename หรือ fullpath จริงๆ   

        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://service.candlesfest.com/api/zone/create", createZone).then(res => {
          //setTimeout(() => { 
          //$('#loading-modal').modal('hide');
          const data = res.data;

          if (data) {
            if (res.data.status_code == 200) {
              //toastr.info('บันทึกข้อมูลเรียบร้อยเเล้ว');
              vuexContext.commit("addZoneState", { ...createZone,
                id: res.data.zone.id
              });
            } else {
              //toastr.error('ไม่สามารถบันทึกข้อมูลได้');
              console.log(res.data.message);
            }
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async editZone(vuexContext, zone) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch  
        const editZone = { ...zone
        };
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("https://service.candlesfest.com/api/zone/update/" + editZone.id, editZone).then(res => {
          //setTimeout(() => {
          //$('#loading-modal').modal('hide'); 
          const data = res.data;

          if (data) {
            if (res.data.status_code == 200) {
              //info('แก้ไขข้อมูลเรียบร้อยเเล้ว');
              vuexContext.commit("editZoneState", { ...data.zone
              });
            } else {
              //toastr.error('ไม่สามารถแก้ไขข้อมูลได้');
              console.log(res.data.message);
            }
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async deleteZone(vuexContext, id) {
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("https://service.candlesfest.com/api/zone/delete/" + id).then(res => {
          //setTimeout(() => {   
          console.log("id = " + res.data.id);

          if (res.data.status_code == 200) {
            //$('#loading-modal').modal('hide'); 
            //toastr.info('ลบข้อมูลเรียบร้อยเเล้ว');
            vuexContext.commit("deleteZoneState", res.data.id);
          } else {
            //$('#loading-modal').modal('hide'); 
            //toastr.error('ไม่สามารถลบข้อมูลได้');
            console.log(res.data.message);
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async initPlaceGroup(vuexContext) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://service.candlesfest.com/api/placeGroup/find/all").then(res => {
          vuexContext.commit("setPlaceGroupState", res.data.place_group_list);
        }).catch(e => context.error(e));
      },

      async addPlaceGroup(vuexContext, placeGroup) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch  
        const createPlaceGroup = { ...placeGroup
        };
        var fullPathStr = ""; //อาจจะเก็บเป็น filename หรือ fullpath จริงๆ   

        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://service.candlesfest.com/api/placeGroup/create", createPlaceGroup).then(res => {
          //setTimeout(() => { 
          //$('#loading-modal').modal('hide');
          const data = res.data;

          if (data) {
            if (res.data.status_code == 200) {
              //toastr.info('บันทึกข้อมูลเรียบร้อยเเล้ว');
              vuexContext.commit("addPlaceGroupState", { ...createPlaceGroup,
                id: res.data.place_group.id
              });
            } else {
              //toastr.error('ไม่สามารถบันทึกข้อมูลได้');
              console.log(res.data.message);
            }
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async editPlaceGroup(vuexContext, placeGroup) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch  
        const editPlaceGroup = { ...placeGroup
        };
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("https://service.candlesfest.com/api/placeGroup/update/" + editPlaceGroup.id, editPlaceGroup).then(res => {
          //setTimeout(() => {
          //$('#loading-modal').modal('hide'); 
          const data = res.data;

          if (data) {
            if (res.data.status_code == 200) {
              //toastr.info('แก้ไขข้อมูลเรียบร้อยเเล้ว');
              vuexContext.commit("editPlaceGroupState", { ...data.place_group
              });
            } else {
              //toastr.error('ไม่สามารถแก้ไขข้อมูลได้');
              console.log(res.data.message);
            }
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async deletePlaceGroup(vuexContext, id) {
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("https://service.candlesfest.com/api/placeGroup/delete/" + id).then(res => {
          //setTimeout(() => {   
          console.log("id = " + res.data.id);

          if (res.data.status_code == 200) {
            //$('#loading-modal').modal('hide'); 
            //toastr.info('ลบข้อมูลเรียบร้อยเเล้ว');
            vuexContext.commit("deletePlaceGroupState", res.data.id);
          } else {
            //$('#loading-modal').modal('hide'); 
            //toastr.error('ไม่สามารถลบข้อมูลได้');
            console.log(res.data.message);
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async initPlace(vuexContext) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://service.candlesfest.com/api/place/find/all").then(res => {
          vuexContext.commit("setPlaceState", res.data.place_list);
        }).catch(e => context.error(e));
      },

      async initPlaceOrder(vuexContext) {
        //initial ลติจูด 15.117235 ลองติจูด 104.9006625 เป็น ม อุบล *ต้องเเก้ หาของปัจจุบัน
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://service.candlesfest.com/api/place/find/all/15.117235/104.9006625").then(res => {
          vuexContext.commit("setPlaceOrderState", res.data.place_list);
        }).catch(e => context.error(e));
      },

      async addPlace(vuexContext, place) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch  
        const headers = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        const createPlace = { ...place
        };
        var fullPathStr = ""; //อาจจะเก็บเป็น filename หรือ fullpath จริงๆ        

        let formData = new FormData();
        formData.append('group_id', createPlace.group_id);
        formData.append('topic', createPlace.topic);
        formData.append('address', createPlace.address);
        formData.append('description1', createPlace.description1);
        formData.append('description2', createPlace.description2);
        formData.append('latitude', createPlace.latitude);
        formData.append('longtitude', createPlace.longtitude); //formData.append('image', createPlace.image); 

        formData.append('author', createPlace.author);

        for (var index = 0; index < createPlace.image.length; index++) {
          formData.append('images[' + index + ']', createPlace.image[index]); //ส่งไฟล์ไป

          if (index == 0) {
            fullPathStr = "https://service.candlesfest.com/api/place/" + createPlace.image[index].name;
          } else {
            fullPathStr = fullPathStr + "," + "https://service.candlesfest.com/api/place/" + createPlace.image[index].name; //สร้าง path ขึ้นมาไว้ set state
          }
        }

        createPlace.image = fullPathStr;
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://service.candlesfest.com/api/place/create", formData, headers).then(res => {
          //setTimeout(() => {
          //$('#loading-modal').modal('hide');
          const data = res.data;

          if (data) {
            if (res.data.status_code == 200) {
              //toastr.info('บันทึกข้อมูลเรียบร้อยเเล้ว');
              vuexContext.commit("addPlaceState", res.data.place);
            } else {
              //toastr.error('ไม่สามารถบันทึกข้อมูลได้');
              console.log(res.data.message);
            }
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async editPlace(vuexContext, place) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch 
        const headers = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        const editPlace = { ...place
        };
        var fullPathStr = ""; //อาจจะเก็บเป็น filename หรือ fullpath จริงๆ        

        let formData = new FormData();
        formData.append('group_id', editPlace.group_id);
        formData.append('topic', editPlace.topic);
        formData.append('address', editPlace.address);
        formData.append('description1', editPlace.description1);
        formData.append('description2', editPlace.description2);
        formData.append('latitude', editPlace.latitude);
        formData.append('longtitude', editPlace.longtitude); //formData.append('image', editPlace.image);

        formData.append('author', editPlace.author);

        for (var index = 0; index < editPlace.image.length; index++) {
          formData.append('images[' + index + ']', editPlace.image[index]); //ส่งไฟล์ไป

          if (index == 0) {
            fullPathStr = "https://service.candlesfest.com/api/place/" + editPlace.image[index].name;
          } else {
            fullPathStr = fullPathStr + "," + "https://service.candlesfest.com/api/place/" + editPlace.image[index].name; //สร้าง path ขึ้นมาไว้ set state
          }
        }

        if (fullPathStr && editPlace.newImage) {
          editPlace.image = editPlace.newImage + "," + fullPathStr;
        } else if (fullPathStr && !editPlace.newImage) {
          editPlace.image = fullPathStr;
        } else if (!fullPathStr && editPlace.newImage) {
          editPlace.image = editPlace.newImage;
        } else {
          editPlace.image = "";
        }

        formData.append('newImage', editPlace.image);
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("https://service.candlesfest.com/api/place/update/" + editPlace.id, formData, headers).then(res => {
          //setTimeout(() => {
          //$('#loading-modal').modal('hide'); 
          const data = res.data;

          if (data) {
            if (res.data.status_code == 200) {
              //toastr.info('แก้ไขข้อมูลเรียบร้อยเเล้ว');
              vuexContext.commit("editPlaceState", { ...data.place
              });
            } else {
              //toastr.error('ไม่สามารถแก้ไขข้อมูลได้');
              console.log(res.data.message);
            }
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async deletePlace(vuexContext, id) {
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("https://service.candlesfest.com/api/place/delete/" + id).then(res => {
          //setTimeout(() => {   
          console.log("id = " + res.data.id);

          if (res.data.status_code == 200) {
            //$('#loading-modal').modal('hide'); 
            //toastr.info('ลบข้อมูลเรียบร้อยเเล้ว');
            vuexContext.commit("deletePlaceState", res.data.id);
          } else {
            //$('#loading-modal').modal('hide'); 
            //toastr.error('ไม่สามารถลบข้อมูลได้');
            console.log(res.data.message);
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async initReserve(vuexContext) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://service.candlesfest.com/api/reserve/find/all").then(res => {
          vuexContext.commit("setReserveState", res.data.reserve_list);
        }).catch(e => context.error(e));
      },

      async addReserve(vuexContext, reserve) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch  
        debugger;
        const createReserve = { ...reserve
        };
        var fullPathStr = ""; //อาจจะเก็บเป็น filename หรือ fullpath จริงๆ   

        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://service.candlesfest.com/api/reserve/create", createReserve).then(res => {
          //setTimeout(() => { 
          //$('#loading-modal').modal('hide');
          const data = res.data;
          debugger;

          if (data) {
            if (res.data.status_code == 200) {
              //toastr.info('บันทึกข้อมูลเรียบร้อยเเล้ว');
              vuexContext.commit("addReserveState", res.data.reserve);
            } else {
              //toastr.error('ไม่สามารถบันทึกข้อมูลได้');
              debugger;
              console.log(res.data.message);
            }
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async checkReserve(vuexContext, mobile) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://service.candlesfest.com/api/zone/find/reserve/" + mobile).then(res => {
          debugger;
          var reserve_list = res.data.reserve_list;
          vuexContext.commit("checkReserveState", reserve_list);
          console.log(res.data.reserve_list);
        }).catch(e => context.error(e));
      },

      async editReserve(vuexContext, reserve) {
        //รับค่าที่ส่งมาจากการใช้คำสั่ง dispatch  
        const editReserve = { ...reserve
        };
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("https://service.candlesfest.com/api/reserve/update/" + editReserve.id, editReserve).then(res => {
          //setTimeout(() => {
          //$('#loading-modal').modal('hide'); 
          const data = res.data;

          if (data) {
            if (res.data.status_code == 200) {
              //toastr.info('แก้ไขข้อมูลเรียบร้อยเเล้ว');
              vuexContext.commit("editReserveState", { ...data.reserve
              });
            } else {
              //toastr.error('ไม่สามารถแก้ไขข้อมูลได้');
              console.log(res.data.message);
            }
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      },

      async deleteReserve(vuexContext, id) {
        return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("https://service.candlesfest.com/api/reserve/delete/" + id).then(res => {
          //setTimeout(() => {    
          console.log("id = " + res.data.id);

          if (res.data.status_code == 200) {
            //$('#loading-modal').modal('hide'); 
            //toastr.info('ลบข้อมูลเรียบร้อยเเล้ว');
            vuexContext.commit("deleteReserveState", res.data.id);
          } else {
            //$('#loading-modal').modal('hide'); 
            //toastr.error('ไม่สามารถลบข้อมูลได้');
            console.log(res.data.message);
          } //}, 1000);

        }).catch(error => {
          console.log('error ', error);
        });
      }

    },
    getters: {
      //นำ state ไปใช้งาน 
      // showModal: state => {
      //     return state.showModal
      // },
      getTabActive(state) {
        return state.activeTab;
      },

      getAllNews(state) {
        return state.newsData;
      },

      getAllReserve(state) {
        return state.zoneData;
      },

      getAllPlaceGroup(state) {
        return state.placeGroupData;
      },

      getAllPlace(state) {
        return state.placeData;
      },

      getAllPlaceOrder(state) {
        return state.placeOrderData;
      },

      getAllReserve(state) {
        return state.reserveData;
      },

      getAllReserveChecking(state) {
        return state.reserveCheckingData;
      },

      getAllZone(state) {
        return state.zoneData;
      }

    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createStore);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by sindresorhus and can be seen here
// https://github.com/sindresorhus/lazy-value/blob/master/index.js

exports.default = function (fn) {
  var called = false;
  var ret = void 0;

  return function () {
    if (!called) {
      called = true;
      ret = fn();
    }

    return ret;
  };
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isApiSetUp = false;

/**
 * @param apiKey    API Key, or object with the URL parameters. For example
 *                  to use Google Maps Premium API, pass
 *                    `{ client: <YOUR-CLIENT-ID> }`.
 *                  You may pass the libraries and/or version (as `v`) parameter into
 *                  this parameter and skip the next two parameters
 * @param version   Google Maps version
 * @param libraries Libraries to load (@see
 *                  https://developers.google.com/maps/documentation/javascript/libraries)
 * @param loadCn    Boolean. If set to true, the map will be loaded from google maps China
 *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
 *
 * Example:
 * ```
 *      import {load} from 'vue-google-maps'
 *
 *      load(<YOUR-API-KEY>)
 *
 *      load({
 *              key: <YOUR-API-KEY>,
 *      })
 *
 *      load({
 *              client: <YOUR-CLIENT-ID>,
 *              channel: <YOUR CHANNEL>
 *      })
 * ```
 */
var loadGmapApi = exports.loadGmapApi = function (options, loadCn) {
  if (typeof document === 'undefined') {
    // Do nothing if run from server-side
    return;
  }
  if (!isApiSetUp) {
    isApiSetUp = true;

    var googleMapScript = document.createElement('SCRIPT');

    // Allow options to be an object.
    // This is to support more esoteric means of loading Google Maps,
    // such as Google for business
    // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      throw new Error('options should  be an object');
    }

    // libraries
    if (Array.prototype.isPrototypeOf(options.libraries)) {
      options.libraries = options.libraries.join(',');
    }
    options['callback'] = 'vueGoogleMapsInit';

    var baseUrl = 'https://maps.googleapis.com/';

    if (typeof loadCn === 'boolean' && loadCn === true) {
      baseUrl = 'https://maps.google.cn/';
    }

    var url = baseUrl + 'maps/api/js?' + Object.keys(options).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
    }).join('&');

    googleMapScript.setAttribute('src', url);
    googleMapScript.setAttribute('async', '');
    googleMapScript.setAttribute('defer', '');
    document.head.appendChild(googleMapScript);
  } else {
    throw new Error('You already started the loading of google maps');
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(4);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  animation: {
    twoWay: true,
    type: Number
  },
  attribution: {
    type: Object
  },
  clickable: {
    type: Boolean,
    twoWay: true,
    default: true
  },
  cursor: {
    type: String,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    twoWay: true,
    default: false
  },
  icon: {
    twoWay: true
  },
  label: {},
  opacity: {
    type: Number,
    default: 1
  },
  options: {
    type: Object
  },
  place: {
    type: Object
  },
  position: {
    type: Object,
    twoWay: true
  },
  shape: {
    type: Object,
    twoWay: true
  },
  title: {
    type: String,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  },
  visible: {
    twoWay: true,
    default: true
  }
};

var events = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseover', 'mouseout'];

/**
 * @class Marker
 *
 * Marker class with extra support for
 *
 * - Embedded info windows
 * - Clustered markers
 *
 * Support for clustered markers is for backward-compatability
 * reasons. Otherwise we should use a cluster-marker mixin or
 * subclass.
 */
exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'marker',
  ctr: function ctr() {
    return google.maps.Marker;
  },

  inject: {
    '$clusterPromise': {
      default: null
    }
  },

  render: function render(h) {
    if (!this.$slots.default || this.$slots.default.length === 0) {
      return '';
    } else if (this.$slots.default.length === 1) {
      // So that infowindows can have a marker parent
      return this.$slots.default[0];
    } else {
      return h('div', this.$slots.default);
    }
  },
  destroyed: function destroyed() {
    if (!this.$markerObject) {
      return;
    }

    if (this.$clusterObject) {
      // Repaint will be performed in `updated()` of cluster
      this.$clusterObject.removeMarker(this.$markerObject, true);
    } else {
      this.$markerObject.setMap(null);
    }
  },
  beforeCreate: function beforeCreate(options) {
    if (this.$clusterPromise) {
      options.map = null;
    }

    return this.$clusterPromise;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    if (this.$clusterPromise) {
      this.$clusterPromise.then(function (co) {
        co.addMarker(inst);
        _this.$clusterObject = co;
      });
    }
  }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__(4);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    twoWay: false,
    type: Object
  },
  path: {
    type: Array,
    twoWay: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,

  name: 'polyline',
  ctr: function ctr() {
    return google.maps.Polyline;
  },

  afterCreate: function afterCreate() {
    var _this = this;

    var clearEvents = function () {};

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        _this.$polylineObject.setPath(path);

        var mvcPath = _this.$polylineObject.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', _this.$polylineObject.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__(4);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    type: Object
  },
  path: {
    type: Array,
    twoWay: true,
    noBind: true
  },
  paths: {
    type: Array,
    twoWay: true,
    noBind: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,
  mappedProps: props,
  name: 'polygon',
  ctr: function ctr() {
    return google.maps.Polygon;
  },

  beforeCreate: function beforeCreate(options) {
    if (!options.path) delete options.path;
    if (!options.paths) delete options.paths;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    var clearEvents = function () {};

    // Watch paths, on our own, because we do not want to set either when it is
    // empty
    this.$watch('paths', function (paths) {
      if (paths) {
        clearEvents();

        inst.setPaths(paths);

        var updatePaths = function () {
          _this.$emit('paths_changed', inst.getPaths());
        };
        var eventListeners = [];

        var mvcArray = inst.getPaths();
        for (var i = 0; i < mvcArray.getLength(); i++) {
          var mvcPath = mvcArray.getAt(i);
          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);
        }
        eventListeners.push([mvcArray, mvcArray.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        inst.setPaths(path);

        var mvcPath = inst.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', inst.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                obj = _ref4[0],
                listenerHandle = _ref4[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(4);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    type: Object,
    twoWay: true,
    required: true
  },
  radius: {
    type: Number,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'circle',
  ctr: function ctr() {
    return google.maps.Circle;
  },
  events: events
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(4);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  bounds: {
    type: Object,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'rectangle',
  ctr: function ctr() {
    return google.maps.Rectangle;
  },
  events: events
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(4);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  options: {
    type: Object,
    required: false,
    default: function _default() {
      return {};
    }
  },
  position: {
    type: Object,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  }
};

var events = ['domready', 'closeclick', 'content_changed'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'infoWindow',
  ctr: function ctr() {
    return google.maps.InfoWindow;
  },
  props: {
    opened: {
      type: Boolean,
      default: true
    }
  },

  inject: {
    '$markerPromise': {
      default: null
    }
  },

  mounted: function mounted() {
    var el = this.$refs.flyaway;
    el.parentNode.removeChild(el);
  },
  beforeCreate: function beforeCreate(options) {
    var _this = this;

    options.content = this.$refs.flyaway;

    if (this.$markerPromise) {
      delete options.position;
      return this.$markerPromise.then(function (mo) {
        _this.$markerObject = mo;
        return mo;
      });
    }
  },


  methods: {
    _openInfoWindow: function _openInfoWindow() {
      if (this.opened) {
        if (this.$markerObject !== null) {
          this.$infoWindowObject.open(this.$map, this.$markerObject);
        } else {
          this.$infoWindowObject.open(this.$map);
        }
      } else {
        this.$infoWindowObject.close();
      }
    }
  },

  afterCreate: function afterCreate() {
    var _this2 = this;

    this._openInfoWindow();
    this.$watch('opened', function () {
      _this2._openInfoWindow();
    });
  }
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__(12);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(8);

var _mountableMixin = __webpack_require__(14);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__(26);

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__(13);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    required: true,
    twoWay: true,
    type: Object,
    noBind: true
  },
  zoom: {
    required: false,
    twoWay: true,
    type: Number,
    noBind: true
  },
  heading: {
    type: Number,
    twoWay: true
  },
  mapTypeId: {
    twoWay: true,
    type: String
  },
  tilt: {
    twoWay: true,
    type: Number
  },
  options: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['bounds_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'mousemove', 'mouseout', 'mouseover', 'resize', 'rightclick', 'tilesloaded'];

// Plain Google Maps methods exposed here for convenience
var linkedMethods = ['panBy', 'panTo', 'panToBounds', 'fitBounds'].reduce(function (all, methodName) {
  all[methodName] = function () {
    if (this.$mapObject) {
      this.$mapObject[methodName].apply(this.$mapObject, arguments);
    }
  };
  return all;
}, {});

// Other convenience methods exposed by Vue Google Maps
var customMethods = {
  resize: function resize() {
    if (this.$mapObject) {
      google.maps.event.trigger(this.$mapObject, 'resize');
    }
  },
  resizePreserveCenter: function resizePreserveCenter() {
    if (!this.$mapObject) {
      return;
    }

    var oldCenter = this.$mapObject.getCenter();
    google.maps.event.trigger(this.$mapObject, 'resize');
    this.$mapObject.setCenter(oldCenter);
  },


  /// Override mountableMixin::_resizeCallback
  /// because resizePreserveCenter is usually the
  /// expected behaviour
  _resizeCallback: function _resizeCallback() {
    this.resizePreserveCenter();
  }
};

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),

  provide: function provide() {
    var _this = this;

    this.$mapPromise = new Promise(function (resolve, reject) {
      _this.$mapPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$mapPromise': this.$mapPromise
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.center && typeof this.center.lat === 'function' ? this.center.lat() : this.center.lat;
    },
    finalLng: function finalLng() {
      return this.center && typeof this.center.lng === 'function' ? this.center.lng() : this.center.lng;
    },
    finalLatLng: function finalLatLng() {
      return { lat: this.finalLat, lng: this.finalLng };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$mapObject) {
        this.$mapObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-map'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;
      _this2.$mapObject = new google.maps.Map(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$mapObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$mapObject, events);

      // manually trigger center and zoom
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        _this2.$mapObject.addListener('center_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('center_changed', _this2.$mapObject.getCenter());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$mapObject.setCenter(_this2.finalLatLng);
        });
      });
      _this2.$mapObject.addListener('zoom_changed', function () {
        _this2.$emit('zoom_changed', _this2.$mapObject.getZoom());
      });
      _this2.$mapObject.addListener('bounds_changed', function () {
        _this2.$emit('bounds_changed', _this2.$mapObject.getBounds());
      });

      _this2.$mapPromiseDeferred.resolve(_this2.$mapObject);

      return _this2.$mapObject;
    }).catch(function (error) {
      throw error;
    });
  },

  methods: _extends({}, customMethods, linkedMethods)
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vue-map-container{position:relative}.vue-map-container .vue-map{left:0;right:0;top:0;bottom:0;position:absolute}.vue-map-hidden{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__(12);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(8);

var _mountableMixin = __webpack_require__(14);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__(26);

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__(13);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  zoom: {
    twoWay: true,
    type: Number
  },
  pov: {
    twoWay: true,
    type: Object,
    trackProperties: ['pitch', 'heading']
  },
  position: {
    twoWay: true,
    type: Object,
    noBind: true
  },
  pano: {
    twoWay: true,
    type: String
  },
  motionTracking: {
    twoWay: false,
    type: Boolean
  },
  visible: {
    twoWay: true,
    type: Boolean,
    default: true
  },
  options: {
    twoWay: false,
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['closeclick', 'status_changed'];

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),
  replace: false, // necessary for css styles
  methods: {
    resize: function resize() {
      if (this.$panoObject) {
        google.maps.event.trigger(this.$panoObject, 'resize');
      }
    }
  },

  provide: function provide() {
    var _this = this;

    var promise = new Promise(function (resolve, reject) {
      _this.$panoPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$panoPromise': promise,
      '$mapPromise': promise // so that we can use it with markers
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.position && typeof this.position.lat === 'function' ? this.position.lat() : this.position.lat;
    },
    finalLng: function finalLng() {
      return this.position && typeof this.position.lng === 'function' ? this.position.lng() : this.position.lng;
    },
    finalLatLng: function finalLatLng() {
      return {
        lat: this.finalLat,
        lng: this.finalLng
      };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$panoObject) {
        this.$panoObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-street-view-pano'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;

      _this2.$panoObject = new google.maps.StreetViewPanorama(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$panoObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$panoObject, events);

      // manually trigger position
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        // Panos take a while to load
        increment();

        _this2.$panoObject.addListener('position_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('position_changed', _this2.$panoObject.getPosition());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$panoObject.setPosition(_this2.finalLatLng);
        });
      });

      _this2.$panoPromiseDeferred.resolve(_this2.$panoObject);

      return _this2.$panoPromise;
    }).catch(function (error) {
      throw error;
    });
  }
};

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vue-street-view-pano-container{position:relative}.vue-street-view-pano-container .vue-street-view-pano{left:0;right:0;top:0;bottom:0;position:absolute}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeInput_vue_vue_type_template_id_13bfbbee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _placeInput_vue_vue_type_template_id_13bfbbee___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _placeInput_vue_vue_type_template_id_13bfbbee___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "21b38ac2"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindProps = __webpack_require__(8);

var _simulateArrowDown = __webpack_require__(29);

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

var _mapElementFactory = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mappedProps = {
  bounds: {
    type: Object
  },
  componentRestrictions: {
    type: Object,
    // Do not bind -- must check for undefined
    // in the property
    noBind: true
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  }
};

var props = {
  selectFirstOnEnter: {
    required: false,
    type: Boolean,
    default: false
  },
  options: {
    type: Object
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    this.$gmapApiPromiseLazy().then(function () {
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      /* eslint-disable no-unused-vars */
      var finalOptions = _extends({}, (0, _bindProps.getPropsValues)(_this, mappedProps), _this.options);

      _this.$autocomplete = new google.maps.places.Autocomplete(_this.$refs.input, finalOptions);
      (0, _bindProps.bindProps)(_this, _this.$autocomplete, mappedProps);

      _this.$watch('componentRestrictions', function (v) {
        if (v !== undefined) {
          _this.$autocomplete.setComponentRestrictions(v);
        }
      });

      // Not using `bindEvents` because we also want
      // to return the result of `getPlace()`
      _this.$autocomplete.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.$autocomplete.getPlace());
      });
    });
  },

  props: _extends({}, (0, _mapElementFactory.mappedPropsToVueProps)(mappedProps), props)
};

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(3);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(31);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(32);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(15);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(11);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(16);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _4f2d0dcd = () => interopDefault(__webpack_require__.e(/* import() | pages/login/index */ 20).then(__webpack_require__.bind(null, 129)));

const _08621acb = () => interopDefault(__webpack_require__.e(/* import() | pages/news/index */ 23).then(__webpack_require__.bind(null, 130)));

const _2caab8cc = () => interopDefault(__webpack_require__.e(/* import() | pages/reserve/index */ 25).then(__webpack_require__.bind(null, 131)));

const _4de59434 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/news/index */ 3).then(__webpack_require__.bind(null, 122)));

const _0b4a4926 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/place/index */ 6).then(__webpack_require__.bind(null, 123)));

const _26a4626f = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/placeGroup/index */ 9).then(__webpack_require__.bind(null, 124)));

const _48784591 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/reserve/index */ 12).then(__webpack_require__.bind(null, 125)));

const _eef3ac8a = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/zone/index */ 15).then(__webpack_require__.bind(null, 126)));

const _d2fd85ec = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/news/create */ 2).then(__webpack_require__.bind(null, 132)));

const _f499b350 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/place/create */ 5).then(__webpack_require__.bind(null, 133)));

const _54c793a2 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/placeGroup/create */ 8).then(__webpack_require__.bind(null, 134)));

const _23769166 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/reserve/create */ 11).then(__webpack_require__.bind(null, 135)));

const _a0194f3a = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/zone/create */ 14).then(__webpack_require__.bind(null, 136)));

const _ffe98d34 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/news/_id/index */ 1).then(__webpack_require__.bind(null, 137)));

const _466bcbb4 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/place/_id/index */ 4).then(__webpack_require__.bind(null, 138)));

const _590b180b = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/placeGroup/_id/index */ 7).then(__webpack_require__.bind(null, 139)));

const _0d9c4bae = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/reserve/_id/index */ 10).then(__webpack_require__.bind(null, 140)));

const _11de003f = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/zone/_id/index */ 13).then(__webpack_require__.bind(null, 141)));

const _0e879db0 = () => interopDefault(__webpack_require__.e(/* import() | pages/coffee/_id/index */ 16).then(__webpack_require__.bind(null, 142)));

const _e997768c = () => interopDefault(__webpack_require__.e(/* import() | pages/food/_id/index */ 17).then(__webpack_require__.bind(null, 143)));

const _3e44b3b8 = () => interopDefault(__webpack_require__.e(/* import() | pages/hotel/_id/index */ 18).then(__webpack_require__.bind(null, 144)));

const _8dc8c740 = () => interopDefault(__webpack_require__.e(/* import() | pages/map/_id/index */ 21).then(__webpack_require__.bind(null, 145)));

const _c3c38da2 = () => interopDefault(__webpack_require__.e(/* import() | pages/news/_id/index */ 22).then(__webpack_require__.bind(null, 127)));

const _2a8e75ea = () => interopDefault(__webpack_require__.e(/* import() | pages/place/_id/index */ 24).then(__webpack_require__.bind(null, 128)));

const _d2eb1714 = () => interopDefault(__webpack_require__.e(/* import() | pages/travel/_id/index */ 26).then(__webpack_require__.bind(null, 146)));

const _33469c04 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 19).then(__webpack_require__.bind(null, 147)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/login",
    component: _4f2d0dcd,
    name: "login"
  }, {
    path: "/news",
    component: _08621acb,
    name: "news"
  }, {
    path: "/reserve",
    component: _2caab8cc,
    name: "reserve"
  }, {
    path: "/admin/news",
    component: _4de59434,
    name: "admin-news"
  }, {
    path: "/admin/place",
    component: _0b4a4926,
    name: "admin-place"
  }, {
    path: "/admin/placeGroup",
    component: _26a4626f,
    name: "admin-placeGroup"
  }, {
    path: "/admin/reserve",
    component: _48784591,
    name: "admin-reserve"
  }, {
    path: "/admin/zone",
    component: _eef3ac8a,
    name: "admin-zone"
  }, {
    path: "/admin/news/create",
    component: _d2fd85ec,
    name: "admin-news-create"
  }, {
    path: "/admin/place/create",
    component: _f499b350,
    name: "admin-place-create"
  }, {
    path: "/admin/placeGroup/create",
    component: _54c793a2,
    name: "admin-placeGroup-create"
  }, {
    path: "/admin/reserve/create",
    component: _23769166,
    name: "admin-reserve-create"
  }, {
    path: "/admin/zone/create",
    component: _a0194f3a,
    name: "admin-zone-create"
  }, {
    path: "/admin/news/:id",
    component: _ffe98d34,
    name: "admin-news-id"
  }, {
    path: "/admin/place/:id",
    component: _466bcbb4,
    name: "admin-place-id"
  }, {
    path: "/admin/placeGroup/:id",
    component: _590b180b,
    name: "admin-placeGroup-id"
  }, {
    path: "/admin/reserve/:id",
    component: _0d9c4bae,
    name: "admin-reserve-id"
  }, {
    path: "/admin/zone/:id",
    component: _11de003f,
    name: "admin-zone-id"
  }, {
    path: "/coffee/:id",
    component: _0e879db0,
    name: "coffee-id"
  }, {
    path: "/food/:id",
    component: _e997768c,
    name: "food-id"
  }, {
    path: "/hotel/:id",
    component: _3e44b3b8,
    name: "hotel-id"
  }, {
    path: "/map/:id",
    component: _8dc8c740,
    name: "map-id"
  }, {
    path: "/news/:id",
    component: _c3c38da2,
    name: "news-id"
  }, {
    path: "/place/:id",
    component: _2a8e75ea,
    name: "place-id"
  }, {
    path: "/travel/:id",
    component: _d2eb1714,
    name: "travel-id"
  }, {
    path: "/",
    component: _33469c04,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e124c906"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "3e68a51e"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/adminLayout.vue?vue&type=template&id=32498b10&
var adminLayoutvue_type_template_id_32498b10_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"loading-modal\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\"><div role=\"document\" class=\"modal-dialog modal-dialog-centered justify-content-center\"><span class=\"fas fa-cog fa-spin fa-3x\"></span></div></div> "),_c('NavBar'),_vm._ssrNode(" "),_c('SideBar'),_vm._ssrNode(" "),_c('nuxt',{staticClass:"content-wrapper"}),_vm._ssrNode(" "),_c('Footer')],2)}
var adminLayoutvue_type_template_id_32498b10_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/adminLayout.vue?vue&type=template&id=32498b10&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/layout/NavBar.vue?vue&type=template&id=e0706544&scoped=true&
var NavBarvue_type_template_id_e0706544_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"main-header navbar navbar-expand navbar-white navbar-light"},[_vm._ssrNode("<ul class=\"navbar-nav\" data-v-e0706544><li class=\"nav-item\" data-v-e0706544><a data-widget=\"pushmenu\" href=\"#\" class=\"nav-link\" data-v-e0706544><i class=\"fas fa-bars\" data-v-e0706544></i></a></li></ul> <ul class=\"navbar-nav ml-auto\" data-v-e0706544><li class=\"nav-item\" data-v-e0706544><a class=\"nav-link\" data-v-e0706544><i title=\"ออกจากระบบ\" class=\"fas fa-sign-out-alt\" data-v-e0706544></i></a></li></ul>")])}
var NavBarvue_type_template_id_e0706544_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/layout/NavBar.vue?vue&type=template&id=e0706544&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/layout/NavBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NavBarvue_type_script_lang_js_ = ({
  data() {
    return {
      user: this.$auth.user,
      loggedIn: this.$auth.loggedIn
    };
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push('/login');
    }

  }
});
// CONCATENATED MODULE: ./components/pages/layout/NavBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_NavBarvue_type_script_lang_js_ = (NavBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/pages/layout/NavBar.vue



function NavBar_injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var NavBar_component = Object(componentNormalizer["a" /* default */])(
  layout_NavBarvue_type_script_lang_js_,
  NavBarvue_type_template_id_e0706544_scoped_true_render,
  NavBarvue_type_template_id_e0706544_scoped_true_staticRenderFns,
  false,
  NavBar_injectStyles,
  "e0706544",
  "93c942a0"
  
)

/* harmony default export */ var NavBar = (NavBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/layout/SideBar.vue?vue&type=template&id=434fb580&scoped=true&
var SideBarvue_type_template_id_434fb580_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"main-sidebar sidebar-light-cyan elevation-4"},[_vm._ssrNode("<div class=\"sidebar\" data-v-434fb580>","</div>",[_vm._ssrNode("<a href=\"/admin/news\" class=\"brand-link\" data-v-434fb580><img src=\"/dist/img/AdminLTELogo.png\" alt=\"AdminLTE Logo\" class=\"brand-image img-circle elevation-3\" style=\"opacity: .8\" data-v-434fb580> <span class=\"brand-text font-weight-light\" data-v-434fb580>ผู้ดูเเลระบบ</span></a> "),_vm._ssrNode("<nav class=\"mt-2\" data-v-434fb580>","</nav>",[_vm._ssrNode("<ul data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\" class=\"nav nav-pills nav-sidebar flex-column\" data-v-434fb580>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-434fb580>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/admin/news"}},[_c('i',{staticClass:"nav-icon far fa-list-alt"}),_vm._v(" "),_c('p',[_vm._v("\n              ข่าวสาร\n            ")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-434fb580>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/admin/placeGroup"}},[_c('i',{staticClass:"nav-icon fas fa-object-group"}),_vm._v(" "),_c('p',[_vm._v("\n              กลุ่มสถานที่\n            ")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-434fb580>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/admin/place"}},[_c('i',{staticClass:"nav-icon far fa-paper-plane"}),_vm._v(" "),_c('p',[_vm._v("\n              สถานที่\n            ")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-434fb580>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/admin/zone"}},[_c('i',{staticClass:"nav-icon fas fa-th"}),_vm._v(" "),_c('p',[_vm._v("\n              โซน\n            ")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-434fb580>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/admin/reserve"}},[_c('i',{staticClass:"nav-icon fas fa-marker"}),_vm._v(" "),_c('p',[_vm._v("\n              รายการจอง\n            ")])])],1)],2)])],2)])}
var SideBarvue_type_template_id_434fb580_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/layout/SideBar.vue?vue&type=template&id=434fb580&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/layout/SideBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SideBarvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/pages/layout/SideBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_SideBarvue_type_script_lang_js_ = (SideBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/pages/layout/SideBar.vue



function SideBar_injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SideBar_component = Object(componentNormalizer["a" /* default */])(
  layout_SideBarvue_type_script_lang_js_,
  SideBarvue_type_template_id_434fb580_scoped_true_render,
  SideBarvue_type_template_id_434fb580_scoped_true_staticRenderFns,
  false,
  SideBar_injectStyles,
  "434fb580",
  "447266a8"
  
)

/* harmony default export */ var SideBar = (SideBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pages/layout/Footer.vue?vue&type=template&id=6e23e9b5&
var Footervue_type_template_id_6e23e9b5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"main-footer"},[_vm._ssrNode("<strong>Copyright © 2020\n    <a href=\"https://candle.digiadwise.com\">https://candle.digiadwise.com</a>.</strong>\n  All rights reserved.\n  <div class=\"float-right d-none d-sm-inline-block\"><b>Version</b> 1.0.1\n  </div>")])}
var Footervue_type_template_id_6e23e9b5_staticRenderFns = []


// CONCATENATED MODULE: ./components/pages/layout/Footer.vue?vue&type=template&id=6e23e9b5&

// CONCATENATED MODULE: ./components/pages/layout/Footer.vue

var script = {}


/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  script,
  Footervue_type_template_id_6e23e9b5_render,
  Footervue_type_template_id_6e23e9b5_staticRenderFns,
  false,
  null,
  null,
  "979eba4a"
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/adminLayout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var adminLayoutvue_type_script_lang_js_ = ({
  middleware: 'auth',
  components: {
    NavBar: NavBar,
    SideBar: SideBar,
    Footer: Footer
  },
  computed: {
    showModal() {
      const isShowModal = this.$store.state.showModal;
      return isShowModal;
    }

  }
});
// CONCATENATED MODULE: ./layouts/adminLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_adminLayoutvue_type_script_lang_js_ = (adminLayoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/adminLayout.vue





/* normalize component */

var adminLayout_component = Object(componentNormalizer["a" /* default */])(
  layouts_adminLayoutvue_type_script_lang_js_,
  adminLayoutvue_type_template_id_32498b10_render,
  adminLayoutvue_type_template_id_32498b10_staticRenderFns,
  false,
  null,
  null,
  "0d7379aa"
  
)

/* harmony default export */ var adminLayout = (adminLayout_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/coreLayout.vue?vue&type=template&id=eb07ea34&
var coreLayoutvue_type_template_id_eb07ea34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"loading-modal\" tabindex=\"-1\" role=\"dialog\" class=\"modal fade\"><div role=\"document\" class=\"modal-dialog modal-dialog-centered justify-content-center\"><span class=\"fas fa-cog fa-spin fa-3x\"></span></div></div> "),_c('nuxt')],2)}
var coreLayoutvue_type_template_id_eb07ea34_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/coreLayout.vue?vue&type=template&id=eb07ea34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/coreLayout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var coreLayoutvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/coreLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_coreLayoutvue_type_script_lang_js_ = (coreLayoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/coreLayout.vue





/* normalize component */

var coreLayout_component = Object(componentNormalizer["a" /* default */])(
  layouts_coreLayoutvue_type_script_lang_js_,
  coreLayoutvue_type_template_id_eb07ea34_render,
  coreLayoutvue_type_template_id_eb07ea34_staticRenderFns,
  false,
  null,
  null,
  "c0db7330"
  
)

/* harmony default export */ var coreLayout = (coreLayout_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=d47250f2&
var defaultvue_type_template_id_d47250f2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nuxt')],1)}
var defaultvue_type_template_id_d47250f2_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=d47250f2&

// CONCATENATED MODULE: ./layouts/default.vue

var default_script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  default_script,
  defaultvue_type_template_id_d47250f2_render,
  defaultvue_type_template_id_d47250f2_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "68cead12"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_adminLayout": sanitizeComponent(adminLayout),
  "_coreLayout": sanitizeComponent(coreLayout),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(47), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(24);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(33);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'https://service.candlesfest.com/api/authen'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "vue-lazyload"
var external_vue_lazyload_ = __webpack_require__(34);
var external_vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_vue_lazyload_);

// CONCATENATED MODULE: ./plugins/vue-lazyload.js


external_vue_default.a.use(external_vue_lazyload_default.a);
// EXTERNAL MODULE: ./node_modules/vue2-google-maps/dist/main.js
var main = __webpack_require__(35);

// EXTERNAL MODULE: ./assets/js/credentials.js
var credentials = __webpack_require__(30);

// CONCATENATED MODULE: ./plugins/vue2-google-maps.js



external_vue_default.a.use(main, {
  load: {
    key: credentials["a" /* default */].gmap_key
  }
});
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(17);

// CONCATENATED MODULE: ./.nuxt/auth/utilities.js
const isUnset = o => typeof o === 'undefined' || o === null;
const isSet = o => !isUnset(o);
const isSameURL = (a, b) => a.split('?')[0].replace(/\/+$/, '') === b.split('?')[0].replace(/\/+$/, '');
const isRelativeURL = u => u && u.length && /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u);
const parseQuery = queryString => {
  const query = {};
  const pairs = queryString.split('&');

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query;
};
const encodeQuery = queryObject => {
  return Object.entries(queryObject).filter(([key, value]) => typeof value !== 'undefined').map(([key, value]) => encodeURIComponent(key) + (value != null ? '=' + encodeURIComponent(value) : '')).join('&');
};
const routeOption = (route, key, value) => {
  return route.matched.some(m => {
    if (false) {} else {
      // SSR
      return Object.values(m.components).some(component => Object.values(component._Ctor).some(ctor => ctor.options && ctor.options[key] === value));
    }
  });
};
const utilities_getMatchedComponents = (route, matches = false) => {
  return [].concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).map(function (key) {
      matches && matches.push(index);
      return m.components[key];
    });
  }));
};
function normalizePath(path = '') {
  // Remove query string
  let result = path.split('?')[0]; // Remove redundant / from the end of path

  if (result.charAt(result.length - 1) === '/') {
    result = result.slice(0, -1);
  }

  return result;
}
function encodeValue(val) {
  if (typeof val === 'string') {
    return val;
  }

  return JSON.stringify(val);
}
function decodeValue(val) {
  // Try to parse as json
  if (typeof val === 'string') {
    try {
      return JSON.parse(val);
    } catch (_) {}
  } // Return as is


  return val;
}
/**
 * Get property defined by dot notation in string.
 * Based on  https://github.com/dy/dotprop (MIT)
 *
 * @param  {Object} holder   Target object where to look property up
 * @param  {string} propName Dot notation, like 'this.a.b.c'
 * @return {*}          A property value
 */

function getProp(holder, propName) {
  if (!propName || !holder) {
    return holder;
  }

  if (propName in holder) {
    return holder[propName];
  }

  const propParts = Array.isArray(propName) ? propName : (propName + '').split('.');
  let result = holder;

  while (propParts.length && result) {
    result = result[propParts.shift()];
  }

  return result;
}
// CONCATENATED MODULE: ./.nuxt/auth/storage.js



class storage_Storage {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;

    this._initState();
  } // ------------------------------------
  // Universal
  // ------------------------------------


  setUniversal(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeUniversal(key);
    } // Local state


    this.setState(key, value); // Cookies

    this.setCookie(key, value); // Local Storage

    this.setLocalStorage(key, value);
    return value;
  }

  getUniversal(key) {
    // Local state
    let value = this.getState(key); // Cookies

    if (isUnset(value)) {
      value = this.getCookie(key);
    } // Local Storage


    if (isUnset(value)) {
      value = this.getLocalStorage(key);
    }

    return value;
  }

  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);

    if (isUnset(value) && isSet(defaultValue)) {
      value = defaultValue;
    }

    if (isSet(value)) {
      this.setUniversal(key, value);
    }

    return value;
  }

  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  } // ------------------------------------
  // Local state (reactive)
  // ------------------------------------


  _initState() {
    // Private state is suitable to keep information not being exposed to Vuex store
    // This helps prevent stealing token from SSR response HTML
    external_vue_default.a.set(this, '_state', {}); // Use vuex for local state's if possible

    this._useVuex = this.options.vuex && this.ctx.store;

    if (this._useVuex) {
      const storeModule = {
        namespaced: true,
        state: () => this.options.initialState,
        mutations: {
          SET(state, payload) {
            external_vue_default.a.set(state, payload.key, payload.value);
          }

        }
      };
      this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
      });
      this.state = this.ctx.store.state[this.options.vuex.namespace];
    } else {
      external_vue_default.a.set(this, 'state', {});
    }
  }

  setState(key, value) {
    if (key[0] === '_') {
      external_vue_default.a.set(this._state, key, value);
    } else {
      if (this._useVuex) {
        this.ctx.store.commit(this.options.vuex.namespace + '/SET', {
          key,
          value
        });
      } else {
        external_vue_default.a.set(this.state, key, value);
      }
    }

    return value;
  }

  getState(key) {
    if (key[0] !== '_') {
      return this.state[key];
    } else {
      return this._state[key];
    }
  }

  watchState(key, fn) {
    if (this._useVuex) {
      return this.ctx.store.watch(state => getProp(state[this.options.vuex.namespace], key), fn);
    }
  }

  removeState(key) {
    this.setState(key, undefined);
  } // ------------------------------------
  // Local storage
  // ------------------------------------


  setLocalStorage(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }

    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }

    return value;
  }

  getLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    const value = localStorage.getItem(_key);
    return decodeValue(value);
  }

  removeLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    localStorage.removeItem(_key);
  } // ------------------------------------
  // Cookies
  // ------------------------------------


  getCookies() {
    const cookieStr =  false ? undefined : this.ctx.req.headers.cookie;
    return Object(external_cookie_["parse"])(cookieStr || '') || {};
  }

  setCookie(key, value, options = {}) {
    if (!this.options.cookie ||  true && !this.ctx.res) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const _options = Object.assign({}, this.options.cookie.options, options);

    const _value = encodeValue(value); // Unset null, undefined


    if (isUnset(value)) {
      _options.maxAge = -1;
    } // Accept expires as a number for js-cookie compatiblity


    if (typeof _options.expires === 'number') {
      _options.expires = new Date(new Date() * 1 + _options.expires * 864e+5);
    }

    const serializedCookie = Object(external_cookie_["serialize"])(_key, _value, _options);

    if (false) {} else if ( true && this.ctx.res) {
      // Send Set-Cookie header from server side
      const prevCookies = this.ctx.res.getHeader('Set-Cookie');
      this.ctx.res.setHeader('Set-Cookie', [].concat(prevCookies, serializedCookie).filter(v => v));
    }

    return value;
  }

  getCookie(key) {
    if (!this.options.cookie ||  true && !this.ctx.req) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const cookies = this.getCookies();
    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : undefined;
    return decodeValue(value);
  }

  removeCookie(key, options) {
    this.setCookie(key, undefined, options);
  }

}
// CONCATENATED MODULE: ./.nuxt/auth/auth.js


class auth_Auth {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options; // Strategies

    this.strategies = {}; // Error listeners

    this._errorListeners = []; // Redirect listeners

    this._redirectListeners = []; // Storage & State

    options.initialState = {
      user: null,
      loggedIn: false
    };
    const storage = new storage_Storage(ctx, options);
    this.$storage = storage;
    this.$state = storage.state;
  }

  async init() {
    // Reset on error
    if (this.options.resetOnError) {
      this.onError((...args) => {
        if (typeof this.options.resetOnError !== 'function' || this.options.resetOnError(...args)) {
          this.reset();
        }
      });
    } // Restore strategy


    this.$storage.syncUniversal('strategy', this.options.defaultStrategy); // Set default strategy if current one is invalid

    if (!this.strategy) {
      this.$storage.setUniversal('strategy', this.options.defaultStrategy); // Give up if still invalid

      if (!this.strategy) {
        return Promise.resolve();
      }
    }

    try {
      // Call mounted for active strategy on initial load
      await this.mounted();
    } catch (error) {
      this.callOnError(error);
    } finally {
      // Watch for loggedIn changes only in client side
      if (false) {}
    }
  } // Backward compatibility


  get state() {
    if (!this._state_warn_shown) {
      this._state_warn_shown = true; // eslint-disable-next-line no-console

      console.warn('[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn');
    }

    return this.$state;
  }

  getState(key) {
    if (!this._get_state_warn_shown) {
      this._get_state_warn_shown = true; // eslint-disable-next-line no-console

      console.warn('[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn');
    }

    return this.$storage.getState(key);
  } // ---------------------------------------------------------------
  // Strategy and Scheme
  // ---------------------------------------------------------------


  get strategy() {
    return this.strategies[this.$state.strategy];
  }

  registerStrategy(name, strategy) {
    this.strategies[name] = strategy;
  }

  setStrategy(name) {
    if (name === this.$storage.getUniversal('strategy')) {
      return Promise.resolve();
    } // Set strategy


    this.$storage.setUniversal('strategy', name); // Call mounted hook on active strategy

    return this.mounted();
  }

  mounted() {
    if (!this.strategy.mounted) {
      return this.fetchUserOnce();
    }

    return Promise.resolve(this.strategy.mounted(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'mounted'
      });
      return Promise.reject(error);
    });
  }

  loginWith(name, ...args) {
    return this.setStrategy(name).then(() => this.login(...args));
  }

  login() {
    if (!this.strategy.login) {
      return Promise.resolve();
    }

    return this.wrapLogin(this.strategy.login(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'login'
      });
      return Promise.reject(error);
    });
  }

  fetchUser() {
    if (!this.strategy.fetchUser) {
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.fetchUser(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'fetchUser'
      });
      return Promise.reject(error);
    });
  }

  logout() {
    if (!this.strategy.logout) {
      this.reset();
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.logout(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'logout'
      });
      return Promise.reject(error);
    });
  }

  setUserToken(token) {
    if (!this.strategy.setUserToken) {
      this.setToken(this.strategy.name, token);
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.setUserToken(token)).catch(error => {
      this.callOnError(error, {
        method: 'setUserToken'
      });
      return Promise.reject(error);
    });
  }

  reset() {
    if (!this.strategy.reset) {
      this.setUser(false);
      this.setToken(this.$state.strategy, false);
      this.setRefreshToken(this.$state.strategy, false);
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.reset(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'reset'
      });
      return Promise.reject(error);
    });
  } // ---------------------------------------------------------------
  // Token helpers
  // ---------------------------------------------------------------


  getToken(strategy) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.getUniversal(_key);
  }

  setToken(strategy, token) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.setUniversal(_key, token);
  }

  syncToken(strategy) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.syncUniversal(_key);
  } // ---------------------------------------------------------------
  // Refresh token helpers
  // ---------------------------------------------------------------


  getRefreshToken(strategy) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.getUniversal(_key);
  }

  setRefreshToken(strategy, refreshToken) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.setUniversal(_key, refreshToken);
  }

  syncRefreshToken(strategy) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.syncUniversal(_key);
  } // ---------------------------------------------------------------
  // User helpers
  // ---------------------------------------------------------------


  get user() {
    return this.$state.user;
  }

  get loggedIn() {
    return this.$state.loggedIn;
  }

  fetchUserOnce() {
    if (!this.$state.user) {
      return this.fetchUser(...arguments);
    }

    return Promise.resolve();
  }

  setUser(user) {
    this.$storage.setState('user', user);
    this.$storage.setState('loggedIn', Boolean(user));
  } // ---------------------------------------------------------------
  // Utils
  // ---------------------------------------------------------------


  get busy() {
    return this.$storage.getState('busy');
  }

  request(endpoint, defaults, withResponse) {
    const _endpoint = typeof defaults === 'object' ? Object.assign({}, defaults, endpoint) : endpoint;

    if (!this.ctx.app.$axios) {
      // eslint-disable-next-line no-console
      console.error('[AUTH] add the @nuxtjs/axios module to nuxt.config file');
      return;
    }

    return this.ctx.app.$axios.request(_endpoint).then(response => {
      const result = _endpoint.propertyName ? getProp(response.data, _endpoint.propertyName) : response.data;

      if (withResponse) {
        return {
          response,
          result
        };
      } else {
        return result;
      }
    }).catch(error => {
      // Call all error handlers
      this.callOnError(error, {
        method: 'request'
      }); // Throw error

      return Promise.reject(error);
    });
  }

  requestWith(strategy, endpoint, defaults, withResponse) {
    const token = this.getToken(strategy);

    const _endpoint = Object.assign({}, defaults, endpoint);

    const tokenName = this.strategies[strategy].options.tokenName || 'Authorization';

    if (!_endpoint.headers) {
      _endpoint.headers = {};
    }

    if (!_endpoint.headers[tokenName] && isSet(token) && token) {
      _endpoint.headers[tokenName] = token;
    }

    return this.request(_endpoint, false, withResponse);
  }

  wrapLogin(promise) {
    this.$storage.setState('busy', true);
    this.error = null;
    return Promise.resolve(promise).then(response => {
      this.$storage.setState('busy', false);
      return response;
    }).catch(error => {
      this.$storage.setState('busy', false);
      return Promise.reject(error);
    });
  }

  onError(listener) {
    this._errorListeners.push(listener);
  }

  callOnError(error, payload = {}) {
    this.error = error;

    for (const fn of this._errorListeners) {
      fn(error, payload);
    }
  }

  redirect(name, noRouter = false) {
    if (!this.options.redirect) {
      return;
    }

    const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
    let to = this.options.redirect[name];

    if (!to) {
      return;
    } // Apply rewrites


    if (this.options.rewriteRedirects) {
      if (name === 'login' && isRelativeURL(from) && !isSameURL(to, from)) {
        this.$storage.setUniversal('redirect', from);
      }

      if (name === 'home') {
        const redirect = this.$storage.getUniversal('redirect');
        this.$storage.setUniversal('redirect', null);

        if (isRelativeURL(redirect)) {
          to = redirect;
        }
      }
    } // Call onRedirect hook


    to = this.callOnRedirect(to, from) || to; // Prevent infinity redirects

    if (isSameURL(to, from)) {
      return;
    }

    if (false) {} else {
      this.ctx.redirect(to, this.ctx.query);
    }
  }

  onRedirect(listener) {
    this._redirectListeners.push(listener);
  }

  callOnRedirect(to, from) {
    for (const fn of this._redirectListeners) {
      to = fn(to, from) || to;
    }

    return to;
  }

  hasScope(scope) {
    const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);

    if (!userScopes) {
      return false;
    }

    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }

    return Boolean(getProp(userScopes, scope));
  }

}
// CONCATENATED MODULE: ./.nuxt/auth/middleware.js



_nuxt_middleware.auth = function (ctx) {
  // Disable middleware if options: { auth: false } is set on the route
  if (routeOption(ctx.route, 'auth', false)) {
    return;
  } // Disable middleware if no route was matched to allow 404/error page


  const matches = [];
  const Components = utilities_getMatchedComponents(ctx.route, matches);

  if (!Components.length) {
    return;
  }

  const {
    login,
    callback
  } = ctx.$auth.options.redirect;
  const pageIsInGuestMode = routeOption(ctx.route, 'auth', 'guest');

  const insidePage = page => normalizePath(ctx.route.path) === normalizePath(page);

  if (ctx.$auth.$state.loggedIn) {
    // -- Authorized --
    if (!login || insidePage(login) || pageIsInGuestMode) {
      ctx.$auth.redirect('home');
    }
  } else {
    // -- Guest --
    // (Those passing `callback` at runtime need to mark their callback component
    // with `auth: false` to avoid an unnecessary redirect from callback to login)
    if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
      ctx.$auth.redirect('login');
    }
  }
};
// CONCATENATED MODULE: ./.nuxt/auth/schemes/local.js
class LocalScheme {
  constructor(auth, options) {
    this.$auth = auth;
    this.name = options._name;
    this.options = Object.assign({}, DEFAULTS, options);
  }

  _setToken(token) {
    if (this.options.globalToken) {
      // Set Authorization token for all axios requests
      this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, token);
    }
  }

  _clearToken() {
    if (this.options.globalToken) {
      // Clear Authorization token for all axios requests
      this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, false);
    }
  }

  mounted() {
    if (this.options.tokenRequired) {
      const token = this.$auth.syncToken(this.name);

      this._setToken(token);
    }

    return this.$auth.fetchUserOnce();
  }

  async login(endpoint) {
    if (!this.options.endpoints.login) {
      return;
    } // Ditch any leftover local tokens before attempting to log in


    await this.$auth.reset();
    const {
      response,
      result
    } = await this.$auth.request(endpoint, this.options.endpoints.login, true);

    if (this.options.tokenRequired) {
      const token = this.options.tokenType ? this.options.tokenType + ' ' + result : result;
      this.$auth.setToken(this.name, token);

      this._setToken(token);
    }

    if (this.options.autoFetchUser) {
      await this.fetchUser();
    }

    return response;
  }

  async setUserToken(tokenValue) {
    const token = this.options.tokenType ? this.options.tokenType + ' ' + tokenValue : tokenValue;
    this.$auth.setToken(this.name, token);

    this._setToken(token);

    return this.fetchUser();
  }

  async fetchUser(endpoint) {
    // Token is required but not available
    if (this.options.tokenRequired && !this.$auth.getToken(this.name)) {
      return;
    } // User endpoint is disabled.


    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return;
    } // Try to fetch user and then set


    const user = await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user);
    this.$auth.setUser(user);
  }

  async logout(endpoint) {
    // Only connect to logout endpoint if it's configured
    if (this.options.endpoints.logout) {
      await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.logout).catch(() => {});
    } // But reset regardless


    return this.$auth.reset();
  }

  async reset() {
    if (this.options.tokenRequired) {
      this._clearToken();
    }

    this.$auth.setUser(false);
    this.$auth.setToken(this.name, false);
    this.$auth.setRefreshToken(this.name, false);
    return Promise.resolve();
  }

}
const DEFAULTS = {
  tokenRequired: true,
  tokenType: 'Bearer',
  globalToken: true,
  tokenName: 'Authorization',
  autoFetchUser: true
};
// CONCATENATED MODULE: ./.nuxt/auth/plugin.js

 // Active schemes


/* harmony default export */ var auth_plugin = (function (ctx, inject) {
  // Options
  const options = {
    "resetOnError": false,
    "scopeKey": "scope",
    "rewriteRedirects": true,
    "fullPathRedirect": false,
    "watchLoggedIn": true,
    "redirect": {
      "login": "/login",
      "logout": "/",
      "home": "/",
      "callback": "/login"
    },
    "vuex": {
      "namespace": "auth"
    },
    "cookie": {
      "prefix": "auth.",
      "options": {
        "path": "/"
      }
    },
    "localStorage": {
      "prefix": "auth."
    },
    "token": {
      "prefix": "_token."
    },
    "refresh_token": {
      "prefix": "_refresh_token."
    },
    "defaultStrategy": "local"
  }; // Create a new Auth instance

  const $auth = new auth_Auth(ctx, options); // Register strategies
  // local

  $auth.registerStrategy('local', new LocalScheme($auth, {
    "endpoints": {
      "login": {
        "url": "login",
        "method": "post",
        "propertyName": "data.token"
      },
      "logout": false,
      "user": {
        "url": "me",
        "method": "get",
        "propertyName": "data.user"
      }
    },
    "_name": "local"
  })); // Inject it to nuxt context as $auth

  inject('auth', $auth);
  ctx.$auth = $auth; // Initialize auth

  return $auth.init().catch(error => {
    if (false) {}
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\workbox.js (mode: 'client')

 // Source: .\\axios.js (mode: 'all')

 // Source: ..\\plugins\\vue-lazyload (mode: 'all')

 // Source: ..\\plugins\\lazysizes.client.js (mode: 'client')

 // Source: ..\\plugins\\vue2-google-maps.js (mode: 'all')

 // Source: .\\auth\\plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "แห่เทียนเข้าพรรษา",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "candlesfest.com"
      }],
      "link": [{
        "rel": "stylesheet",
        "href": "\u002Fbase\u002Fcss\u002Fbootstrap.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fbase\u002Fcss\u002Fpogo-slider.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fbase\u002Fcss\u002Fstyle.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fbase\u002Fcss\u002Fresponsive.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fbase\u002Fcss\u002Fcustom.css"
      }, {
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fplugins\u002Ffontawesome-free\u002Fcss\u002Fall.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fdist\u002Fcss\u002Fadminlte.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fplugins\u002Fsummernote\u002Fsummernote-bs4.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fplugins\u002Fdatatables-bs4\u002Fcss\u002FdataTables.bootstrap4.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fplugins\u002Ftoastr\u002Ftoastr.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fplugins\u002Fselect2\u002Fcss\u002Fselect2.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fplugins\u002Fselect2-bootstrap4-theme\u002Fselect2-bootstrap4.min.css"
      }],
      "script": [{
        "src": "\u002Fbase\u002Fjs\u002Fjquery.min.js"
      }, {
        "src": "\u002Fbase\u002Fjs\u002Fpopper.min.js"
      }, {
        "src": "\u002Fbase\u002Fjs\u002Fbootstrap.min.js"
      }, {
        "src": "\u002Fbase\u002Fjs\u002Fjquery.pogo-slider.min.js"
      }, {
        "src": "\u002Fbase\u002Fjs\u002Fslider-index.js"
      }, {
        "src": "\u002Fbase\u002Fjs\u002Fform-validator.min.js"
      }, {
        "src": "\u002Fbase\u002Fjs\u002Fcustom.js"
      }, {
        "src": "\u002Fplugins\u002Fsummernote\u002Fsummernote-bs4.min.js",
        "body": true
      }, {
        "src": "\u002Fplugins\u002FoverlayScrollbars\u002Fjs\u002Fjquery.overlayScrollbars.min.js",
        "body": true
      }, {
        "src": "\u002Fdist\u002Fjs\u002Fadminlte.js",
        "body": true
      }, {
        "src": "\u002Fplugins\u002Fdatatables\u002Fjquery.dataTables.min.js",
        "body": true
      }, {
        "src": "\u002Fplugins\u002Fdatatables-bs4\u002Fjs\u002FdataTables.bootstrap4.min.js",
        "body": true
      }, {
        "src": "\u002Fplugins\u002Fjquery-validation\u002Fjquery.validate.min.js",
        "body": true
      }, {
        "src": "\u002Fplugins\u002Ftoastr\u002Ftoastr.min.js",
        "body": true
      }, {
        "src": "\u002Fplugins\u002Fselect2\u002Fjs\u002Fselect2.full.min.js",
        "body": true
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (false) {}

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-lazyload.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-lazyload.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue2-google-maps.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue2-google-maps.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof auth_plugin === 'function') {
    await auth_plugin(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=25e3f758&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=25e3f758&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var infoWindowvue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(55)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_infoWindowvue_type_script_lang_js_ = (infoWindowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_infoWindowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "67f87c5a"
  
)

/* harmony default export */ var infoWindow = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=6839df3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-map-container"},[_vm._ssrNode("<div class=\"vue-map\"></div> "),_vm._ssrNode("<div class=\"vue-map-hidden\">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),_vm._t("visible")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=6839df3e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mapvue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(56)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mapvue_type_script_lang_js_ = (mapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "72dd2ff0"
  
)

/* harmony default export */ var map = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=50f7f8d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-street-view-pano-container"},[_vm._ssrNode("<div class=\"vue-street-view-pano\"></div> "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=50f7f8d6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var streetViewPanoramavue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(59)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_streetViewPanoramavue_type_script_lang_js_ = (streetViewPanoramavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_streetViewPanoramavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e39c330e"
  
)

/* harmony default export */ var streetViewPanorama = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=5e569f3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',_vm._g(_vm._b({ref:"input"},'input',_vm.$attrs,false),_vm.$listeners),[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=5e569f3e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var autocompletevue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(63)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_autocompletevue_type_script_lang_js_ = (autocompletevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_autocompletevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6d888404"
  
)

/* harmony default export */ var autocomplete = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map