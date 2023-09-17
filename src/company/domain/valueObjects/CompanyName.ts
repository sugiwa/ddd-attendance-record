import { ValueObject } from '@/shared/domain/ValueObject';

export class CompanyName extends ValueObject<string> {
  equals(other: CompanyName): boolean {
    return this.getValue() === other.getValue();
  }
}
