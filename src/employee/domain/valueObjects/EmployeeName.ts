import { ValueObject } from 'src/libs/domain/ValueObject';

export interface EmployeeNameProps {
  name: string;
}

export class EmployeeName extends ValueObject<EmployeeNameProps> {
  protected validate(props: EmployeeNameProps): void {
    if (!props.name) {
      throw new Error('name is empty');
    }
  }
}
