import { Entity } from 'src/libs/domain/Entity';
import { EmployeeName } from '../valueObjects/EmployeeName';

export class Employee implements Entity<Employee> {
  private id: number;
  private name: EmployeeName;

  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }

  sameIdentityAs(other: Employee): boolean {
    return this.id === other.id;
  }
}
