import { Entity } from '@/shared/domain/Entity';
import { AttendanceType } from '../valueObjects/AttendanceType';
import { StampDate } from '../valueObjects/StampDate';

export class AttendanceRecord extends Entity<AttendanceRecord> {
  private _id: number;
  private _attendanceType: AttendanceType;
  private _stampDate: StampDate;
  private _employeeId: number;

  constructor({ id, attendanceType, stampDate, employeeId }) {
    super();
    this._id = id;
    this._attendanceType = attendanceType;
    this._stampDate = stampDate;
    this._employeeId = employeeId;
  }

  get id() {
    return this._id;
  }

  get attendanceType() {
    return this._attendanceType;
  }

  get stampDate() {
    return this._stampDate;
  }

  get employeeId() {
    return this._employeeId;
  }

  sameIdentityAs(other: AttendanceRecord): boolean {
    return this._id === other._id;
  }

  toPersistence(): any {
    return {
      id: this._id,
      attendanceType: this._attendanceType.getValue(),
      stampDate: this.stampDate?.getValue(),
      employeeId: this._employeeId,
    };
  }
}
