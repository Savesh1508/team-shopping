import { Model } from 'sequelize-typescript';
import { Order } from 'src/order/models/order.model';
interface userAddressAttrs {
    address_name: string;
    location: string;
    street: string;
    region: string;
    home_number: string;
    flat_number: string;
    entrance: string;
    floor: string;
    user_id: number;
}
export declare class UserAddress extends Model<UserAddress, userAddressAttrs> {
    id: number;
    address_name: string;
    location: string;
    street: string;
    region: string;
    home_number: string;
    flat_number: string;
    entrance: string;
    floor: string;
    order: Order[];
}
export {};
