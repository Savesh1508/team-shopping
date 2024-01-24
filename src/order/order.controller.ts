import { Order } from './models/order.model';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateOrderDto } from './dto/update-order.dto';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @ApiOperation({ summary: 'Add Order' })
  @Post('create')
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @ApiOperation({ summary: 'View all Order' })
  @ApiResponse({
    status: 200,
    description: 'List of Order',
    type: [Order],
  })
  @Get('all')
  async findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Order' })
  @ApiResponse({ status: 200, description: 'Order', type: Order })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Order> {
    return this.orderService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Order' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    return this.orderService.update(id, updateOrderDto);
  }

  @ApiOperation({ summary: 'Delete Order' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.orderService.delete(id);
  }
}
