import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
users:User[]=[];
 
  
  constructor() { }

  public saveData(user:User){
    this.users.push(user);
    console.log(user);

  }
  public getData(){
    return this.users;
  }
}
