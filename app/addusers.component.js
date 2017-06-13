System.register(['angular2/core', 'angular2/router', 'angular2/common', './user.service', './emailValidator', './user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, user_service_1, emailValidator_1, user_1;
    var AddUsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (emailValidator_1_1) {
                emailValidator_1 = emailValidator_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            AddUsersComponent = (function () {
                function AddUsersComponent(fb, _userserive, _router, _routeParams) {
                    this._userserive = _userserive;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', emailValidator_1.EmailValidator.email],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                AddUsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? "Edit User" : "New User";
                    if (!id)
                        return;
                    this._userserive.getUserID(id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                AddUsersComponent.prototype.save = function () {
                    var _this = this;
                    this._userserive.addUser(this.form.value)
                        .subscribe(function (x) {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        _this._router.navigate(['Users']);
                    });
                };
                AddUsersComponent.prototype.Edit = function () {
                    var _this = this;
                    this._userserive.updateUser(this.form.value)
                        .subscribe(function (x) {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        _this._router.navigate(['Users']);
                    });
                };
                AddUsersComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty)
                        return confirm("are you sure you want to navigate away from this page?");
                    return true;
                };
                AddUsersComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/addusers.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService, router_1.Router, router_1.RouteParams])
                ], AddUsersComponent);
                return AddUsersComponent;
            }());
            exports_1("AddUsersComponent", AddUsersComponent);
        }
    }
});
//# sourceMappingURL=addusers.component.js.map