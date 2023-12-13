import { Component } from '@angular/core';
import { App } from 'model/app';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = new App();
  db:any;
  constructor(private appService:AppService) { }

  //  ngOnInit(){
//    let db1 = (<any> window).openDatabase('mydb', '', 'my first database', 2 * 1024 * 1024);

  //  var db = openDatabase("my.db", '1.0', "My WebSQL Database", 2 * 1024 * 1024);
  //   db.transaction(function (tx) {
  //       tx.executeSql("CREATE TABLE IF NOT EXISTS people (id integer primary key, name text, dob text, place)");
  //   });
//  }
  save(){
    alert(this.model.name);
    this.db;
    this.appService.save(this.model);
    // console.log(this.model.create_date);
    // this.db.refresh();
  }
  delete(){
    this.appService.delete(this.model);
    // this.db.refresh();

  }
  view(){
    this.appService.view(this.model);
  }
  update(){
    this.appService.update(this.model);
  }
  filter(){
   let data = this.appService.filterTodayData();
  }
}
