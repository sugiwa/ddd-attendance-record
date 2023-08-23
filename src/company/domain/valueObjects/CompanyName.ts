import { ValueObject } from '@/shared/domain/ValueObject';

export class CompanyName extends ValueObject<string> {
  equals(other: ValueObject<string>): boolean {
    return this._value === other._value;
  }
}
