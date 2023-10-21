import { PathLocationStrategy } from '@angular/common';

export interface dishesInterface {
  name: string;
  price: number;
  description?: string;
  image?: string;
  availability?: boolean;
  allergenes?: string;
  story?: string;
}
