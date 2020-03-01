import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  hobbiesArr:string[]=['cricket','Music','Travlling','cooking']

  userForm:FormGroup;

  constructor(private tostService:ToastrService, private formbuilder:FormBuilder,private dataServices:DataService,
    private router:Router,private activatedRoute:ActivatedRoute) {
    this.userForm=this.formbuilder.group({
      fname:['',[Validators.required]],
      lname:['',Validators.required],
      email:['',[Validators.pattern( /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)]],
      number:['',[Validators.pattern(/^[6-9]\d{9}$/)]],
      gender:['',[Validators.required]],

      hobbies:new FormArray([],[Validators.required])

    });


  }
  ngOnInit(){


    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
   var fname=this.activatedRoute.snapshot.paramMap.get("id");

   if(fname!=null){
     this.dataServices.getUserByFname(fname).subscribe(response=>{
      let user:User=response;

      this.userForm.patchValue({
        fname:user.fname,
        lname:user.lname,
        email:user.email,
        number:user.number,
        gender:user.gender
 
 
      });

      
    var array:FormArray= this.userForm.get("hobbies") as FormArray;
    user.hobbies.forEach(element =>{
       array.push(new FormControl(element));
    });
     });
     console.log(">>>>>" +fname);
     
     
   }
  }
  
 

  submitDetails(){
    console.log(this.userForm.value);

   this.dataServices.saveData(this.userForm.value).subscribe(response=>{
     this.tostService.success("User Registration Successfully!.","Transaction alert")
     
   },
   error=>{
    this.tostService.error("User does not Registed.","Transaction alert")

   });
   this.router.navigateByUrl("view.htm");
  }

  onChangeHobbies(event){
var array:FormArray= this.userForm.get("hobbies") as FormArray;

if(event.checked){
  array.push(new FormControl(event.source.value));
}
else{
  var index=0;
  this.userForm.get("hobbies").value.forEach(element => {
    if(element == event.source.value){
      array.removeAt(index);
    }
    index++;
    
  });
}
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


}
