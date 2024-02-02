import { Model } from 'sequelize-typescript';
import { Category } from '../../category/models/category.model';
import { Store } from '../../store/models/store.model';
import { discountProduct } from 'src/discount_product/models/discountProduct.model';
import { BasketItems } from 'src/basket_items/models/basketItems.model';
import { Media } from 'src/media/models/media.model';
import { Comment1 } from 'src/comment/models/comment.model';
interface ProductAttrs {
    name: string;
    price: string;
    description: string;
    total_count: number;
    mfg: string;
    life: string;
    qr_code: string;
    value: string;
    brand: string;
    unit_of_measure: string;
}
export declare class Product extends Model<Product, ProductAttrs> {
    id: number;
    name: string;
    description: string;
    price: string;
    total_count: number;
    mfg: string;
    life: string;
    qr_code: string;
    value: string;
    brand: string;
    is_active: boolean;
    unit_of_measure: string;
    category_id: number;
    category: Category;
    store: Store[];
    discount_product: discountProduct[];
    basketItems: BasketItems[];
    media: Media[];
    comment: Comment1[];
}
export {};
