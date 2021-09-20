import { Component, OnInit } from '@angular/core';

import { products } from 'src/app/product';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  Product = products;

  constructor() { }

  ngOnInit(): void {

  }

}
