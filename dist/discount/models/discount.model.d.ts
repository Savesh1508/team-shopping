import { Model } from 'sequelize-typescript';
import { discountProduct } from 'src/discount_product/models/discountProduct.model';
interface DiscountCretionAttrs {
    name: string;
    persentage: bigint;
    start_date: Date;
    end_date: Date;
}
export declare class Discount extends Model<Discount, DiscountCretionAttrs> {
    id: number;
    name: string;
    persentage: bigint;
    start_date: Date;
    end_date: Date;
    discount_product: discountProduct[];
}
export {};
