import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
users:User[]=[];
 
  
  constructor() { }

  public saveData(user:User):boolean{

    for(let index=0; index< this.users.length; index++){

      if(user.name==this.users[index].name){
        this.users.splice(index,1);
        this.users.push(user);
        return true;
      }
    }
    this.users.push(user);
    console.log(user);
    return true;

  }
  public getData(){
    return this.users;
  }

  public deleteData(fname){
   for(let index=0; index<this.users.length;index++){
 
    if(fname == this.users[index].name){
      this.users.splice(index,1);
      console.log("dataRemove");

    }
    console.log(this.users.length);
   }
   
  }
  public getUserByFname(name){
    console.log(name);

    let user:User;
    for(let index=0;index<this.users.length;index++){

      if(name==this.users[index].name){
        user=this.users[index];

      }
    }
    return user;


  }

 
}
