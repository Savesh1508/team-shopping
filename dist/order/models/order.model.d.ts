import { Model } from 'sequelize-typescript';
import { Basket } from 'src/basket/models/basket.model';
import { CuponCode } from 'src/cupon_code/models/cupon_code.model';
import { User } from 'src/user/models/user.model';
import { UserAddress } from 'src/user_address/models/userAddress.model';
interface OrderAttrs {
    phone: string;
    order_date: Date;
    created_at: Date;
    status: boolean;
    payment_type: string;
    userAddres_id: number;
    basket_id: number;
    user_id: number;
    cupon_code_id: number;
}
export declare class Order extends Model<Order, OrderAttrs> {
    id: number;
    phone: string;
    order_date: Date;
    created_at: Date;
    status: boolean;
    payment_type: string;
    userAddres_id: number;
    userAddres: UserAddress;
    basket_id: number;
    basket: Basket;
    cupon_code_id: number;
    cupon_code: CuponCode;
    user_id: number;
    user: User;
}
export {};
