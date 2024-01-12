import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent {
  public showButton: boolean = false;
  
  constructor() { }
  public detectScroll(event:any){
    const element = document.getElementById('navbar'); // Get the native element
    if(element){
      const rect = element.getBoundingClientRect(); // Get the bounding rect of the element
    
      // Check if the element is in the viewport
      const isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
      if (isVisible) {
        // Element is visible, perform your actions here
        this.showButton = true;
      } else {
        // Element is not visible
        this.showButton = false;
      }
    }
  }
}
