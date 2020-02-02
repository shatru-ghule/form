import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  userForm:FormGroup;

  constructor(private formbuilder:FormBuilder,private dataServices:DataService,
    private router:Router,private activatedRoute:ActivatedRoute) {
    this.userForm=this.formbuilder.group({
      name:['',[Validators.required]],
      lname:['',Validators.required],
      email:['',[Validators.pattern( /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)]],
      number:['',[Validators.pattern(/^[6-9]\d{9}$/)]],
      gender:['',[Validators.required]]

    });


  }
  ngOnInit(){
   var name=this.activatedRoute.snapshot.paramMap.get("id");

   if(name!=null){
     let user:User=this.dataServices.getUserByFname(name);
     console.log(">>>>>" +name);
     
     this.userForm.patchValue({
       name:user.name,
       lname:user.lname,
       email:user.email,
       number:user.number,
       gender:user.gender


     });
   }
  }
  submitDetails(){
    console.log(this.userForm.value);

   this.dataServices.saveData(this.userForm.value);
   this.router.navigateByUrl("view.htm");
  }



}
