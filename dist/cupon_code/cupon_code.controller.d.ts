import { CuponCodeService } from './cupon_code.service';
import { CreateCuponCodeDto } from './dto/create-cupon_code.dto';
import { UpdateCuponCodeDto } from './dto/update-cupon_code.dto';
import { CuponCode } from './models/cupon_code.model';
export declare class CuponCodeController {
    private readonly cuponCodeService;
    constructor(cuponCodeService: CuponCodeService);
    createCuponCode(createCuponCodeDto: CreateCuponCodeDto): Promise<CuponCode>;
    getAllCuponCodes(): Promise<CuponCode[]>;
    getCuponCodeById(id: string): Promise<CuponCode>;
    updateCuponCodeById(id: string, updateComanyDto: UpdateCuponCodeDto): Promise<CuponCode>;
    deleteServiceById(id: string): Promise<{
        message: string;
    }>;
}
