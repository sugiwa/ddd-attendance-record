import { EntityId } from 'src/libs/domain/Entity';

export interface EmployeeRepository {
  createId(): EntityId;
}
