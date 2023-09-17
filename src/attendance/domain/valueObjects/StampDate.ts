import { ValueObject } from '@/shared/domain/ValueObject';

export class StampDate extends ValueObject<Date> {
  equals(other: StampDate): boolean {
    return this.getValue() === other.getValue();
  }
}
