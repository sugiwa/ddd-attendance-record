import { ValueObject } from '@/shared/domain/ValueObject';

export class StampDate extends ValueObject<Date> {
  equals(other: ValueObject<Date>): boolean {
    return this._value === other._value;
  }
}
