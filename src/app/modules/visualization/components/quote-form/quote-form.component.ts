import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit{
  public picker:any;
  public picker2:any;
  public cleaningForm!:FormGroup;
  constructor(private _formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.cleaningForm = this._formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      organization: [''],
      email:['',[Validators.required,Validators.email]],
      phoneNumber: ['',Validators.required],
      street1:[''],
      street2:[''],
      city:[''],
      state:[''],
      zipCode:[''],
      service:[''],
      propertyType:[''],
      sqFootage:[''],
      bedrooms:[''],
      bathrooms:[''],
      offices:[''],
      firstDateAvailable:[''],
      secondDateAvailable:[''],
      arrivalTimes:[''],
    });
  }
}
