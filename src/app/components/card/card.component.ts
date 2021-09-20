import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goSea(){
    window.alert('This is a Sea!');
  }

  goMountain(){
    window.alert('This is a Mountain!');
  }

  goCity(){
    window.alert('This is a City!');
  }
}
