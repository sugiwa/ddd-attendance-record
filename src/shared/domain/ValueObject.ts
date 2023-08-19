export type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
  readonly _value: T;

  constructor(value: T) {
    this._value = value;
  }

  abstract equals(other: ValueObject<T>): boolean;
}
