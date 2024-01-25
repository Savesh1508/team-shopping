import { Model } from 'sequelize-typescript';
import { Product } from 'src/product/models/product.model';
import { User } from 'src/user/models/user.model';
interface CommentAttrs {
    name: string;
    email: string;
    created_at: Date;
    text: string;
    rating: number;
    is_active: boolean;
    product_id: number;
    user_id: number;
}
export declare class Comment1 extends Model<Comment1, CommentAttrs> {
    id: number;
    name: string;
    email: string;
    created_at: Date;
    text: string;
    rating: number;
    is_active: boolean;
    product_id: number;
    product: Product;
    user_id: number;
    user: User;
}
export {};
