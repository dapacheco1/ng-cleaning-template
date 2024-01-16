import { AfterViewInit, Component } from '@angular/core';
import { provisionalData } from './ProvisionalData';

@Component({
  selector: 'cleaning-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements AfterViewInit{
    public data = provisionalData;
    private _currentIndex:number = 0;
    ngAfterViewInit(): void {
      setTimeout(() => {
        const observer = new IntersectionObserver(entries =>{
          entries.forEach(entry => {
            if(entry.isIntersecting){
              entry.target.classList.add('show-x');
              entry.target.classList.add('fade-in-show');
              //this.automaticCarousel();
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

    public automaticCarousel(){
      const carousel = document.querySelector(".carousel");
      const carouselItems = document.querySelectorAll(".carousel-item");
      setInterval(()=>{this._nextSlide(carouselItems,carousel)}, 3000);
    }

    private _nextSlide(carouselItems:any,carousel:any) {
      this._currentIndex = (this._currentIndex + 1) % carouselItems.length;
      this._updateCarousel(carousel);
    }

    private _updateCarousel(carousel:any) {
      const translateValue = -this._currentIndex * 100 + "%";
      carousel.style.transform = "translateX(" + translateValue + ")";
    }
}
