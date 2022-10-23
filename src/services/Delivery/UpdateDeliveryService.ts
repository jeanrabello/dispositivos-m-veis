import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { DeliveriesRepositories } from '../../repositories/DeliveriesRepositories';

interface IDeliveryRequest {
	id: string;
	idSale: string;
	dt_delivery: Date;
	obs: string;
}

class UpdateDeliveryService {
	async execute({ id, idSale, dt_delivery, obs }: IDeliveryRequest) {
		if (!id) {
			throw new Error('Delivery ID is required');
		}
		if (!idSale) {
			throw new Error('Sale ID is required');
		}
		if (!dt_delivery) {
			throw new Error('Delivery ID is required');
		}

		const deliveryRepository = getCustomRepository(DeliveriesRepositories);

		const result = await deliveryRepository
			.createQueryBuilder()
			.update({
				idSale,
				dt_delivery,
				obs,
			})
			.where({ id })
			.execute();

		return result;
	}
}

export { UpdateDeliveryService };
