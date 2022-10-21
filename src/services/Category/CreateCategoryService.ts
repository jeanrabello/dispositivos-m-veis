import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

interface ICategoryRequest {
	name: string;
	description: string;
}

class CreateCategoryService {
	async execute({ name, description }: ICategoryRequest) {
		if (!name) {
			throw new Error('Name is required');
		}

		if (!description) {
			throw new Error('Description is required');
		}
		const categoryRepository = getCustomRepository(CategoriesRepositories);

		const categoryAlreadyExists = await categoryRepository.findOne({
			name,
		});

		if (categoryAlreadyExists) {
			throw new Error('Category already exists');
		}

		const newCategory = categoryRepository.create({
			name: name,
			description: description,
		});

		await categoryRepository.save(newCategory);

		return newCategory;
	}
}

export { CreateCategoryService };
