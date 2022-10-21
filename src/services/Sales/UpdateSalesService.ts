import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

interface ISalesRequest {
	id: string;
	idProduct: string;
	idUser: string;
	total: number;
	desc: string;
	obs: string;
}

class UpdateSalesService {
	async execute({ id, idProduct, idUser, total, desc, obs }: ISalesRequest) {
		if (!id) {
			throw new Error('id obrigatorio');
		}
		if (!idProduct) {
			throw new Error('ID do produto obrigatorio');
		}
		if (!idUser) {
			throw new Error('ID do usuário obrigatorio');
		}
		if (!total) {
			throw new Error('Total obrigatorio');
		}
		if (!desc) {
			throw new Error('Descrição obrigatorio');
		}
		if (!obs) {
			obs = '';
		}

		const salesRepository = getCustomRepository(SalesRepositories);

		let sale = {
			idProduct,
			idUser,
			total,
			desc,
			obs,
		};

		const result = await salesRepository
			.createQueryBuilder()
			.update({
				idProduct: idProduct
				idUser: idUser
				total: total
				desc: desc
				obs: obs
			})
			.where({ id })
			.execute();

		return result;
	}
}

export { UpdateSalesService };
