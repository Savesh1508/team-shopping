"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const user_roles_model_1 = require("./roles/models/user-roles.model");
const cupon_code_model_1 = require("./cupon_code/models/cupon_code.model");
const cupon_code_module_1 = require("./cupon_code/cupon_code.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const files_module_1 = require("./files/files.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const category_module_1 = require("./category/category.module");
const media_model_1 = require("./media/models/media.model");
const media_module_1 = require("./media/media.module");
const category_model_1 = require("./category/models/category.model");
const discount_module_1 = require("./discount/discount.module");
const product_module_1 = require("./product/product.module");
const product_model_1 = require("./product/models/product.model");
const comment_model_1 = require("./comment/models/comment.model");
const basket_model_1 = require("./basket/models/basket.model");
const basket_module_1 = require("./basket/basket.module");
const discount_model_1 = require("./discount/models/discount.model");
const comment_module_1 = require("./comment/comment.module");
const basketItems_model_1 = require("./basket_items/models/basketItems.model");
const basketItems_module_1 = require("./basket_items/basketItems.module");
const userAddress_model_1 = require("./user_address/models/userAddress.model");
const userAddress_module_1 = require("./user_address/userAddress.module");
const store_module_1 = require("./store/store.module");
const store_model_1 = require("./store/models/store.model");
const admin_module_1 = require("./admin/admin.module");
const discountProduct_model_1 = require("./discount_product/models/discountProduct.model");
const discountProduct_module_1 = require("./discount_product/discountProduct.module");
const order_module_1 = require("./order/order.module");
const order_model_1 = require("./order/models/order.model");
const role_model_1 = require("./roles/models/role.model");
const admin_roles_model_1 = require("./roles/models/admin-roles.model");
const roles_module_1 = require("./roles/roles.module");
const admin_model_1 = require("./admin/models/admin.model");
const user_module_1 = require("./user/user.module");
const otp_module_1 = require("./otp/otp.module");
const sms_module_1 = require("./sms/sms.module");
const user_model_1 = require("./user/models/user.model");
const otp_model_1 = require("./otp/model/otp.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.resolve)(__dirname, 'static'),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: +process.env.POSTGRES_PORT,
                username: process.env.POSTGRES_USER,
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [
                    admin_model_1.Admin,
                    cupon_code_model_1.CuponCode,
                    category_model_1.Category,
                    media_model_1.Media,
                    basket_model_1.Basket,
                    discount_model_1.Discount,
                    product_model_1.Product,
                    comment_model_1.Comment1,
                    basketItems_model_1.BasketItems,
                    userAddress_model_1.UserAddress,
                    store_model_1.Store,
                    discountProduct_model_1.discountProduct,
                    order_model_1.Order,
                    role_model_1.Role,
                    user_roles_model_1.UserRoles,
                    admin_roles_model_1.AdminRoles,
                    user_model_1.User,
                    otp_model_1.Otp,
                ],
                autoLoadModels: true,
                logging: false,
            }),
            user_module_1.UserModule,
            cupon_code_module_1.CuponCodeModule,
            media_module_1.MediaModule,
            files_module_1.FilesModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            basket_module_1.BasketModule,
            discount_module_1.DiscountModule,
            comment_module_1.CommentModule,
            store_module_1.StoreModule,
            basketItems_module_1.BasketItemsModule,
            userAddress_module_1.UserAddressModule,
            admin_module_1.AdminModule,
            discountProduct_module_1.discountProductModule,
            order_module_1.OrderModule,
            roles_module_1.RolesModule,
            otp_module_1.OtpModule,
            sms_module_1.SmsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map