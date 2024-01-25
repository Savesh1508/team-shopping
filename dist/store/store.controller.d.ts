import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { Store } from './models/store.model';
import { UpdateStoreDto } from './dto/update-store.dto';
export declare class StoreController {
    private readonly storeService;
    constructor(storeService: StoreService);
    createStore(createStoreDto: CreateStoreDto): Promise<Store>;
    findAll(): Promise<Store[]>;
    findById(id: string): Promise<Store>;
    deleteById(id: string): Promise<number>;
    updateById(id: string, updateStoreDto: UpdateStoreDto): Promise<Store>;
}
