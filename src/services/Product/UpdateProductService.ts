import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

interface IProductRequest {
	id: string;
	idCategory: string;
	name: string;
	description: string;
	price: number;
	url: string;
}

class UpdateProductService {
	async execute({
		id,
		idCategory,
		name,
		description,
		price,
		url,
	}: IProductRequest) {
		if (!id) {
			throw new Error('Product ID is required');
		}
		if (!idCategory) {
			throw new Error('Product category ID is required');
		}
		if (!name) {
			throw new Error('Name is required');
		}
		if (!description) {
			throw new Error('Description is required');
		}
		if (!price) {
			throw new Error('Price is required');
		}
		if (!url) {
			throw new Error('URL is required');
		}

		const productRepository = getCustomRepository(ProductsRepositories);

		const result = await productRepository
			.createQueryBuilder()
			.update({
				idCategory: idCategory,
				name: name,
				description: description,
				price: price,
				url: url,
			})
			.where({ id })
			.execute();

		return result;
	}
}

export { UpdateProductService };
