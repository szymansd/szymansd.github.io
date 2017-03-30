webpackJsonp([1,4],{

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsService = (function () {
    function StatisticsService() {
        this.queriesList = [];
        this.loadDataFromStorage();
    }
    StatisticsService.prototype.add = function (query) {
        this.queriesList.push({
            query: query.query,
            created: new Date(),
            nbHits: query.nbHits
        });
        this.updateStorage();
    };
    StatisticsService.prototype.updateStorage = function () {
        localStorage.setItem('HN.SearchQueries', JSON.stringify(this.queriesList));
    };
    StatisticsService.prototype.loadDataFromStorage = function () {
        var queriesListInLocalStorage = JSON.parse(localStorage.getItem('HN.SearchQueries'));
        if (queriesListInLocalStorage) {
            this.queriesList = queriesListInLocalStorage;
        }
    };
    StatisticsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], StatisticsService);
    return StatisticsService;
}());
//# sourceMappingURL=statistics.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(921),
            styles: [__webpack_require__(774)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notebook_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotebookEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotebookEditComponent = (function () {
    function NotebookEditComponent(notebookService) {
        this.notebookService = notebookService;
        this.notebook = {};
    }
    NotebookEditComponent.prototype.ngOnInit = function () {
    };
    NotebookEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Component */])({
            selector: 'app-notebook-edit',
            template: __webpack_require__(922),
            styles: [__webpack_require__(775)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__notebook_service__["a" /* NotebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__notebook_service__["a" /* NotebookService */]) === 'function' && _a) || Object])
    ], NotebookEditComponent);
    return NotebookEditComponent;
    var _a;
}());
//# sourceMappingURL=notebook-edit.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notebook_service__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotebookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotebookListComponent = (function () {
    function NotebookListComponent(notebookService, router) {
        this.notebookService = notebookService;
        this.router = router;
    }
    NotebookListComponent.prototype.ngOnInit = function () {
        this.notebooks = this.notebookService.notebooksList;
    };
    NotebookListComponent.prototype.navigateToNew = function () {
        this.router.navigate(['/notebook', 'new']);
    };
    NotebookListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Component */])({
            selector: 'app-notebook-list',
            template: __webpack_require__(923),
            styles: [__webpack_require__(776)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__notebook_service__["a" /* NotebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__notebook_service__["a" /* NotebookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], NotebookListComponent);
    return NotebookListComponent;
    var _a, _b;
}());
//# sourceMappingURL=notebook-list.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notebook_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es_find__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_es_pull__ = __webpack_require__(404);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotebookViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotebookViewComponent = (function () {
    function NotebookViewComponent(notebookService, route) {
        this.notebookService = notebookService;
        this.route = route;
    }
    NotebookViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return +params['id']; })
            .subscribe(function (notebookId) {
            _this.notebook = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es_find__["a" /* default */])(_this.notebookService.notebooksList, { id: notebookId });
        });
    };
    NotebookViewComponent.prototype.removeSearchResult = function (item) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash_es_pull__["a" /* default */])(this.notebook.searchResults, item);
        this.notebookService.update();
    };
    NotebookViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Q" /* Component */])({
            selector: 'app-notebook-view',
            template: __webpack_require__(924),
            styles: [__webpack_require__(777)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notebook_service__["a" /* NotebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__notebook_service__["a" /* NotebookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], NotebookViewComponent);
    return NotebookViewComponent;
    var _a, _b;
}());
//# sourceMappingURL=notebook-view.component.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__statistics_statistics_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notebook_notebook_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_es_extend__ = __webpack_require__(879);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SearchComponent = (function () {
    function SearchComponent(notebookService, searchService, route, router, statisticsService) {
        this.notebookService = notebookService;
        this.searchService = searchService;
        this.route = route;
        this.router = router;
        this.statisticsService = statisticsService;
        this.pagination = {
            currentPage: 1,
            nbHits: 0,
            totalPages: 100,
            hitsPerPage: 0
        };
        this.results = [];
        this.notifications = [];
        this.noData = true;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .switchMap(function (params) {
            _this.searchString = params['query'];
            if (_this.searchString) {
                return _this.searchService.getResults(params['query'], params['page']);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty();
            }
        })
            .subscribe(function (data) {
            debugger;
            if (data['nbHits']) {
                _this.noData = false;
                _this.setPaginationDetails(data);
                _this.saveStatistics(data);
                _this.handleApiQuotaLimit();
            }
            else {
                _this.noData = true;
                _this.results = [];
            }
        }, function (err) {
            _this.notifications.push({
                type: 'danger',
                msg: "Error occured: " + err.statusText
            });
        });
    };
    SearchComponent.prototype.search = function () {
        this.router.navigate(['/search'], { queryParams: { query: this.searchString } });
    };
    SearchComponent.prototype.pageChanged = function ($event) {
        this.router.navigate(['/search'], { queryParams: { query: this.searchString, page: $event.page } });
    };
    SearchComponent.prototype.setPaginationDetails = function (paginationDetails) {
        this.results = paginationDetails.hits;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_lodash_es_extend__["a" /* default */])(this.pagination, paginationDetails);
    };
    SearchComponent.prototype.handleApiQuotaLimit = function () {
        if (this.pagination.nbHits > (this.pagination.hitsPerPage * this.pagination.totalPages)) {
            this.notifications.push({
                type: 'warning',
                msg: 'You have exceeded a query limit. Provide more detailed search criteria. Result set will be trimmed to 1000.'
            });
        }
    };
    SearchComponent.prototype.saveStatistics = function (data) {
        this.statisticsService.add({
            query: this.searchString,
            nbHits: data.nbHits
        });
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(926),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notebook_notebook_service__["a" /* NotebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__notebook_notebook_service__["a" /* NotebookService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__search_service__["a" /* SearchService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__statistics_statistics_service__["a" /* StatisticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__statistics_statistics_service__["a" /* StatisticsService */]) === 'function' && _e) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.hnSearchUrl = 'http://hn.algolia.com/api/v1/search';
    }
    SearchService.prototype.getResults = function (query, page) {
        if (page === void 0) { page = 0; }
        return this.http
            .get(this.hnSearchUrl + "?query=" + query + "&page=" + page)
            .map(function (res) { return res.json(); });
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SearchService);
    return SearchService;
    var _a;
}());
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 594;


/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(718);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notebook_notebook_list_notebook_list_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notebook_notebook_view_notebook_view_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notebook_notebook_edit_notebook_edit_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(366);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'notebooks', component: __WEBPACK_IMPORTED_MODULE_2__notebook_notebook_list_notebook_list_component__["a" /* NotebookListComponent */] },
    { path: 'notebooks/new', component: __WEBPACK_IMPORTED_MODULE_4__notebook_notebook_edit_notebook_edit_component__["a" /* NotebookEditComponent */] },
    { path: 'notebooks/:id', component: __WEBPACK_IMPORTED_MODULE_3__notebook_notebook_view_notebook_view_component__["a" /* NotebookViewComponent */] },
    { path: 'notebooks/:id/edit', component: __WEBPACK_IMPORTED_MODULE_4__notebook_notebook_edit_notebook_edit_component__["a" /* NotebookEditComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(920),
            styles: [__webpack_require__(773)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__statistics_statistics_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notebook_notebook_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_pagination__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_alert__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notebook_notebook_edit_notebook_edit_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notebook_notebook_list_notebook_list_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__notebook_notebook_view_notebook_view_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_search_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__search_search_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_search_result_view_search_result_view_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__statistics_statistics_component__ = __webpack_require__(717);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__notebook_notebook_edit_notebook_edit_component__["a" /* NotebookEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__notebook_notebook_list_notebook_list_component__["a" /* NotebookListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__notebook_notebook_view_notebook_view_component__["a" /* NotebookViewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_17__search_search_result_view_search_result_view_component__["a" /* SearchResultViewComponent */],
                __WEBPACK_IMPORTED_MODULE_18__statistics_statistics_component__["a" /* StatisticsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["a" /* BsDropdownModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__search_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_1__notebook_notebook_service__["a" /* NotebookService */],
                __WEBPACK_IMPORTED_MODULE_0__statistics_statistics_service__["a" /* StatisticsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__searchResult__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__searchResult___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__searchResult__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultViewComponent = (function () {
    function SearchResultViewComponent() {
    }
    SearchResultViewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__searchResult__["SearchResult"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__searchResult__["SearchResult"]) === 'function' && _a) || Object)
    ], SearchResultViewComponent.prototype, "searchResult", void 0);
    SearchResultViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Component */])({
            selector: 'app-search-result-view',
            template: __webpack_require__(925),
            styles: [__webpack_require__(778)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultViewComponent);
    return SearchResultViewComponent;
    var _a;
}());
//# sourceMappingURL=search-result-view.component.js.map

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

//# sourceMappingURL=searchResult.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__statistics_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_es_map__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es_reduce__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_es_filter__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_es_groupBy__ = __webpack_require__(884);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StatisticsComponent = (function () {
    function StatisticsComponent(statisticsService) {
        this.statisticsService = statisticsService;
        this.statisticList = [];
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.statisticList = this.prepareStatistics(this.statisticsService.queriesList);
    };
    StatisticsComponent.prototype.prepareStatistics = function (stats) {
        var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_lodash_es_groupBy__["a" /* default */])(stats, "query");
        var now = new Date();
        var yestrday = new Date(now.setDate(now.getDate() - 1));
        var weekBefore = new Date(now.setDate(now.getDate() - 7));
        var avg = this.avgForDay;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash_es_map__["a" /* default */])(data, function (value, key) {
            return {
                query: key,
                lastDay: avg(value, yestrday),
                lastWeek: avg(value, weekBefore)
            };
        });
    };
    StatisticsComponent.prototype.avgForDay = function (stats, day) {
        var dayResults = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash_es_filter__["a" /* default */])(stats, function (search) { return new Date(search.created) > day; });
        var daySum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es_reduce__["a" /* default */])(dayResults, function (sum, n) { return sum + n.nbHits; }, 0);
        return Math.floor(daySum / dayResults.length);
    };
    StatisticsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Component */])({
            selector: 'app-statistics',
            template: __webpack_require__(927),
            styles: [__webpack_require__(780)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__statistics_service__["a" /* StatisticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__statistics_service__["a" /* StatisticsService */]) === 'function' && _a) || Object])
    ], StatisticsComponent);
    return StatisticsComponent;
    var _a;
}());
//# sourceMappingURL=statistics.component.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".navbar-default .navbar-brand {\r\n    color: #ff6600;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".dropdown-item {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 405,
	"./af.js": 405,
	"./ar": 412,
	"./ar-dz": 406,
	"./ar-dz.js": 406,
	"./ar-kw": 407,
	"./ar-kw.js": 407,
	"./ar-ly": 408,
	"./ar-ly.js": 408,
	"./ar-ma": 409,
	"./ar-ma.js": 409,
	"./ar-sa": 410,
	"./ar-sa.js": 410,
	"./ar-tn": 411,
	"./ar-tn.js": 411,
	"./ar.js": 412,
	"./az": 413,
	"./az.js": 413,
	"./be": 414,
	"./be.js": 414,
	"./bg": 415,
	"./bg.js": 415,
	"./bn": 416,
	"./bn.js": 416,
	"./bo": 417,
	"./bo.js": 417,
	"./br": 418,
	"./br.js": 418,
	"./bs": 419,
	"./bs.js": 419,
	"./ca": 420,
	"./ca.js": 420,
	"./cs": 421,
	"./cs.js": 421,
	"./cv": 422,
	"./cv.js": 422,
	"./cy": 423,
	"./cy.js": 423,
	"./da": 424,
	"./da.js": 424,
	"./de": 427,
	"./de-at": 425,
	"./de-at.js": 425,
	"./de-ch": 426,
	"./de-ch.js": 426,
	"./de.js": 427,
	"./dv": 428,
	"./dv.js": 428,
	"./el": 429,
	"./el.js": 429,
	"./en-au": 430,
	"./en-au.js": 430,
	"./en-ca": 431,
	"./en-ca.js": 431,
	"./en-gb": 432,
	"./en-gb.js": 432,
	"./en-ie": 433,
	"./en-ie.js": 433,
	"./en-nz": 434,
	"./en-nz.js": 434,
	"./eo": 435,
	"./eo.js": 435,
	"./es": 437,
	"./es-do": 436,
	"./es-do.js": 436,
	"./es.js": 437,
	"./et": 438,
	"./et.js": 438,
	"./eu": 439,
	"./eu.js": 439,
	"./fa": 440,
	"./fa.js": 440,
	"./fi": 441,
	"./fi.js": 441,
	"./fo": 442,
	"./fo.js": 442,
	"./fr": 445,
	"./fr-ca": 443,
	"./fr-ca.js": 443,
	"./fr-ch": 444,
	"./fr-ch.js": 444,
	"./fr.js": 445,
	"./fy": 446,
	"./fy.js": 446,
	"./gd": 447,
	"./gd.js": 447,
	"./gl": 448,
	"./gl.js": 448,
	"./gom-latn": 449,
	"./gom-latn.js": 449,
	"./he": 450,
	"./he.js": 450,
	"./hi": 451,
	"./hi.js": 451,
	"./hr": 452,
	"./hr.js": 452,
	"./hu": 453,
	"./hu.js": 453,
	"./hy-am": 454,
	"./hy-am.js": 454,
	"./id": 455,
	"./id.js": 455,
	"./is": 456,
	"./is.js": 456,
	"./it": 457,
	"./it.js": 457,
	"./ja": 458,
	"./ja.js": 458,
	"./jv": 459,
	"./jv.js": 459,
	"./ka": 460,
	"./ka.js": 460,
	"./kk": 461,
	"./kk.js": 461,
	"./km": 462,
	"./km.js": 462,
	"./kn": 463,
	"./kn.js": 463,
	"./ko": 464,
	"./ko.js": 464,
	"./ky": 465,
	"./ky.js": 465,
	"./lb": 466,
	"./lb.js": 466,
	"./lo": 467,
	"./lo.js": 467,
	"./lt": 468,
	"./lt.js": 468,
	"./lv": 469,
	"./lv.js": 469,
	"./me": 470,
	"./me.js": 470,
	"./mi": 471,
	"./mi.js": 471,
	"./mk": 472,
	"./mk.js": 472,
	"./ml": 473,
	"./ml.js": 473,
	"./mr": 474,
	"./mr.js": 474,
	"./ms": 476,
	"./ms-my": 475,
	"./ms-my.js": 475,
	"./ms.js": 476,
	"./my": 477,
	"./my.js": 477,
	"./nb": 478,
	"./nb.js": 478,
	"./ne": 479,
	"./ne.js": 479,
	"./nl": 481,
	"./nl-be": 480,
	"./nl-be.js": 480,
	"./nl.js": 481,
	"./nn": 482,
	"./nn.js": 482,
	"./pa-in": 483,
	"./pa-in.js": 483,
	"./pl": 484,
	"./pl.js": 484,
	"./pt": 486,
	"./pt-br": 485,
	"./pt-br.js": 485,
	"./pt.js": 486,
	"./ro": 487,
	"./ro.js": 487,
	"./ru": 488,
	"./ru.js": 488,
	"./sd": 489,
	"./sd.js": 489,
	"./se": 490,
	"./se.js": 490,
	"./si": 491,
	"./si.js": 491,
	"./sk": 492,
	"./sk.js": 492,
	"./sl": 493,
	"./sl.js": 493,
	"./sq": 494,
	"./sq.js": 494,
	"./sr": 496,
	"./sr-cyrl": 495,
	"./sr-cyrl.js": 495,
	"./sr.js": 496,
	"./ss": 497,
	"./ss.js": 497,
	"./sv": 498,
	"./sv.js": 498,
	"./sw": 499,
	"./sw.js": 499,
	"./ta": 500,
	"./ta.js": 500,
	"./te": 501,
	"./te.js": 501,
	"./tet": 502,
	"./tet.js": 502,
	"./th": 503,
	"./th.js": 503,
	"./tl-ph": 504,
	"./tl-ph.js": 504,
	"./tlh": 505,
	"./tlh.js": 505,
	"./tr": 506,
	"./tr.js": 506,
	"./tzl": 507,
	"./tzl.js": 507,
	"./tzm": 509,
	"./tzm-latn": 508,
	"./tzm-latn.js": 508,
	"./tzm.js": 509,
	"./uk": 510,
	"./uk.js": 510,
	"./ur": 511,
	"./ur.js": 511,
	"./uz": 513,
	"./uz-latn": 512,
	"./uz-latn.js": 512,
	"./uz.js": 513,
	"./vi": 514,
	"./vi.js": 514,
	"./x-pseudo": 515,
	"./x-pseudo.js": 515,
	"./yo": 516,
	"./yo.js": 516,
	"./zh-cn": 517,
	"./zh-cn.js": 517,
	"./zh-hk": 518,
	"./zh-hk.js": 518,
	"./zh-tw": 519,
	"./zh-tw.js": 519
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 898;


/***/ }),

/***/ 920:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">HackerNews Notebook</a>\n    </div>\n\n    <div id=\"hsn-navbar\">\n      <ul class=\"nav navbar-nav\">\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['search']\">Search</a></li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['notebook']\">Notebooks</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 921:
/***/ (function(module, exports) {

module.exports = "<app-search></app-search>\r\n<hr />\r\n<app-statistics></app-statistics>"

/***/ }),

/***/ 922:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"notebookService.create(notebook); notebook = {};\">\n  <div class=\"form-group\">\n    <label for=\"notebookTitle\">Notebook Title</label>\n    <input type=\"text\" class=\"form-control\" id=\"notebookTitle\" placeholder=\"Title\" name=\"title\" [(ngModel)]=\"notebook.title\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form>"

/***/ }),

/***/ 923:
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <th>Notebook Title</th>\n    <th>Creation Date</th>\n    <th></th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let notebook of notebooks\">\n      <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"notebook.title\" (blur)=\"notebookService.edit(notebook)\"/></td>\n      <td>{{notebook.creationDate | date: 'medium'}}</td>\n      <td>\n        <div class=\"btn-toolbar\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-default\" aria-label=\"Open Notebook\" (click)=\"router.navigate(['/notebooks', notebook.id])\">\n              <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span>\n            </button>\n            <button type=\"button\" class=\"btn btn-default\" aria-label=\"Remove Notebook\" (click)=\"notebookService.delete(notebook)\">\n              <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n            </button>\n          </div>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<app-notebook-edit></app-notebook-edit>"

/***/ }),

/***/ 924:
/***/ (function(module, exports) {

module.exports = "<h1>{{notebook?.title}}</h1>\n<div>\n  Creation date: {{notebook?.creationDate | date:'medium'}}\n</div>\n<div *ngFor=\"let item of notebook?.searchResults\" class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-search-result-view [searchResult]=\"item\"></app-search-result-view>\n  </div>\n  <div class=\"col-xs-2\">\n    <button type=\"button\" class=\"btn btn-default\" aria-label=\"Remove search result\" (click)=\"removeSearchResult(item)\">\n      <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ 925:
/***/ (function(module, exports) {

module.exports = "<h5><a href=\"{{searchResult?.url}}\">{{searchResult?.title}}</a></h5>\n<small>{{searchResult?.points}} by {{searchResult?.author}} at {{searchResult?.created_at | date:'medium'}}</small>"

/***/ }),

/***/ 926:
/***/ (function(module, exports) {

module.exports = "<h3>Search</h3>\n<div *ngFor=\"let alert of notifications\">\n  <alert [type]=\"alert.type\" dismissible=\"true\">\n    {{alert.msg}}\n  </alert>\n</div>\n\n<form (ngSubmit)=\"search()\">\n  <div class=\"form-group\">\n    <label for=\"searchString\">Search for</label>\n    <input type=\"text\" class=\"form-control\" id=\"searchString\" [(ngModel)]=\"searchString\" name=\"searchStrong\" />\n  </div>\n  <button class=\"btn btn-primary\">Search</button>\n</form>\n\n<hr />\n\n<div *ngIf=\"!noData\">\n  <h4>Search Results</h4>\n\n  <div *ngFor=\"let item of results\" class=\"row\">\n    \n    <div class=\"col-xs-10\">\n      <app-search-result-view [searchResult]=\"item\"></app-search-result-view>\n    </div>\n    \n    <div class=\"col-xs-2\">\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n          Add to notebook <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n          <li role=\"menuitem\" *ngFor=\"let notebook of notebookService.notebooksList\">\n            <a class=\"dropdown-item\" (click)=\"notebook.searchResults.push(item); notebookService.update();\">{{notebook.title}}</a>\n          </li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/notebooks']\">Create new</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n\n  <pagination [totalItems]=\"pagination.nbHits\" [itemsPerPage]=\"pagination.hitsPerPage\" [(ngModel)]=\"pagination.currentPage\"\n    [maxSize]=\"5\" [boundaryLinks]=\"true\" class=\"pagination-sm\" (pageChanged)=\"pageChanged($event)\"></pagination>\n\n</div>\n\n<div *ngIf=\"noData\">\n  <h5>No results. Please provide search criteria.</h5>\n</div>"

/***/ }),

/***/ 927:
/***/ (function(module, exports) {

module.exports = "<h4>Statistics</h4>\n\n<table class=\"table\">\n  <thead>\n    <th>Query string</th>\n    <th>hits for the last day</th>\n    <th>hits for the last week</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let stat of statisticList\">\n      <td>{{stat.query}}</td>\n      <td>{{stat.lastDay}}</td>\n      <td>{{stat.lastWeek}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(595);


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_pull__ = __webpack_require__(404);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotebookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotebookService = (function () {
    function NotebookService() {
        this.notebooksList = [];
        this.loadDataFromStorage();
    }
    NotebookService.prototype.create = function (nb) {
        nb.id = this.notebooksList.length;
        nb.creationDate = new Date();
        nb.searchResults = [];
        this.notebooksList.push(nb);
        this.updateStorage();
    };
    NotebookService.prototype.edit = function (nb) {
        this.updateStorage();
    };
    NotebookService.prototype.delete = function (nb) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_pull__["a" /* default */])(this.notebooksList, nb);
        this.updateStorage();
    };
    NotebookService.prototype.update = function () {
        this.updateStorage();
    };
    NotebookService.prototype.updateStorage = function () {
        localStorage.setItem('HN.SearchNotebook', JSON.stringify(this.notebooksList));
    };
    NotebookService.prototype.loadDataFromStorage = function () {
        var notebookInLocalStorage = JSON.parse(localStorage.getItem('HN.SearchNotebook'));
        if (notebookInLocalStorage) {
            this.notebooksList = notebookInLocalStorage;
        }
    };
    NotebookService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], NotebookService);
    return NotebookService;
}());
//# sourceMappingURL=notebook.service.js.map

/***/ })

},[963]);
//# sourceMappingURL=main.bundle.js.map