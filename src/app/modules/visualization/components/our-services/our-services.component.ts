import { Component } from '@angular/core';

@Component({
  selector: 'cleaning-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {

  public regularInfo:boolean = false;
  public commercialInfo:boolean = false;
  public constructionInfo:boolean = false;
  public deepInfo:boolean = false;
  public moveInfo:boolean = false;
  public vacationInfo:boolean = false;

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
