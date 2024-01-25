import { CreateCuponCodeDto } from './dto/create-cupon_code.dto';
import { UpdateCuponCodeDto } from './dto/update-cupon_code.dto';
import { CuponCode } from './models/cupon_code.model';
export declare class CuponCodeService {
    private cuponCodeRepo;
    constructor(cuponCodeRepo: typeof CuponCode);
    createCuponCode(createCuponCodeDto: CreateCuponCodeDto): Promise<CuponCode>;
    getAllCuponCodes(): Promise<CuponCode[]>;
    getCuponCodeById(id: number): Promise<CuponCode>;
    updateCuponCodeById(id: number, updateCuponCodeDto: UpdateCuponCodeDto): Promise<CuponCode>;
    deleteCuponCodeById(id: number): Promise<{
        message: string;
    }>;
}
