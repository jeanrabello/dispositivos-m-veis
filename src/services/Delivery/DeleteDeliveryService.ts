import { getCustomRepository } from 'typeorm';
import { DeliveriesRepositories } from '../../repositories/DeliveriesRepositories';

interface IDeliveryDelete {
	id: string;
}

class DeleteDeliveryService {
	async execute({ id }: IDeliveryDelete) {
		const deliveryRepository = getCustomRepository(DeliveriesRepositories);

		return await deliveryRepository.delete({ id });
	}
}

export { DeleteDeliveryService };
