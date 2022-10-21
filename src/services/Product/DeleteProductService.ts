import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

interface IProductDelete {
	id: string;
}

class DeleteProductService {
	async execute({ id }: IProductDelete) {
		const productRepository = getCustomRepository(ProductsRepositories);

		return await productRepository.delete({ id });
	}
}

export { DeleteProductService };
