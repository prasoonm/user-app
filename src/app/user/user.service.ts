import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './User';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

  private apiUrl = 'http://localhost:9090/users';

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http.get(this.apiUrl)
      .catch((err: any) => Observable.throw(err.json()));
    // add error scenario as well
  }

  saveUser(user: User): Observable<User> {
    return this.http.post(this.apiUrl, user)
      .catch((err: any) => Observable.throw(err.json()));
  }
}
