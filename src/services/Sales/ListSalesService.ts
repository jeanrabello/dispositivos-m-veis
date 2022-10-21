import { instanceToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

class ListSalesService {
	async execute() {
		const salesRepository = getCustomRepository(SalesRepositories);

		const sales = await salesRepository.find();

		return instanceToPlain(sales);
	}
}

export { ListSalesService };
