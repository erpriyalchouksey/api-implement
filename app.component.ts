import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  registerForm!:FormGroup;
  show = true;

  constructor(){}

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'number': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  get f()
{
    return this.registerForm.controls;
}
}
