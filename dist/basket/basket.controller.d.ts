import { Basket } from './models/basket.model';
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
export declare class BasketController {
    private readonly basketService;
    constructor(basketService: BasketService);
    create(createBasketDto: CreateBasketDto): Promise<Basket>;
    findAll(): Promise<Basket[]>;
    findOne(id: number): Promise<Basket>;
    update(id: number, updateBasketDto: UpdateBasketDto): Promise<Basket>;
    delete(id: number): Promise<void>;
}
