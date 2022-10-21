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
			throw new Error('ID do produto é obrigatório');
		}
		if (!idCategory) {
			throw new Error('ID da categoria do produto é obrigatório');
		}
		if (!name) {
			throw new Error('Nome obrigatório');
		}
		if (!description) {
			throw new Error('Descrição obrigatório');
		}
		if (!price) {
			throw new Error('Preço obrigatório');
		}
		if (!url) {
			throw new Error('Url obrigatória');
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
