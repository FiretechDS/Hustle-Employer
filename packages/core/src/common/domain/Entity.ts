//Revisar cómo será el tema de los IDs

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  protected readonly id:number// UniqueID;
  protected props: T;

  constructor (props: T, id?: number /*UniqueID*/) {
   this.id = id ? id : Math.random() /*new UniqueID()*/;
    this.props = props;
  }

  // Entities are compared based on their referential
  // equality.
  public equals (object?: Entity<T>) : boolean {

    if (object == null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

   return this.id === object.id;
  }
}