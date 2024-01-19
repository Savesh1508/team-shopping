import { PartialType } from '@nestjs/swagger';
import { CreateUserAddressDto } from './create-userAddress.dto';

export class UpdateuserAddressDto extends PartialType(CreateUserAddressDto) {}
