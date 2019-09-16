import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { debug } from 'util';
import { User } from '../Modules/user-model';
import { Router } from "@angular/router";
import { AuthenticationService } from '../_services';
import { Role } from '../_models';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatSort, MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { ViewChild } from '@angular/core';


export interface UsersTable {
  id: number;
  name: string;
  email: string
  phone: number;
  Status: string;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],


})


export class UsersComponent implements OnInit {

  isActive = true;
  title = "List of users";
  imageUrl = "D:\Study\UserManagement\src\assets\adventure.jpg";
  users;

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'Status', 'Actions'];

  dataSource;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

  // dataSource = new MatTableDataSource(this.users);
  //dataSource = this.service.getUsers();



  constructor(private service: UsersService, private router: Router, private authenticationService: AuthenticationService) {
    this.users = service.getUsers();
    this.dataSource = new MatTableDataSource(this.users);

  }

  applyFilter(filter: string) {
    console.log(filter);
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.filter = filter.trim().toLowerCase();
    console.log(this.dataSource.filter);

  }
  onAdd($event) {
    localStorage.removeItem('editUserId');
    this.router.navigate(['add-user']);
    this.dataSource = new MatTableDataSource(this.users);

  }
  isAdmin() {
    return this.authenticationService.currentUserValue.role === Role.Admin;
  }

  editUser(id: number) {
    let user = this.service.getUserByID(id);
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', id.toString());
    this.router.navigate(['add-user']);
    this.dataSource = new MatTableDataSource(this.users);

  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  deleteUser(id: number): void {
    this.users = this.service.deleteUser(id);
    //Update user status to be deleted
    this.dataSource = new MatTableDataSource(this.users);

  }





}
