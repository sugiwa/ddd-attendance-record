import { Entity } from 'src/libs/domain/Entity';
import { EmployeeName } from '../valueObjects/EmployeeName';

export class Employee implements Entity<Employee> {
  private _id: number;
  private _name: EmployeeName;

  constructor({ id, name }) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  sameIdentityAs(other: Employee): boolean {
    return this._id === other._id;
  }
}
