import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Quote } from './Models/Quote';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private _baseURL:string = '';
  constructor(private _http:HttpClient) { 
    this._baseURL = environment.apiURL;
  }

  public sendQuoteRequest(quoteForm:Quote){
    return this._http.post(`${this._baseURL}/generate-quote`,quoteForm);
  }
}
