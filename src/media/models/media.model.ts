import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

interface MediaAttrs {
  media_link: string;
  product_id:number
}

@Table({ tableName: 'Media' })
export class Media extends Model<Media, MediaAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'data:image/jpeg;base64,/9j', description: 'Media link' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  media_link: string;

}
