import { Component } from '@angular/core';
import { HomeService } from "./home.service";

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  providers: [HomeService]
})
export class HomeComponent {
  constructor(private _homeService:HomeService) {
  	var sketches=this._homeService.getSketches()
  	console.log(sketches);
  }
}
