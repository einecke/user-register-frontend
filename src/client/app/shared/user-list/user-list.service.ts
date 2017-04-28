import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../../user/user';

@Injectable()
export class UserListService {
  urlDelete = "http://localhost:8081/User/rest/service/excluir";
  urlAll="http://localhost:8081/User/rest/service/todas";
  urlAdd="http://localhost:8081/User/rest/service/cadastrar";
  urlUser="http://localhost:8081/User/rest/service/getUser";
  urlEdit="http://localhost:8081/User/rest/service/editar";

  /**
  * Creates a new NameListService with the injected Http.
  * @param {Http} http - The injected Http.
  * @constructor
  */
  constructor(private http: Http) {}

  /**
  * Returns an Observable for the HTTP GET request for the JSON resource.
  */
  getTodos() {
     return this.http.get(this.urlAll).map((res: Response) => res.json());
  }

  removeUser(userId: String){
    return this.http.post(this.urlDelete, userId).map((res: Response) => res.json());
  }

  addUser(user: User){
    return this.http.post(this.urlAdd, user).map((res: Response) => res.json());
  }

  getUser(userId: String) {
    return this.http.post(this.urlUser, userId).map((res: Response) => res.json());
  }

  editUser(user: User) {
    return this.http.post(this.urlEdit, user).map((res: Response) => res.json());
  }

  /**
  * Handle HTTP error
  */
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
