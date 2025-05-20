import { ListCategoryDto } from "../DTOs/ListCategoryDto";
import { ICategoryRepositoryInterface } from "../repositories/ICategoryRepositoryInterface";

export class ListCategoryService {
    constructor(private categoryRepository: ICategoryRepositoryInterface) { }

    async execute(): Promise<ListCategoryDto[]> {
        const allCategories = await this.categoryRepository.FindAll()

        return allCategories.map((categories) => new ListCategoryDto(categories))
    }
}