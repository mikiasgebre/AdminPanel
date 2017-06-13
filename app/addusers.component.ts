import {Component,OnInit } 					       				   from 'angular2/core';
import {ROUTER_DIRECTIVES, CanDeactivate,Router, RouteParams} 	   from 'angular2/router';
import {FormBuilder, ControlGroup, Validators} 					   from 'angular2/common';
import {UserService}						   					   from './user.service';
import {EmailValidator} 					   		 			   from './emailValidator';
import {User}													   from './user';
@Component({
    
    templateUrl: 'app/addusers.component.html',
    directives: [ROUTER_DIRECTIVES],
	providers:[UserService]
    
})
export class AddUsersComponent implements CanDeactivate,OnInit {
    form: ControlGroup;
	title: string;
	user = new User();
	
	
	
	constructor(
		fb: FormBuilder,
		private _userserive: UserService,
		private _router : Router,
		private _routeParams: RouteParams

		) {
		this.form = fb.group({
			name: ['', Validators.required],
			email: ['', EmailValidator.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
	}

	ngOnInit(){
		var id = this._routeParams.get("id");
		this.title = id ? "Edit User" : "New User"; 

		if(!id)
				return ;

			this._userserive.getUserID(id)
				.subscribe( 
					user => this.user = user,
					response => {
						if (response.status  == 404) {
							this._router.navigate(['NotFound']);
						}
					});

	}

	save(){
		this._userserive.addUser(this.form.value)
            .subscribe(x => {
                // Ideally, here we'd want:
                // this.form.markAsPristine();
                    this._router.navigate(['Users']);
            });
	
	


	}
	Edit(){
this._userserive.updateUser(this.form.value)
 .subscribe(x => {
                // Ideally, here we'd want:
                // this.form.markAsPristine();
                    this._router.navigate(['Users']);
            });

	}

    routerCanDeactivate(){
       if(this.form.dirty)
       return confirm("are you sure you want to navigate away from this page?");

       return true;
    }
}
    
   

	
