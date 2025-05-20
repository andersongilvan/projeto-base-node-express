import { Request, Response } from "express";
import { CategoryEntity } from "../../../../entities/CategoryEntity";
import { AppDataSource } from "../../../../config/dataSource";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { ListCategoryService } from "../services/ListCategoryService";
import { error } from "console";

export class ListAllCategoriesController {

    async handle(request: Request, response: Response): Promise<Response> {
        const categoryRepository = new CategoryRepository(AppDataSource.getRepository(CategoryEntity))

        const listCategoryService = new ListCategoryService(categoryRepository)

        try {
            const result = await listCategoryService.execute()
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }
        }

        return response.status(400).json({ error: `Server Error ${error}` })

    }
}