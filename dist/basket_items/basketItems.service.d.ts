import { CreateBasketItemsDto } from './dto/create-basketItems.dto';
import { UpdateBasketItemsDto } from './dto/update-basketItems.dto';
import { BasketItems } from './models/basketItems.model';
export declare class BasketItemsService {
    private basketItemsRepository;
    constructor(basketItemsRepository: typeof BasketItems);
    create(createBasketItemsDto: CreateBasketItemsDto): Promise<BasketItems>;
    findAll(): Promise<BasketItems[]>;
    findOne(id: number): Promise<BasketItems>;
    update(id: number, updateBasketItemsDto: UpdateBasketItemsDto): Promise<BasketItems>;
    delete(id: number): Promise<void>;
}
