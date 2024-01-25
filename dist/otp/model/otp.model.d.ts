import { Model } from 'sequelize-typescript';
interface OtpAttr {
    id: string;
    otp: string;
    expiration_time: Date;
    verified: boolean;
    phone: string;
}
export declare class Otp extends Model<Otp, OtpAttr> {
    id: string;
    otp: string;
    expiration_time: Date;
    verified: boolean;
    phone: string;
}
export {};
