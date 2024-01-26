import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from '../../quote.service';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit{
  public picker:any;
  public picker2:any;
  public cleaningForm!:FormGroup;
  constructor(private _formBuilder:FormBuilder, private _quoteService:QuoteService){}
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

  public sendRequest(){
    this._quoteService.sendQuoteRequest({
      firstName: this.cleaningForm.get('firstName')?.value as string,
      lastName: this.cleaningForm.get('lastName')?.value as string,
      organization: this.cleaningForm.get('organization')?.value as string,
      email: this.cleaningForm.get('email')?.value as string,
      phoneNumber: this.cleaningForm.get('phoneNumber')?.value as string,
      street1: this.cleaningForm.get('street1')?.value as string,
      street2: this.cleaningForm.get('street2')?.value as string,
      city: this.cleaningForm.get('city')?.value as string,
      state: this.cleaningForm.get('state')?.value as string,
      zipCode: this.cleaningForm.get('zipCode')?.value as string,
      services: [],
      propertyType: [],
      sqFootage: this.cleaningForm.get('sqFootage')?.value,
      bedrooms: this.cleaningForm.get('bedrooms')?.value,
      bathrooms: this.cleaningForm.get('bathrooms')?.value,
      offices: this.cleaningForm.get('offices')?.value,
      firstDate: this.cleaningForm.get('firstDate')?.value as string,
      secondDate: this.cleaningForm.get('secondDate')?.value as string,
      arrivalTimes: []
    });
  }
}
