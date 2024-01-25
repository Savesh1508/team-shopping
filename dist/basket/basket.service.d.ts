import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { Basket } from './models/basket.model';
export declare class BasketService {
    private basketRepository;
    constructor(basketRepository: typeof Basket);
    create(createBasketDto: CreateBasketDto): Promise<Basket>;
    findAll(): Promise<Basket[]>;
    findOne(id: number): Promise<Basket>;
    update(id: number, updateBasketDto: UpdateBasketDto): Promise<Basket>;
    delete(id: number): Promise<void>;
}
