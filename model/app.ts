export class App {
  id: number;
name: string = '';
dob: string;
place: string;
// create_date: string=new Date().toISOString().slice(0, 19).replace('T', ' ');

constructor(values: Object = {}) {
Object.assign(this, values);
}
}
