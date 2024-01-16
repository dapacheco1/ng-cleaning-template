import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'cleaning-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements AfterViewInit {

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
