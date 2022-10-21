import { instanceToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

class ListProductsService {
	async execute() {
		const productsRepository = getCustomRepository(ProductsRepositories);

		const products = await productsRepository.find();

		return instanceToPlain(products);
	}
}

export { ListProductsService };
