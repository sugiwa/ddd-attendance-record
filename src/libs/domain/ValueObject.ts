type ValueObjectProps<T> = T;

export abstract class ValueObject<T> {
  constructor(props: ValueObjectProps<T>) {
    this.props = props;
  }

  protected readonly props: ValueObjectProps<T>;

  protected abstract validate(props: ValueObjectProps<T>): void;
}
