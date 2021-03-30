import { Component, OnInit } from '@angular/core';
declare var require: any

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  
  constructor() {
    
   }
  

  ngOnInit(): void {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2h1cGVycyIsImEiOiJjazNqcjJ4YnQwM3l5M2xwOXppNmtkMWF4In0.MqIEuzBBpryI6_dps113lw';
    var map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/streets-v11'
    });

  }
 
  

}
