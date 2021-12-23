import { Component, Input, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  constructor() { }
  contactForm =new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]) //10-digit phone number valiadtion pattern
  })

  get name(){return this.contactForm.get('name')}
  get email(){return this.contactForm.get('email')}
  get phone(){return this.contactForm.get('phone')}

  ngOnInit(): void {
    
  }

}
