import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'cleaning-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    setTimeout(() => {
      const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('show-x');
            entry.target.classList.add('fade-in-show');
            entry.target.classList.add('fade-up-show');
          }else{
            entry.target.classList.remove('show-x');
            entry.target.classList.remove('fade-in-show');
            entry.target.classList.remove('fade-up-show');
          }
        });
      });
      const hideElements = document.querySelectorAll('.hide-x');
      const hideFades = document.querySelectorAll('.fade-in-hide');
      const hideFadesUp = document.querySelectorAll('.fade-up-hide');
      hideElements.forEach((el:any)=>observer.observe(el));
      hideFades.forEach((el:any)=>observer.observe(el));
      hideFadesUp.forEach((el:any)=>observer.observe(el));
    }, 0);
  }
}
