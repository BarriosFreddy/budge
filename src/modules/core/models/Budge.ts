import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type BudgeDocument = Budge & Document

@Schema()
export class Budge {

    @Prop({ required: true})
    description: string

    @Prop({ required: true})
    amount: number
}

export const BudgeSchema = SchemaFactory.createForClass(Budge)