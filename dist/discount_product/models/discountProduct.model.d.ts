import { Model } from 'sequelize-typescript';
import { Discount } from 'src/discount/models/discount.model';
import { Product } from 'src/product/models/product.model';
interface discountProductAttrs {
    product_id: number;
    discount_id: number;
}
export declare class discountProduct extends Model<discountProduct, discountProductAttrs> {
    id: number;
    product_id: number;
    product: Product;
    discount_id: number;
    discount: Discount;
}
export {};
