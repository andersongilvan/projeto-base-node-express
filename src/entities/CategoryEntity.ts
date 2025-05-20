import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_category" })

export class CategoryEntity {
    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column()
    name : string

    @Column()
    description : string

}