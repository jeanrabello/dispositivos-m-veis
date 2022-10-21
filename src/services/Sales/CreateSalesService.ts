import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

interface ISalesRequest {
	idProduct: string;
	idUser: string;
	total: number;
	description: string;
	obs: string;
}

class CreateSalesService {
	async execute({ idProduct, idUser, total, description, obs }: ISalesRequest) {
		const salesRepository = getCustomRepository(SalesRepositories);

		if (!idProduct) {
			throw new Error('Product ID is required.');
		}

		if (!idUser) {
			throw new Error('User ID is required.');
		}

		if (!total) {
			throw new Error('Total is required.');
		}

		if (!description) {
			throw new Error('Description is required.');
		}

		if (!obs) {
			throw new Error('obs is required.');
		}

		const newSale = salesRepository.create({
			idProduct,
			idUser,
			total,
			description,
			obs,
		});

		await salesRepository.save(newSale);

		return newSale;
	}
}

export { CreateSalesService };
