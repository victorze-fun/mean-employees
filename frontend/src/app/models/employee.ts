export class Employee {

  constructor(_id = "", name = "", position = "", office = "", salary = 0) {
    this._id = _id;
    this.name = name;
    this.position = position;
    this.office = office;
    this.salary = salary;
  }

  name: string;
  position: string;
  office: string;
  salary: number;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;

}
