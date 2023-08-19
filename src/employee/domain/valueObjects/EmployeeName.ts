import { ValueObject } from 'src/libs/domain/ValueObject';

export class EmployeeName implements ValueObject<EmployeeName> {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  sameValueAs(other: EmployeeName): boolean {
    return this._name === other._name;
  }
}
