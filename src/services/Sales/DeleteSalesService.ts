import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

interface ISalesDelete {
	id: string;
}

class DeleteSalesService {
	async execute({ id }: ISalesDelete) {
		const salesRepository = getCustomRepository(SalesRepositories);

		return await salesRepository.delete({ id });
	}
}

export { DeleteSalesService };
