import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    search(name: string, price: string, qr_code: string, brand: string): Promise<Product[]>;
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    deleteById(id: string): Promise<number>;
    updateById(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
}
