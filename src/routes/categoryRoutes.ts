import { Router } from "express";
import { CreateCategoryController } from "../modules/cars/category/controllers/CreateCategoryController";
import { ListAllCategoriesController } from "../modules/cars/category/controllers/ListAllCategoriesController";
import { ListCategoryByIdController } from "../modules/cars/category/controllers/ListCategoryById.controller";
import { ListCategoryByNameController } from "../modules/cars/category/controllers/ListCategoryByname.controller";
import { UpdateCategoryController } from "../modules/cars/category/controllers/UpdateCategory.controller";
import { DeleteCategoryController } from "../modules/cars/category/controllers/DeleteCategory.controller";


const categoryRoute = Router()

const createCategoryController = new CreateCategoryController()
const listAllCategoriesController = new ListAllCategoriesController()
const listCategoryByIdController = new ListCategoryByIdController()
const listCategoryBynameController = new ListCategoryByNameController()
const updateCategoryController = new UpdateCategoryController()
const deleteCategoryController = new DeleteCategoryController()


categoryRoute.post("/", createCategoryController.handle)
categoryRoute.get("/", (req, res) => { listAllCategoriesController.handle(req, res) })
categoryRoute.get("/id/:id", (req, res) => { listCategoryByIdController.handle(req, res) })
categoryRoute.get("/name/:name", (req, res) => { listCategoryBynameController.handle(req, res) })
categoryRoute.put("/:id", (req, res) => { updateCategoryController.handle(req, res) })
categoryRoute.delete("/:id", (req, res) => { deleteCategoryController.handle(req, res) })


export { categoryRoute }