import { Media } from './models/media.model';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    create(createMediaDto: CreateMediaDto): Promise<Media>;
    findAll(): Promise<Media[]>;
    findOne(id: number): Promise<Media>;
    update(id: number, updateTypeDto: UpdateMediaDto): Promise<Media>;
    delete(id: number): Promise<void>;
}
