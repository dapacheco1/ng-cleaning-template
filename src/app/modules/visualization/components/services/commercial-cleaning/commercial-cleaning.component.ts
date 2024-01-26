import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-commercial-cleaning',
  templateUrl: './commercial-cleaning.component.html',
  styleUrls: ['./commercial-cleaning.component.scss']
})
export class CommercialCleaningComponent implements AfterViewInit{
  public showButton: boolean = false;
  ngAfterViewInit(): void {
    setTimeout(() => {
      try{
          const video = document.getElementById("videoPlayer") as HTMLVideoElement;
          video.muted = true;
          video.play();
        }catch(err){
          console.log(err);
        }
    }, 300);
  }
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

