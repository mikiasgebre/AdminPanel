import {Component, OnInit} from 'angular2/core';

import {UserService} from './user.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    templateUrl: 'app/users.component.html',
    providers: [UserService],
	directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit {
    users: any[];
    
    constructor(private _service: UserService){
	}

	ngOnInit(){
		this._service.getUsers()
			.subscribe(users => this.users = users);
	} 

	deleteUser(user){
			if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

			this._service.deleteUser(user.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.users.splice(index, 0, user);
					});
		}
	}
}