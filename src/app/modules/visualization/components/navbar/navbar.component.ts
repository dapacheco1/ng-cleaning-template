import { Component } from '@angular/core';
@Component({
  selector: 'cleaning-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public scrollToAboutUs(){
    const element = document.getElementById('about-us');
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }
  }
}
