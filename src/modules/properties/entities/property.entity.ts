export abstract class Property {
  id: string;
  name: string;
  description?: string;
  propertyTypeId: number;
  room: number;
  bathroom: number;
  suite: number;
  kitchen: number;
  livingRoom: number;
  garage: number;
  laundry: number;
  pool: number;
  office: number;
  garden: number;
  createdAt: Date;
  updatedAt: Date;
}
