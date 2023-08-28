import { Entity } from '@/shared/domain/Entity';

export class AttendanceRecord extends Entity<AttendanceRecord> {
  private _id: number;

  sameIdentityAs(other: AttendanceRecord): boolean {
    return this._id === other._id;
  }
}
