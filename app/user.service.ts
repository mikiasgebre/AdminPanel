import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	private _url = "http://jsonplaceholder.typicode.com/users";

	constructor(private _http: Http){
	}

	getUsers(){
		return this._http.get(this._url)
			.map(res => res.json());
	}

	createPost(post){
		return this._http.post(this._url, JSON.stringify(post))
			   .map(res => res.json())
	}

	addUser(user){
 		return this._http.post(this._url, JSON.stringify(user))
 			.map(res => res.json());
 	}

	 getUserID(userId){
 		return this._http.get(this._url + "/" + userId)
 			.map(res => res.json());
 	}

	 updateUser(user){
		 return this._http.put(this._url,JSON.stringify(user))
 			.map(res => res.json()); 
	 }
}