import { Request, Response } from "express"
import { AppDataSource } from "../../../../config/dataSource"
import { CategoryRepository } from "../repositories/CategoryRepository"
import { CategoryEntity } from "../../../../entities/CategoryEntity"
import { ListCategoryBynameService } from "../services/ListCategoryByName.service"

export class ListCategoryByNameController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { name } = request.params

        const categoryRepository = new CategoryRepository(AppDataSource.getRepository(CategoryEntity))

        const listCategoryByNameService = new ListCategoryBynameService(categoryRepository)

        try {
            const result = await listCategoryByNameService.execute(name)
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }
            return response.status(500).json({ error: `Internal error ${error}` })
        }
    }
}

