import { AfterViewInit, Component } from '@angular/core';
import { provisionalData } from './ProvisionalData';

@Component({
  selector: 'cleaning-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements AfterViewInit{
    public data = provisionalData;
    ngAfterViewInit(): void {
      setTimeout(() => {
        const observer = new IntersectionObserver(entries =>{
          entries.forEach(entry => {
            if(entry.isIntersecting){
              entry.target.classList.add('show-x');
              entry.target.classList.add('fade-in-show');
            }else{
              entry.target.classList.remove('show-x');
              entry.target.classList.remove('fade-in-show');
            }
          });
        });
        const hideElements = document.querySelectorAll('.hide-x');
        const hideFades = document.querySelectorAll('.fade-in-hide');
        hideElements.forEach((el:any)=>observer.observe(el));
        hideFades.forEach((el:any)=>observer.observe(el));
      }, 0);
    }
}
