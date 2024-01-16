import { AfterViewInit, Component} from '@angular/core';
@Component({
  selector: 'cleaning-service-guarantees',
  templateUrl: './service-guarantees.component.html',
  styleUrls: ['./service-guarantees.component.scss']
})
export class ServiceGuaranteesComponent  implements AfterViewInit{
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
