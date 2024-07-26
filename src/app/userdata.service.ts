import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
export interface users{
  id : number;
  name: string;
  email: string;

}

@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  private apiurl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient) { }
getusers(){
  return this.http.get<users[]>(this.apiurl);
 
}

}
