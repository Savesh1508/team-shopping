import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './models/category.model';
import { FilesService } from '../files/files.service';
import { SelectDto } from '../admin/dto/select_limit.dto';
export declare class CategoryService {
    private categoryRepository;
    private readonly fileService;
    constructor(categoryRepository: typeof Category, fileService: FilesService);
    create(createCategoryDto: CreateCategoryDto, image: any): Promise<Category>;
    limit_category(selectDto: SelectDto): Promise<Object>;
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    deleteById(id: number): Promise<number>;
    updateById(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    removeFile(id: number): Promise<boolean>;
    updateImage(id: number, image: any): Promise<[affectedCount: number, affectedRows: Category[]]>;
    remove(id: number): Promise<boolean>;
    search(name: string): Promise<Category[]>;
}
