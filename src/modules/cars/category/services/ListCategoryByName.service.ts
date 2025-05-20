import { ListCategoryDto } from "../DTOs/ListCategoryDto";
import { ICategoryRepositoryInterface } from "../repositories/ICategoryRepositoryInterface";

export class ListCategoryBynameService {

    constructor(private categoryRepository: ICategoryRepositoryInterface) { }

    async execute(name: string) {

        if(!name) {
            throw new Error("Required fileld")
        }

        const categoryByname = await this.categoryRepository.findByName(name)

        if (!categoryByname) {
            throw new Error("Category not found")
        }

        return new ListCategoryDto(categoryByname)
    }
}