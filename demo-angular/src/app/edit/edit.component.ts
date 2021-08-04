import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  users: any = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  getAllUsersByID(id: any) {
    this.users = this.appService.getApiUsersByID(id);
  }

  editUser(){
    this.userForm.patchValue({
      firstName: 'Nancy',
      lastName: 'eeee',
      email: 'ee@gmail.com'
    });
    
    this.users = this.appService.updateTask(1, this.userForm );
  }
}
