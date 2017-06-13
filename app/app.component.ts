import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';
import { AddUsersComponent} from './addusers.component';
import { NotFoundComponent} from './notfound.component'
@RouteConfig([
	{ path: '/', name: 'Home', component: HomeComponent },
	{ path: '/users', name: 'Users', component: UsersComponent },
	{ path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/users/new', name: 'New', component: AddUsersComponent },
    { path: '/users/:id', name: 'EditUser', component: AddUsersComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
	{ path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }