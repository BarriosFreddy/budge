import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Budge, BudgeDocument } from "./../models/Budge"

@Injectable()
export class BudgeService {
    constructor(@InjectModel(Budge.name) private budgeModel: Model<BudgeDocument>){}
    async save(budgeDTO: any): Promise<Budge> {
        const budgeModel = new this.budgeModel(budgeDTO)
        return await budgeModel.save()
    }
}