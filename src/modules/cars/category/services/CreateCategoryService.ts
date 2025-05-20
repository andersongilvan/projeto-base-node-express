import { ListCategoryDto } from "../DTOs/ListCategoryDto";
import { ICategoryRepositoryInterface } from "../repositories/ICategoryRepositoryInterface";

interface IRequest {
    name: string
    description: string
}

export class CreateCategoryService {
    constructor(private categoryRepository: ICategoryRepositoryInterface) { }

    async execute({ name, description }: IRequest) {

        if (!name || !description) {
            throw new Error("Required fields")
        }

        const categoryEsist = await this.categoryRepository.findByName(name)
        if (categoryEsist) {
            throw new Error("Category already exist")
        }

        const newCategory = await this.categoryRepository.create({ name, description })

        return new ListCategoryDto(newCategory)
    }
}