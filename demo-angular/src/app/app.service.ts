import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }
  

  users = [
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'abc@gmail.com'
    },
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'abc@gmail.com'
    },
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'abc@gmail.com'
    }
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    return this.users.push(user);
  }

  createTask(data: any): Observable<any> {
    this.headers.set('Authorization', 'Basic ' +
    btoa('username:password'));

    return this.http.post('https://gorest.co.in/public/v1/users', data, { headers: this.headers })
  }

    // Update
  updateTask(id: any, data: any): Observable<any> {
    this.headers.set('Authorization', 'Basic ' +
    btoa('username:password'));
    
    return this.http.put('https://gorest.co.in/public/v1/users', data, { headers: this.headers })
  }

  getApiUsers(){
    this.headers.set('Authorization', 'Basic ' +
    btoa('username:password'));

    return this.http.get('https://gorest.co.in/public/v1/users', { headers: this.headers });
  }

  getApiUsersByID(id: any){
    this.headers.set('Authorization', 'Basic ' +
    btoa('username:password'));

    return this.http.get('https://gorest.co.in/public/v1/users/id='+id, { headers: this.headers });
  }


  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }
  
}
