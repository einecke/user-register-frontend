import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import {UserListService}  from '../../shared/user-list/user-list.service';

@Component({
  moduleId: module.id,
  selector: 'sd-user',
  templateUrl: 'user-cad.component.html',
  styleUrls: ['user-cad.component.css']
})
export class UserCadComponent implements OnInit {
  title: string;
  user: User = new User();
  isEditable: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userListService: UserListService
  ) {}

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id){
        this.isEditable = false;
        return;
      }

      this.userListService.getUser(id).subscribe(
        user => this.user = user
      );
      this.isEditable = true;
    });



  }

  save() {
    if(this.isEditable){
      this.userListService.editUser(this.user).subscribe();
    } else {
      this.userListService.addUser(this.user).subscribe();
    }
  }
}
