export abstract class Property {
  id: string;
  name: string;
  description?: string;
  propertyTypeId: number;
  createdAt: Date;
  updatedAt: Date;
}
