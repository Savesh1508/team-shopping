import { PartialType } from '@nestjs/swagger';
import { CreatediscountProductDto } from './create-discountProduct.dto';

export class UpdatediscountProductDto extends PartialType(
  CreatediscountProductDto,
) {}
