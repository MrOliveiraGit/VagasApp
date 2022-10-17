import { Transform } from 'class-transformer';
import { PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

export abstract class BaseSchema {
  @Transform(({ value }) => value.toHexString())
  @PrimaryKey()
  _id!: ObjectId;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({ nullable: true })
  deleted?: boolean;

  @Property({ nullable: true })
  deletedAt?: Date;
}
