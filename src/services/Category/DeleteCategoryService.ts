import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

interface ICategoryDelete {
	id: string;
}

class DeleteCategoryService {
	async execute({ id }: ICategoryDelete) {
		const categoryRepository = getCustomRepository(CategoriesRepositories);

		return await categoryRepository.delete({ id });
	}
}

export { DeleteCategoryService };
