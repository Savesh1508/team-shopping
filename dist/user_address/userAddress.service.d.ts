import { CreateUserAddressDto } from './dto/create-userAddress.dto';
import { UpdateuserAddressDto } from './dto/update-userAddress.dto';
import { UserAddress } from './models/userAddress.model';
export declare class UserAddressService {
    private userAddressRepository;
    constructor(userAddressRepository: typeof UserAddress);
    create(createUserAddressDto: CreateUserAddressDto): Promise<UserAddress>;
    findAll(): Promise<UserAddress[]>;
    findOne(id: number): Promise<UserAddress>;
    update(id: number, updateUserAddressDto: UpdateuserAddressDto): Promise<UserAddress>;
    delete(id: number): Promise<void>;
}
