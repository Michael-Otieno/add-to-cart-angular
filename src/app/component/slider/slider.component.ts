import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class SliderComponent implements OnInit {
  images = ['../../assets/fashion.jpg','../../assets/jewel.jpg','../../assets/tv.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
