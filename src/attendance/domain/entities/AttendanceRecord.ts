import { Entity } from '@/shared/domain/Entity';
import { AttendanceType } from '../valueObjects/AttendanceType';

export class AttendanceRecord extends Entity<AttendanceRecord> {
  private _id: number;
  private _attendanceType: AttendanceType;

  constructor({ id, attendanceType }) {
    super();
    this._id = id;
    this._attendanceType = attendanceType;
  }

  get id() {
    return this._id;
  }

  get attendanceType() {
    return this._attendanceType;
  }

  sameIdentityAs(other: AttendanceRecord): boolean {
    return this._id === other._id;
  }

  toPersistence(): any {
    return {
      id: this._id,
      attendanceType: this._attendanceType._value,
    };
  }
}
