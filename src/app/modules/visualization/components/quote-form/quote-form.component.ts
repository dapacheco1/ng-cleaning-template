import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from '../../quote.service';
import { Subject, takeUntil } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit{
  public picker:any;
  public picker2:any;
  public cleaningForm!:FormGroup;
  private _unsubscribeAll:Subject<any> = new Subject<any>();
  public services:Array<{
    isSelected:boolean,
    service:string}> = [
    {
      isSelected:false,
      service:'Regular Clean',
    },
    {
      isSelected:false,
      service:'Deep Clean',
    },
    {
      isSelected:false,
      service:'Move In/Out',
    },
    {
      isSelected:false,
      service:'Vacation Home',
    },
    {
      isSelected:false,
      service:'Post Construction',
    },
    {
      isSelected:false,
      service:'Commercial',
    },
  ];

  public propertiesList:Array<{
    isSelected:boolean,
    propertiesType:string
  }> = [
    {
      isSelected:false,
      propertiesType:'Apartment',
    },
    {
      isSelected:false,
      propertiesType:'Home',
    },
    {
      isSelected:false,
      propertiesType:'Condo',
    },
    {
      isSelected:false,
      propertiesType:'Commercial/Office',
    },
  ];
  public arrivalTimesList:Array<
  {
    isSelected:boolean,
    arrival:string,
  }> = [
    {
      isSelected:false,
      arrival:'07:00 am - 09:00 am',
    },
    {
      isSelected:false,
      arrival:'09:00 am - 11:00 am',
    },
    {
      isSelected:false,
      arrival:'11:00 am - 01:00 pm',
    },
    {
      isSelected:false,
      arrival:'02:00 pm - 04:00 pm',
    },
    {
      isSelected:false,
      arrival:'Before Business Hours (Commercial)',
    },
    {
      isSelected:false,
      arrival:'After Business Hours (Commercial)',
    },
  ];
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
      services: this.services.filter(it=> it.isSelected).map(it=>it.service),
      propertyType: this.propertiesList.filter(it=> it.isSelected).map(it=>it.propertiesType),
      sqFootage: this.cleaningForm.get('sqFootage')?.value,
      bedrooms: this.cleaningForm.get('bedrooms')?.value,
      bathrooms: this.cleaningForm.get('bathrooms')?.value,
      offices: this.cleaningForm.get('offices')?.value,
      firstDate: this.cleaningForm.get('firstDateAvailable')?.value as string,
      secondDate: this.cleaningForm.get('secondDateAvailable')?.value as string,
      arrivalTimes: this.arrivalTimesList.filter(it=> it.isSelected).map(it=>it.arrival),
    }).pipe(takeUntil(this._unsubscribeAll))
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.cleaningForm.reset();
        this.services.forEach(it=>it.isSelected = false);
        this.propertiesList.forEach(it=>it.isSelected = false);
        this.arrivalTimesList.forEach(it=>it.isSelected = false);
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    });
  }
}
