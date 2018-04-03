import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared-services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private myArr:Array<object> = [];
  constructor(
    private http: HttpService
  ) { }

  async ngOnInit() {
    let test:any = await this.http.get();
    this.myArr = [
      { id: 1, name: "lucas phan", profession: "dev", school: "csuf" },
      { id: 2, name: "joe doe", profession: "dev", school: "csuf" },
      { id: 3, name: "jane doe", profession: "dev", school: "csuf" },
      { id: 4, name: "mike tison", profession: "dev", school: "csuf" },
      { id: 5, name: "barack obama", profession: "dev", school: "csuf" },
      { id: 6, name: "mary", profession: "dev", school: "csuf" }
    ]
    console.log('myArray--->', this.myArr);
  }

}
