import { Request, Response } from 'express';
import { CreateCategoryService } from '../../services/Category/CreateCategoryService';

class CreateCategoryController {
	async handle(request: Request, response: Response) {
		const { name, description } = request.body;

		const createCategoryService = new CreateCategoryService();

		const newCategory = await createCategoryService.execute({
			name,
			description,
		});

		return response.json(newCategory);
	}
}

export { CreateCategoryController };
