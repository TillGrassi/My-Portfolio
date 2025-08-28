export interface Painting {
  id: number;
  title: string;
  year: number;
  medium: string;
  size: string;
  description?: string;
  imageUrl: string;
  availability: string;
  tags?: string[];
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}