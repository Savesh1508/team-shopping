import { BasketItems } from './models/basketItems.model';
import { BasketItemsService } from './basketItems.service';
import { CreateBasketItemsDto } from './dto/create-basketItems.dto';
import { UpdateBasketItemsDto } from './dto/update-basketItems.dto';
export declare class BasketItemsController {
    private readonly basketItemsService;
    constructor(basketItemsService: BasketItemsService);
    create(createBasketItemsDto: CreateBasketItemsDto): Promise<BasketItems>;
    findAll(): Promise<BasketItems[]>;
    findOne(id: number): Promise<BasketItems>;
    update(id: number, updateBasketItemsDto: UpdateBasketItemsDto): Promise<BasketItems>;
    delete(id: number): Promise<void>;
}
