import { Model } from 'sequelize-typescript';
import { Product } from '../../product/models/product.model';
interface CategoryAttrs {
    name: string;
    decsription: string;
    image: string;
}
export declare class Category extends Model<Category, CategoryAttrs> {
    id: number;
    name: string;
    description: string;
    image: string;
    product: Product[];
}
export {};
