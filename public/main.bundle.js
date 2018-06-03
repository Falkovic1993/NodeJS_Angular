webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_chatroom_chatroom_component__ = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_userdetails_userdetails_component__ = __webpack_require__("../../../../../src/app/components/userdetails/userdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_stats_stats_component__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_detailedinformation_detailedinformation_component__ = __webpack_require__("../../../../../src/app/components/detailedinformation/detailedinformation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.ts");












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_0__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'employess', component: __WEBPACK_IMPORTED_MODULE_6__components_users_list_users_list_component__["a" /* UsersListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'chatroom', component: __WEBPACK_IMPORTED_MODULE_7__components_chatroom_chatroom_component__["a" /* ChatroomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'userdetails/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_userdetails_userdetails_component__["a" /* UserdetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'employess', pathMatch: 'full' },
            { path: 'stats', component: __WEBPACK_IMPORTED_MODULE_9__components_stats_stats_component__["a" /* StatsComponent */] },
            { path: 'detailedinfo', component: __WEBPACK_IMPORTED_MODULE_10__components_detailedinformation_detailedinformation_component__["a" /* DetailedinformationComponent */] },
            { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_11__components_projects_projects_component__["a" /* ProjectsComponent */] },
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".loggedin[_ngcontent-%COMP%]{\r\n  padding-left: 300px;\r\n}\r\n\r\n\r\n.hide[_ngcontent-%COMP%]{\r\n  display:none;\r\n}\r\n\r\n\r\n.redbg[_ngcontent-%COMP%]{\r\n  background-color:#f05053;\r\n}\r\n\r\n\r\n.bluebg[_ngcontent-%COMP%]{\r\n  background-color:#2E294E;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/app.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* unused harmony export View_AppComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sidenav_sidenav_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("../../../../@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_redux_store_lib_src_components_ng_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_flash_messages_module_flash_messages_component_ngfactory__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module_flash_messages_component__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module_flash_messages_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module_flash_messages_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_0__app_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-sidenav", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__components_sidenav_sidenav_component_ngfactory__["b" /* View_SidenavComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__components_sidenav_sidenav_component_ngfactory__["a" /* RenderType_SidenavComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__components_sidenav_sidenav_component__["a" /* SidenavComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_redux_store_lib_src_components_ng_redux__["NgRedux"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 4, "div", [["class", "navbar header"]], [[2, "loggedin", null]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "app-navbar", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component_ngfactory__["b" /* View_NavbarComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component_ngfactory__["a" /* RenderType_NavbarComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_10__services_navbar_service__["a" /* NavbarService */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 8, "div", [["class", "wrapper main"]], [[2, "loggedin", null]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "flash-messages", [], null, null, null, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_flash_messages_module_flash_messages_component_ngfactory__["b" /* View_FlashMessagesComponent_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular2_flash_messages_module_flash_messages_component_ngfactory__["a" /* RenderType_FlashMessagesComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages_module_flash_messages_component__["FlashMessagesComponent"], [__WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 16777216, null, null, 2, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](15, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_router__["RouterOutlet"], [__WEBPACK_IMPORTED_MODULE_8__angular_router__["ChildrenOutletContexts"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      \n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  \n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n         \n\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 4, "div", [["class", "footer color"]], [[2, "loggedin", null]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["  \n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 1, "app-footer", [], null, null, null, __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component_ngfactory__["b" /* View_FooterComponent_0 */], __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component_ngfactory__["a" /* RenderType_FooterComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](22, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__["a" /* FooterComponent */], [__WEBPACK_IMPORTED_MODULE_10__services_navbar_service__["a" /* NavbarService */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); var currVal_1 = _co.authService.loggedIn(); _ck(_v, 7, 0, currVal_1); _ck(_v, 12, 0); _ck(_v, 15, 0); _ck(_v, 22, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.authService.loggedIn(); _ck(_v, 0, 0, currVal_0); var currVal_2 = _co.authService.loggedIn(); _ck(_v, 9, 0, currVal_2); var currVal_3 = _co.authService.loggedIn(); _ck(_v, 19, 0, currVal_3); }); }
function View_AppComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* myAuthService */]], null, null)], null, null); }
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-root", __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Pilea';
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AppComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    ;
    AppComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/home/home.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/register/register.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/login/login.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_users_list_users_list_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chatroom_chatroom_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_userdetails_userdetails_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/userdetails/userdetails.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_stats_stats_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_detailedinformation_detailedinformation_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/detailedinformation/detailedinformation.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_projects_projects_component_ngfactory__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component_ngfactory__ = __webpack_require__("../../../../../src/app/app.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_animations_browser__ = __webpack_require__("../../../animations/esm5/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_profile_profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("../../../../@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35__angular_redux_store_lib_src_components_ng_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_users_list_users_list_action__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_PasswordValidator__ = __webpack_require__("../../../../../src/app/services/PasswordValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_materialize_dist_materialize_module__ = __webpack_require__("../../../../angular2-materialize/dist/materialize-module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_chatroom_chatroom_component__ = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_userdetails_userdetails_component__ = __webpack_require__("../../../../../src/app/components/userdetails/userdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_stats_stats_component__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_detailedinformation_detailedinformation_component__ = __webpack_require__("../../../../../src/app/components/detailedinformation/detailedinformation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_angular2_flash_messages_module_module__ = __webpack_require__("../../../../angular2-flash-messages/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_angular2_flash_messages_module_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_58_angular2_flash_messages_module_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__angular_redux_store_lib_src_ng_redux_module__ = __webpack_require__("../../../../@angular-redux/store/lib/src/ng-redux.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__angular_redux_store_lib_src_ng_redux_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_59__angular_redux_store_lib_src_ng_redux_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_redux_router_lib_es5_src_index__ = __webpack_require__("../../../../@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_redux_router_lib_es5_src_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_60__angular_redux_router_lib_es5_src_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_redux_store_lib_src_components_dev_tools__ = __webpack_require__("../../../../@angular-redux/store/lib/src/components/dev-tools.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_redux_store_lib_src_components_dev_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_61__angular_redux_store_lib_src_components_dev_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__angular_redux_router_lib_es5_src_router__ = __webpack_require__("../../../../@angular-redux/router/lib/es5/src/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__angular_redux_router_lib_es5_src_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_62__angular_redux_router_lib_es5_src_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__users_epic__ = __webpack_require__("../../../../../src/app/users.epic.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































































var AppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_3__components_home_home_component_ngfactory__["a" /* HomeComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_4__components_register_register_component_ngfactory__["a" /* RegisterComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_5__components_login_login_component_ngfactory__["a" /* LoginComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component_ngfactory__["a" /* DashboardComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component_ngfactory__["a" /* ProfileComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_8__components_users_list_users_list_component_ngfactory__["a" /* UsersListComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_9__components_chatroom_chatroom_component_ngfactory__["a" /* ChatroomComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_10__components_userdetails_userdetails_component_ngfactory__["a" /* UserdetailsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_11__components_stats_stats_component_ngfactory__["a" /* StatsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_12__components_detailedinformation_detailedinformation_component_ngfactory__["a" /* DetailedinformationComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_13__components_projects_projects_component_ngfactory__["a" /* ProjectsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_14__app_component_ngfactory__["a" /* AppComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["q" /* ɵi */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["q" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵq"], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_16__angular_common__["NgLocalization"], __WEBPACK_IMPORTED_MODULE_16__angular_common__["NgLocaleLocalization"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_16__angular_common__["ɵa"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_ID"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵi"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵn"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵo"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["r" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Sanitizer"], null, [__WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["g" /* HammerGestureConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["o" /* ɵKeyEventsPlugin */](p1_0), new __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [__WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["e" /* EventManager */], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["e" /* EventManager */], [__WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["d" /* EVENT_MANAGER_PLUGINS */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["m" /* ɵDomSharedStylesHost */], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["m" /* ɵDomSharedStylesHost */], [__WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], [__WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["e" /* EventManager */], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["m" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_18__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["d" /* ɵc */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_18__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["e" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["c" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_18__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_18__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["f" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_18__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["p" /* ɵSharedStylesHost */], null, [__WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["m" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Testability"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["h" /* Meta */], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["h" /* Meta */], [__WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["i" /* Title */], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["i" /* Title */], [__WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["h" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["n" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["l" /* ɵf */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["o" /* ɵi */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["o" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["h" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["m" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["o" /* ɵi */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["k" /* ɵe */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["k" /* ɵe */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["i" /* XhrFactory */], null, [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["k" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["g" /* HttpXhrBackend */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["g" /* HttpXhrBackend */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["i" /* XhrFactory */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpBackend */], null, [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["g" /* HttpXhrBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["f" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["j" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["f" /* HttpHandler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_21__angular_animations__["b" /* AnimationBuilder */], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["b" /* ɵBrowserAnimationBuilder */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["b" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_bidi__["b" /* DIR_DOCUMENT */], null, [__WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_bidi__["c" /* Directionality */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_bidi__["c" /* Directionality */], [[2, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_bidi__["b" /* DIR_DOCUMENT */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_23__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_23__angular_cdk_platform__["a" /* Platform */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["h" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["h" /* InteractivityChecker */], [__WEBPACK_IMPORTED_MODULE_23__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["g" /* FocusTrapFactory */], __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["g" /* FocusTrapFactory */], [__WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["h" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](136192, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["c" /* AriaDescriber */], __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["b" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["c" /* AriaDescriber */]], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["k" /* LiveAnnouncer */], __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["j" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["k" /* LiveAnnouncer */]], [2, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["i" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["f" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["d" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["f" /* FocusMonitor */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_23__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["c" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["a" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["c" /* ScrollDispatcher */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_23__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["f" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["e" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["f" /* ViewportRuler */]], __WEBPACK_IMPORTED_MODULE_23__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["g" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["g" /* ScrollStrategyOptions */], [__WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["c" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["f" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["c" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["h" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["c" /* OverlayContainer */]], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["f" /* OverlayPositionBuilder */], __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["f" /* OverlayPositionBuilder */], [__WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["f" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["d" /* OverlayKeyboardDispatcher */], __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["k" /* ɵf */], [[3, __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["d" /* OverlayKeyboardDispatcher */]], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["a" /* Overlay */], __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["a" /* Overlay */], [__WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["g" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["c" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["f" /* OverlayPositionBuilder */], __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["d" /* OverlayKeyboardDispatcher */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_16__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["i" /* ɵc */], __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["j" /* ɵd */], [__WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["a" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_27__angular_material_menu__["b" /* MAT_MENU_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_27__angular_material_menu__["d" /* ɵc20 */], [__WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["a" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_28__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵf"], [__WEBPACK_IMPORTED_MODULE_28__angular_router__["Router"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_28__angular_router__["NoPreloading"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["NoPreloading"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_28__angular_router__["PreloadingStrategy"], null, [__WEBPACK_IMPORTED_MODULE_28__angular_router__["NoPreloading"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](135680, __WEBPACK_IMPORTED_MODULE_28__angular_router__["RouterPreloader"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["RouterPreloader"], [__WEBPACK_IMPORTED_MODULE_28__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["PreloadingStrategy"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_28__angular_router__["PreloadAllModules"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["PreloadAllModules"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_28__angular_router__["ROUTER_INITIALIZER"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵi"], [__WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵg"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_28__angular_router__["ROUTER_INITIALIZER"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["d" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["AuthServiceConfig"], __WEBPACK_IMPORTED_MODULE_1__app_module__["b" /* getAuthServiceConfigs */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["AuthService"], [__WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["AuthServiceConfig"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_30_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_30_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_31__services_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_31__services_navbar_service__["a" /* NavbarService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */], [__WEBPACK_IMPORTED_MODULE_33__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_28__angular_router__["Router"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_34__components_profile_profile_action__["a" /* UserActions */], __WEBPACK_IMPORTED_MODULE_34__components_profile_profile_action__["a" /* UserActions */], [__WEBPACK_IMPORTED_MODULE_35__angular_redux_store_lib_src_components_ng_redux__["NgRedux"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_36__components_users_list_users_list_action__["a" /* UsersActions */], __WEBPACK_IMPORTED_MODULE_36__components_users_list_users_list_action__["a" /* UsersActions */], [__WEBPACK_IMPORTED_MODULE_35__angular_redux_store_lib_src_components_ng_redux__["NgRedux"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_37__services_PasswordValidator__["a" /* PasswordValidator */], __WEBPACK_IMPORTED_MODULE_37__services_PasswordValidator__["a" /* PasswordValidator */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_38__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_38__services_websocket_service__["a" /* WebsocketService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_39__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_39__services_chat_service__["a" /* ChatService */], [__WEBPACK_IMPORTED_MODULE_38__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_40__angular_http__["Http"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["o" /* ɵba */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["o" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["g" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["g" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_16__angular_common__["CommonModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_41_angular2_materialize_dist_materialize_module__["a" /* MaterializeModule */], __WEBPACK_IMPORTED_MODULE_41_angular2_materialize_dist_materialize_module__["a" /* MaterializeModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["q" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"], function () { return [__WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵb"]()]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵg"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵg"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"], function (p0_0, p1_0) { return [__WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["t" /* ɵh */](p0_0), __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵh"](p1_0)]; }, [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgProbeToken"]], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵg"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵConsole"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationInitStatus"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationModule"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["a" /* BrowserModule */], [[3, __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["a" /* BrowserModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["e" /* HttpClientXsrfModule */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["e" /* HttpClientXsrfModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["d" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["d" /* HttpClientModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_bidi__["a" /* BidiModule */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_bidi__["a" /* BidiModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_42__angular_material_core__["a" /* MATERIAL_SANITY_CHECKS */], true, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_42__angular_material_core__["b" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material_core__["b" /* MatCommonModule */], [[2, __WEBPACK_IMPORTED_MODULE_42__angular_material_core__["a" /* MATERIAL_SANITY_CHECKS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_23__angular_cdk_platform__["b" /* PlatformModule */], __WEBPACK_IMPORTED_MODULE_23__angular_cdk_platform__["b" /* PlatformModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_42__angular_material_core__["g" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material_core__["g" /* MatRippleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["a" /* A11yModule */], __WEBPACK_IMPORTED_MODULE_24__angular_cdk_a11y__["a" /* A11yModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_43__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_43__angular_material_button__["a" /* MatButtonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_44__angular_cdk_portal__["b" /* PortalModule */], __WEBPACK_IMPORTED_MODULE_44__angular_cdk_portal__["b" /* PortalModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["b" /* ScrollDispatchModule */], __WEBPACK_IMPORTED_MODULE_25__angular_cdk_scrolling__["b" /* ScrollDispatchModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["e" /* OverlayModule */], __WEBPACK_IMPORTED_MODULE_26__angular_cdk_overlay__["e" /* OverlayModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_27__angular_material_menu__["c" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_27__angular_material_menu__["c" /* MatMenuModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_42__angular_material_core__["d" /* MatLineModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material_core__["d" /* MatLineModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_45__angular_material_grid_list__["a" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_45__angular_material_grid_list__["a" /* MatGridListModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵa"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵd"], [[3, __WEBPACK_IMPORTED_MODULE_28__angular_router__["Router"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__angular_router__["UrlSerializer"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["DefaultUrlSerializer"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__angular_router__["ChildrenOutletContexts"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ChildrenOutletContexts"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_28__angular_router__["ROUTER_CONFIGURATION"], { useHash: true }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_16__angular_common__["LocationStrategy"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵc"], [__WEBPACK_IMPORTED_MODULE_16__angular_common__["PlatformLocation"], [2, __WEBPACK_IMPORTED_MODULE_16__angular_common__["APP_BASE_HREF"]], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ROUTER_CONFIGURATION"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_16__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_16__angular_common__["Location"], [__WEBPACK_IMPORTED_MODULE_16__angular_common__["LocationStrategy"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["SystemJsNgModuleLoader"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["SystemJsNgModuleLoaderConfig"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_28__angular_router__["ROUTES"], function () { return [[{ path: "", component: __WEBPACK_IMPORTED_MODULE_46__components_home_home_component__["a" /* HomeComponent */] }, { path: "home", component: __WEBPACK_IMPORTED_MODULE_46__components_home_home_component__["a" /* HomeComponent */] }, { path: "register", component: __WEBPACK_IMPORTED_MODULE_47__components_register_register_component__["a" /* RegisterComponent */] }, { path: "login", component: __WEBPACK_IMPORTED_MODULE_48__components_login_login_component__["a" /* LoginComponent */] }, { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_49__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] }, { path: "profile", component: __WEBPACK_IMPORTED_MODULE_50__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] }, { path: "employess", component: __WEBPACK_IMPORTED_MODULE_51__components_users_list_users_list_component__["a" /* UsersListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] }, { path: "chatroom", component: __WEBPACK_IMPORTED_MODULE_52__components_chatroom_chatroom_component__["a" /* ChatroomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] }, { path: "userdetails/:id", component: __WEBPACK_IMPORTED_MODULE_53__components_userdetails_userdetails_component__["a" /* UserdetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]], children: [{ path: "", redirectTo: "employess", pathMatch: "full" }, { path: "stats", component: __WEBPACK_IMPORTED_MODULE_54__components_stats_stats_component__["a" /* StatsComponent */] }, { path: "detailedinfo", component: __WEBPACK_IMPORTED_MODULE_55__components_detailedinformation_detailedinformation_component__["a" /* DetailedinformationComponent */] }, { path: "projects", component: __WEBPACK_IMPORTED_MODULE_56__components_projects_projects_component__["a" /* ProjectsComponent */] }] }]]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_28__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵe"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["UrlSerializer"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ChildrenOutletContexts"], __WEBPACK_IMPORTED_MODULE_16__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ROUTES"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["ROUTER_CONFIGURATION"], [2, __WEBPACK_IMPORTED_MODULE_28__angular_router__["UrlHandlingStrategy"]], [2, __WEBPACK_IMPORTED_MODULE_28__angular_router__["RouteReuseStrategy"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_28__angular_router__["RouterModule"], __WEBPACK_IMPORTED_MODULE_28__angular_router__["RouterModule"], [[2, __WEBPACK_IMPORTED_MODULE_28__angular_router__["ɵa"]], [2, __WEBPACK_IMPORTED_MODULE_28__angular_router__["Router"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_57__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_57__app_routing_module__["a" /* AppRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["m" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_forms__["m" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_58_angular2_flash_messages_module_module__["FlashMessagesModule"], __WEBPACK_IMPORTED_MODULE_58_angular2_flash_messages_module_module__["FlashMessagesModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_40__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["HttpModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_59__angular_redux_store_lib_src_ng_redux_module__["NgReduxModule"], __WEBPACK_IMPORTED_MODULE_59__angular_redux_store_lib_src_ng_redux_module__["NgReduxModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_60__angular_redux_router_lib_es5_src_index__["NgReduxRouterModule"], __WEBPACK_IMPORTED_MODULE_60__angular_redux_router_lib_es5_src_index__["NgReduxRouterModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["SocialLoginModule"], __WEBPACK_IMPORTED_MODULE_29_angular5_social_login__["SocialLoginModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_35__angular_redux_store_lib_src_components_ng_redux__["NgRedux"], __WEBPACK_IMPORTED_MODULE_59__angular_redux_store_lib_src_ng_redux_module__["_ngReduxFactory"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_61__angular_redux_store_lib_src_components_dev_tools__["DevToolsExtension"], __WEBPACK_IMPORTED_MODULE_61__angular_redux_store_lib_src_components_dev_tools__["DevToolsExtension"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_35__angular_redux_store_lib_src_components_ng_redux__["NgRedux"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_62__angular_redux_router_lib_es5_src_router__["NgReduxRouter"], __WEBPACK_IMPORTED_MODULE_62__angular_redux_router_lib_es5_src_router__["NgReduxRouter"], [__WEBPACK_IMPORTED_MODULE_28__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_35__angular_redux_store_lib_src_components_ng_redux__["NgRedux"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_16__angular_common__["Location"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_40__angular_http__["BrowserXhr"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["BrowserXhr"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_40__angular_http__["ResponseOptions"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["BaseResponseOptions"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_40__angular_http__["XSRFStrategy"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["ɵa"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_40__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["XHRBackend"], [__WEBPACK_IMPORTED_MODULE_40__angular_http__["BrowserXhr"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["ResponseOptions"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["XSRFStrategy"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_40__angular_http__["RequestOptions"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["BaseRequestOptions"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_40__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["ɵb"], [__WEBPACK_IMPORTED_MODULE_40__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["RequestOptions"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_33__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_33__services_auth_service__["a" /* myAuthService */], [__WEBPACK_IMPORTED_MODULE_40__angular_http__["Http"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_63__users_epic__["a" /* UsersEpic */], __WEBPACK_IMPORTED_MODULE_63__users_epic__["a" /* UsersEpic */], [__WEBPACK_IMPORTED_MODULE_33__services_auth_service__["a" /* myAuthService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_35__angular_redux_store_lib_src_components_ng_redux__["NgRedux"], __WEBPACK_IMPORTED_MODULE_61__angular_redux_store_lib_src_components_dev_tools__["DevToolsExtension"], __WEBPACK_IMPORTED_MODULE_62__angular_redux_router_lib_es5_src_router__["NgReduxRouter"], __WEBPACK_IMPORTED_MODULE_63__users_epic__["a" /* UsersEpic */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["l" /* ɵf */], "XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["m" /* ɵg */], "X-XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_27__angular_material_menu__["a" /* MAT_MENU_DEFAULT_OPTIONS */], { overlapTrigger: true, xPosition: "after", yPosition: "below" }, [])]); });



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getAuthServiceConfigs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store__ = __webpack_require__("../../../../../src/app/store/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__ = __webpack_require__("../../../../@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_observable__ = __webpack_require__("../../../../redux-observable/lib/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_logger__ = __webpack_require__("../../../../redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_epic__ = __webpack_require__("../../../../../src/app/users.epic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular5_social_login__);
//import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';







var AppModule = /** @class */ (function () {
    function AppModule(ngRedux, devTool, ngReduxRouter, usersEpic) {
        this.ngRedux = ngRedux;
        this.devTool = devTool;
        this.ngReduxRouter = ngReduxRouter;
        this.usersEpic = usersEpic;
        var rootEpic = Object(__WEBPACK_IMPORTED_MODULE_3_redux_observable__["a" /* combineEpics */])(this.usersEpic.getUser, this.usersEpic.updateUser, this.usersEpic.getAllUsers, this.usersEpic.deleteUser
        // Each epic is referenced here.
        );
        var middleware = [
            Object(__WEBPACK_IMPORTED_MODULE_3_redux_observable__["b" /* createEpicMiddleware */])(rootEpic), Object(__WEBPACK_IMPORTED_MODULE_4_redux_logger__["createLogger"])({ level: 'info', collapsed: true })
        ];
        this.ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* rootReducer */], {}, middleware, [devTool.isEnabled() ? devTool.enhancer() : function (f) { return f; }]);
        ngReduxRouter.initialize();
    }
    return AppModule;
}());

// GOOGLE AND FACEBOOK LGOIN
function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_6_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_6_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_6_angular5_social_login__["FacebookLoginProvider"]("630576007294206")
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_6_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_6_angular5_social_login__["GoogleLoginProvider"]("519676817251-00tmt8ii5s68ll9pgtojc7rcebtbu66e.apps.googleusercontent.com")
        },
    ]);
    return config;
}


/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ChatroomComponent */
/* unused harmony export View_ChatroomComponent_0 */
/* unused harmony export View_ChatroomComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chatroom_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatroom_component__ = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_ChatroomComponent = [__WEBPACK_IMPORTED_MODULE_0__chatroom_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ChatroomComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ChatroomComponent, data: {} });

function View_ChatroomComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 16, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 3, "div", [["class", "chip"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 0, "img", [["alt", "Contact Person"], ["src", "../../../assets/img/yuna.jpg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](7, null, ["\n              ", "\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](11, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](14, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](15, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.firstname; _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.context.$implicit.messages; _ck(_v, 11, 0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v.parent, 0), _v.context.$implicit.date)); _ck(_v, 14, 0, currVal_2); }); }
function View_ChatroomComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 40, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 37, "div", [["class", "col l10 offset-l1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 4, "div", [["class", "col l12 center-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["  \n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Chat Room"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 0, "div", [["class", "divider"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 7, "table", [["class", "highlight"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_ChatroomComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](19, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](23, 0, null, null, 17, "div", [["class", "row valign-wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](25, 0, null, null, 8, "div", [["class", "col l9"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](27, 0, [["textarea", 1]], null, 5, "textarea", [["rows", "4"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 28)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 28).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 28)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 28)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.message = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](30, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](32, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](35, 0, null, null, 4, "div", [["class", "col l3"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](37, 0, null, null, 1, "button", [["class", "btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.sendMessage(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 27).value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["send Message"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n\n        \n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messages; _ck(_v, 19, 0, currVal_0); var currVal_8 = _co.message; _ck(_v, 30, 0, currVal_8); }, function (_ck, _v) { var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassUntouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassTouched; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassPristine; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassDirty; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassValid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassInvalid; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 32).ngClassPending; _ck(_v, 27, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_ChatroomComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-chatroom", [], null, null, null, View_ChatroomComponent_0, RenderType_ChatroomComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__chatroom_component__["a" /* ChatroomComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_7__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChatroomComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-chatroom", __WEBPACK_IMPORTED_MODULE_4__chatroom_component__["a" /* ChatroomComponent */], View_ChatroomComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");




var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent(chat, fb, myauthService, nav) {
        this.chat = chat;
        this.fb = fb;
        this.myauthService = myauthService;
        this.nav = nav;
        this.messages = [];
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.show();
        this.chat.getAllMessages().subscribe(function (res) {
            console.log('RES', res.messages);
            _this.messages = res.messages;
            console.log(_this.messages);
        });
        this.chat.message.subscribe(function (data) {
            _this.messages.push(data);
            console.log(_this.messages);
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user.firstname);
    };
    ChatroomComponent.prototype.sendMessage = function (message) {
        var _this = this;
        var userId = this.user.id;
        var date = new Date;
        this.chat.getUserById(userId).subscribe(function (res) {
            //console.log(res)
            var username = res.user[0].firstname;
            var data = { 'userId': userId, 'firstname': username, 'messages': message, 'date': date };
            _this.chat.sendMessage(data);
            _this.chat.saveMessage(data);
        });
    };
    return ChatroomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".redbg[_ngcontent-%COMP%]{\r\n  background-color:#f05053;\r\n}\r\n\r\n.bluebg[_ngcontent-%COMP%]{\r\n  background-color:#2E294E;\r\n}\r\n\r\n.btndashboard[_ngcontent-%COMP%]{\r\n  float:right;\r\n  margin-top:-14px;\r\n  margin-right: -14px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_DashboardComponent */
/* unused harmony export View_DashboardComponent_0 */
/* unused harmony export View_DashboardComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_DashboardComponent = [__WEBPACK_IMPORTED_MODULE_0__dashboard_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_DashboardComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_DashboardComponent, data: {} });

function View_DashboardComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 180, "div", [["class", "dashboard-wrapper row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h2", [["class", "center-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Company Overview"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 26, "div", [["class", "col s12 m6 l5 offset-l1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 23, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 16, "div", [["class", "card-content  green white-text center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 2, "p", [["class", "card-stats-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 0, "i", [["class", "mdi-social-group-add"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" New Clients"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](15, 0, null, null, 1, "h4", [["class", "card-stats-number"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["4"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 6, "p", [["class", "card-stats-compare"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["keyboard_arrow_up"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["15% "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 1, "span", [["class", "green-text text-lighten-5"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["from yesterday"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](27, 0, null, null, 2, "button", [["class", "btn-floating btn-small waves-effect btndashboard bluebg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["edit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](33, 0, null, null, 26, "div", [["class", "col s12 m6 l5"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](35, 0, null, null, 23, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](37, 0, null, null, 16, "div", [["class", "card-content redbg center white-text center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](39, 0, null, null, 2, "p", [["class", "card-stats-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](40, 0, null, null, 0, "i", [["class", "mdi-social-group-add"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Monthly profit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](43, 0, null, null, 1, "h4", [["class", "card-stats-number"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["800.231 DKK"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](46, 0, null, null, 6, "p", [["class", "card-stats-compare"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](47, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["keyboard_arrow_down"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" 17% "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](50, 0, null, null, 1, "span", [["class", "green-text text-lighten-5"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["from target this month"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](55, 0, null, null, 2, "button", [["class", "btn-floating btn-small waves-effect btndashboard bluebg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](56, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["edit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](61, 0, null, null, 28, "div", [["class", "col s12 m6 l3"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](63, 0, null, null, 25, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](65, 0, null, null, 16, "div", [["class", "card-content  blue-grey white-text center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](67, 0, null, null, 2, "p", [["class", "card-stats-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](68, 0, null, null, 0, "i", [["class", "mdi-social-group-add"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Todays Profit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](71, 0, null, null, 1, "h4", [["class", "card-stats-number"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["53.194"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](74, 0, null, null, 6, "p", [["class", "card-stats-compare"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](75, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["keyboard_arrow_down"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" 5% "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](78, 0, null, null, 1, "span", [["class", "green-text text-lighten-5"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["from yesterday"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](83, 0, null, null, 4, "div", [["class", "card-action  blue-grey darken-2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](85, 0, null, null, 1, "div", [["id", "clients-bar"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](86, 0, null, null, 0, "canvas", [["height", "25"], ["style", "display: inline-block; width: 290px; height: 25px; vertical-align: top;"], ["width", "290"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](91, 0, null, null, 28, "div", [["class", "col s12 m6 l3"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](93, 0, null, null, 25, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](95, 0, null, null, 16, "div", [["class", "card-content  blue-grey white-text center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](97, 0, null, null, 2, "p", [["class", "card-stats-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](98, 0, null, null, 0, "i", [["class", "mdi-social-group-add"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Todays Profit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](101, 0, null, null, 1, "h4", [["class", "card-stats-number"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["53.194"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](104, 0, null, null, 6, "p", [["class", "card-stats-compare"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](105, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["keyboard_arrow_down"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" 5% "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](108, 0, null, null, 1, "span", [["class", "green-text text-lighten-5"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["from yesterday"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](113, 0, null, null, 4, "div", [["class", "card-action  blue-grey darken-2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](115, 0, null, null, 1, "div", [["id", "clients-bar"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](116, 0, null, null, 0, "canvas", [["height", "25"], ["style", "display: inline-block; width: 290px; height: 25px; vertical-align: top;"], ["width", "290"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](121, 0, null, null, 28, "div", [["class", "col s12 m6 l3"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](123, 0, null, null, 25, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](125, 0, null, null, 16, "div", [["class", "card-content  blue-grey white-text center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](127, 0, null, null, 2, "p", [["class", "card-stats-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](128, 0, null, null, 0, "i", [["class", "mdi-social-group-add"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Todays Profit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](131, 0, null, null, 1, "h4", [["class", "card-stats-number"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["53.194"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](134, 0, null, null, 6, "p", [["class", "card-stats-compare"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](135, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["keyboard_arrow_down"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" 5% "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](138, 0, null, null, 1, "span", [["class", "green-text text-lighten-5"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["from yesterday"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](143, 0, null, null, 4, "div", [["class", "card-action  blue-grey darken-2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](145, 0, null, null, 1, "div", [["id", "clients-bar"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](146, 0, null, null, 0, "canvas", [["height", "25"], ["style", "display: inline-block; width: 290px; height: 25px; vertical-align: top;"], ["width", "290"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](151, 0, null, null, 28, "div", [["class", "col s12 m6 l3"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](153, 0, null, null, 25, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](155, 0, null, null, 16, "div", [["class", "card-content  blue-grey white-text center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](157, 0, null, null, 2, "p", [["class", "card-stats-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](158, 0, null, null, 0, "i", [["class", "mdi-social-group-add"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Todays Profit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](161, 0, null, null, 1, "h4", [["class", "card-stats-number"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["53.194"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](164, 0, null, null, 6, "p", [["class", "card-stats-compare"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](165, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["keyboard_arrow_down"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" 5% "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](168, 0, null, null, 1, "span", [["class", "green-text text-lighten-5"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["from yesterday"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](173, 0, null, null, 4, "div", [["class", "card-action  blue-grey darken-2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](175, 0, null, null, 1, "div", [["id", "clients-bar"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](176, 0, null, null, 0, "canvas", [["height", "25"], ["style", "display: inline-block; width: 290px; height: 25px; vertical-align: top;"], ["width", "290"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  \n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"]))], null, null); }
function View_DashboardComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */], [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DashboardComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-dashboard", __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */], View_DashboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, nav) {
        this.authService = authService;
        this.nav = nav;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/detailedinformation/detailedinformation.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/components/detailedinformation/detailedinformation.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_DetailedinformationComponent */
/* unused harmony export View_DetailedinformationComponent_0 */
/* unused harmony export View_DetailedinformationComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedinformationComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detailedinformation_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/detailedinformation/detailedinformation.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailedinformation_component__ = __webpack_require__("../../../../../src/app/components/detailedinformation/detailedinformation.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_DetailedinformationComponent = [__WEBPACK_IMPORTED_MODULE_0__detailedinformation_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_DetailedinformationComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_DetailedinformationComponent, data: {} });

function View_DetailedinformationComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  detailedinformation works!\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_DetailedinformationComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-detailedinformation", [], null, null, null, View_DetailedinformationComponent_0, RenderType_DetailedinformationComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__detailedinformation_component__["a" /* DetailedinformationComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DetailedinformationComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-detailedinformation", __WEBPACK_IMPORTED_MODULE_2__detailedinformation_component__["a" /* DetailedinformationComponent */], View_DetailedinformationComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/detailedinformation/detailedinformation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedinformationComponent; });
var DetailedinformationComponent = /** @class */ (function () {
    function DetailedinformationComponent() {
    }
    DetailedinformationComponent.prototype.ngOnInit = function () {
    };
    return DetailedinformationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".color[_ngcontent-%COMP%]{\r\n  background: #16222A;    \r\nbackground: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\nbackground: linear-gradient(to left, #3A6073, #16222A); \r\n}"];



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_FooterComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_FooterComponent_0;
/* unused harmony export View_FooterComponent_Host_0 */
/* unused harmony export FooterComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_FooterComponent = [__WEBPACK_IMPORTED_MODULE_0__footer_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_FooterComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_FooterComponent, data: {} });

function View_FooterComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 50, "footer", [["class", "page-footer color"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 38, "div", [["class", "container "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 35, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 7, "div", [["class", "col l6 s12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 1, "h5", [["class", "white-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Footer Content"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "p", [["class", "grey-text text-lighten-4"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["You can use rows and columns here to organize your footer content."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](15, 0, null, null, 23, "div", [["class", "col l4 offset-l2 s12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 1, "h5", [["class", "white-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Links"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 17, "ul", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](23, 0, null, null, 1, "a", [["class", "grey-text text-lighten-3"], ["href", "#!"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Link 1"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](27, 0, null, null, 1, "a", [["class", "grey-text text-lighten-3"], ["href", "#!"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Link 2"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](31, 0, null, null, 1, "a", [["class", "grey-text text-lighten-3"], ["href", "#!"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Link 3"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](34, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](35, 0, null, null, 1, "a", [["class", "grey-text text-lighten-3"], ["href", "#!"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Link 4"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](42, 0, null, null, 7, "div", [["class", "footer-copyright"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](44, 0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      \u00A9 2018 Copyright Emil Falk\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](46, 0, null, null, 1, "a", [["class", "grey-text text-lighten-4 right"], ["href", "#!"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["More Links"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "]))], null, null); }
function View_FooterComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_FooterComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nav.visible; _ck(_v, 1, 0, currVal_0); }, null); }
function View_FooterComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */], [__WEBPACK_IMPORTED_MODULE_4__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FooterComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-footer", __WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */], View_FooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");

var FooterComponent = /** @class */ (function () {
    function FooterComponent(nav) {
        this.nav = nav;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".main-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 100px 10px;\r\n}\r\n\r\n.color[_ngcontent-%COMP%]{\r\n  background: #16222A;    \r\n  background: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\n  background: linear-gradient(to left, #3A6073, #16222A); \r\n  \r\n}\r\n\r\n.homeimage[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n}\r\n\r\n.info-boxes[_ngcontent-%COMP%]{\r\nbackground: #f5f5f5;\r\nborder-top: #6c747f solid 1px;\r\nborder-bottom: #6c747f solid 1px;\r\npadding: 50px 0px;\r\n\r\n}\r\n\r\n.info-icon[_ngcontent-%COMP%]{\r\n  height: 100px;\r\n  width: 100px;\r\n  border: 3px solid #F62D51;\r\n  border-radius: 1000px;\r\n  text-align: center;\r\n  margin: 70px auto 0;\r\n}\r\n\r\n.info-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #F62D51;\r\n  font-size: 50px;\r\n  line-height: 96px;\r\n}\r\n\r\n.info-title[_ngcontent-%COMP%]{\r\n  padding-top: 20px;\r\n  text-align: center;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.info-description[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  color: #6c747f;\r\n}\r\n\r\n.statements[_ngcontent-%COMP%]{\r\n  padding:50px 0;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_HomeComponent */
/* unused harmony export View_HomeComponent_0 */
/* unused harmony export View_HomeComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/home/home.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_HomeComponent = [__WEBPACK_IMPORTED_MODULE_0__home_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_HomeComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 24, "div", [["class", "main-header"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 21, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 18, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 3, "div", [["class", "col s6"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 0, "img", [["class", "homeimage"], ["src", "../../../assets/img/slack.png"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 10, "div", [["class", "col s6 left-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Gather all your information"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](16, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Pilea is a system for companies to manage all their data in one place."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 1, "a", [["class", "waves-effect waves-light color btn"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Get started"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 130, "section", [["class", ""], ["id", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["  \n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, null, 49, "div", [["class", "row info-boxes"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 1, "h4", [["class", "center-align homeh4"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Why Choose us?"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](33, 0, null, null, 13, "div", [["class", "col l3 offset-l1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](35, 0, null, null, 4, "div", [["class", "info-icon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](37, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["people"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](41, 0, null, null, 1, "div", [["class", "info-title center-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            Manage employees\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](44, 0, null, null, 1, "div", [["class", "info-description "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          Create a list with all your employees and their information to manage it.\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](48, 0, null, null, 13, "div", [["class", "col l4 "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](50, 0, null, null, 4, "div", [["class", "info-icon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](52, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["chat_bubble"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](56, 0, null, null, 1, "div", [["class", "info-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n           Internal Chat system\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](59, 0, null, null, 1, "div", [["class", "info-description"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            Benefit from an internal chat system, so your employees can write with eachother. \n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](63, 0, null, null, 13, "div", [["class", "col l3 "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](65, 0, null, null, 4, "div", [["class", "info-icon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](67, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["schedule"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](71, 0, null, null, 1, "div", [["class", "info-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n             Time saver\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](74, 0, null, null, 1, "div", [["class", "info-description"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              All your company needs in one place, this is the perfect tool to keep all your information stored and save a lot of time!\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    \n    \n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](79, 0, null, null, 76, "div", [["class", "row statements"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](81, 0, null, null, 1, "h4", [["class", "center-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Listen to our customers"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](84, 0, null, null, 22, "div", [["class", "col s12 m6 l3 offset-l1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](86, 0, null, null, 19, "div", [["class", "card-panel grey lighten-5 z-depth-1 hoverable"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](88, 0, null, null, 16, "div", [["class", "row valign-wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](90, 0, null, null, 4, "div", [["class", "col s2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](92, 0, null, null, 0, "img", [["alt", ""], ["class", "circle responsive-img"], ["src", "../../../assets/img/yuna.jpg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](96, 0, null, null, 7, "div", [["class", "col s10"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](98, 0, null, null, 4, "span", [["class", "black-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](100, 0, null, null, 1, "blockquote", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                      This is a square image. Add the \"circle\" class to it to make it appear circular.\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](108, 0, null, null, 22, "div", [["class", "col s12 m6 offset-m2 l4 "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](110, 0, null, null, 19, "div", [["class", "card-panel grey lighten-5 z-depth-1 hoverable"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](112, 0, null, null, 16, "div", [["class", "row valign-wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](114, 0, null, null, 4, "div", [["class", "col s2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](116, 0, null, null, 0, "img", [["alt", ""], ["class", "circle responsive-img"], ["src", "../../../assets/img/yuna.jpg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](120, 0, null, null, 7, "div", [["class", "col s10"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](122, 0, null, null, 4, "span", [["class", "black-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](124, 0, null, null, 1, "blockquote", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                      This is an example quotation that uses the blockquote tag.Learn more now!\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](132, 0, null, null, 22, "div", [["class", "col s12 m6 offset-m2 l3 "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](134, 0, null, null, 19, "div", [["class", "card-panel grey lighten-5 z-depth-1 hoverable"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](136, 0, null, null, 16, "div", [["class", "row valign-wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](138, 0, null, null, 4, "div", [["class", "col s2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](140, 0, null, null, 0, "img", [["alt", ""], ["class", "circle responsive-img"], ["src", "../../../assets/img/yuna.jpg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](144, 0, null, null, 7, "div", [["class", "col s10"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](146, 0, null, null, 4, "span", [["class", "black-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](148, 0, null, null, 1, "blockquote", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                        This is an example quotation that uses the blockquote tag.Learn more now!\n                      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"]))], null, null); }
function View_HomeComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */], [__WEBPACK_IMPORTED_MODULE_3__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-home", __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");

var HomeComponent = /** @class */ (function () {
    function HomeComponent(nav) {
        this.nav = nav;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".login-wrapper[_ngcontent-%COMP%]{\r\n  width: 100vw;\r\n  height: 100vh !important;\r\n  background: #16222A;    \r\nbackground: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\nbackground: linear-gradient(to left, #3A6073, #16222A); \r\n\r\n\r\n  \r\n}\r\n\r\n.login-section[_ngcontent-%COMP%]{\r\n  width:300px;\r\n  margin: auto;\r\n}\r\n\r\nh5[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n}\r\n\r\n.color[_ngcontent-%COMP%]{\r\n  background: #16222A;    \r\nbackground: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\nbackground: linear-gradient(to left, #3A6073, #16222A); \r\n}\r\n\r\n.login-row[_ngcontent-%COMP%]{\r\n  height: 60px;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]{\r\n  margin: 5px 0px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .loginInput[_ngcontent-%COMP%]{\r\n  width: calc(100% - 3rem);\r\n  margin-left: 3rem;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .extralinks[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n\r\n.loginIcon[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  font-size: 2rem;\r\n  margin-top: 20px;\r\n}\r\n\r\n.loginLabel[_ngcontent-%COMP%]{\r\n  color: #9e9e9e;\r\n    position: absolute;\r\n    top: 0.8rem;\r\n    left: 0.75rem;\r\n    font-size: 1rem;\r\n    cursor: text;\r\n    margin-left: 3rem;   \r\n}\r\n\r\n\r\n\r\n.input-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: #000;\r\n}\r\n\r\n\r\n\r\n.input-field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%] {\r\n  color: #000;\r\n}\r\n\r\n\r\n\r\n.input-field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\r\n  border-bottom: 1px solid #000;\r\n  -webkit-box-shadow: 0 1px 0 0 #000;\r\n          box-shadow: 0 1px 0 0 #000;\r\n}\r\n\r\n\r\n\r\n.input-field[_ngcontent-%COMP%]   input[type=text].valid[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n  -webkit-box-shadow: 0 1px 0 0 #000;\r\n          box-shadow: 0 1px 0 0 #000;\r\n}\r\n\r\n\r\n\r\n.input-field[_ngcontent-%COMP%]   input[type=text].invalid[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n  -webkit-box-shadow: 0 1px 0 0 #000;\r\n          box-shadow: 0 1px 0 0 #000;\r\n}\r\n\r\n\r\n\r\n.input-field[_ngcontent-%COMP%]   .prefix.active[_ngcontent-%COMP%] {\r\n  color: #000;\r\n}\r\n\r\n\r\n\r\n.loginBtn[_ngcontent-%COMP%] {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: relative;\r\n  \r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n\r\n.loginBtn[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n\r\n.loginBtn[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.loginBtn[_ngcontent-%COMP%]:active {\r\n  -webkit-box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n          box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n\r\n\r\n.loginBtn--facebook[_ngcontent-%COMP%] {\r\n  background-color: #4C69BA;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4C69BA), to(#3B55A0));\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  \r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n\r\n.loginBtn--facebook[_ngcontent-%COMP%]:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n\r\n.loginBtn--facebook[_ngcontent-%COMP%]:hover, .loginBtn--facebook[_ngcontent-%COMP%]:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#5B7BD5), to(#4864B1));\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n\r\n\r\n\r\n.loginBtn--google[_ngcontent-%COMP%] {\r\n  \r\n  background: #DD4B39;\r\n}\r\n\r\n.loginBtn--google[_ngcontent-%COMP%]:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n\r\n.loginBtn--google[_ngcontent-%COMP%]:hover, .loginBtn--google[_ngcontent-%COMP%]:focus {\r\n  background: #E74B37;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_LoginComponent */
/* unused harmony export View_LoginComponent_0 */
/* unused harmony export View_LoginComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/login/login.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_LoginComponent = [__WEBPACK_IMPORTED_MODULE_0__login_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_LoginComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 96, "div", [["class", "login-wrapper valign-wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 93, "div", [["class", "col s12 z-depth-4 card-panel login-section"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["  \n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 81, "form", [["class", "login-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 6).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 6).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(_co.loginForm) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["p" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](6, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroupDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 7, "div", [["class", "col s12 center-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Pilea"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 1, "p", [["class", "center-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Manage your company now!"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 17, "div", [["class", "row login-row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["           \n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, null, 14, "div", [["class", "input-field col s12 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 1, "i", [["class", "material-icons loginIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["person_outline"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](29, 0, null, null, 5, "input", [["class", "validate loginInput"], ["id", "email"], ["name", "email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 30)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](30, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](32, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](34, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](36, 0, null, null, 1, "label", [["class", "loginLabel"], ["for", "login_email"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Email"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](41, 0, null, null, 17, "div", [["class", "row login-row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](43, 0, null, null, 14, "div", [["class", "input-field col s12 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](45, 0, null, null, 1, "i", [["class", "material-icons loginIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["vpn_key"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](48, 0, null, null, 5, "input", [["class", "validate loginInput"], ["id", "password"], ["name", "password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 49)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](49, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](51, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](53, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](55, 0, null, null, 1, "label", [["class", "loginLabel"], ["for", "login_password"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Password"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](60, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](62, 0, null, null, 1, "button", [["class", "btn color waves-effect waves-light col s12"], ["id", "btnLogin"], ["name", "action"], ["type", "submit"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Login"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](67, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](69, 0, null, null, 7, "div", [["class", "input-field col s6 m6 l6"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](71, 0, null, null, 4, "p", [["class", "margin extralinks"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](72, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 73).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](73, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](74, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Register Now!"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](78, 0, null, null, 5, "div", [["class", "input-field  col s6 m6 l6"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](80, 0, null, null, 2, "p", [["class", "margin right-align extralinks"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](81, 0, null, null, 1, "a", [["href", "page-forgot-password.html"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Forgot password ?"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["          \n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](87, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](89, 0, null, null, 1, "button", [["class", "loginBtn loginBtn--facebook col s12 "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.socialSignIn("facebook") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Sign in with Facebook"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](92, 0, null, null, 1, "button", [["class", "loginBtn loginBtn--google col s12"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.socialSignIn("google") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Sign in with Google"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" \n          \n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    \n    \n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.loginForm; _ck(_v, 6, 0, currVal_7); var currVal_15 = _co.loginForm.controls["email"]; _ck(_v, 32, 0, currVal_15); var currVal_23 = _co.loginForm.controls["password"]; _ck(_v, 51, 0, currVal_23); var currVal_26 = _ck(_v, 74, 0, "/register"); _ck(_v, 73, 0, currVal_26); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).ngClassPending; _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassUntouched; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassTouched; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassPristine; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassDirty; var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassValid; var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassInvalid; var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).ngClassPending; _ck(_v, 29, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).ngClassUntouched; var currVal_17 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).ngClassTouched; var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).ngClassPristine; var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).ngClassDirty; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).ngClassValid; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).ngClassInvalid; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 53).ngClassPending; _ck(_v, 48, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 73).target; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 73).href; _ck(_v, 72, 0, currVal_24, currVal_25); }); }
function View_LoginComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_8_angular5_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_9__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-login", __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, flashMessage, socialAuthService, nav) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.socialAuthService = socialAuthService;
        this.nav = nav;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["n" /* Validators */].email],
            password: ["", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["n" /* Validators */].required],
        });
        this.nav.hide();
    };
    LoginComponent.prototype.onSubmit = function (loginForm) {
        var _this = this;
        console.log(loginForm.value);
        var user = {
            email: loginForm.value.email,
            password: loginForm.value.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'green darken-3', timeout: 5000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'red darken-3', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_4_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_4_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (user) {
            console.log(socialPlatform + " sign in data : ", user);
            _this.authService.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.flashMessage.show('You are now logged in', { cssClass: 'green darken-3', timeout: 5000 });
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'red darken-3', timeout: 5000 });
                    _this.router.navigate(['/login']);
                }
            });
        });
    };
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["nav[_ngcontent-%COMP%]{\r\n  background: #16222A;    \r\nbackground: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\nbackground: linear-gradient(to left, #3A6073, #16222A); \r\n\r\n}"];



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_NavbarComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_NavbarComponent_0;
/* unused harmony export View_NavbarComponent_Host_0 */
/* unused harmony export NavbarComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_NavbarComponent = [__WEBPACK_IMPORTED_MODULE_0__navbar_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_NavbarComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_NavbarComponent, data: {} });

function View_NavbarComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, [[4, 4]], 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](3, 1), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkActive"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 3, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](7, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Dashboard"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/dashboard"); _ck(_v, 2, 0, currVal_2); var currVal_3 = _ck(_v, 7, 0, "active"); _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NavbarComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 7, "a", [["id", "navProfile"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, [[6, 4]], 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](3, 1), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkActive"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 5, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](7, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Profile"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/profile"); _ck(_v, 2, 0, currVal_2); var currVal_3 = _ck(_v, 7, 0, "active"); _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NavbarComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, [[8, 4]], 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](3, 1), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkActive"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 7, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 8, { linksWithHrefs: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](7, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Login"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/login"); _ck(_v, 2, 0, currVal_2); var currVal_3 = _ck(_v, 7, 0, "active"); _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NavbarComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, [[10, 4]], 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](3, 1), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkActive"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 9, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 10, { linksWithHrefs: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](7, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Register "]))], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/register"); _ck(_v, 2, 0, currVal_2); var currVal_3 = _ck(_v, 7, 0, "active"); _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NavbarComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 1, "a", [["href", "#"], ["id", "btnLogout"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onLogoutClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Logout "]))], null, null); }
function View_NavbarComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 35, "nav", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 32, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "a", [["class", "brand-logo"], ["href", "#"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Pilea"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 26, "ul", [["class", "right hide-on-med-and-down"], ["id", "nav-mobile"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 8, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 671744, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](12, 1), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](13, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkActive"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 1, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](16, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Home"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NavbarComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NavbarComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NavbarComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](26, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NavbarComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](29, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NavbarComponent_6)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](32, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 12, 0, "/home"); _ck(_v, 11, 0, currVal_2); var currVal_3 = _ck(_v, 16, 0, "active"); _ck(_v, 13, 0, currVal_3); var currVal_4 = _co.authService.loggedIn(); _ck(_v, 20, 0, currVal_4); var currVal_5 = _co.authService.loggedIn(); _ck(_v, 23, 0, currVal_5); var currVal_6 = !_co.authService.loggedIn(); _ck(_v, 26, 0, currVal_6); var currVal_7 = !_co.authService.loggedIn(); _ck(_v, 29, 0, currVal_7); var currVal_8 = _co.authService.loggedIn(); _ck(_v, 32, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 11).href; _ck(_v, 10, 0, currVal_0, currVal_1); }); }
function View_NavbarComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NavbarComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.nav.visible; _ck(_v, 2, 0, currVal_0); }, null); }
function View_NavbarComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-navbar", [], null, null, null, View_NavbarComponent_0, RenderType_NavbarComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__navbar_component__["a" /* NavbarComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_7__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NavbarComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-navbar", __WEBPACK_IMPORTED_MODULE_4__navbar_component__["a" /* NavbarComponent */], View_NavbarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage, nav) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.nav = nav;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'green lighten-2', timeout: 3000 });
        this.router.navigate(['/home']);
        return false;
    };
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);

var UserActions = /** @class */ (function () {
    function UserActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    UserActions.prototype.getUser = function () {
        this.ngRedux.dispatch({
            type: UserActions.GET_USER
        });
    };
    UserActions.prototype.updateUser = function (user) {
        this.ngRedux.dispatch({
            type: UserActions.UPDATE_USER,
            payload: user
        });
    };
    // GET USER
    UserActions.GET_USER = 'GET_USER';
    UserActions.RECEIVED_USER = 'RECEIVED_USER';
    UserActions.FAILED_RECEVIED_USER = 'FAILED_RECEVIED_USER';
    // UPDATE USER
    UserActions.UPDATE_USER = 'UPDATE_USER';
    UserActions.USER_UPDATED = 'USER_UPDATED';
    UserActions.UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';
    return UserActions;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".redbg[_ngcontent-%COMP%]{\r\n  background-color:#f05053;\r\n}\r\n\r\n.bluebg[_ngcontent-%COMP%]{\r\n  background-color:#2E294E;\r\n}\r\n\r\n.updateProfile-wrapper[_ngcontent-%COMP%]{\r\n  width:400px;\r\n  height: 700px;\r\n}\r\n\r\n.profile-section[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.btnUpdateProfile[_ngcontent-%COMP%]{\r\n  float:right;\r\n  margin-right: -25px;\r\n  margin-top: -46px;\r\n}\r\n\r\n.profile-section[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  margin: 15px auto;\r\n}\r\n\r\n.profile-row[_ngcontent-%COMP%]{\r\n  height: 60px;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]{\r\n  margin: 5px 0px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .profileInput[_ngcontent-%COMP%]{\r\n  width: calc(100% - 3rem);\r\n  margin-left: 3rem;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .extralinks[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n\r\n.profileIcon[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  font-size: 2rem;\r\n  margin-top: 20px;\r\n}\r\n\r\n.profileLabel[_ngcontent-%COMP%]{\r\n  color: #9e9e9e;\r\n    position: absolute;\r\n    top: 0.8rem;\r\n    left: 0.75rem;\r\n    font-size: 1rem;\r\n    cursor: text;\r\n    margin-left: 3rem;   \r\n}"];



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ProfileComponent */
/* unused harmony export View_ProfileComponent_0 */
/* unused harmony export View_ProfileComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_materialize_dist_materialize_directive__ = __webpack_require__("../../../../angular2-materialize/dist/materialize-directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("../../../../@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_redux_store_lib_src_components_ng_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_ProfileComponent = [__WEBPACK_IMPORTED_MODULE_0__profile_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ProfileComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ProfileComponent, data: {} });

function View_ProfileComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 13, "ul", [["class", "collection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "li", [["class", "collection-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](5, null, ["Firstname: ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "li", [["class", "collection-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](8, null, ["Lastname: ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "li", [["class", "collection-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](11, null, ["Email: ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 1, "li", [["class", "collection-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](14, null, ["Phone: ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 2, "button", [["class", "btn-floating btn-large waves-effect bluebg btnUpdateProfile"], ["id", "btnUpdateUser"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["edit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user.firstname; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.user.lastname; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.user.email; _ck(_v, 11, 0, currVal_2); var currVal_3 = _co.user.phone; _ck(_v, 14, 0, currVal_3); }); }
function View_ProfileComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 25, "div", [["class", "row container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h2", [["class", "collection-header center-align"], ["id", "userFirstname"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, null, ["", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 13, "div", [["class", "col s6"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 10, "div", [["class", "card redbg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 7, "div", [["class", "card-content white-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "span", [["class", "card-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["About Me!"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. Test me out!"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["                  \n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 4, "div", [["class", "col s6"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.user; _ck(_v, 23, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user.firstname; var currVal_1 = _co.user.lastname; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_ProfileComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 11, "div", [["class", "col s6"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Upload profile image"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    \n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 0, "input", [["name", "photo"], ["placeholder", "Select file"], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onFileSelected($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 1, "button", [["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onUpload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Upload"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  \n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n\n\n      \n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 115, "div", [["class", "modal updateProfile-wrapper valign-wrapper z-depth-4 card-panel"], ["id", "modal1"], ["materialize", "modal"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](20, 5128192, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_materialize_dist_materialize_directive__["a" /* MaterializeDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]], { materializeParams: [0, "materializeParams"], materializeActions: [1, "materializeActions"], materialize: [2, "materialize"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](21, { dismissible: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](22, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      \n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, null, 109, "div", [["class", "modal-content center-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Update profile"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](29, 0, null, null, 103, "form", [["class", "col s12"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(_co.updateUserForm) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](30, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["p" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](31, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormGroupDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](33, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](35, 0, null, null, 30, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](37, 0, null, null, 14, "div", [["class", "input-field col s6 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](39, 0, null, null, 1, "i", [["class", "material-icons profileIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["person_outline"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](42, 0, null, null, 5, "input", [["class", "validate profileInput"], ["id", "updateFirstname"], ["name", "firstname"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 43)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](43, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](45, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](47, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](49, 0, null, null, 1, "label", [["class", "profileLabel"], ["for", "profile_firstname"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](50, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](53, 0, null, null, 11, "div", [["class", "input-field col s6 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](55, 0, null, null, 5, "input", [["class", "validate profileInput"], ["id", "updateLastname"], ["name", "lastname"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 56)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 56).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 56)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 56)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](56, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](58, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](60, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](62, 0, null, null, 1, "label", [["class", "profileLabel"], ["for", "profile_last_name"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Last Name"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](67, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](69, 0, null, null, 14, "div", [["class", "input-field col s12 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](71, 0, null, null, 1, "i", [["class", "material-icons profileIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["person_outline"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](74, 0, null, null, 5, "input", [["class", "validate profileInput"], ["id", "updatePw"], ["name", "password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 75)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 75).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 75)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 75)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](75, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](77, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](79, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](81, 0, null, null, 1, "label", [["class", "profileLabel"], ["for", "profile_password"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Password"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](86, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](88, 0, null, null, 14, "div", [["class", "input-field col s12 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](90, 0, null, null, 1, "i", [["class", "material-icons profileIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["person_outline"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](93, 0, null, null, 5, "input", [["class", "validate profileInput"], ["id", "updateEmail"], ["name", "email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 94)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 94).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 94)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 94)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](94, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](96, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](98, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](100, 0, null, null, 1, "label", [["class", "profileLabel"], ["for", "profile_email"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Email"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](105, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](107, 0, null, null, 14, "div", [["class", "input-field col s12 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](109, 0, null, null, 1, "i", [["class", "material-icons profileIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["person_outline"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](112, 0, null, null, 5, "input", [["class", "validate profileInput"], ["id", "updatePhone"], ["name", "phone"], ["type", "phone"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 113)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 113).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 113)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 113)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](113, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](115, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](117, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](119, 0, null, null, 1, "label", [["class", "profileLabel"], ["for", "profile_phone"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Phone"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](124, 0, null, null, 1, "button", [["class", "waves-effect  btn-flat"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Close"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](127, 0, null, null, 4, "button", [["class", "modal-action modal-close waves-effect btn-flat"], ["id", "userUpdated"], ["name", "action"], ["type", "submit"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Update\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](129, 0, null, null, 1, "i", [["class", "material-icons right"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["send"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user; _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 22, 0, _ck(_v, 21, 0, false)); var currVal_2 = _co.modalActions; var currVal_3 = "modal"; _ck(_v, 20, 0, currVal_1, currVal_2, currVal_3); var currVal_11 = _co.updateUserForm; _ck(_v, 31, 0, currVal_11); var currVal_19 = _co.updateUserForm.controls["firstname"]; _ck(_v, 45, 0, currVal_19); var currVal_28 = _co.updateUserForm.controls["lastname"]; _ck(_v, 58, 0, currVal_28); var currVal_36 = _co.updateUserForm.controls["password"]; _ck(_v, 77, 0, currVal_36); var currVal_44 = _co.updateUserForm.controls["email"]; _ck(_v, 96, 0, currVal_44); var currVal_52 = _co.updateUserForm.controls["phone"]; _ck(_v, 115, 0, currVal_52); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).ngClassUntouched; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).ngClassTouched; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).ngClassPristine; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).ngClassDirty; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).ngClassValid; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).ngClassInvalid; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 33).ngClassPending; _ck(_v, 29, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).ngClassUntouched; var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).ngClassTouched; var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).ngClassPristine; var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).ngClassDirty; var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).ngClassValid; var currVal_17 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).ngClassInvalid; var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).ngClassPending; _ck(_v, 42, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_20 = _co.user.firstname; _ck(_v, 50, 0, currVal_20); var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 60).ngClassUntouched; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 60).ngClassTouched; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 60).ngClassPristine; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 60).ngClassDirty; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 60).ngClassValid; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 60).ngClassInvalid; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 60).ngClassPending; _ck(_v, 55, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).ngClassUntouched; var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).ngClassTouched; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).ngClassPristine; var currVal_32 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).ngClassDirty; var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).ngClassValid; var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).ngClassInvalid; var currVal_35 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 79).ngClassPending; _ck(_v, 74, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_37 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 98).ngClassUntouched; var currVal_38 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 98).ngClassTouched; var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 98).ngClassPristine; var currVal_40 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 98).ngClassDirty; var currVal_41 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 98).ngClassValid; var currVal_42 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 98).ngClassInvalid; var currVal_43 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 98).ngClassPending; _ck(_v, 93, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43); var currVal_45 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassUntouched; var currVal_46 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassTouched; var currVal_47 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassPristine; var currVal_48 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassDirty; var currVal_49 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassValid; var currVal_50 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassInvalid; var currVal_51 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassPending; _ck(_v, 112, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51); }); }
function View_ProfileComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-profile", [], null, null, null, View_ProfileComponent_0, RenderType_ProfileComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_9__angular_redux_store_lib_src_components_ng_redux__["NgRedux"], __WEBPACK_IMPORTED_MODULE_10__profile_action__["a" /* UserActions */], __WEBPACK_IMPORTED_MODULE_11__services_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["Http"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProfileComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-profile", __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */], View_ProfileComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");









//import { FileUploader } from 'ng2-file-upload';
var URL = "https://safe-badlands-70131.herokuapp.com/upload/";
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, fb, flashMessage, ngRedux, userActions, nav, http) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.flashMessage = flashMessage;
        this.ngRedux = ngRedux;
        this.userActions = userActions;
        this.nav = nav;
        this.http = http;
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedFile = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.show();
        this.userActions.getUser();
        this.ngRedux.select(function (state) { return state.user; }).subscribe(function (res) {
            _this.user = res.user;
            console.log(_this.user);
        });
        this.updateUserForm = this.fb.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* Validators */].email],
            phone: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* Validators */].required],
        });
        this.profileForm = this.fb.group({
            profile_img: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* Validators */].required]
        });
    };
    ProfileComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    ;
    ProfileComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    ProfileComponent.prototype.onSubmit = function (updateUserForm) {
        console.log(updateUserForm);
        if (updateUserForm.valid) {
            console.log(updateUserForm.value);
            var newUser = {
                id: this.user.id,
                firstname: updateUserForm.value.firstname,
                lastname: updateUserForm.value.lastname,
                password: updateUserForm.value.password,
                email: updateUserForm.value.email,
                phone: updateUserForm.value.phone,
            };
            this.userActions.updateUser(newUser);
        }
    };
    ProfileComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    ProfileComponent.prototype.onUpload = function () {
        var fd = new FormData();
        fd.append('photo', this.selectedFile, this.selectedFile.name);
        return this.http.post('/upload', fd).subscribe(function (res) { return console.log(res); });
    };
    ProfileComponent.prototype.uploadImage = function (profileForm) {
        console.log(profileForm);
        this.authService.uploadImage(profileForm);
        console.log(profileForm.value);
    };
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UserReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tassign__ = __webpack_require__("../../../../tassign/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tassign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tassign__);


var INITIAL_STATE = { user: undefined };
function UserReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        // GET USERS CASES
        case __WEBPACK_IMPORTED_MODULE_0__profile_action__["a" /* UserActions */].FAILED_RECEVIED_USER:
            //react to failed users case. 
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__profile_action__["a" /* UserActions */].RECEIVED_USER:
            //action.payload is array of users 
            // I could set loading flag to false.
            console.log('action', action.payload);
            return Object(__WEBPACK_IMPORTED_MODULE_1_tassign__["tassign"])(state, { user: action.payload.user[0] });
        case __WEBPACK_IMPORTED_MODULE_0__profile_action__["a" /* UserActions */].GET_USER:
            return state;
        // UPDATE USER CASES
        case __WEBPACK_IMPORTED_MODULE_0__profile_action__["a" /* UserActions */].UPDATE_USER:
            console.log('action', action.payload);
            //let updatedUser = action.payload;
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__profile_action__["a" /* UserActions */].USER_UPDATED:
            var updatedUser = action.payload;
            return Object(__WEBPACK_IMPORTED_MODULE_1_tassign__["tassign"])(state, { user: updatedUser });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ProjectsComponent */
/* unused harmony export View_ProjectsComponent_0 */
/* unused harmony export View_ProjectsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__projects_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_component__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ProjectsComponent = [__WEBPACK_IMPORTED_MODULE_0__projects_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ProjectsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_ProjectsComponent, data: {} });

function View_ProjectsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  projects works!\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_ProjectsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-projects", [], null, null, null, View_ProjectsComponent_0, RenderType_ProjectsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__projects_component__["a" /* ProjectsComponent */], [__WEBPACK_IMPORTED_MODULE_3__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProjectsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-projects", __WEBPACK_IMPORTED_MODULE_2__projects_component__["a" /* ProjectsComponent */], View_ProjectsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(nav) {
        this.nav = nav;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".register-wrapper[_ngcontent-%COMP%]{\r\n  height: 100vh !important;\r\n  background: #16222A;    \r\nbackground: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\nbackground: linear-gradient(to left, #3A6073, #16222A); \r\n}\r\n\r\n.color[_ngcontent-%COMP%]{\r\n  background: #16222A;    \r\n  background: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\n  background: linear-gradient(to left, #3A6073, #16222A); \r\n}\r\n\r\n.redbg[_ngcontent-%COMP%]{\r\n  background-color:#f05053;\r\n}\r\n\r\n.bluebg[_ngcontent-%COMP%]{\r\n  background-color:#2E294E;\r\n}\r\n\r\n.register-section[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  margin: 15px auto;\r\n}\r\n\r\n.register-row[_ngcontent-%COMP%]{\r\n  height: 60px;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]{\r\n  margin: 5px 0px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .registerInput[_ngcontent-%COMP%]{\r\n  width: calc(100% - 3rem);\r\n  margin-left: 3rem;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .extralinks[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n\r\n.registerIcon[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  font-size: 2rem;\r\n  margin-top: 20px;\r\n}\r\n\r\n.registerLabel[_ngcontent-%COMP%]{\r\n  color: #9e9e9e;\r\n    position: absolute;\r\n    top: 0.8rem;\r\n    left: 0.75rem;\r\n    font-size: 1rem;\r\n    cursor: text;\r\n    margin-left: 3rem;   \r\n}"];



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_RegisterComponent */
/* unused harmony export View_RegisterComponent_0 */
/* unused harmony export View_RegisterComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/register/register.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_RegisterComponent = [__WEBPACK_IMPORTED_MODULE_0__register_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_RegisterComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_RegisterComponent, data: {} });

function View_RegisterComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            Invalid Characters... \n            "]))], null, null); }
function View_RegisterComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              Invalid Characters... \n            "]))], null, null); }
function View_RegisterComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            Password can't be 123\n          "]))], null, null); }
function View_RegisterComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            Password can't be 123\n          "]))], null, null); }
function View_RegisterComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 166, "div", [["class", "register-wrapper valign-wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 163, "div", [["class", "col s12 z-depth-4 card-panel register-section"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    \n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 160, "form", [["enctype", "multipart/form-data"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 7).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(_co.registerForm) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["p" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroupDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 7, "div", [["class", "col s12 center-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](15, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Pilea"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 1, "p", [["class", "center-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Join our community now !"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](23, 0, null, null, 36, "div", [["class", "row register-row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](25, 0, null, null, 17, "div", [["class", "input-field col s6 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](27, 0, null, null, 1, "i", [["class", "material-icons registerIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["person_outline"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 5, "input", [["class", "validate registerInput"], ["id", "firstname"], ["name", "firstname"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 31)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](31, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](33, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](35, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" \n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](37, 0, null, null, 1, "label", [["class", "registerLabel"], ["for", "register_first_name"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["First Name"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](41, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](44, 0, null, null, 14, "div", [["class", "input-field col s6 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](46, 0, null, null, 5, "input", [["class", "validate "], ["id", "lastname"], ["name", "lastname"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 47)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](47, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](49, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](51, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" \n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](53, 0, null, null, 1, "label", [["class", "registerLabel"], ["for", "register_last_name"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Last Name"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](57, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      \n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](61, 0, null, null, 20, "div", [["class", "row register-row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](63, 0, null, null, 17, "div", [["class", "input-field col s12 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](65, 0, null, null, 1, "i", [["class", "material-icons registerIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["lock_outline"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](68, 0, null, null, 5, "input", [["class", "validate registerInput"], ["id", "password"], ["name", "password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 69)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 69).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 69)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 69)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](69, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](71, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](73, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" \n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](75, 0, null, null, 1, "label", [["class", "registerLabel"], ["for", "register_password"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Password"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](79, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](83, 0, null, null, 20, "div", [["class", "row register-row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](85, 0, null, null, 17, "div", [["class", "input-field col s12 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](87, 0, null, null, 1, "i", [["class", "material-icons registerIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["lock_outline"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](90, 0, null, null, 5, "input", [["class", "validate registerInput"], ["id", "password2"], ["name", "password2"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 91)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 91).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 91)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 91)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](91, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](93, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](95, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" \n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](97, 0, null, null, 1, "label", [["class", "registerLabel"], ["for", "register_password2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Password again"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](101, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](105, 0, null, null, 17, "div", [["class", "row register-row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](107, 0, null, null, 14, "div", [["class", "input-field col s12 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](109, 0, null, null, 1, "i", [["class", "material-icons registerIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["mail_outline"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](112, 0, null, null, 5, "input", [["class", "validate registerInput"], ["id", "email"], ["name", "email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 113)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 113).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 113)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 113)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](113, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](115, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](117, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" \n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](119, 0, null, null, 1, "label", [["class", "registerLabel"], ["for", "register_email"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Email"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](124, 0, null, null, 17, "div", [["class", "row register-row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](126, 0, null, null, 14, "div", [["class", "input-field col s12 center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](128, 0, null, null, 1, "i", [["class", "material-icons registerIcon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["local_phone"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](131, 0, null, null, 5, "input", [["class", "validate registerInput"], ["id", "phone"], ["name", "phone"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 132)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 132).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 132)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 132)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](132, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](134, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */], [[8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { form: [0, "form"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControlDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](136, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" \n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](138, 0, null, null, 1, "label", [["class", "registerLabel"], ["for", "register_phone"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["phone"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](144, 0, null, null, 7, "div", [["class", "row register-row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](146, 0, null, null, 4, "div", [["class", "col s12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](148, 0, null, null, 1, "button", [["class", "btn waves-effect waves-light color col s12"], ["id", "btnSignUp"], ["name", "action"], ["type", "submit"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["REGISTER NOW!\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](153, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](155, 0, null, null, 8, "div", [["class", "input-field col s8 offset-s3"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](157, 0, null, null, 5, "p", [["class", "margin extralinks"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Already have an account? "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](159, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 160).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](160, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](161, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Login"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["  \n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      \n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.registerForm; _ck(_v, 7, 0, currVal_7); var currVal_15 = _co.registerForm.controls["firstname"]; _ck(_v, 33, 0, currVal_15); var currVal_16 = ((_co.registerForm.controls.firstname.errors == null) ? null : _co.registerForm.controls.firstname.errors.invalid_characters); _ck(_v, 41, 0, currVal_16); var currVal_24 = _co.registerForm.controls["lastname"]; _ck(_v, 49, 0, currVal_24); var currVal_25 = ((_co.registerForm.controls.lastname.errors == null) ? null : _co.registerForm.controls.lastname.errors.invalid_characters); _ck(_v, 57, 0, currVal_25); var currVal_33 = _co.registerForm.controls["password"]; _ck(_v, 71, 0, currVal_33); var currVal_34 = ((_co.registerForm.controls.password.errors == null) ? null : _co.registerForm.controls.password.errors.invalidPassword); _ck(_v, 79, 0, currVal_34); var currVal_42 = _co.registerForm.controls["password2"]; _ck(_v, 93, 0, currVal_42); var currVal_43 = ((_co.registerForm.controls.password.errors == null) ? null : _co.registerForm.controls.password.errors.invalidPassword); _ck(_v, 101, 0, currVal_43); var currVal_51 = _co.registerForm.controls["email"]; _ck(_v, 115, 0, currVal_51); var currVal_59 = _co.registerForm.controls["phone"]; _ck(_v, 134, 0, currVal_59); var currVal_62 = _ck(_v, 161, 0, "/login"); _ck(_v, 160, 0, currVal_62); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassUntouched; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassTouched; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassPristine; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassDirty; var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassValid; var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassInvalid; var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 35).ngClassPending; _ck(_v, 30, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_17 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 51).ngClassUntouched; var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 51).ngClassTouched; var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 51).ngClassPristine; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 51).ngClassDirty; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 51).ngClassValid; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 51).ngClassInvalid; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 51).ngClassPending; _ck(_v, 46, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 73).ngClassUntouched; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 73).ngClassTouched; var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 73).ngClassPristine; var currVal_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 73).ngClassDirty; var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 73).ngClassValid; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 73).ngClassInvalid; var currVal_32 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 73).ngClassPending; _ck(_v, 68, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_35 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 95).ngClassUntouched; var currVal_36 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 95).ngClassTouched; var currVal_37 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 95).ngClassPristine; var currVal_38 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 95).ngClassDirty; var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 95).ngClassValid; var currVal_40 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 95).ngClassInvalid; var currVal_41 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 95).ngClassPending; _ck(_v, 90, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_44 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassUntouched; var currVal_45 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassTouched; var currVal_46 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassPristine; var currVal_47 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassDirty; var currVal_48 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassValid; var currVal_49 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassInvalid; var currVal_50 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 117).ngClassPending; _ck(_v, 112, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50); var currVal_52 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 136).ngClassUntouched; var currVal_53 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 136).ngClassTouched; var currVal_54 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 136).ngClassPristine; var currVal_55 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 136).ngClassDirty; var currVal_56 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 136).ngClassValid; var currVal_57 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 136).ngClassInvalid; var currVal_58 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 136).ngClassPending; _ck(_v, 131, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58); var currVal_60 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 160).target; var currVal_61 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 160).href; _ck(_v, 159, 0, currVal_60, currVal_61); }); }
function View_RegisterComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-register", [], null, null, null, View_RegisterComponent_0, RenderType_RegisterComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__register_component__["a" /* RegisterComponent */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_8__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_9__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RegisterComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-register", __WEBPACK_IMPORTED_MODULE_5__register_component__["a" /* RegisterComponent */], View_RegisterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_PasswordValidator__ = __webpack_require__("../../../../../src/app/services/PasswordValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_characters_service__ = __webpack_require__("../../../../../src/app/services/validate-characters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");









var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, flashMessage, authService, router, cd, http, nav) {
        this.fb = fb;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.cd = cd;
        this.http = http;
        this.nav = nav;
        this.filesToUpload = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.nav.hide();
        this.registerForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_6__services_validate_characters_service__["a" /* ValidateCharactersService */].validateCharacters, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required]],
            lastname: ["", [__WEBPACK_IMPORTED_MODULE_6__services_validate_characters_service__["a" /* ValidateCharactersService */].validateCharacters, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required]],
            password: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__services_PasswordValidator__["a" /* PasswordValidator */].getPasswordValidator()]],
            password2: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__services_PasswordValidator__["a" /* PasswordValidator */].getPasswordValidator()]],
            email: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].email],
            phone: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required],
        });
    };
    /*upload() {
      const formData: any = new FormData();
      const files: Array<File> = this.filesToUpload;
      console.log(files);
  
      for(let i =0; i < files.length; i++){
          formData.append("uploads[]", files[i], files[i]['name']);
      }
      console.log('form data variable :   '+ formData.toString());
      this.http.post('/users/upload', formData)
          .map(files => files.json())
          .subscribe(files => console.log('files', files))
  }
  
  fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      //this.product.photo = fileInput.target.files[0]['name'];
  }
  */
    RegisterComponent.prototype.onSubmit = function (registerForm) {
        var _this = this;
        if (registerForm.valid) {
            var user_1 = {
                firstname: registerForm.value.firstname,
                lastname: registerForm.value.lastname,
                email: registerForm.value.email,
                phone: registerForm.value.phone,
                password: registerForm.value.password,
            };
            console.log(user_1);
            this.authService.vertifyUserSMS(user_1);
            this.authService.registerUser(user_1).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('You are now registered - Vertify your mail to log in!', { cssClass: 'green lighten-3', timeout: 3000 });
                    _this.router.navigate(['/login']);
                    _this.authService.vertifyUser(user_1.email);
                }
                else {
                    _this.flashMessage.show('There was an error', { cssClass: 'redbg', timeout: 3000 });
                    _this.router.navigate(['/register']);
                }
            });
        }
        else {
            console.log('error');
            this.flashMessage.show('Error', { cssClass: 'red', timeout: 3000 });
        }
    };
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["span.badge.new[_ngcontent-%COMP%]{\r\n  background-color: #f05053;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_SidenavComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_SidenavComponent_0;
/* unused harmony export View_SidenavComponent_Host_0 */
/* unused harmony export SidenavComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidenav_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidenav_component__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("../../../../@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_redux_store_lib_src_components_ng_redux__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_SidenavComponent = [__WEBPACK_IMPORTED_MODULE_0__sidenav_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_SidenavComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_SidenavComponent, data: {} });

function View_SidenavComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 9, "a", [["id", "navUserlist"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](3, 1), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkActive"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 1, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](7, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Employees"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 1, "span", [["class", "new badge color"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["4"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/employess"); _ck(_v, 2, 0, currVal_2); var currVal_3 = _ck(_v, 7, 0, "active"); _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_SidenavComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](2, 671744, [[4, 4]], 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](3, 1), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterLinkActive"], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 3, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](7, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Chat room"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/chatroom"); _ck(_v, 2, 0, currVal_2); var currVal_3 = _ck(_v, 7, 0, "active"); _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).target; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_SidenavComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 42, "ul", [["class", "sidenav sidenav-fixed"], ["id", "slide-out"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 18, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 17, "div", [["class", "user-view"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 3, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 0, "img", [["src", "../../../assets/img/office.jpg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "a", [["href", "#user"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 0, "img", [["alt", "profileimage"], ["class", "circle"], ["src", "../../../assets/img/yuna.jpg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 2, "a", [["href", "#name"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](15, 0, null, null, 1, "span", [["class", "white-text name"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](16, null, ["", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 2, "a", [["href", "#email"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 1, "span", [["class", "white-text email"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](20, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](23, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, null, 0, "div", [["class", "divider"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](27, 0, null, null, 1, "a", [["class", "subheader"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Dashboard"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](31, 0, null, null, 1, "a", [["class", "waves-effect"], ["href", "#!"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Sales overview"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](34, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](35, 0, null, null, 1, "a", [["class", "waves-effect"], ["href", "#!"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Inventory"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_SidenavComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](39, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_SidenavComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](42, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.authService.loggedIn(); _ck(_v, 39, 0, currVal_3); var currVal_4 = _co.authService.loggedIn(); _ck(_v, 42, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user.firstname; var currVal_1 = _co.user.lastname; _ck(_v, 16, 0, currVal_0, currVal_1); var currVal_2 = _co.user.email; _ck(_v, 20, 0, currVal_2); }); }
function View_SidenavComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-sidenav", [], null, null, null, View_SidenavComponent_0, RenderType_SidenavComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__sidenav_component__["a" /* SidenavComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_6__angular_redux_store_lib_src_components_ng_redux__["NgRedux"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SidenavComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-sidenav", __WEBPACK_IMPORTED_MODULE_4__sidenav_component__["a" /* SidenavComponent */], View_SidenavComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(authService, ngRedux) {
        this.authService = authService;
        this.ngRedux = ngRedux;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('user');
        console.log(this.user);
        this.user = JSON.parse(this.user);
        console.log(this.user);
    };
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_StatsComponent */
/* unused harmony export View_StatsComponent_0 */
/* unused harmony export View_StatsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stats_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stats_component__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_StatsComponent = [__WEBPACK_IMPORTED_MODULE_0__stats_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_StatsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_StatsComponent, data: {} });

function View_StatsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  stats works!\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_StatsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-stats", [], null, null, null, View_StatsComponent_0, RenderType_StatsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__stats_component__["a" /* StatsComponent */], [__WEBPACK_IMPORTED_MODULE_3__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var StatsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-stats", __WEBPACK_IMPORTED_MODULE_2__stats_component__["a" /* StatsComponent */], View_StatsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");

var StatsComponent = /** @class */ (function () {
    function StatsComponent(nav) {
        this.nav = nav;
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    return StatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/userdetails/userdetails.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".redbg[_ngcontent-%COMP%]{\r\n  background-color:#f05053;\r\n}\r\n\r\n.bluebg[_ngcontent-%COMP%]{\r\n  background-color:#2E294E;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/components/userdetails/userdetails.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_UserdetailsComponent */
/* unused harmony export View_UserdetailsComponent_0 */
/* unused harmony export View_UserdetailsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userdetails_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/userdetails/userdetails.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userdetails_component__ = __webpack_require__("../../../../../src/app/components/userdetails/userdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("../../../../@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_redux_store_lib_src_components_ng_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_UserdetailsComponent = [__WEBPACK_IMPORTED_MODULE_0__userdetails_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_UserdetailsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_UserdetailsComponent, data: {} });

function View_UserdetailsComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 13, "ul", [["class", "collection"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "li", [["class", "collection-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](5, null, ["Firstname: ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 1, "li", [["class", "collection-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](8, null, ["Lastname: ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 1, "li", [["class", "collection-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](11, null, ["Email: ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 1, "li", [["class", "collection-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](14, null, ["Phone: ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user.firstname; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.user.lastname; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.user.email; _ck(_v, 11, 0, currVal_2); var currVal_3 = _co.user.phone; _ck(_v, 14, 0, currVal_3); }); }
function View_UserdetailsComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 67, "div", [["class", "row container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 1, "h2", [["class", "collection-header center-align"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, null, ["", " ", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 13, "div", [["class", "col s6"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 10, "div", [["class", "card redbg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 7, "div", [["class", "card-content white-text"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](11, 0, null, null, 1, "span", [["class", "card-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["About Me!"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. Test me out!"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["                  \n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 4, "div", [["class", "col s6"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n     \n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 37, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, null, 34, "div", [["class", "col s12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 31, "ul", [["class", "tabs"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](32, 0, null, null, 8, "li", [["class", "tab col s4"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](33, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](34, 671744, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](35, 1), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](36, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterLinkActive"], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 1, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](39, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Stats overview"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](42, 0, null, null, 8, "li", [["class", "tab col s4"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](43, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](44, 671744, [[4, 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](45, 1), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](46, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterLinkActive"], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 3, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](49, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Projects"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](52, 0, null, null, 8, "li", [["class", "tab col s4 disabled"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](53, 0, null, null, 7, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](54, 671744, [[6, 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterLinkWithHref"], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](55, 1), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](56, 1720320, null, 2, __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterLinkActive"], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 5, { links: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpad"](59, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["More information"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](65, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](66, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterOutlet"], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["ChildrenOutletContexts"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.user; _ck(_v, 23, 0, currVal_2); var currVal_5 = _ck(_v, 35, 0, "stats"); _ck(_v, 34, 0, currVal_5); var currVal_6 = _ck(_v, 39, 0, "active"); _ck(_v, 36, 0, currVal_6); var currVal_9 = _ck(_v, 45, 0, "projects"); _ck(_v, 44, 0, currVal_9); var currVal_10 = _ck(_v, 49, 0, "active"); _ck(_v, 46, 0, currVal_10); var currVal_13 = _ck(_v, 55, 0, "detailedinfo"); _ck(_v, 54, 0, currVal_13); var currVal_14 = _ck(_v, 59, 0, "active"); _ck(_v, 56, 0, currVal_14); _ck(_v, 66, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user.firstname; var currVal_1 = _co.user.lastname; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).target; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 34).href; _ck(_v, 33, 0, currVal_3, currVal_4); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).target; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 44).href; _ck(_v, 43, 0, currVal_7, currVal_8); var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54).target; var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 54).href; _ck(_v, 53, 0, currVal_11, currVal_12); }); }
function View_UserdetailsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_UserdetailsComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user; _ck(_v, 1, 0, currVal_0); }, null); }
function View_UserdetailsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-userdetails", [], null, null, null, View_UserdetailsComponent_0, RenderType_UserdetailsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__userdetails_component__["a" /* UserdetailsComponent */], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_7__angular_redux_store_lib_src_components_ng_redux__["NgRedux"], __WEBPACK_IMPORTED_MODULE_8__profile_profile_action__["a" /* UserActions */], __WEBPACK_IMPORTED_MODULE_9__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UserdetailsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-userdetails", __WEBPACK_IMPORTED_MODULE_4__userdetails_component__["a" /* UserdetailsComponent */], View_UserdetailsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/userdetails/userdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");






var UserdetailsComponent = /** @class */ (function () {
    function UserdetailsComponent(route, authService, router, flashMessage, ngRedux, userActions, nav) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.ngRedux = ngRedux;
        this.userActions = userActions;
        this.nav = nav;
        this.id = this.route.snapshot.params.id;
    }
    UserdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.show();
        this.authService.getUserById(this.id).subscribe(function (res) {
            console.log(res);
            _this.user = res.user[0];
            console.log(_this.user);
        });
    };
    return UserdetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users-list/users-list.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);

var UsersActions = /** @class */ (function () {
    function UsersActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    UsersActions.prototype.getAllUsers = function () {
        this.ngRedux.dispatch({
            type: UsersActions.GET_USERS
        });
    };
    UsersActions.prototype.deleteUser = function (id) {
        this.ngRedux.dispatch({
            type: UsersActions.DELETE_USER,
            payload: id
        });
    };
    // GET USER
    UsersActions.GET_USERS = 'GET_USERS';
    UsersActions.RECEIVED_USERS = 'RECEIVED_USERS';
    UsersActions.FAILED_RECEVIED_USERS = 'FAILED_RECEVIED_USERS';
    //Delete User
    UsersActions.DELETE_USER = 'DELETE_USER';
    UsersActions.USER_DELETED = 'USER_DELETED';
    UsersActions.USER_DELETED_FAILED = 'USER_DELETED_FAILED';
    return UsersActions;
}());



/***/ }),

/***/ "../../../../../src/app/components/users-list/users-list.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".redbg[_ngcontent-%COMP%]{\r\n  background-color:#f05053;\r\n}\r\n\r\n.bluebg[_ngcontent-%COMP%]{\r\n  background-color:#2E294E;\r\n}\r\n\r\n.btnaddUserlist[_ngcontent-%COMP%]{\r\n  margin-left: 50px;\r\n}\r\n\r\n.searchbox[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/components/users-list/users-list.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_UsersListComponent */
/* unused harmony export View_UsersListComponent_0 */
/* unused harmony export View_UsersListComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_list_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filterusers_pipe__ = __webpack_require__("../../../../../src/app/filterusers.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_list_component__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("../../../../@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_redux_store_lib_src_components_ng_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_list_action__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_UsersListComponent = [__WEBPACK_IMPORTED_MODULE_0__users_list_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_UsersListComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_UsersListComponent, data: {} });

function View_UsersListComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" No users found "]))], null, null); }
function View_UsersListComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 21, "tr", [["class", "userslist"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](3, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](4, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](7, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](10, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](12, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](13, 0, null, null, 2, "button", [["class", "btn bluebg"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.userDetails(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](14, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["info"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](17, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 2, "button", [["class", "btn btnDeleteUser redbg"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteUser(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](19, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["delete"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "]))], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v.parent, 1), _v.context.$implicit.firstname)); _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.email; _ck(_v, 7, 0, currVal_1); var currVal_2 = _v.context.$implicit.phone; _ck(_v, 10, 0, currVal_2); }); }
function View_UsersListComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_2__filterusers_pipe__["a" /* FilterusersPipe */], []), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["UpperCasePipe"], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 58, "div", [["class", "userlist-wrapper"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 8, "div", [["class", "collection-header col l6 offset-l3 searchbox"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 5, "input", [["placeholder", "Search for users"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.search = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](1024, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵprd"](2048, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](13, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_UsersListComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 2, "button", [["class", "btn-floating btn-large waves-effect btnaddUserlist redbg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](21, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["add"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  \n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](24, 0, null, null, 35, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](26, 0, null, null, 32, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["      \n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](28, 0, null, null, 29, "table", [["class", "striped centered"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](30, 0, null, null, 19, "thead", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](32, 0, null, null, 16, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](34, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Firstname"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](37, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Email"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](40, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Phone"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](43, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["User info"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](46, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["Delete user"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n          "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](51, 0, null, null, 5, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_UsersListComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](54, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](55, 2), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" \n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    \n"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.search; _ck(_v, 11, 0, currVal_7); var currVal_8 = (_co.users.length === (0 - 1)); _ck(_v, 18, 0, currVal_8); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 54, 0, _ck(_v, 55, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 0), _co.users, _co.search)); _ck(_v, 54, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 13).ngClassPending; _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_UsersListComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-users-list", [], null, null, null, View_UsersListComponent_0, RenderType_UsersListComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__users_list_component__["a" /* UsersListComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* myAuthService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_9__angular_redux_store_lib_src_components_ng_redux__["NgRedux"], __WEBPACK_IMPORTED_MODULE_10__users_list_action__["a" /* UsersActions */], __WEBPACK_IMPORTED_MODULE_11__services_navbar_service__["a" /* NavbarService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UsersListComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-users-list", __WEBPACK_IMPORTED_MODULE_5__users_list_component__["a" /* UsersListComponent */], View_UsersListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/components/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_list_action__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");






var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(authService, router, flashMessage, ngRedux, usersActions, nav) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.ngRedux = ngRedux;
        this.usersActions = usersActions;
        this.nav = nav;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.show();
        this.usersActions.getAllUsers();
        this.ngRedux.select(function (state) { return state.users; }).subscribe(function (res) {
            _this.users = res.users;
            //console.log(this.users)
        });
    };
    UsersListComponent.prototype.userDetails = function (id) {
        this.router.navigate(['userdetails/', id]);
    };
    UsersListComponent.prototype.deleteUser = function (id) {
        this.usersActions.deleteUser(id);
    };
    return UsersListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users-list/users-list.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UsersReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_list_action__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tassign__ = __webpack_require__("../../../../tassign/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tassign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tassign__);


var INITIAL_STATE = { users: [] };
function UsersReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        // GET ALL USERS 
        case __WEBPACK_IMPORTED_MODULE_0__users_list_action__["a" /* UsersActions */].GET_USERS:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__users_list_action__["a" /* UsersActions */].RECEIVED_USERS:
            //console.log('action payload',action.payload.users) 
            return Object(__WEBPACK_IMPORTED_MODULE_1_tassign__["tassign"])(state, { users: action.payload.users });
        case __WEBPACK_IMPORTED_MODULE_0__users_list_action__["a" /* UsersActions */].FAILED_RECEVIED_USERS:
            //react to failed users case. 
            return state;
        // GET ALL USERS 
        case __WEBPACK_IMPORTED_MODULE_0__users_list_action__["a" /* UsersActions */].DELETE_USER:
            console.log(action.payload);
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__users_list_action__["a" /* UsersActions */].USER_DELETED:
            var remainingUsers = state.users.filter(function (user) { return user.id !== action.payload; });
            return Object(__WEBPACK_IMPORTED_MODULE_1_tassign__["tassign"])(state, { users: remainingUsers });
        case __WEBPACK_IMPORTED_MODULE_0__users_list_action__["a" /* UsersActions */].USER_DELETED_FAILED:
            //react to failed users case. 
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/filterusers.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterusersPipe; });
var FilterusersPipe = /** @class */ (function () {
    function FilterusersPipe() {
    }
    FilterusersPipe.prototype.transform = function (items, args) {
        if (args && items.length > 0) {
            var itemsFound = items.filter(function (item) { return item.firstname && item.firstname.toLowerCase().includes(args.toLocaleLowerCase())
                || item.lastname && item.lastname.toLowerCase().includes(args.toLowerCase())
                || item.email && item.email.toLowerCase().includes(args.toLowerCase()); });
            if (itemsFound && itemsFound.length > 0) {
                return itemsFound;
            }
            else {
                return [-1]; // to display error message (none found) in view.
            }
        }
        return items;
    };
    return FilterusersPipe;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/PasswordValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.getPasswordValidator = function () {
        return function pwValidator(control) {
            // Write code here..
            if (control.value.match(/^123/)) {
                return { invalidPassword: true };
            }
            return null;
        };
    };
    return PasswordValidator;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);



var myAuthService = /** @class */ (function () {
    function myAuthService(http) {
        this.http = http;
    }
    myAuthService.prototype.uploadImage = function (profileImage) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        return this.http.post('users/upload', profileImage, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.vertifyUser = function (to) {
        console.log('Email:', to);
        return this.http.post('users/send', { to: to }).subscribe(function (data) {
            if (data)
                console.log(data);
        });
    };
    myAuthService.prototype.vertifyUserSMS = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        var ApiToken = '$2y$10$XE8PnMXRtvHUbBuaDQPVnugRwUxoOx85SZzoCtoWGwKDnKeK8av7O';
        var data = "apiToken=$2y$10$XE8PnMXRtvHUbBuaDQPVnugRwUxoOx85SZzoCtoWGwKDnKeK8av7O&message=" + user.firstname + "&mobile=" + user.phone;
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post('http://smses.io/api-send-sms.php', data, { headers: headers })
            .subscribe(function (res) { return res.json(); });
    };
    myAuthService.prototype.registerUser = function (user) {
        //console.log('EHEHHEHEHEE',user.get('image'))
        return this.http.post('users/register', user)
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        console.log(user);
        headers.append('Content-type', 'application/json');
        return this.http.post('users/updateUser', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.deleteUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        console.log(id);
        headers.append('Content-type', 'application/json');
        headers.append('id', id);
        return this.http.post('users/deleteUser', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.getUserById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        console.log(id);
        headers.append('Content-type', 'application/json');
        headers.append('id', id);
        return this.http.post('users/getuserbyid', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.getAllUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('users/getAllUsers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    myAuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    myAuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    myAuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return myAuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");


var ChatService = /** @class */ (function () {
    function ChatService(wsService, http) {
        this.wsService = wsService;
        this.http = http;
        this.message = wsService
            .connect()
            .map(function (response) {
            return response;
        });
    }
    ChatService.prototype.sendMessage = function (data) {
        this.message.next(data);
    };
    ChatService.prototype.saveMessage = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //console.log(data)
        headers.append('Content-type', 'application/json');
        return this.http.post('messages/savemessages', { data: data }, { headers: headers }).subscribe(function (res) { return res.json(); });
    };
    ChatService.prototype.getAllMessages = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('messages/getallmessages')
            .map(function (res) { return res.json(); });
    };
    ;
    ChatService.prototype.getUserById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //console.log(id)
        headers.append('id', id);
        return this.http.post('users/getuserbyid', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/services/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.visible = false;
    }
    NavbarService.prototype.hide = function () { this.visible = false; };
    NavbarService.prototype.show = function () { this.visible = true; };
    NavbarService.prototype.toggle = function () { this.visible = !this.visible; };
    return NavbarService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate-characters.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateCharactersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// setup simple regex for white listed characters
var validCharacters = /[^\s\w,.:&\/()+%'`@-]/;
// create your class that extends the angular validator class
var ValidateCharactersService = /** @class */ (function (_super) {
    __extends(ValidateCharactersService, _super);
    function ValidateCharactersService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // create a static method for your validation
    ValidateCharactersService.validateCharacters = function (control) {
        // first check if the control has a value
        if (control.value && control.value.length > 0) {
            // match the control value against the regular expression
            var matches = control.value.match(validCharacters);
            // if there are matches return an object, else return null.
            return matches && matches.length ? { invalid_characters: matches } : null;
        }
        else {
            return null;
        }
    };
    return ValidateCharactersService;
}(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["n" /* Validators */]));



/***/ }),

/***/ "../../../../../src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable__ = __webpack_require__("../../../../rxjs/observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_0_socket_io_client__(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ws_url);
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                console.log('Recieved a message from Websocket');
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        var observer = {
            next: function (data) {
                _this.socket.emit('message', (data));
            }
        };
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Subject */].create(observer, observable);
    };
    return WebsocketService;
}());



/***/ }),

/***/ "../../../../../src/app/store/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserState */
/* unused harmony export UsersState */
/* unused harmony export IAppState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_router__ = __webpack_require__("../../../../@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_reducer__ = __webpack_require__("../../../../../src/app/components/profile/profile.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_users_list_users_list_reducer__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.reducer.ts");




var UserState = /** @class */ (function () {
    function UserState() {
    }
    return UserState;
}());

var UsersState = /** @class */ (function () {
    function UsersState() {
    }
    return UsersState;
}());

var IAppState = /** @class */ (function () {
    function IAppState() {
    }
    return IAppState;
}());

var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    user: __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_reducer__["a" /* UserReducer */],
    users: __WEBPACK_IMPORTED_MODULE_3__components_users_list_users_list_reducer__["a" /* UsersReducer */],
    router: __WEBPACK_IMPORTED_MODULE_0__angular_redux_router__["routerReducer"]
});


/***/ }),

/***/ "../../../../../src/app/users.epic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersEpic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_users_list_users_list_action__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");








var UsersEpic = /** @class */ (function () {
    function UsersEpic(authService) {
        var _this = this;
        this.authService = authService;
        this.getAllUsers = function (action$) {
            return action$.ofType(__WEBPACK_IMPORTED_MODULE_3__components_users_list_users_list_action__["a" /* UsersActions */].GET_USERS) // Listen for this action
                .mergeMap(function (_a) {
                var payload = _a.payload;
                return _this.authService.getAllUsers()
                    .map(function (result) { return ({
                    type: __WEBPACK_IMPORTED_MODULE_3__components_users_list_users_list_action__["a" /* UsersActions */].RECEIVED_USERS,
                    payload: result // Hack: Db contains all data, not just yours.
                }); })
                    .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({
                    type: __WEBPACK_IMPORTED_MODULE_3__components_users_list_users_list_action__["a" /* UsersActions */].FAILED_RECEVIED_USERS,
                    payload: error
                }); });
            });
        };
        this.deleteUser = function (action$) {
            return action$.ofType(__WEBPACK_IMPORTED_MODULE_3__components_users_list_users_list_action__["a" /* UsersActions */].DELETE_USER) // Listen for this action
                .mergeMap(function (_a) {
                var payload = _a.payload;
                return _this.authService.deleteUser(payload)
                    .map(function (result) { return ({
                    type: __WEBPACK_IMPORTED_MODULE_3__components_users_list_users_list_action__["a" /* UsersActions */].USER_DELETED,
                    payload: payload // Hack: Db contains all data, not just yours.
                }); })
                    .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({
                    type: __WEBPACK_IMPORTED_MODULE_3__components_users_list_users_list_action__["a" /* UsersActions */].USER_DELETED_FAILED,
                    payload: error
                }); });
            });
        };
        this.getUser = function (action$) {
            return action$.ofType(__WEBPACK_IMPORTED_MODULE_2__components_profile_profile_action__["a" /* UserActions */].GET_USER) // Listen for this action
                .mergeMap(function (_a) {
                var payload = _a.payload;
                return _this.authService.getProfile()
                    .map(function (result) { return ({
                    type: __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_action__["a" /* UserActions */].RECEIVED_USER,
                    payload: result // Hack: Db contains all data, not just yours.
                }); })
                    .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({
                    type: __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_action__["a" /* UserActions */].FAILED_RECEVIED_USER,
                    payload: error
                }); });
            });
        };
        this.updateUser = function (action$) {
            return action$.ofType(__WEBPACK_IMPORTED_MODULE_2__components_profile_profile_action__["a" /* UserActions */].UPDATE_USER)
                .mergeMap(function (_a) {
                var payload = _a.payload;
                return _this.authService.updateUser(payload)
                    .map(function (result) { return ({
                    type: __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_action__["a" /* UserActions */].USER_UPDATED,
                    payload: payload
                }); })
                    .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({
                    type: __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_action__["a" /* UserActions */].UPDATE_USER_FAILED,
                    payload: error
                }); });
            });
        };
    }
    return UsersEpic;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    ws_url: 'https://safe-badlands-70131.herokuapp.com'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__ = __webpack_require__("../../../../../src/app/app.module.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["j" /* platformBrowser */]().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__["a" /* AppModuleNgFactory */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map