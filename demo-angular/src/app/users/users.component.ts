import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any={};
  messageTest: any = {};
  public results = [];


  constructor(private appService: AppService) {

   }

  ngOnInit(): void {
    const val = this.appService.getUsers();
    this.appService.getApiUsers().subscribe(data => {
      this.users = data;
    });
    // this.users = val;
    console.log('Value:::::::', val);
  }

}