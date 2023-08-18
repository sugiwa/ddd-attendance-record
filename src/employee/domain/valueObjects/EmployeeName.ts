import { ValueObject } from 'src/libs/domain/ValueObject';

export class EmployeeName implements ValueObject<EmployeeName> {
  name: string;

  sameValueAs(other: EmployeeName): boolean {
    return this.name === other.name;
  }
}
