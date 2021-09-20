import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  disp() {

    console.log('alert is running..')
    window.alert('alert work!');

  }
  constructor() { }

  ngOnInit(): void {
  }

}
