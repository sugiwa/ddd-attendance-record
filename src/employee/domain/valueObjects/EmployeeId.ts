import { ValueObject } from 'src/libs/domain/ValueObject';
import { Exception } from 'src/libs/exceptions/Exception';

export interface EmployeeIdProps {
  id: number;
}

export class EmployeeId extends ValueObject<EmployeeIdProps> {
  protected validate(props: EmployeeIdProps): void {
    if (!props.id) {
      throw new Exception('id is null');
    }
  }
}
