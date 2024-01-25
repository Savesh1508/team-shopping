"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const FormData = require('form-data');
let SmsService = class SmsService {
    async sendSms(phone, otp) {
        const formdata = new FormData();
        formdata.append('mobile_phone', phone);
        formdata.append('message', `Team_Shopping - ${otp}`);
        formdata.append('from', '4546');
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: process.env.SMS_SERVICE_URL,
            headers: { Authorization: `Bearer ${process.env.SMS_TOKEN}` },
            data: formdata,
        };
        try {
            const resp = await (0, axios_1.default)(config);
            return resp;
        }
        catch (error) {
            console.log(error);
            return { status: 500 };
        }
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = __decorate([
    (0, common_1.Injectable)()
], SmsService);
//# sourceMappingURL=sms.service.js.map