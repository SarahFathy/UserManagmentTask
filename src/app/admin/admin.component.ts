import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { LoggingUser } from '../_models';
import { UserService } from '../_services';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    users: LoggingUser[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}