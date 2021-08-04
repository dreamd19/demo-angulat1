import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular';
  constructor(private appService: AppService) {}

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  users: any[] = [];
  userCount = 0;

  ngOnInit() {}

  onSubmit() {
    console.log(this.userForm.value);
    this.appService.createTask(this.userForm.value).subscribe(data => {});;
    this.userCount = this.userCount + 1;
    this.userForm.reset();

  }

  getAllUsers() {
    this.users = this.appService.getUsers();
  }

  // editUser(){
  //   this.users = this.appService.updateTask(1, );
  // }
}
