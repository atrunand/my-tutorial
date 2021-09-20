import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  customers!: Customer;
  str: string | undefined;
  customerForm:any;
  constructor() { }


  ngOnInit(): void {
    this.customers = new Customer();
  }

  onSubmit (){
    this.str = "ค่าจากแบบฟอร์ม : "+ JSON.stringify(this.customers);
    window.alert(this.str);

  }
}

 class Customer{
  FirstName!: string;
  LastName!: string;
  UserName!: string;
  Email!: string;
  Address!: string;
}
