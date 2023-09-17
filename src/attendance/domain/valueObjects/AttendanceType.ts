import { ValueObject } from '@/shared/domain/ValueObject';
import { error } from 'console';

export const ATTENDANCE_TYPE = {
  begin: 0,
  finish: 1,
} as const;

type AttendanceTypeKeys = keyof typeof ATTENDANCE_TYPE;
export type AttendanceTypeValues = (typeof ATTENDANCE_TYPE)[AttendanceTypeKeys];

export class AttendanceType extends ValueObject<number> {
  constructor(type: number) {
    super(type);
    const attendanceTypes: number[] = Object.values(ATTENDANCE_TYPE);
    if (!attendanceTypes.includes(type)) throw error;
  }

  equals(other: AttendanceType): boolean {
    return this.getValue() === other.getValue();
  }
}
