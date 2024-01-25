import { Model } from 'sequelize-typescript';
import { Basket } from 'src/basket/models/basket.model';
import { Comment1 } from 'src/comment/models/comment.model';
import { Order } from 'src/order/models/order.model';
interface UserAttrs {
    full_name: string;
    phone: string;
    hashed_refresh_token: string;
}
export declare class User extends Model<User, UserAttrs> {
    id: number;
    full_name: string;
    phone: string;
    hashed_refresh_token: string;
    is_active: boolean;
    comment: Comment1[];
    order: Order[];
    basket: Basket[];
}
export {};
