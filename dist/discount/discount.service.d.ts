import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { Discount } from './models/discount.model';
export declare class DiscountService {
    private discountRepository;
    constructor(discountRepository: typeof Discount);
    createDiscount(createDiscountDto: CreateDiscountDto): Promise<Discount>;
    findAllDiscount(): Promise<Discount[]>;
    findOneDiscount(id: number): Promise<Discount>;
    updateDiscount(id: number, updateDiscountDto: UpdateDiscountDto): Promise<Discount[]>;
    removeDiscount(id: number): Promise<number>;
}
