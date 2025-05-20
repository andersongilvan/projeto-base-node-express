import { CategoryEntity } from "../../../../entities/CategoryEntity"

export class ListCategoryDto {
    readonly id: string
    readonly name: string
    readonly description: string

    constructor({ id, name, description }: CategoryEntity) {
        this.id = id
        this.name = name
        this.description = description
    }
}