/**
 * Created by employee on 12/7/16.
 */
export class Topic {
  constructor(public id: number,
              public title:string,
              public description: string,
              public status: boolean,
              public categoryId: number) {
  }
}
