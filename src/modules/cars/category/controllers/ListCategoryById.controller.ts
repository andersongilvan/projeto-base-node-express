import { Request, Response } from "express";
import { AppDataSource } from "../../../../config/dataSource";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CategoryEntity } from "../../../../entities/CategoryEntity";
import { ListCategoryByIdService } from "../services/ListCategoryById.service";



export class ListCategoryByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const categoryRepository = new CategoryRepository(AppDataSource.getRepository(CategoryEntity))

        const listCategoryByIdService = new ListCategoryByIdService(categoryRepository)

        try {
            const result = await listCategoryByIdService.execute(id)
            return response.status(200).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            return response.status(500).json({ error: `Internal error ${error}` })
        }
    }
}
