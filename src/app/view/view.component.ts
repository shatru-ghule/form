import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { User } from '../user';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users:User[]=[];
  constructor(private tostService:ToastrService, private dataservice: DataService,private router:Router) {
     this.dataservice.getData().subscribe(response=>{
       console.log(response);
       this.users=response;
   
    },error =>{
      
    })
    
  }
   
  delete(firstName){
    this.dataservice.deleteData(firstName).subscribe(response =>{
      this.users=response;

    },error=>{

    })
  }
  edit(firstName){
    this.router.navigate(["registration.htm",firstName]);
  }

  ngOnInit() {
  }



}
