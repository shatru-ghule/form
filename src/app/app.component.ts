import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
 userForm:FormGroup

  constructor(private formbuilder:FormBuilder) {
    this.userForm=this.formbuilder.group({
      name:['',Validators.required],
      email:['example'],
      password:[''],
      gender:[]

    });


  }
  submitDetails(){
    console.log(this.userForm.value);
  }
}
