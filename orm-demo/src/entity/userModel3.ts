import { Entity,PrimaryColumn, Column } from "typeorm";

@Entity('user3')
export class User3
{
    static findBy(arg0: { email: any; }) {
        throw new Error("Method not implemented.");
    }
    @PrimaryColumn()
    email:string

    @Column()
    userName: string

    @Column()
    password:string
    static finOn: any;

}