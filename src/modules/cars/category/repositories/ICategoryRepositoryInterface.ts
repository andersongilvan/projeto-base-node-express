import { DeleteResult, UpdateResult } from "typeorm";
import { CategoryEntity } from "../../../../entities/CategoryEntity";
import { CreateCategoryDto } from "../DTOs/CreateCategoryDto";

export interface ICategoryRepositoryInterface {
    create({ name, description }: CreateCategoryDto): Promise<CategoryEntity>
    FindAll(): Promise<CategoryEntity[]>
    findById(id: string): Promise<CategoryEntity | null>
    findByName(name: string): Promise<CategoryEntity | null>
    update({ id, name, description }: CreateCategoryDto): Promise<UpdateResult>
    delete(id: string): Promise<DeleteResult>
}