import { Model } from 'sequelize-typescript';
import { Product } from '../../product/models/product.model';
interface StoreAttrs {
    addCount: number;
    product_id: number;
}
export declare class Store extends Model<Store, StoreAttrs> {
    id: number;
    addCount: number;
    product_id: number;
    product: Product;
}
export {};
