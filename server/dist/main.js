"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const database_seeder_service_1 = require("./project/database-seeder.service");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const seeder = app.get(database_seeder_service_1.DatabaseSeederService);
    await seeder.seed();
    app.enableCors();
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map