import { Entity,  Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity('person')

export class Person extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id:number 

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unique:true})
    email:string;
    
    @Column({unique:true, length:10})
    card_number: string


}