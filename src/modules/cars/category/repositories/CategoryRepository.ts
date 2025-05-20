import { DeleteResult, ILike, Repository, UpdateResult } from "typeorm";
import { CategoryEntity } from "../../../../entities/CategoryEntity";
import { CreateCategoryDto } from "../DTOs/CreateCategoryDto";
import { ICategoryRepositoryInterface } from "./ICategoryRepositoryInterface";

export class CategoryRepository implements ICategoryRepositoryInterface {

    constructor(private categoryEntity: Repository<CategoryEntity>) { }

    async create({ name, description }: CreateCategoryDto): Promise<CategoryEntity> {
        return await this.categoryEntity.save({ name, description })
    }

    async FindAll(): Promise<CategoryEntity[]> {
        return await this.categoryEntity.find()
    }

    async findById(id: string): Promise<CategoryEntity | null> {
        return await this.categoryEntity.findOne({ where: { id: id } })
    }

    async findByName(name: string): Promise<CategoryEntity | null> {
        return await this.categoryEntity.findOne({ where: { name: ILike(`%${name}%`) } })
    }

   async update({ id, name, description }: CreateCategoryDto): Promise<UpdateResult> {
        return await this.categoryEntity.update({ id: id }, { name: name, description: description })
    }

   async delete(id: string): Promise<DeleteResult> {
        return await this.categoryEntity.delete({ id : id })
    }
}