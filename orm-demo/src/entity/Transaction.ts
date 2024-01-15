import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

export class Transactions extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    type:string

    @Column()
    amount:number

}