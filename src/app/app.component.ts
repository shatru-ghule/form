import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
 userForm:FormGroup;

  constructor(private formbuilder:FormBuilder) {
    this.userForm=this.formbuilder.group({
      name:['',[Validators.required]],
      lname:['',Validators.required],
      email:['',[Validators.pattern( /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)]],
      number:['',[Validators.pattern(/^[6-9]\d{9}$/)]],
      gender:['',[Validators.required]]

    });


  }
  submitDetails(){
    console.log(this.userForm.value);
  }
}
