import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('nav')
  slider!: NgImageSliderComponent;
  imageObject: Array<object> = [{
    image: 'assets/images/home.jpg',
    thumbImage: 'assets/images/home.jpg',
    alt: 'alt of image',
    title: 'title of image'
}, {
    image: 'assets/images/resort.jpg', // Support base64 image
    thumbImage: 'assets/images/resort.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}, {
  image: 'assets/images/hill.jfif', // Support base64 image
  thumbImage: 'assets/images/hill.jfif', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/images/home.jpg',
  thumbImage: 'assets/images/home.jpg',
  alt: 'alt of image',
  title: 'title of image'
}, {
  image: 'assets/images/resort.jpg', // Support base64 image
  thumbImage: 'assets/images/resort.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}, {
image: 'assets/images/hill.jfif', // Support base64 image
thumbImage: 'assets/images/hill.jfif', // Support base64 image
title: 'Image title', //Optional: You can use this key if want to show image with title
alt: 'Image alt', //Optional: You can use this key if want to show image with alt
order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/images/home.jpg',
  thumbImage: 'assets/images/home.jpg',
  alt: 'alt of image',
  title: 'title of image'
}, {
  image: 'assets/images/resort.jpg', // Support base64 image
  thumbImage: 'assets/images/resort.jpg', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}, {
image: 'assets/images/hill.jfif', // Support base64 image
thumbImage: 'assets/images/hill.jfif', // Support base64 image
title: 'Image title', //Optional: You can use this key if want to show image with title
alt: 'Image alt', //Optional: You can use this key if want to show image with alt
order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];

  constructor() { }

  ngOnInit(): void {
  }

  prevImageClick() {
    this.slider.prev();
}

nextImageClick() {
    this.slider.next();
}
}
