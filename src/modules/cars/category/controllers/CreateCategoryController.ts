import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { AppDataSource } from "../../../../config/dataSource";
import { CategoryEntity } from "../../../../entities/CategoryEntity";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {

        const { name, description } = request.body

        const categoryRepository = new CategoryRepository(AppDataSource.getRepository(CategoryEntity))

        const createCategoryService = new CreateCategoryService(categoryRepository)

        try {
            const result = await createCategoryService.execute({ name, description })
            response.status(201).json(result)
            return
        } catch (error) {
            if(error instanceof Error) {
                response.status(400).json({ error: error.message })
            }
        }
    }
}