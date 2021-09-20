import { Module } from "@nestjs/common";
import { AppController } from "./controller/app.controller";
import { AppService } from "./services/app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { BudgeController } from "./controller/budge.controller";
import { BudgeService } from "./services/budge.service";
import { Budge, BudgeSchema } from "./models/Budge";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/budge"),
    MongooseModule.forFeature([{ name: Budge.name, schema: BudgeSchema }]),
  ],
  controllers: [AppController, BudgeController],
  providers: [AppService, BudgeService],
})
export class AppModule {}
