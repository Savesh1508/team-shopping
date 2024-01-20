import { PartialType } from '@nestjs/swagger';
import { CreateBasketItemsDto } from './create-basketItems.dto';

export class UpdateBasketItemsDto extends PartialType(CreateBasketItemsDto) {}
