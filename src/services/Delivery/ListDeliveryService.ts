import { instanceToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { DeliveriesRepositories } from '../../repositories/DeliveriesRepositories';

class ListDeliveryService {
	async execute() {
		const deliveryRepository = getCustomRepository(DeliveriesRepositories);

		const delivery = await deliveryRepository.find();

		return instanceToPlain(delivery);
	}
}

export { ListDeliveryService };
