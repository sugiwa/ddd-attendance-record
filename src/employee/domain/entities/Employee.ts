import { Entity } from 'src/libs/domain/Entity';
import { EmployeeId } from '../valueObjects/EmployeeId';

type EmployeeProps = {
  id: EmployeeId;
  name: string;
  organizationId: number;
};

export class Employee extends Entity<EmployeeProps> {
  public getName() {
    return this._props.name;
  }
}
