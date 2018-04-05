import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared-services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private myArr: Array<object> = [];
  private shouldShowRed: boolean = false;
  private pStyle: object = {};
  private newRecord: object = {};

  constructor(
    private http: HttpService
  ) { }

  async ngOnInit() {
    this.pStyle = {
      "color": "blue"
    };
    let test: any = await this.http.get();
    this.myArr = [
      { id: 1, name: "lucas phan", profession: "dev", school: "csuf" },
      { id: 2, name: "joe doe", profession: "dev", school: "csuf" },
      { id: 3, name: "jane doe", profession: "dev", school: "csuf" },
      { id: 4, name: "mike tison", profession: "dev", school: "csuf" },
      { id: 7, name: "joe", profession: "dev", school: "csuf" }

    ]
    console.log('myArray--->', this.myArr);
  }

  toggleClass() {
    console.log('toggle button pressed...');
    this.shouldShowRed = !this.shouldShowRed;
    return this.shouldShowRed;
  }

  remove(index: any) {
    console.log('index of this item is:::', index);
    this.myArr.splice(index, 1);
  }

  addRecord(record?: any) {
    let r = {
      id: record ? record.id : 'default',
      name: record ? record.name : 'default',
      profession: record ? record.profession : 'default',
      school: record ? record.school : 'default'
    }
    this.myArr.unshift(r);
  }


}
