export declare class SmsService {
    sendSms(phone: string, otp: string): Promise<import("axios").AxiosResponse<any, any> | {
        status: number;
    }>;
}
