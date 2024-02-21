export class Property {
  id: number;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  type: string; // Ex: 'Apartment', 'House', 'Condo', etc.
  description: string;
  amenities: string[]; // Lista de comodidades
  imageUrl: string; // URL da imagem representativa
}
