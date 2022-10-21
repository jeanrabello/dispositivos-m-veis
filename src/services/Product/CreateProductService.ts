import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

interface IProductRequest {
	idCategory: string;
	name: string;
	description: string;
	price: number;
	url: string;
}

class CreateProductService {
	async execute({
		idCategory,
		name,
		description,
		price,
		url,
	}: IProductRequest) {
		const productRepository = getCustomRepository(ProductsRepositories);

		const productAlreadyExists = await productRepository.findOne({ name });

		if (productAlreadyExists) {
			throw new Error('Product already registered');
		}

		const newProduct = productRepository.create({
			idCategory,
			name,
			description,
			price,
			url,
		});

		await productRepository.save(newProduct);

		return newProduct;
	}
}

export { CreateProductService };
