import { ValueObject } from '@/shared/domain/ValueObject';

export const ATTENDANCE_TYPE = {
  begin: 0,
  finish: 1,
} as const;

type AttendanceTypeKeys = keyof typeof ATTENDANCE_TYPE;
export type AttendanceTypeValues = (typeof ATTENDANCE_TYPE)[AttendanceTypeKeys];

export class AttendanceType extends ValueObject<AttendanceTypeValues> {
  equals(other: ValueObject<number>): boolean {
    return this._value === other._value;
  }
}
