import { PropertyFeature } from './property-feature.entity';
import { PropertyType } from './property-type.entity';

export class Property {
  id: number;
  address: string;
  description: string;
  images: string[];
  type: PropertyType;
  features: PropertyFeature[];
}
