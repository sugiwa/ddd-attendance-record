import { ValueObject } from 'src/libs/domain/ValueObject';

export class EmployeeName implements ValueObject<EmployeeName> {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sameValueAs(other: EmployeeName): boolean {
    return this.name === other.name;
  }
}
