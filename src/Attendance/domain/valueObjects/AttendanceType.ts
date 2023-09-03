import { ValueObject } from '@/shared/domain/ValueObject';

export const ATTENDANCE_TYPE = {
  begin: 0,
  finish: 1,
};

export class AttendanceType extends ValueObject<0 | 1> {
  equals(other: ValueObject<number>): boolean {
    return this._value === other._value;
  }
}
