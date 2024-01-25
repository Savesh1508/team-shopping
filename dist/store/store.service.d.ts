import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './models/store.model';
export declare class StoreService {
    private storeRepo;
    constructor(storeRepo: typeof Store);
    createStore(createStoreDto: CreateStoreDto): Promise<Store>;
    findAll(): Promise<Store[]>;
    findById(id: number): Promise<Store>;
    deleteById(id: number): Promise<number>;
    updateById(id: number, updateStoreDto: UpdateStoreDto): Promise<Store>;
}
