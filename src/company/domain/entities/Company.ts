import { Entity } from '@/shared/domain/Entity';
import { CompanyName } from '../valueObjects/CompanyName';

export class Company extends Entity<Company> {
  private _id: number;
  private _name: CompanyName;

  constructor({ id, name }) {
    super();
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  sameIdentityAs(other: Company): boolean {
    return this._id === other._id;
  }

  toPersistence(): any {
    return {
      id: this._id,
      name: this._name._value,
    };
  }
}
