import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h2>kalichestvo ckickov{{clicks}}</h2>
    <child-comp (onChanged)="onChanged($event)"></child-comp>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicks:number=0;
  onChanged(increased:any){
    increased==true?this.clicks++:this.clicks--;
  }
}
