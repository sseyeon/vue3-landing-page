"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const review_data_module_1 = require("./review-data/review-data.module");
const review_data_entity_1 = require("./review-data/entity/review-data.entity");
const faq_module_1 = require("./faq/faq.module");
const faq_entity_1 = require("./faq/entity/faq.entity");
const review_video_data_module_1 = require("./review-video-data/review-video-data.module");
const review_video_data_entity_1 = require("./review-video-data/entity/review-video-data.entity");
const instructor_module_1 = require("./instructor/instructor.module");
const instructor_entity_1 = require("./instructor/entity/instructor.entity");
const email_module_1 = require("./email/email.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'bigleader',
                password: '1234',
                database: 'bigleader',
                entities: [review_data_entity_1.ReviewData, faq_entity_1.Faq, review_video_data_entity_1.ReviewVideoData, instructor_entity_1.Instructor],
                synchronize: true,
            }),
            review_data_module_1.ReviewDataModule,
            faq_module_1.FaqModule,
            review_video_data_module_1.ReviewVideoDataModule,
            instructor_module_1.InstructorModule,
            email_module_1.EmailModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map