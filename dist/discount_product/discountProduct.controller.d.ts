import { discountProduct } from './models/discountProduct.model';
import { discountProductService } from './discountProduct.service';
import { CreatediscountProductDto } from './dto/create-discountProduct.dto';
import { UpdatediscountProductDto } from './dto/update-discountProduct.dto';
export declare class discountProductController {
    private readonly discountProductService;
    constructor(discountProductService: discountProductService);
    create(creatediscountProductDto: CreatediscountProductDto): Promise<discountProduct>;
    findAll(): Promise<discountProduct[]>;
    findOne(id: number): Promise<discountProduct>;
    update(id: number, updatediscountProductDto: UpdatediscountProductDto): Promise<discountProduct>;
    delete(id: number): Promise<void>;
}
