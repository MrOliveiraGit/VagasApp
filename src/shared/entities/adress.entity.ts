

class City {
  _id: string;
  name: string;

  constructor(partial: Partial<City>) {
    Object.assign(this, partial);
  }
}

class Neighborhood {
  _id: string;
  name: string;

  constructor(partial: Partial<Neighborhood>) {
    Object.assign(this, partial);
  }
}

export class AddressEntity {
  country: string;
  state: string;
  city: City;
  neighborhood: Neighborhood;
  street: string;
  streetNumber: string;
  zipCode: string;

  constructor(partial: Partial<AddressEntity>) {
    Object.assign(this, partial);
  }
}
