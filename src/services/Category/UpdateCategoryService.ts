import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

interface ICategoryRequest {
	id: string;
	name: string;
	description: string;
}

class UpdateCategoryService {
	async execute({ id, name, description }: ICategoryRequest) {
		if (!id) {
			throw new Error('ID is required');
		}
		if (!name) {
			throw new Error('Name is required');
		}

		const categoryRepository = getCustomRepository(CategoriesRepositories);

		const result = await categoryRepository
			.createQueryBuilder()
			.update({ name: name, description: description })
			.where({ id: id })
			.execute();

		return result;
	}
}

export { UpdateCategoryService };
