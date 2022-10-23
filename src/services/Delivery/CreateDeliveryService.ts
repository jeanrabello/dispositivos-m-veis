import { getCustomRepository } from 'typeorm';
import { DeliveriesRepositories } from '../../repositories/DeliveriesRepositories';

interface IDeliveryRequest {
	idSale: string;
	dt_delivery: Date;
	obs: string;
}

class CreateDeliveryService {
	async execute({ idSale, dt_delivery, obs }: IDeliveryRequest) {
		const deliveryRepository = getCustomRepository(DeliveriesRepositories);

		if (!idSale) {
			throw new Error('Sale ID is required.');
		}

		if (!dt_delivery) {
			throw new Error('Delivery date is required.');
		}

		const newDelivery = deliveryRepository.create({
			idSale,
			dt_delivery,
			obs,
		});

		await deliveryRepository.save(newDelivery);

		return newDelivery;
	}
}

export { CreateDeliveryService };
