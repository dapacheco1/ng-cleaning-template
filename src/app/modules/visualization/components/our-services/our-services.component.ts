import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'cleaning-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements AfterViewInit{

  public regularInfo:boolean = false;
  public commercialInfo:boolean = false;
  public constructionInfo:boolean = false;
  public deepInfo:boolean = false;
  public moveInfo:boolean = false;
  public vacationInfo:boolean = false;
  ngAfterViewInit(): void {
    setTimeout(() => {
      const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('show-x');
            entry.target.classList.add('fade-in-show');
            entry.target.classList.add('show-x-right');
          }else{
            entry.target.classList.remove('show-x');
            entry.target.classList.remove('fade-in-show');
            entry.target.classList.remove('show-x-right');
          }
        });
      });
      const hideElements = document.querySelectorAll('.hide-x');
      const hideFades = document.querySelectorAll('.fade-in-hide');
      const hideFadesR = document.querySelectorAll('.hide-x-right');
      hideElements.forEach((el:any)=>observer.observe(el));
      hideFades.forEach((el:any)=>observer.observe(el));
      hideFadesR.forEach((el:any)=>observer.observe(el));
    }, 0);
  }
  public revealMoreInformation(param:string){
    switch(param){
      case 'regular':
        this.regularInfo = true;
        break;
      case 'commercial':
        this.commercialInfo = true;
        break;
      case 'construction':
        this.constructionInfo = true;
        break;
      case 'deep':
        this.deepInfo = true;
        break;
      case 'move':
        this.moveInfo = true;
        break;
      case 'vacation':
        this.vacationInfo = true;
        break;
    }
  }

  public hideInformation(param:string){
    switch(param){
      case 'regular':
        this.regularInfo = false;
        break;
      case 'commercial':
        this.commercialInfo = false;
        break;
      case 'construction':
        this.constructionInfo = false;
        break;
      case 'deep':
        this.deepInfo = false;
        break;
      case 'move':
        this.moveInfo = false;
        break;
      case 'vacation':
        this.vacationInfo = false;
        break;
    }
  }
}
