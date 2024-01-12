import { Component } from '@angular/core';
import { provisionalData } from './ProvisionalData';

@Component({
  selector: 'cleaning-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
    public data = provisionalData;
    
}
