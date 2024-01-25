import { CreatediscountProductDto } from './dto/create-discountProduct.dto';
import { UpdatediscountProductDto } from './dto/update-discountProduct.dto';
import { discountProduct } from './models/discountProduct.model';
export declare class discountProductService {
    private discountProductRepository;
    constructor(discountProductRepository: typeof discountProduct);
    create(creatediscountProductDto: CreatediscountProductDto): Promise<discountProduct>;
    findAll(): Promise<discountProduct[]>;
    findOne(id: number): Promise<discountProduct>;
    update(id: number, updatediscountProductDto: UpdatediscountProductDto): Promise<discountProduct>;
    delete(id: number): Promise<void>;
}
