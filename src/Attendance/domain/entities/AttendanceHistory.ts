import { Entity } from '@/shared/domain/Entity';

export class AttendanceHistory extends Entity<AttendanceHistory> {
  private _id: number;

  sameIdentityAs(other: AttendanceHistory): boolean {
    return this._id === other._id;
  }
}
