import { Entity, EntityId } from 'src/libs/domain/Entity';
import { EmployeeName } from '../valueObjects/EmployeeName';

export type EmployeeProps = {
  name: EmployeeName;
  companyId: number;
};

export class Employee extends Entity<EmployeeProps> {
  static create({ id, props }: { id: EntityId; props: EmployeeProps }) {
    const employee = new Employee({ id, props });
    return employee;
  }

  public getName() {
    return this._props.name;
  }
}
