import { EntityId } from 'src/libs/domain/Entity';
import { Employee } from '../entities/Employee';

export interface EmployeeRepository {
  createId(): EntityId;

  create(employee: Employee): void;
}
