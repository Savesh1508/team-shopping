import { Model } from 'sequelize-typescript';
import { BasketItems } from 'src/basket_items/models/basketItems.model';
import { Order } from 'src/order/models/order.model';
import { User } from 'src/user/models/user.model';
interface BasketAttrs {
    created_at: Date;
    status: boolean;
    user_id: number;
}
export declare class Basket extends Model<Basket, BasketAttrs> {
    id: number;
    created_at: Date;
    status: boolean;
    order: Order[];
    basketItems: BasketItems[];
    user_id: number;
    user: User;
}
export {};
