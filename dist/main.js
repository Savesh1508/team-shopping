"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
async function start() {
    try {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Team_Shopping')
            .setDescription('Practice')
            .setVersion('1.0.0')
            .addTag('NestJS, Postgress, Sequielize')
            .build();
        const PORT = process.env.PORT || 3002;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('/docs', app, document);
        app.use(cookieParser());
        app.setGlobalPrefix('api');
        app.useGlobalPipes(new common_1.ValidationPipe());
        await app.listen(PORT, () => {
            console.log(`Server ${PORT} - portda ishga tushdi`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
start();
//# sourceMappingURL=main.js.map