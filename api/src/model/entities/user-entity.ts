import { Entity, Column, PrimaryGeneratedColumn } from "./node_modules/typeorm";
 
@Entity("user")
export class UserEntity {
 
    @PrimaryGeneratedColumn({ name: "Id", type: "smallint" })
    id: number | undefined;
 
    @Column({ name: "FirstName", length: 100 })
    firstName: string | undefined;
 
    @Column({ name: "LastName", length: 100 })
    lastName: string | undefined;
 
    @Column({ name: "Email", length: 100 })
    email: string | undefined;
}