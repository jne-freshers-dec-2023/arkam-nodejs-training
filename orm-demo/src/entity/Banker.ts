import { Entity,  Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import {Person} from "./utils/Person"

@Entity('banker')

export class Banker extends Person
{
 
    @CreateDateColumn()
    created_at: Date 

}