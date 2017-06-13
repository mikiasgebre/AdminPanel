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
}