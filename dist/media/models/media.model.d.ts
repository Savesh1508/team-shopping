import { Model } from 'sequelize-typescript';
import { Product } from 'src/product/models/product.model';
interface MediaAttrs {
    media_link: string;
    product_id: number;
}
export declare class Media extends Model<Media, MediaAttrs> {
    id: number;
    media_link: string;
    product_id: number;
    product: Product;
}
export {};
