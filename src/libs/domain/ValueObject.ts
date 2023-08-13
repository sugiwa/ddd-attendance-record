type ValueObjectProps<T> = T;

export abstract class ValueObject<T> {
  constructor(props: ValueObjectProps<T>) {
    this._props = props;
  }

  protected readonly _props: ValueObjectProps<T>;

  protected abstract validate(props: ValueObjectProps<T>): void;
}
