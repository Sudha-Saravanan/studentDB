// import { Injectable } from '@angular/core';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/Observable/of';

// import { catchError, map, tap } from 'rxjs/operators';

// import { User } from '../_models/index';


// import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// }

// @Injectable()
// export class UserService {
//   private userurl = 'api/users';

//   constructor(private http: HttpClient) { }
  
//   getUsers(): Observable<User[]>{

//     return this.http.get<User[]>(this.userurl)
//     .pipe(
//       catchError(this.handleError('getUsers', []))
//     )
//   }

//   getUser(id: number):Observable<User>{
//     const url = '${this.userurl} / ${id}';
//     return this.http.get<User>(url).pipe(
//       catchError(this.handleError<User>('getUser id = ${id}'))
//     )
//   }

//   createUser(user:User):Observable<User> {
//     return this.http.post<User>(this.userurl, user, httpOptions).pipe( 
//       catchError(this.handleError<User>('AddUser'))
//     )
//   }

//   updateUser(user:User):Observable<User>{
//     return this.http.put<User>(this.userurl + user.id, user, httpOptions).pipe(
//       catchError(this.handleError<any>('UpdatedUser'))
//     )
//   }

   
//   deleteUser(user: User | number):Observable<User>{
//     const id = typeof user === 'number' ? user : user.id;
//     const url = '${this.usersurl}/${id}';
    
//     return this.http.delete<User>(url, httpOptions).pipe(
//       catchError(this.handleError<User>('deletedUser'))
//     )
//   }


//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error:any): Observable<T> =>{
//       console.error(error);
//       return Observable.of(result as T);
//     }
//   }
// }
