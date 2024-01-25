import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './models/category.model';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto, image: any): Promise<Category>;
    findAll(): Promise<Category[]>;
    updateById(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    updateFile(id: string, image: any): Promise<[affectedCount: number, affectedRows: Category[]]>;
    findById(id: string): Promise<Category>;
    deleteById(id: string): Promise<number>;
    search(name: string): Promise<Category[]>;
}
