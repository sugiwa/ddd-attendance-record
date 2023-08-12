type EntityProps<T> = {
  id: number;
  props: T;
  createdAt: Date;
  updatedAt: Date;
};

export abstract class Entity<T> {
  constructor({ id, props, createdAt, updatedAt }: EntityProps<T>) {
    this._id = id;
    this._props = props;
    const now = new Date();
    this._createdAt = createdAt || now;
    this._updatedAt = updatedAt || now;
  }

  protected _id: number;
  protected _props: T;
  protected _createdAt: Date;
  protected _updatedAt: Date;
}
