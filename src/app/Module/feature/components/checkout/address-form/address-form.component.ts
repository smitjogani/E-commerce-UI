import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddressCardComponent } from "../../../../shared/components/address-card/address-card.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-address-form',
  standalone: true,
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
  imports: [CommonModule, AddressCardComponent, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatDivider ]
})
export class AddressFormComponent {

  adresses = [1, 1, 1]

  constructor(private formBuilder: FormBuilder) { }

  myForm: FormGroup = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    streetAddress: ["", Validators.required],
    city: ["", Validators.required],
    state: ["", Validators.required],
    pincode: ["", Validators.required],
    mobile: ["", Validators.required],
  })

  handlecreateOrder(item: any) {

  }

  handleSubmit = ()=> {
    const formValue = this.myForm.value;
    console.log("form data", formValue);
  }

}
