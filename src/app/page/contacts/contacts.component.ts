import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ContactService } from 'src/app/Service/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  firstFormGroup!: FormGroup;

  constructor(
    private titleService: Title,
    private contactservice: ContactService,
    private _formBuilder: FormBuilder,

  ) {
    this.titleService.setTitle("Contacts");

  }

  ngOnInit(): void {
    this.createPageForm();
  }

  createPageForm() {
    this.firstFormGroup = this._formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'phoneNumber': ['', [Validators.required]],
      'message': ['', [Validators.required]],
    })
  }

  createContact() {
    console.log("..", this.firstFormGroup.value);
    this.firstFormGroup.value.operationType = "New"

    this.contactservice.createContact(this.firstFormGroup.value)
      .subscribe(
        (responce) => {
          console.log('Contact list', responce);
          this.firstFormGroup.reset();

        }
      );
  }

}
