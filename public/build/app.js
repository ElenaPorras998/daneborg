"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_l10n_da_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/l10n/da.js */ "./node_modules/flatpickr/dist/l10n/da.js");
/* harmony import */ var flatpickr_dist_l10n_da_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_da_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

//import './bootstrap';


__webpack_require__(/*! fslightbox */ "./node_modules/fslightbox/index.js");
__webpack_require__(/*! flatpickr/dist/themes/Airbnb.css */ "./node_modules/flatpickr/dist/themes/Airbnb.css");
window.initCalendar = function () {
  (0,flatpickr__WEBPACK_IMPORTED_MODULE_1__["default"])("#calendar", {
    inline: true,
    dateFormat: "d-m-Y",
    weekNumbers: true,
    locale: flatpickr_dist_l10n_da_js__WEBPACK_IMPORTED_MODULE_2__.Danish,
    disable: window.DisabledDates
  });
};
window.initAdminCalendar = function () {
  (0,flatpickr__WEBPACK_IMPORTED_MODULE_1__["default"])("#admin-calendar", {
    inline: true,
    dateFormat: "d-m-Y",
    locale: flatpickr_dist_l10n_da_js__WEBPACK_IMPORTED_MODULE_2__.Danish,
    weekNumbers: true,
    mode: "range",
    disable: window.DisabledDates,
    onChange: function onChange(selectedDates) {
      window.selectedDates = selectedDates;
    }
  });
};

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_flatpickr_dist_esm_index_js-node_modules_flatpickr_dist_l10n_da_js-node_-b1eb86"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQzBCO0FBQzFCO0FBQ2tDO0FBQ2lCO0FBQ25ERSxtQkFBTyxDQUFDLHNEQUFZLENBQUM7QUFDckJBLG1CQUFPLENBQUMseUZBQWtDLENBQUM7QUFFM0NDLE1BQU0sQ0FBQ0MsWUFBWSxHQUFHLFlBQU07RUFDeEJKLHFEQUFTLENBQUMsV0FBVyxFQUFFO0lBQ25CSyxNQUFNLEVBQUUsSUFBSTtJQUNaQyxVQUFVLEVBQUUsT0FBTztJQUNuQkMsV0FBVyxFQUFFLElBQUk7SUFDakJDLE1BQU0sRUFBRVAsNkRBQU07SUFDZFEsT0FBTyxFQUFFTixNQUFNLENBQUNPO0VBQ3BCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRFAsTUFBTSxDQUFDUSxpQkFBaUIsR0FBRyxZQUFNO0VBQzdCWCxxREFBUyxDQUFDLGlCQUFpQixFQUFFO0lBQ3pCSyxNQUFNLEVBQUUsSUFBSTtJQUNaQyxVQUFVLEVBQUUsT0FBTztJQUNuQkUsTUFBTSxFQUFFUCw2REFBTTtJQUNkTSxXQUFXLEVBQUUsSUFBSTtJQUNqQkssSUFBSSxFQUFFLE9BQU87SUFDYkgsT0FBTyxFQUFFTixNQUFNLENBQUNPLGFBQWE7SUFDN0JHLFFBQVEsRUFBRSxTQUFBQSxTQUFTQyxhQUFhLEVBQUU7TUFDOUJYLE1BQU0sQ0FBQ1csYUFBYSxHQUFHQSxhQUFhO0lBQ3hDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7QUNyQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuLy9pbXBvcnQgJy4vYm9vdHN0cmFwJztcbmltcG9ydCBmbGF0cGlja3IgZnJvbSBcImZsYXRwaWNrclwiO1xuaW1wb3J0IHsgRGFuaXNoIH0gZnJvbSBcImZsYXRwaWNrci9kaXN0L2wxMG4vZGEuanNcIjtcbnJlcXVpcmUoXCJmc2xpZ2h0Ym94XCIpO1xucmVxdWlyZShcImZsYXRwaWNrci9kaXN0L3RoZW1lcy9BaXJibmIuY3NzXCIpO1xuXG53aW5kb3cuaW5pdENhbGVuZGFyID0gKCkgPT4ge1xuICAgIGZsYXRwaWNrcihcIiNjYWxlbmRhclwiLCB7XG4gICAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgICAgZGF0ZUZvcm1hdDogXCJkLW0tWVwiLFxuICAgICAgICB3ZWVrTnVtYmVyczogdHJ1ZSxcbiAgICAgICAgbG9jYWxlOiBEYW5pc2gsXG4gICAgICAgIGRpc2FibGU6IHdpbmRvdy5EaXNhYmxlZERhdGVzXG4gICAgfSk7XG59XG5cbndpbmRvdy5pbml0QWRtaW5DYWxlbmRhciA9ICgpID0+IHtcbiAgICBmbGF0cGlja3IoXCIjYWRtaW4tY2FsZW5kYXJcIiwge1xuICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgIGRhdGVGb3JtYXQ6IFwiZC1tLVlcIixcbiAgICAgICAgbG9jYWxlOiBEYW5pc2gsXG4gICAgICAgIHdlZWtOdW1iZXJzOiB0cnVlLFxuICAgICAgICBtb2RlOiBcInJhbmdlXCIsXG4gICAgICAgIGRpc2FibGU6IHdpbmRvdy5EaXNhYmxlZERhdGVzLFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24oc2VsZWN0ZWREYXRlcykge1xuICAgICAgICAgICAgd2luZG93LnNlbGVjdGVkRGF0ZXMgPSBzZWxlY3RlZERhdGVzO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImZsYXRwaWNrciIsIkRhbmlzaCIsInJlcXVpcmUiLCJ3aW5kb3ciLCJpbml0Q2FsZW5kYXIiLCJpbmxpbmUiLCJkYXRlRm9ybWF0Iiwid2Vla051bWJlcnMiLCJsb2NhbGUiLCJkaXNhYmxlIiwiRGlzYWJsZWREYXRlcyIsImluaXRBZG1pbkNhbGVuZGFyIiwibW9kZSIsIm9uQ2hhbmdlIiwic2VsZWN0ZWREYXRlcyJdLCJzb3VyY2VSb290IjoiIn0=