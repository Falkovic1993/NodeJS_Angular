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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chatroom_chatroom_component__ = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_userdetails_userdetails_component__ = __webpack_require__("../../../../../src/app/components/userdetails/userdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_stats_stats_component__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_detailedinformation_detailedinformation_component__ = __webpack_require__("../../../../../src/app/components/detailedinformation/detailedinformation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'employess', component: __WEBPACK_IMPORTED_MODULE_8__components_users_list_users_list_component__["a" /* UsersListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'chatroom', component: __WEBPACK_IMPORTED_MODULE_9__components_chatroom_chatroom_component__["a" /* ChatroomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'userdetails/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_userdetails_userdetails_component__["a" /* UserdetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'employess', pathMatch: 'full' },
            { path: 'stats', component: __WEBPACK_IMPORTED_MODULE_11__components_stats_stats_component__["a" /* StatsComponent */] },
            { path: 'detailedinfo', component: __WEBPACK_IMPORTED_MODULE_12__components_detailedinformation_detailedinformation_component__["a" /* DetailedinformationComponent */] },
            { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_13__components_projects_projects_component__["a" /* ProjectsComponent */] },
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loggedin{\r\n  padding-left: 300px;\r\n}\r\n\r\n\r\n.hide{\r\n  display:none;\r\n}\r\n\r\n\r\n.redbg{\r\n  background-color:#f05053;\r\n}\r\n\r\n\r\n.bluebg{\r\n  background-color:#2E294E;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar header\" [class.loggedin]=\"authService.loggedIn()\" >\n  <app-navbar></app-navbar>\n</div>\n\n<app-sidenav *ngIf=\"authService.loggedIn()\"></app-sidenav>\n\n<div class=\"wrapper main\" [class.loggedin]=\"authService.loggedIn()\">\n    <flash-messages></flash-messages>\n  <router-outlet>\n      \n  </router-outlet>\n  \n</div>\n         \n\n\n\n<div class=\"footer color\" [class.loggedin]=\"authService.loggedIn()\">  \n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* myAuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export getAuthServiceConfigs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_store__ = __webpack_require__("../../../../../src/app/store/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_redux_router__ = __webpack_require__("../../../../@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_redux_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_redux_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_observable__ = __webpack_require__("../../../../redux-observable/lib/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_redux_logger__ = __webpack_require__("../../../../redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__users_epic__ = __webpack_require__("../../../../../src/app/users.epic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_users_list_users_list_action__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_chatroom_chatroom_component__ = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_userdetails_userdetails_component__ = __webpack_require__("../../../../../src/app/components/userdetails/userdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_stats_stats_component__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_detailedinformation_detailedinformation_component__ = __webpack_require__("../../../../../src/app/components/detailedinformation/detailedinformation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__filterusers_pipe__ = __webpack_require__("../../../../../src/app/filterusers.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_PasswordValidator__ = __webpack_require__("../../../../../src/app/services/PasswordValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';




































var AppModule = /** @class */ (function () {
    function AppModule(ngRedux, devTool, ngReduxRouter, usersEpic) {
        this.ngRedux = ngRedux;
        this.devTool = devTool;
        this.ngReduxRouter = ngReduxRouter;
        this.usersEpic = usersEpic;
        var rootEpic = Object(__WEBPACK_IMPORTED_MODULE_11_redux_observable__["a" /* combineEpics */])(this.usersEpic.getUser, this.usersEpic.updateUser, this.usersEpic.getAllUsers, this.usersEpic.deleteUser
        // Each epic is referenced here.
        );
        var middleware = [
            Object(__WEBPACK_IMPORTED_MODULE_11_redux_observable__["b" /* createEpicMiddleware */])(rootEpic), Object(__WEBPACK_IMPORTED_MODULE_12_redux_logger__["createLogger"])({ level: 'info', collapsed: true })
        ];
        this.ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_8__store_store__["a" /* rootReducer */], {}, middleware, [devTool.isEnabled() ? devTool.enhancer() : function (f) { return f; }]);
        ngReduxRouter.initialize();
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_users_list_users_list_component__["a" /* UsersListComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_chatroom_chatroom_component__["a" /* ChatroomComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_userdetails_userdetails_component__["a" /* UserdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_stats_stats_component__["a" /* StatsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_detailedinformation_detailedinformation_component__["a" /* DetailedinformationComponent */],
                __WEBPACK_IMPORTED_MODULE_40__filterusers_pipe__["a" /* FilterusersPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_redux_store__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_redux_router__["NgReduxRouterModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_32_angular5_social_login__["SocialLoginModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__services_auth_service__["a" /* myAuthService */],
                __WEBPACK_IMPORTED_MODULE_42__services_navbar_service__["a" /* NavbarService */],
                __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_action__["a" /* UserActions */],
                __WEBPACK_IMPORTED_MODULE_31__components_users_list_users_list_action__["a" /* UsersActions */],
                __WEBPACK_IMPORTED_MODULE_29__users_epic__["a" /* UsersEpic */],
                __WEBPACK_IMPORTED_MODULE_41__services_PasswordValidator__["a" /* PasswordValidator */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_32_angular5_social_login__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                __WEBPACK_IMPORTED_MODULE_34__services_chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_35__services_websocket_service__["a" /* WebsocketService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_redux_store__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_7__angular_redux_store__["DevToolsExtension"],
            __WEBPACK_IMPORTED_MODULE_9__angular_redux_router__["NgReduxRouter"],
            __WEBPACK_IMPORTED_MODULE_29__users_epic__["a" /* UsersEpic */]])
    ], AppModule);
    return AppModule;
}());

// GOOGLE AND FACEBOOK LGOIN
function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_32_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_32_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_32_angular5_social_login__["FacebookLoginProvider"]("630576007294206")
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_32_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_32_angular5_social_login__["GoogleLoginProvider"]("519676817251-00tmt8ii5s68ll9pgtojc7rcebtbu66e.apps.googleusercontent.com")
        },
    ]);
    return config;
}


/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"row\">\n  <div class=\"col l10 offset-l1\">\n    <div class=\"col l12 center-align\">  \n      <h3>Chat Room</h3>\n    </div>\n    <div class=\"divider\"></div>\n    <table class=\"highlight\">\n      <tbody>\n        <tr *ngFor=\"let message of messages\">\n          <td>\n            <div class=\"chip\">\n              <img src=\"../../../assets/img/yuna.jpg\" alt=\"Contact Person\">\n              {{message.firstname}}\n            </div>\n          </td>\n          <td>{{message.messages}}</td>\n          <td>{{message.date | date }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"row valign-wrapper\">\n      <div class=\"col l9\">\n        <textarea ref-textarea [(ngModel)]=\"message\" rows=\"4\"></textarea>\n      </div>\n      <div class=\"col l3\">\n        <button class=\"btn\" (click)=\"sendMessage(textarea.value)\">send Message</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n        \n\n"

/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    ChatroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* myAuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__["a" /* NavbarService */]])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".redbg{\r\n  background-color:#f05053;\r\n}\r\n\r\n.bluebg{\r\n  background-color:#2E294E;\r\n}\r\n\r\n.btndashboard{\r\n  float:right;\r\n  margin-top:-14px;\r\n  margin-right: -14px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-wrapper row\">\n  <h2 class=\"center-align\">Company Overview</h2>\n  <div class=\"col s12 m6 l5 offset-l1\">\n    <div class=\"card\">\n      <div class=\"card-content  green white-text center\">\n        <p class=\"card-stats-title\"><i class=\"mdi-social-group-add\"></i> New Clients</p>\n        <h4 class=\"card-stats-number\">4</h4>\n        <p class=\"card-stats-compare\"><i class=\"material-icons\">keyboard_arrow_up</i>15% <span class=\"green-text text-lighten-5\">from yesterday</span>\n        </p>\n      </div>\n      <button class=\"btn-floating btn-small waves-effect btndashboard bluebg\"><i class=\"material-icons\">edit</i></button>\n    </div>\n  </div>\n  <div class=\"col s12 m6 l5\">\n      <div class=\"card\">\n        <div class=\"card-content redbg center white-text center\">\n          <p class=\"card-stats-title\"><i class=\"mdi-social-group-add\"></i>Monthly profit</p>\n          <h4 class=\"card-stats-number\">800.231 DKK</h4>\n          <p class=\"card-stats-compare\"><i class=\"material-icons\">keyboard_arrow_down</i> 17% <span class=\"green-text text-lighten-5\">from target this month</span>\n          </p>\n        </div>\n        <button class=\"btn-floating btn-small waves-effect btndashboard bluebg\"><i class=\"material-icons\">edit</i></button>\n      </div>\n    </div>\n    <div class=\"col s12 m6 l3\">\n        <div class=\"card\">\n          <div class=\"card-content  blue-grey white-text center\">\n            <p class=\"card-stats-title\"><i class=\"mdi-social-group-add\"></i>Todays Profit</p>\n            <h4 class=\"card-stats-number\">53.194</h4>\n            <p class=\"card-stats-compare\"><i class=\"material-icons\">keyboard_arrow_down</i> 5% <span class=\"green-text text-lighten-5\">from yesterday</span>\n            </p>\n          </div>\n          <div class=\"card-action  blue-grey darken-2\">\n            <div id=\"clients-bar\"><canvas width=\"290\" height=\"25\" style=\"display: inline-block; width: 290px; height: 25px; vertical-align: top;\"></canvas></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s12 m6 l3\">\n          <div class=\"card\">\n            <div class=\"card-content  blue-grey white-text center\">\n              <p class=\"card-stats-title\"><i class=\"mdi-social-group-add\"></i>Todays Profit</p>\n              <h4 class=\"card-stats-number\">53.194</h4>\n              <p class=\"card-stats-compare\"><i class=\"material-icons\">keyboard_arrow_down</i> 5% <span class=\"green-text text-lighten-5\">from yesterday</span>\n              </p>\n            </div>\n            <div class=\"card-action  blue-grey darken-2\">\n              <div id=\"clients-bar\"><canvas width=\"290\" height=\"25\" style=\"display: inline-block; width: 290px; height: 25px; vertical-align: top;\"></canvas></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col s12 m6 l3\">\n            <div class=\"card\">\n              <div class=\"card-content  blue-grey white-text center\">\n                <p class=\"card-stats-title\"><i class=\"mdi-social-group-add\"></i>Todays Profit</p>\n                <h4 class=\"card-stats-number\">53.194</h4>\n                <p class=\"card-stats-compare\"><i class=\"material-icons\">keyboard_arrow_down</i> 5% <span class=\"green-text text-lighten-5\">from yesterday</span>\n                </p>\n              </div>\n              <div class=\"card-action  blue-grey darken-2\">\n                <div id=\"clients-bar\"><canvas width=\"290\" height=\"25\" style=\"display: inline-block; width: 290px; height: 25px; vertical-align: top;\"></canvas></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col s12 m6 l3\">\n              <div class=\"card\">\n                <div class=\"card-content  blue-grey white-text center\">\n                  <p class=\"card-stats-title\"><i class=\"mdi-social-group-add\"></i>Todays Profit</p>\n                  <h4 class=\"card-stats-number\">53.194</h4>\n                  <p class=\"card-stats-compare\"><i class=\"material-icons\">keyboard_arrow_down</i> 5% <span class=\"green-text text-lighten-5\">from yesterday</span>\n                  </p>\n                </div>\n                <div class=\"card-action  blue-grey darken-2\">\n                  <div id=\"clients-bar\"><canvas width=\"290\" height=\"25\" style=\"display: inline-block; width: 290px; height: 25px; vertical-align: top;\"></canvas></div>\n                </div>\n              </div>\n            </div>\n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, nav) {
        this.authService = authService;
        this.nav = nav;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* myAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_navbar_service__["a" /* NavbarService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/detailedinformation/detailedinformation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/detailedinformation/detailedinformation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  detailedinformation works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/detailedinformation/detailedinformation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedinformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailedinformationComponent = /** @class */ (function () {
    function DetailedinformationComponent() {
    }
    DetailedinformationComponent.prototype.ngOnInit = function () {
    };
    DetailedinformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detailedinformation',
            template: __webpack_require__("../../../../../src/app/components/detailedinformation/detailedinformation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/detailedinformation/detailedinformation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailedinformationComponent);
    return DetailedinformationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color{\r\n  background: #16222A;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\nbackground: linear-gradient(to left, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer color\" *ngIf=\"nav.visible\">\n    <div class=\"container \">\n      <div class=\"row\">\n        <div class=\"col l6 s12\">\n          <h5 class=\"white-text\">Footer Content</h5>\n          <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\n        </div>\n        <div class=\"col l4 offset-l2 s12\">\n          <h5 class=\"white-text\">Links</h5>\n          <ul>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n      © 2018 Copyright Emil Falk\n      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(nav) {
        this.nav = nav;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_navbar_service__["a" /* NavbarService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-header {\r\n  text-align: center;\r\n  padding: 100px 10px;\r\n}\r\n\r\n.color{\r\n  background: #16222A;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\n  background: linear-gradient(to left, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  \r\n}\r\n\r\n.homeimage{\r\n  width: 400px;\r\n}\r\n\r\n.info-boxes{\r\nbackground: #f5f5f5;\r\nborder-top: #6c747f solid 1px;\r\nborder-bottom: #6c747f solid 1px;\r\npadding: 50px 0px;\r\n\r\n}\r\n\r\n.info-icon{\r\n  height: 100px;\r\n  width: 100px;\r\n  border: 3px solid #F62D51;\r\n  border-radius: 1000px;\r\n  text-align: center;\r\n  margin: 70px auto 0;\r\n}\r\n\r\n.info-icon i {\r\n  color: #F62D51;\r\n  font-size: 50px;\r\n  line-height: 96px;\r\n}\r\n\r\n.info-title{\r\n  padding-top: 20px;\r\n  text-align: center;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.info-description{\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  color: #6c747f;\r\n}\r\n\r\n.statements{\r\n  padding:50px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s6\">\n        <img class=\"homeimage\" src=\"../../../assets/img/slack.png\">\n      </div>\n\n      <div class=\"col s6 left-align\">\n          <h2>Gather all your information</h2>\n          <h5>Pilea is a system for companies to manage all their data in one place.</h5>\n          <a class=\"waves-effect waves-light color btn\">Get started</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section id=\"container\" class=\"\">  \n    <div class=\"row info-boxes\">\n      <h4 class=\"center-align homeh4\">Why Choose us?</h4>\n        <div class=\"col l3 offset-l1\">\n          <div class=\"info-icon\">\n            <i class=\"material-icons\">people</i>\n          </div>\n          <div class=\"info-title center-align\">\n            Manage employees\n          </div>\n          <div class=\"info-description \">\n          Create a list with all your employees and their information to manage it.\n        </div>\n        </div>\n        <div class=\"col l4 \">\n          <div class=\"info-icon\">\n            <i class=\"material-icons\">chat_bubble</i>\n          </div>\n          <div class=\"info-title\">\n           Internal Chat system\n          </div>\n          <div class=\"info-description\">\n            Benefit from an internal chat system, so your employees can write with eachother. \n        </div>\n        </div>\n        <div class=\"col l3 \">\n            <div class=\"info-icon\">\n              <i class=\"material-icons\">schedule</i>\n            </div>\n            <div class=\"info-title\">\n             Time saver\n            </div>\n            <div class=\"info-description\">\n              All your company needs in one place, this is the perfect tool to keep all your information stored and save a lot of time!\n          </div>\n          </div>\n    </div>\n    \n    \n    <div class=\"row statements\">\n      <h4 class=\"center-align\">Listen to our customers</h4>\n      <div class=\"col s12 m6 l3 offset-l1\">\n        <div class=\"card-panel grey lighten-5 z-depth-1 hoverable\">\n          <div class=\"row valign-wrapper\">\n            <div class=\"col s2\">\n              <img src=\"../../../assets/img/yuna.jpg\" alt=\"\" class=\"circle responsive-img\"> <!-- notice the \"circle\" class -->\n            </div>\n            <div class=\"col s10\">\n              <span class=\"black-text\">\n                  <blockquote>\n                      This is a square image. Add the \"circle\" class to it to make it appear circular.\n                    </blockquote>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s12 m6 offset-m2 l4 \">\n        <div class=\"card-panel grey lighten-5 z-depth-1 hoverable\">\n          <div class=\"row valign-wrapper\">\n            <div class=\"col s2\">\n              <img src=\"../../../assets/img/yuna.jpg\" alt=\"\" class=\"circle responsive-img\"> <!-- notice the \"circle\" class -->\n            </div>\n            <div class=\"col s10\">\n              <span class=\"black-text\">\n                  <blockquote>\n                      This is an example quotation that uses the blockquote tag.Learn more now!\n                    </blockquote>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s12 m6 offset-m2 l3 \">\n          <div class=\"card-panel grey lighten-5 z-depth-1 hoverable\">\n            <div class=\"row valign-wrapper\">\n              <div class=\"col s2\">\n                <img src=\"../../../assets/img/yuna.jpg\" alt=\"\" class=\"circle responsive-img\"> <!-- notice the \"circle\" class -->\n              </div>\n              <div class=\"col s10\">\n                <span class=\"black-text\">\n                    <blockquote>\n                        This is an example quotation that uses the blockquote tag.Learn more now!\n                      </blockquote>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(nav) {
        this.nav = nav;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_navbar_service__["a" /* NavbarService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-wrapper{\r\n  width: 100vw;\r\n  height: 100vh !important;\r\n  background: #16222A;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\nbackground: linear-gradient(to left, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n\r\n  \r\n}\r\n\r\n.login-section{\r\n  width:300px;\r\n  margin: auto;\r\n}\r\n\r\nh5{\r\n  font-weight: 600;\r\n}\r\n\r\n.color{\r\n  background: #16222A;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\nbackground: linear-gradient(to left, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.login-row{\r\n  height: 60px;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.input-field{\r\n  margin: 5px 0px;\r\n}\r\n\r\n.input-field .loginInput{\r\n  width: calc(100% - 3rem);\r\n  margin-left: 3rem;\r\n}\r\n\r\n.input-field .extralinks{\r\n  font-size: 12px;\r\n}\r\n\r\n.loginIcon{\r\n  position: absolute;\r\n  font-size: 2rem;\r\n  margin-top: 20px;\r\n}\r\n\r\n.loginLabel{\r\n  color: #9e9e9e;\r\n    position: absolute;\r\n    top: 0.8rem;\r\n    left: 0.75rem;\r\n    font-size: 1rem;\r\n    cursor: text;\r\n    margin-left: 3rem;   \r\n}\r\n\r\n/* label color */\r\n\r\n.input-field label {\r\n  color: #000;\r\n}\r\n\r\n/* label focus color */\r\n\r\n.input-field input[type=text]:focus + label {\r\n  color: #000;\r\n}\r\n\r\n/* label underline focus color */\r\n\r\n.input-field input[type=text]:focus {\r\n  border-bottom: 1px solid #000;\r\n  -webkit-box-shadow: 0 1px 0 0 #000;\r\n          box-shadow: 0 1px 0 0 #000;\r\n}\r\n\r\n/* valid color */\r\n\r\n.input-field input[type=text].valid {\r\n  border-bottom: 1px solid #000;\r\n  -webkit-box-shadow: 0 1px 0 0 #000;\r\n          box-shadow: 0 1px 0 0 #000;\r\n}\r\n\r\n/* invalid color */\r\n\r\n.input-field input[type=text].invalid {\r\n  border-bottom: 1px solid #000;\r\n  -webkit-box-shadow: 0 1px 0 0 #000;\r\n          box-shadow: 0 1px 0 0 #000;\r\n}\r\n\r\n/* icon prefix focus color */\r\n\r\n.input-field .prefix.active {\r\n  color: #000;\r\n}\r\n\r\n/* Shared */\r\n\r\n.loginBtn {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n\r\n.loginBtn:before {\r\n  content: \"\";\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n\r\n.loginBtn:active {\r\n  -webkit-box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n          box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n/* Facebook */\r\n\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4C69BA), to(#3B55A0));\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#5B7BD5), to(#4864B1));\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n\r\n/* Google */\r\n\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper valign-wrapper\">\n\n  <div class=\"col s12 z-depth-4 card-panel login-section\">  \n    <form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm)\" >\n      <div class=\"row\">\n        <div class=\"col s12 center-align\">\n          <h5>Pilea</h5>\n          <p class=\"center-align\">Manage your company now!</p>\n        </div>\n      </div>\n      <div class=\"row login-row\">           \n            <div class=\"input-field col s12 center\">\n              <i class=\"material-icons loginIcon\">person_outline</i>\n              <input id=\"email\" name=\"email\" [formControl]=\"loginForm.controls['email']\" type=\"email\" class=\"validate loginInput\">\n              <label class=\"loginLabel\" for=\"login_email\">Email</label>\n            </div>\n          </div>\n          <div class=\"row login-row\">\n            <div class=\"input-field col s12 center\">\n              <i class=\"material-icons loginIcon\">vpn_key</i>\n              <input id=\"password\" name=\"password\" [formControl]=\"loginForm.controls['password']\" type=\"password\" class=\"validate loginInput\">\n              <label class=\"loginLabel\" for=\"login_password\">Password</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <button id=\"btnLogin\" class=\"btn color waves-effect waves-light col s12\" type=\"submit\" name=\"action\">Login</button>\n            <!--<p id=\"errMsg\" *ngIf=\"errMsg\">Login didn't match any users</p> -->\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s6 m6 l6\">\n              <p class=\"margin extralinks\"><a [routerLink]=\"['/register']\">Register Now!</a></p>\n            </div>\n            <div class=\"input-field  col s6 m6 l6\">\n              <p class=\"margin right-align extralinks\"><a href=\"page-forgot-password.html\">Forgot password ?</a></p>\n            </div>          \n          </div>\n        </form>\n        <div class=\"row\">\n          <button class=\"loginBtn loginBtn--facebook col s12 \" (click)=\"socialSignIn('facebook')\">Sign in with Facebook</button>\n          <button class=\"loginBtn loginBtn--google col s12\" (click)=\"socialSignIn('google')\">Sign in with Google</button> \n          \n      </div>\n    </div>\n  </div>\n    \n    \n    "

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
            email: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email],
            password: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
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
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID;
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
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* myAuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["AuthService"],
            __WEBPACK_IMPORTED_MODULE_6__services_navbar_service__["a" /* NavbarService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav{\r\n  background: #16222A;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\nbackground: linear-gradient(to left, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav *ngIf=\"nav.visible\" >\n    <div class=\"container\">\n      <a href=\"#\" class=\"brand-logo\">Pilea</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/home']\">Home</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a  [routerLinkActive]=\"['active']\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a id=\"navProfile\"  [routerLinkActive]=\"['active']\" [routerLink]=\"['/profile']\">Profile</a></li>\n        <li *ngIf=\"!authService.loggedIn()\"><a  [routerLinkActive]=\"['active']\" [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\"><a  [routerLinkActive]=\"['active']\" [routerLink]=\"['/register']\"> Register </a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a id=\"btnLogout\" href=\"#\" (click)=\"onLogoutClick()\"> Logout </a></li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* myAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__["a" /* NavbarService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserActions = /** @class */ (function () {
    function UserActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    UserActions_1 = UserActions;
    UserActions.prototype.getUser = function () {
        this.ngRedux.dispatch({
            type: UserActions_1.GET_USER
        });
    };
    UserActions.prototype.updateUser = function (user) {
        this.ngRedux.dispatch({
            type: UserActions_1.UPDATE_USER,
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
    UserActions = UserActions_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]])
    ], UserActions);
    return UserActions;
    var UserActions_1;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".redbg{\r\n  background-color:#f05053;\r\n}\r\n\r\n.bluebg{\r\n  background-color:#2E294E;\r\n}\r\n\r\n.updateProfile-wrapper{\r\n  width:400px;\r\n  height: 700px;\r\n}\r\n\r\n.profile-section{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.btnUpdateProfile{\r\n  float:right;\r\n  margin-right: -25px;\r\n  margin-top: -46px;\r\n}\r\n\r\n.profile-section{\r\n  width: 400px;\r\n  margin: 15px auto;\r\n}\r\n\r\n.profile-row{\r\n  height: 60px;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.input-field{\r\n  margin: 5px 0px;\r\n}\r\n\r\n.input-field .profileInput{\r\n  width: calc(100% - 3rem);\r\n  margin-left: 3rem;\r\n}\r\n\r\n.input-field .extralinks{\r\n  font-size: 12px;\r\n}\r\n\r\n.profileIcon{\r\n  position: absolute;\r\n  font-size: 2rem;\r\n  margin-top: 20px;\r\n}\r\n\r\n.profileLabel{\r\n  color: #9e9e9e;\r\n    position: absolute;\r\n    top: 0.8rem;\r\n    left: 0.75rem;\r\n    font-size: 1rem;\r\n    cursor: text;\r\n    margin-left: 3rem;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row container\" *ngIf=\"user\">\n    <h2 id=\"userFirstname\" class=\"collection-header center-align\">{{user.firstname}} {{user.lastname}}</h2>\n  <div class=\"col s6\">\n      <div class=\"card redbg\">\n          <div class=\"card-content white-text\">\n            <span class=\"card-title\">About Me!</span>\n            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. Test me out!</p>\n          </div>                  \n        </div>\n  </div>\n  <div class=\"col s6\">\n    <div *ngIf=\"user\">\n      <ul class=\"collection\">\n        <li class=\"collection-item\">Firstname: {{user.firstname}}</li>\n        <li class=\"collection-item\">Lastname: {{user.lastname}}</li>\n        <li class=\"collection-item\">Email: {{user.email}}</li>\n        <li class=\"collection-item\">Phone: {{user.phone}}</li>\n      </ul>\n      <button id=\"btnUpdateUser\" class=\"btn-floating btn-large waves-effect bluebg btnUpdateProfile\" (click)=\"openModal()\"><i class=\"material-icons\">edit</i></button>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col s6\">\n    <h2>Upload profile image</h2>\n\n    \n      <input type=\"file\" name='photo' (change)=\"onFileSelected($event)\" placeholder=\"Select file\"/>\n      <br/>\n      <button type=\"button\" (click)=\"onUpload()\">Upload</button>\n  \n\n  </div>\n</div>\n\n\n\n      \n    <div id=\"modal1\" class=\"modal updateProfile-wrapper valign-wrapper z-depth-4 card-panel\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n      \n      <div class=\"modal-content center-align\">\n        <h4>Update profile</h4>\n        <form [formGroup]=\"updateUserForm\" (ngSubmit)=\"onSubmit(updateUserForm)\" class=\"col s12\">\n          <div class=\"row\">\n            <div class=\"input-field col s6 center\">\n                <i class=\"material-icons profileIcon\">person_outline</i>\n              <input id=\"updateFirstname\"  name=\"firstname\" [formControl]=\"updateUserForm.controls['firstname']\" type=\"text\" class=\"validate profileInput\">\n              <label class=\"profileLabel\" for=\"profile_firstname\">Firstname</label>\n            </div>\n            <div class=\"input-field col s6 center\">\n              <input id=\"updateLastname\"  name=\"lastname\" [formControl]=\"updateUserForm.controls['lastname']\" type=\"text\" class=\"validate profileInput\">\n              <label class=\"profileLabel\" for=\"profile_last_name\">Last Name</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12 center\">\n                <i class=\"material-icons profileIcon\">person_outline</i>\n              <input id=\"updatePw\" name=\"password\" [formControl]=\"updateUserForm.controls['password']\" type=\"password\" class=\"validate profileInput\">\n              <label class=\"profileLabel\" for=\"profile_password\">Password</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12 center\">\n                <i class=\"material-icons profileIcon\">person_outline</i>\n              <input id=\"updateEmail\" name=\"email\" [formControl]=\"updateUserForm.controls['email']\" type=\"email\" class=\"validate profileInput\">\n              <label class=\"profileLabel\" for=\"profile_email\">Email</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12 center\">\n                <i class=\"material-icons profileIcon\">person_outline</i>\n              <input id=\"updatePhone\" name=\"phone\" [formControl]=\"updateUserForm.controls['phone']\" type=\"phone\" class=\"validate profileInput\">\n              <label class=\"profileLabel\" for=\"profile_phone\">Phone</label>\n            </div>\n          </div>\n          <button class=\"waves-effect  btn-flat\" (click)=\"closeModal()\">Close</button>\n          <button id=\"userUpdated\" class=\"modal-action modal-close waves-effect btn-flat\" type=\"submit\" name=\"action\">Update\n            <i class=\"material-icons right\">send</i>\n          </button>\n        </form>\n      </div>\n      </div>\n  "

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
            firstname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].email],
            phone: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
        });
        this.profileForm = this.fb.group({
            profile_img: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
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
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* myAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_6__profile_action__["a" /* UserActions */],
            __WEBPACK_IMPORTED_MODULE_7__services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["Http"]])
    ], ProfileComponent);
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
            //console.log('action',action.payload) 
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

/***/ "../../../../../src/app/components/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(nav) {
        this.nav = nav;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_navbar_service__["a" /* NavbarService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-wrapper{\r\n  height: 100vh !important;\r\n  background: #16222A;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\nbackground: linear-gradient(to left, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.color{\r\n  background: #16222A;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: -webkit-gradient(linear, right top, left top, from(#3A6073), to(#16222A));\r\n  background: linear-gradient(to left, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.redbg{\r\n  background-color:#f05053;\r\n}\r\n\r\n.bluebg{\r\n  background-color:#2E294E;\r\n}\r\n\r\n.register-section{\r\n  width: 400px;\r\n  margin: 15px auto;\r\n}\r\n\r\n.register-row{\r\n  height: 60px;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.input-field{\r\n  margin: 5px 0px;\r\n}\r\n\r\n.input-field .registerInput{\r\n  width: calc(100% - 3rem);\r\n  margin-left: 3rem;\r\n}\r\n\r\n.input-field .extralinks{\r\n  font-size: 12px;\r\n}\r\n\r\n.registerIcon{\r\n  position: absolute;\r\n  font-size: 2rem;\r\n  margin-top: 20px;\r\n}\r\n\r\n.registerLabel{\r\n  color: #9e9e9e;\r\n    position: absolute;\r\n    top: 0.8rem;\r\n    left: 0.75rem;\r\n    font-size: 1rem;\r\n    cursor: text;\r\n    margin-left: 3rem;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"register-wrapper valign-wrapper\">\n  <div class=\"col s12 z-depth-4 card-panel register-section\">\n    \n      <form [formGroup]=\"registerForm\" enctype=\"multipart/form-data\" (ngSubmit)=\"onSubmit(registerForm)\">\n          <div class=\"row\">\n              <div class=\"col s12 center-align\">\n                <h5>Pilea</h5>\n                <p class=\"center-align\">Join our community now !</p>\n              </div>\n            </div>\n        <div class=\"row register-row\">\n          <div class=\"input-field col s6 center\">\n            <i class=\"material-icons registerIcon\">person_outline</i>\n            <input id=\"firstname\" name=\"firstname\" [formControl]=\"registerForm.controls['firstname']\" type=\"text\" class=\"validate registerInput\"> \n            <label class=\"registerLabel\" for=\"register_first_name\">First Name</label>\n            <div *ngIf=\"registerForm.controls.firstname.errors?.invalid_characters\">\n            Invalid Characters... \n            </div>\n          </div>\n          <div class=\"input-field col s6 center\">\n            <input id=\"lastname\" name=\"lastname\" [formControl]=\"registerForm.controls['lastname']\" type=\"text\" class=\"validate \"> \n            <label class=\"registerLabel\" for=\"register_last_name\">Last Name</label>\n            <div *ngIf=\"registerForm.controls.lastname.errors?.invalid_characters\">\n              Invalid Characters... \n            </div>\n          </div>\n        </div>\n      \n      <div class=\"row register-row\">\n        <div class=\"input-field col s12 center\">\n            <i class=\"material-icons registerIcon\">lock_outline</i>\n            <input id=\"password\" name=\"password\" [formControl]=\"registerForm.controls['password']\" type=\"password\" class=\"validate registerInput\"> \n          <label class=\"registerLabel\" for=\"register_password\">Password</label>\n          <div *ngIf=\"registerForm.controls.password.errors?.invalidPassword\">\n            Password can't be 123\n          </div>\n        </div>\n      </div>\n      <div class=\"row register-row\">\n        <div class=\"input-field col s12 center\">\n            <i class=\"material-icons registerIcon\">lock_outline</i>\n            <input id=\"password2\" name=\"password2\" [formControl]=\"registerForm.controls['password2']\" type=\"password\" class=\"validate registerInput\"> \n          <label class=\"registerLabel\" for=\"register_password2\">Password again</label>\n          <div *ngIf=\"registerForm.controls.password.errors?.invalidPassword\">\n            Password can't be 123\n          </div>\n        </div>\n      </div>\n      <div class=\"row register-row\">\n        <div class=\"input-field col s12 center\">\n          <i class=\"material-icons registerIcon\">mail_outline</i>\n          <input id=\"email\" name=\"email\" [formControl]=\"registerForm.controls['email']\" type=\"email\" class=\"validate registerInput\"> \n          <label class=\"registerLabel\" for=\"register_email\">Email</label>\n        </div>\n      </div>\n      <div class=\"row register-row\">\n        <div class=\"input-field col s12 center\">\n            <i class=\"material-icons registerIcon\">local_phone</i>\n            <input id=\"phone\" name=\"phone\" [formControl]=\"registerForm.controls['phone']\" type=\"text\" class=\"validate registerInput\"> \n          <label class=\"registerLabel\" for=\"register_phone\">phone</label>\n        </div>\n      </div>\n      <!--\n        <div class=\"row register-row\">\n          <div class=\"file-field input-field col s12\">\n            <div class=\"btn\">\n              <span>File</span>\n              <input type=\"file\" [formControl]=\"registerForm.controls['image']\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload a file...\" multiple/>\n            </div>\n          </div>\n        </div>\n      -->\n      <div class=\"row register-row\">\n        <div class=\"col s12\">\n          <button class=\"btn waves-effect waves-light color col s12\" type=\"submit\" name=\"action\" id=\"btnSignUp\">REGISTER NOW!\n          </button>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"input-field col s8 offset-s3\">\n            <p class=\"margin extralinks\">Already have an account? <a [routerLink]=\"['/login']\">Login</a></p>\n          </div>  \n        </div>\n      \n      </form>\n    </div>\n  </div>\n\n"

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_6__services_validate_characters_service__["a" /* ValidateCharactersService */].validateCharacters, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            lastname: ["", [__WEBPACK_IMPORTED_MODULE_6__services_validate_characters_service__["a" /* ValidateCharactersService */].validateCharacters, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            password: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__services_PasswordValidator__["a" /* PasswordValidator */].getPasswordValidator()]],
            password2: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__services_PasswordValidator__["a" /* PasswordValidator */].getPasswordValidator()]],
            email: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email],
            phone: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
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
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* myAuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_8__services_navbar_service__["a" /* NavbarService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\nspan.badge.new{\r\n  background-color: #f05053;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <ul id=\"slide-out\" class=\"sidenav sidenav-fixed\">\n        <li><div class=\"user-view\">\n          <div class=\"background\">\n            <img src=\"../../../assets/img/office.jpg\">\n          </div>\n          <a href=\"#user\"><img alt=\"profileimage\" class=\"circle\" src=\"../uploads/profildd.jpg\"></a>\n          <a href=\"#name\"><span class=\"white-text name\">{{user.firstname}} {{user.lastname}}</span></a>\n          <a href=\"#email\"><span class=\"white-text email\">{{user.email}}</span></a>\n        </div></li>\n        <li><div class=\"divider\"></div></li>\n        <li><a class=\"subheader\">Dashboard</a></li>\n        <li><a class=\"waves-effect\" href=\"#!\">Sales overview</a></li>\n        <li><a class=\"waves-effect\" href=\"#!\">Inventory</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a id=\"navUserlist\"  [routerLinkActive]=\"['active']\" [routerLink]=\"['/employess']\">Employees<span class=\"new badge color\">4</span></a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a  [routerLinkActive]=\"['active']\" [routerLink]=\"['/chatroom']\">Chat room</a></li>\n      </ul>"

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(authService, ngRedux, userActions) {
        this.authService = authService;
        this.ngRedux = ngRedux;
        this.userActions = userActions;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this.user = localStorage.getItem('user');
         console.log(this.user)
         this.user = JSON.parse(this.user)
         console.log(this.user)
     */
        this.userActions.getUser();
        this.ngRedux.select(function (state) { return state.user; }).subscribe(function (res) {
            _this.user = res.user;
            console.log(_this.user);
        });
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* myAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_3__profile_profile_action__["a" /* UserActions */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  stats works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatsComponent = /** @class */ (function () {
    function StatsComponent(nav) {
        this.nav = nav;
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__("../../../../../src/app/components/stats/stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_navbar_service__["a" /* NavbarService */]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/userdetails/userdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".redbg{\r\n  background-color:#f05053;\r\n}\r\n\r\n.bluebg{\r\n  background-color:#2E294E;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/userdetails/userdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row container\" *ngIf=\"user\">\n    <h2 class=\"collection-header center-align\">{{user.firstname}} {{user.lastname}}</h2>\n  <div class=\"col s6\">\n      <div class=\"card redbg\">\n          <div class=\"card-content white-text\">\n            <span class=\"card-title\">About Me!</span>\n            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. Test me out!</p>\n          </div>                  \n        </div>\n  </div>\n  <div class=\"col s6\">\n    <div *ngIf=\"user\">\n      <ul class=\"collection\">\n        <li class=\"collection-item\">Firstname: {{user.firstname}}</li>\n        <li class=\"collection-item\">Lastname: {{user.lastname}}</li>\n        <li class=\"collection-item\">Email: {{user.email}}</li>\n        <li class=\"collection-item\">Phone: {{user.phone}}</li>\n      </ul>\n    </div>\n     \n  </div>\n\n  <div class=\"row\">\n      <div class=\"col s12\">\n        <ul class=\"tabs\">\n          <li class=\"tab col s4\"><a [routerLinkActive]=\"['active']\" [routerLink]=\"['stats']\">Stats overview</a></li>\n          <li class=\"tab col s4\"><a [routerLinkActive]=\"['active']\" [routerLink]=\"['projects']\"> Projects</a></li>\n          <li class=\"tab col s4 disabled\"><a [routerLinkActive]=\"['active']\" [routerLink]=\"['detailedinfo']\">More information</a></li>\n        </ul>\n      </div>\n</div>\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/userdetails/userdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
    UserdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userdetails',
            template: __webpack_require__("../../../../../src/app/components/userdetails/userdetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/userdetails/userdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* myAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_5__profile_profile_action__["a" /* UserActions */],
            __WEBPACK_IMPORTED_MODULE_6__services_navbar_service__["a" /* NavbarService */]])
    ], UserdetailsComponent);
    return UserdetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users-list/users-list.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersActions = /** @class */ (function () {
    function UsersActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    UsersActions_1 = UsersActions;
    UsersActions.prototype.getAllUsers = function () {
        this.ngRedux.dispatch({
            type: UsersActions_1.GET_USERS
        });
    };
    UsersActions.prototype.deleteUser = function (id) {
        this.ngRedux.dispatch({
            type: UsersActions_1.DELETE_USER,
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
    UsersActions = UsersActions_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]])
    ], UsersActions);
    return UsersActions;
    var UsersActions_1;
}());



/***/ }),

/***/ "../../../../../src/app/components/users-list/users-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".redbg{\r\n  background-color:#f05053;\r\n}\r\n\r\n.bluebg{\r\n  background-color:#2E294E;\r\n}\r\n\r\n.btnaddUserlist{\r\n  margin-left: 50px;\r\n}\r\n\r\n.searchbox{\r\n  margin-top: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"userlist-wrapper\">\n  <div class=\"row\">\n\n    <div class=\"collection-header col l6 offset-l3 searchbox\">\n      <input type=\"text\" [(ngModel)]=\"search\" placeholder=\"Search for users\">\n    </div>\n  </div>\n  \n\n  <button class=\"btn-floating btn-large waves-effect btnaddUserlist redbg\"><i class=\"material-icons\">add</i></button>\n  \n  <div class=\"container\" >\n    <div class=\"row\">      \n      <table class=\"striped centered\">\n        <thead>\n          <tr>\n            <th>Firstname</th>\n            <th>Email</th>\n            <th>Phone</th>\n            <th>User info</th>\n            <th>Delete user</th>\n          </tr>\n        </thead>\n      <tbody>\n        <tr class=\"userslist\" *ngFor='let user of users | filterusers: search'>\n         \n          <td>{{user.firstname | uppercase}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.phone}}</td>\n          <td *ngIf=\"user !== -1\"><button class=\"btn bluebg\" (click)='userDetails(user.id)'><i class=\"material-icons\">info</i></button></td>\n          <td *ngIf=\"user !== -1\"><button class=\"btn btnDeleteUser redbg\" (click)='deleteUser(user.id)'><i class=\"material-icons\">delete</i></button></td>\n          <div *ngIf=\"user === -1\"> <h3 class=\"center-align\">No users found </h3></div>\n        </tr>\n    \n      </tbody>\n      \n    </table>\n    </div> \n  </div>\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_list_action__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
    UsersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__("../../../../../src/app/components/users-list/users-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users-list/users-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* myAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_5__users_list_action__["a" /* UsersActions */],
            __WEBPACK_IMPORTED_MODULE_6__services_navbar_service__["a" /* NavbarService */]])
    ], UsersListComponent);
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
            // console.log(action.payload)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    FilterusersPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterusers'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FilterusersPipe);
    return FilterusersPipe;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* myAuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthGuard);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var myAuthService = /** @class */ (function () {
    function myAuthService(http) {
        this.http = http;
    }
    myAuthService.prototype.uploadImage = function (profileImage) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var ApiToken = '$2y$10$XE8PnMXRtvHUbBuaDQPVnugRwUxoOx85SZzoCtoWGwKDnKeK8av7O';
        var data = "apiToken=$2y$10$XE8PnMXRtvHUbBuaDQPVnugRwUxoOx85SZzoCtoWGwKDnKeK8av7O&message=" + user.firstname + "&mobile=" + user.phone;
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post('users/sendSMS', data, { headers: headers })
            .subscribe(function (res) { return res.json(); });
        //return this.http.post('http://smses.io/api-send-sms.php', data , {headers:headers})
        //  .subscribe(res => res.json());
    };
    myAuthService.prototype.registerUser = function (user) {
        //console.log('EHEHHEHEHEE',user.get('image'))
        return this.http.post('users/register', user)
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        console.log(user);
        headers.append('Content-type', 'application/json');
        return this.http.post('users/updateUser', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.deleteUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        console.log(id);
        headers.append('Content-type', 'application/json');
        headers.append('id', id);
        return this.http.post('users/deleteUser', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.getUserById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        console.log(id);
        headers.append('Content-type', 'application/json');
        headers.append('id', id);
        return this.http.post('users/getuserbyid', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    myAuthService.prototype.getAllUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
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
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    myAuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    myAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], myAuthService);
    return myAuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //console.log(data)
        headers.append('Content-type', 'application/json');
        return this.http.post('messages/savemessages', { data: data }, { headers: headers }).subscribe(function (res) { return res.json(); });
    };
    ChatService.prototype.getAllMessages = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('messages/getallmessages')
            .map(function (res) { return res.json(); });
    };
    ;
    ChatService.prototype.getUserById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        //console.log(id)
        headers.append('id', id);
        return this.http.post('users/getuserbyid', id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/services/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.visible = false;
    }
    NavbarService.prototype.hide = function () { this.visible = false; };
    NavbarService.prototype.show = function () { this.visible = true; };
    NavbarService.prototype.toggle = function () { this.visible = !this.visible; };
    NavbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavbarService);
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
}(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */]));



/***/ }),

/***/ "../../../../../src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable__ = __webpack_require__("../../../../rxjs/observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].ws_url);
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_observable__["Observable"](function (observer) {
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
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Subject */].create(observer, observable);
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_action__ = __webpack_require__("../../../../../src/app/components/profile/profile.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_users_list_users_list_action__ = __webpack_require__("../../../../../src/app/components/users-list/users-list.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UsersEpic = /** @class */ (function () {
    function UsersEpic(authService) {
        var _this = this;
        this.authService = authService;
        this.getAllUsers = function (action$) {
            return action$.ofType(__WEBPACK_IMPORTED_MODULE_4__components_users_list_users_list_action__["a" /* UsersActions */].GET_USERS)
                .mergeMap(function (_a) {
                var payload = _a.payload;
                return _this.authService.getAllUsers()
                    .map(function (result) { return ({
                    type: __WEBPACK_IMPORTED_MODULE_4__components_users_list_users_list_action__["a" /* UsersActions */].RECEIVED_USERS,
                    payload: result
                }); })
                    .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({
                    type: __WEBPACK_IMPORTED_MODULE_4__components_users_list_users_list_action__["a" /* UsersActions */].FAILED_RECEVIED_USERS,
                    payload: error
                }); });
            });
        };
        this.deleteUser = function (action$) {
            return action$.ofType(__WEBPACK_IMPORTED_MODULE_4__components_users_list_users_list_action__["a" /* UsersActions */].DELETE_USER)
                .mergeMap(function (_a) {
                var payload = _a.payload;
                return _this.authService.deleteUser(payload)
                    .map(function (result) { return ({
                    type: __WEBPACK_IMPORTED_MODULE_4__components_users_list_users_list_action__["a" /* UsersActions */].USER_DELETED,
                    payload: payload
                }); })
                    .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({
                    type: __WEBPACK_IMPORTED_MODULE_4__components_users_list_users_list_action__["a" /* UsersActions */].USER_DELETED_FAILED,
                    payload: error
                }); });
            });
        };
        this.getUser = function (action$) {
            return action$.ofType(__WEBPACK_IMPORTED_MODULE_3__components_profile_profile_action__["a" /* UserActions */].GET_USER) // Listen for this action
                .mergeMap(function (_a) {
                var payload = _a.payload;
                return _this.authService.getProfile()
                    .map(function (result) { return ({
                    type: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_action__["a" /* UserActions */].RECEIVED_USER,
                    payload: result
                }); })
                    .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({
                    type: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_action__["a" /* UserActions */].FAILED_RECEVIED_USER,
                    payload: error
                }); });
            });
        };
        this.updateUser = function (action$) {
            return action$.ofType(__WEBPACK_IMPORTED_MODULE_3__components_profile_profile_action__["a" /* UserActions */].UPDATE_USER)
                .mergeMap(function (_a) {
                var payload = _a.payload;
                return _this.authService.updateUser(payload)
                    .map(function (result) { return ({
                    type: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_action__["a" /* UserActions */].USER_UPDATED,
                    payload: payload
                }); })
                    .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({
                    type: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_action__["a" /* UserActions */].UPDATE_USER_FAILED,
                    payload: error
                }); });
            });
        };
    }
    UsersEpic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* myAuthService */]])
    ], UsersEpic);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
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