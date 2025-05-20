import { DeleteResult } from "typeorm";
import { ICategoryRepositoryInterface } from "../repositories/ICategoryRepositoryInterface";

export class DeleteCategoryService {

    constructor(private categoryRepository: ICategoryRepositoryInterface) { }

    async execute(id: string): Promise<string> {
        const categoryDeleted = await this.categoryRepository.delete(id)
        if (categoryDeleted.affected === 0) {
            return "Category not found"
        }

        return "Deleted"
    }
}