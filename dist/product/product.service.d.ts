import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/product.model';
export declare class ProductService {
    private productRepo;
    constructor(productRepo: typeof Product);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    deleteById(id: number): Promise<number>;
    updateById(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
    search({ name, price, qr_code, brand }: {
        name: any;
        price: any;
        qr_code: any;
        brand: any;
    }): Promise<Product[]>;
}
