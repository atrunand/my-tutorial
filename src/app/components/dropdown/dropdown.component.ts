import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  url ='https://ilogistic-qas.irpc.co.th/service/api/v1/ProcessCb/Status';
  s: any;
  sta :any = [];
  itStatus:any = [];

  obj: any =[];
  thisStatus:any;
  peepsSelect:any;
  showSelect:any;
  disp:any = [];
  doSelect:any;




  constructor(private http:HttpClient) {

  }

  ngOnInit() :void {

  this.getData()
  this.displaySta()
}

getData() {
  this.http.get<myStatus>(this.url).subscribe((response: {}) => {
    // console.log(response)
    this.s = response;
    this.sta = this.s.result;
    // console.log(this.sta[1].name);

    for (let i = 0; i < this.sta.length; i++) {
      this.itStatus[i] = this.sta[i].name;
    };
    console.log(this.itStatus)
})
}

displaySta() {
this.obj = this.itStatus;
console.log(this.obj)
this.peepsSelect = document.getElementById("val") as HTMLElement;

this.showSelect = document.getElementById("disp") as InnerHTML;

console.log(this.obj)
this.showSelect = this.peepsSelect.options.selectedIndex;


if(this.showSelect){
    this.doSelect = this.obj[this.showSelect]
}else if(this.showSelect  == '0'){
  this.doSelect = 'Create Shipment'
}else if(this.showSelect  == '-1'){
  this.doSelect = ''
}
console.log(this.peepsSelect.innerText)
console.log(this.peepsSelect.value)
console.log(this.showSelect)
console.log(this.doSelect)
console.log(this.disp)

 // if(this.peepsSelect.value != 'CurrentStatusId'){
  // this.doSelect = this.obj[this.showSelect]
  // }else if(this.peepsSelect.value = 'CurrentStatusId'){
  //   this.doSelect = 'CurrentStatusId'
  // }
  // if(this.peepsSelect.value  == 0){
  //   this.doSelect = 'Create Shipment'
  // }
}
}

interface myStatus {
  currentstatusid: number;
  code: string;
  name: string;
  result: Array<object>;
}

