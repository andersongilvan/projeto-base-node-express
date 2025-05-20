import { ListCategoryDto } from "../DTOs/ListCategoryDto";
import { UpdateCategoryDto } from "../DTOs/UpdateCategory.dto";
import { ICategoryRepositoryInterface } from "../repositories/ICategoryRepositoryInterface";

interface IRequest {
    id: string
    name: string
    description: string
}


export class UpdateCategoryService {

    constructor(private categoryRepository: ICategoryRepositoryInterface) { }

    async execute({ id, name, description }: IRequest): Promise<ListCategoryDto> {

        if (!id || !name || !description) {
            throw new Error("Required fields")
        }

        const categoryDto = new UpdateCategoryDto(id, name, description)

         await this.categoryRepository.update({
            id: categoryDto.id,
            name: categoryDto.name, description: categoryDto.description
        })

        const updateResult = await this.categoryRepository.findById(id)
        if (!updateResult) {
            throw new Error("Category not found")
        }

        return new ListCategoryDto(updateResult)

    }
}