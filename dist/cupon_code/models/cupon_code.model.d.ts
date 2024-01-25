import { Model } from 'sequelize-typescript';
import { Order } from 'src/order/models/order.model';
interface CuponCodeAttributes {
    name: string;
    persentage: number;
    end_date: Date;
}
export declare class CuponCode extends Model<CuponCode, CuponCodeAttributes> {
    id: number;
    name: string;
    persentage: number;
    end_date: Date;
    order: Order[];
}
export {};
