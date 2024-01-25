import { CreateDiscountDto } from './create-discount.dto';
declare const UpdateDiscountDto_base: import("@nestjs/common").Type<Partial<CreateDiscountDto>>;
export declare class UpdateDiscountDto extends UpdateDiscountDto_base {
    readonly name?: string;
    readonly persentage?: bigint;
    readonly start_date?: Date;
    readonly end_date?: Date;
}
export {};
