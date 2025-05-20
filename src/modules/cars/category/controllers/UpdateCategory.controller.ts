import { Request, Response } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { AppDataSource } from "../../../../config/dataSource";
import { CategoryEntity } from "../../../../entities/CategoryEntity";
import { UpdateCategoryService } from "../services/UpdateCategory.service";

export class UpdateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { name, description } = request.body
        const { id } = request.params

        const categoryRepository = new CategoryRepository(AppDataSource.getRepository(CategoryEntity))

        const updateCategoryService = new UpdateCategoryService(categoryRepository)

        try {
            const result = await updateCategoryService.execute({ id, name, description })
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }
            return response.status(500).json({ error: `Internal error ${error}` })
        }

    }
}