import { ListCategoryDto } from "../DTOs/ListCategoryDto";
import { ICategoryRepositoryInterface } from "../repositories/ICategoryRepositoryInterface";

export class ListCategoryByIdService {
    constructor(private categoryRepository: ICategoryRepositoryInterface) { }

    async execute(id: string): Promise<ListCategoryDto> {

        if(!id) {
            throw new Error("Required fileld")
        }
       
        const categoryById = await this.categoryRepository.findById(id)
        if (!categoryById) {
            throw new Error("Category not found")
        }

        return new ListCategoryDto(categoryById)
    }
}