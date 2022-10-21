import { instanceToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

class ListCategoriesService {
	async execute() {
		const categoryRepository = getCustomRepository(CategoriesRepositories);

		const categories = await categoryRepository.find();

		return instanceToPlain(categories);
	}
}

export { ListCategoriesService };
