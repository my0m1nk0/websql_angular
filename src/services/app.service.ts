import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  db: any ;
  constructor() { }

  ngOnInit() {
    alert('ngOnInit');
    this.db = (<any>window).openDatabase(
      'mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
  }

  save(model:any):AppService {
    alert('Service');
    this.ngOnInit();
    this.db.transaction(function (tx:any) {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS people (id integer, name text, dob text, place text,create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'
      );
    });
    this.db.transaction(function (tx:any) {
      tx.executeSql('INSERT INTO people (id, name,dob,place) VALUES (?,?,?,?)', [model.id, model.name, model.dob, model.place]);
      alert(model.place);
    });
    // this.db.refresh();

    return this;
  }

  delete(model:any):AppService{
    this.ngOnInit();
    alert('delete');

    this.db.transaction(function (tx:any) {
      tx.executeSql('DELETE FROM people WHERE id = ?', [model.id]);
    });

    this.db.transaction(function (tx:any) {
      tx.executeSql('delete from people where id =' + model.id);
    });

    return this;
  }

  view(model:any):AppService{
    this.ngOnInit();
    alert(JSON.stringify(model));

    return this;
  }

  update(model:any):AppService{
    this.ngOnInit();
    alert(model.id);

    this.db.transaction(function (tx:any) {
      // tx.executeSql('update people set name = ? where id = ?', [model.name, model.id]);
      tx.executeSql('delete from people where id =' + model.id);
      tx.executeSql(
        'INSERT INTO people (id, name,dob,place) VALUES (?,?,?,?)', [model.id, model.name, model.dob, model.place]
      );
    });

    return this;
  }

  filterTodayData(){
    this.ngOnInit();
    this.db.transaction(function (tx:any) {
      tx.executeSql('SELECT * FROM people WHERE create_date >= DATE("now")');
    });

    return this;
  }


}
//   db.transaction(function (tx) {
//  tx.executeSql('SELECT * FROM people', [], function (tx, results) {
//       var len = results.rows.length, i;
//       var msg = "<p>Found rows: " + len + "</p>";
//       document.querySelector('#status').innerHTML +=  msg;

//       for (i = 0; i < len; i++) {
//          alert(results.rows.item(i).log );
//       }

//    }, null);
// //  db.executeSql('INSERT INTO people (id,name, dob, place) VALUES (1,"Subha","3aug","chennai")');

//
