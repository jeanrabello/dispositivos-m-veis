import { Request, Response } from 'express';
import { CreateDeliveryService } from '../../services/Delivery/CreateDeliveryService';

class CreateDeliveryController {
	async handle(request: Request, response: Response) {
		const { idSale, dt_delivery, obs } = request.body;

		const createDeliveryService = new CreateDeliveryService();

		const delivery = await createDeliveryService.execute({
			idSale,
			dt_delivery,
			obs,
		});

		return response.json(delivery);
	}
}

export { CreateDeliveryController };
