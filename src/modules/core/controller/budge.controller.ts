import { Controller, Get } from "@nestjs/common";
import { BudgeService } from "../services/budge.service";

@Controller('budgets')
export class BudgeController {
    constructor(private readonly budgeService: BudgeService){}

    @Get('/')
    async save(){
        const budgeMock = {
            description: "Description about the item",
            amount: 11400
        }
        
        return await this.budgeService.save(budgeMock)
    }
}