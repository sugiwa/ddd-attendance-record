import { ValueObject } from 'src/libs/domain/ValueObject';

export interface EmployeeIdProps {
  id: number;
}

export class EmployeeId extends ValueObject<EmployeeIdProps> {
  protected validate(props: EmployeeIdProps): void {
    console.log(props);
  }
}
