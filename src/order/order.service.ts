import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private orderRepository: typeof Order) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = await this.orderRepository.create(createOrderDto);
    return order;
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepository.findByPk(id);
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const builder = await this.orderRepository.update(updateOrderDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.orderRepository.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
