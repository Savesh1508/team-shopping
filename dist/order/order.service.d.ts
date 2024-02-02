import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './models/order.model';
import { Product } from '../product/models/product.model';
export declare class OrderService {
    private orderRepository;
    private readonly productRepo;
    constructor(orderRepository: typeof Order, productRepo: typeof Product);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order>;
    delete(id: number): Promise<void>;
}
