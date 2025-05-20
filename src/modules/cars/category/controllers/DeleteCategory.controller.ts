import { Request, Response } from "express";
import { AppDataSource } from "../../../../config/dataSource";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CategoryEntity } from "../../../../entities/CategoryEntity";
import { DeleteCategoryService } from "../services/DeleteCategory.service";

export class DeleteCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.body

        const categoryRepository = new CategoryRepository(AppDataSource.getRepository(CategoryEntity))

        const deleteCategoryService = new DeleteCategoryService(categoryRepository)

        try {
            const result = await deleteCategoryService.execute(id)
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            return response.status(500).json({ error: `Internal error ${error}` })
        }
    }
}