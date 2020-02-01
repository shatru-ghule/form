import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users:User[]=[];
  constructor(private dataservice: DataService) {
    this.users=this.dataservice.getData();
    
  }

  ngOnInit() {
  }



}
