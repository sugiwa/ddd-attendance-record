import { Entity } from 'src/shared/domain/Entity';
import { EmployeeName } from '../valueObjects/EmployeeName';

export class Employee extends Entity<Employee> {
  private _id: number;
  private _name: EmployeeName;

  constructor({ id, name }) {
    super();
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

  toPersistence(): any {
    return {
      id: this._id,
      name: this._name._value,
    };
  }
}
