import { Entity,  Column, PrimaryColumn } from "typeorm";
import { Person } from "./utils/Person";

@Entity('client')

export class Client extends Person
{

    @Column({type:"numeric"})
    balance: number;
    
    @Column({default:true  })
    is_Active: boolean

    @Column({type:"simple-json",nullable:true})
    additional_info:
    {
        age:number,
        hair_colour:string
    }

    @Column()
    family_member: string
}