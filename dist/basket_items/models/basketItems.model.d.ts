import { Model } from 'sequelize-typescript';
import { Basket } from 'src/basket/models/basket.model';
import { Product } from 'src/product/models/product.model';
interface BasketItemsAttrs {
    total_price: string;
    quantity: number;
    product_id: number;
    basket_id: number;
}
export declare class BasketItems extends Model<BasketItems, BasketItemsAttrs> {
    id: number;
    total_price: string;
    quantity: number;
    product_id: number;
    product: Product;
    basket_id: number;
    basket: Basket;
}
export {};
