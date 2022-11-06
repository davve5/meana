import { Injectable } from '@nestjs/common';
import { FindOptions, Op } from 'sequelize';

export interface Search {
  [key: string]: string;
}

@Injectable()
export class ApiService {
  public prepareGetManyOptions(
    fields?: string,
    limit?: number,
    offset?: number,
    sort?: string[],
    search?: string
  ): FindOptions {
    return {
      attributes: fields ? fields.split(',') : null,
      limit: limit ? limit : 100,
      offset: offset ? offset : null,
      order: sort ? sort.map((x) => x.split('|')) : null,
      where: search ? JSON.parse(search) : null,
    } as FindOptions;
  }
}