import { UserAddress } from './models/userAddress.model';
import { UserAddressService } from './userAddress.service';
import { CreateUserAddressDto } from './dto/create-userAddress.dto';
import { UpdateuserAddressDto } from './dto/update-userAddress.dto';
export declare class UserAddressController {
    private readonly userAddressService;
    constructor(userAddressService: UserAddressService);
    create(createUserAddressDto: CreateUserAddressDto): Promise<UserAddress>;
    findAll(): Promise<UserAddress[]>;
    findOne(id: number): Promise<UserAddress>;
    update(id: number, updateUserAddressDto: UpdateuserAddressDto): Promise<UserAddress>;
    delete(id: number): Promise<void>;
}
