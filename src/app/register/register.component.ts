import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this. registerForm= this.fb.group({
      name: ['', [Validators.required,
        ]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],
      username:[
        '',[ Validators.required ,
          Validators.pattern("^[a-zA-Z0-9!@#*()+{}[\\];:,|\/\\\\_\S-]+$"),]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
        ],
      ],
      confirmpassword: [
        '',
        [
          Validators.required,
         
        ],
      ]
    }
    
    )
  }
  ngOnInit(): void {
  }
  handleFormSubmit() {
    console.log(this.registerForm);

  }
}
