import { Request, Response } from 'express';
import { UpdateDeliveryService } from '../../services/Delivery/UpdateDeliveryService';

class UpdateDeliveryController {
	async handle(request: Request, response: Response) {
		const { id, idSale, dt_delivery, obs } = request.body;

		const updateDeliveryService = new UpdateDeliveryService();

		const Delivery = await updateDeliveryService.execute({
			id,
			idSale,
			dt_delivery,
			obs,
		});

		return response.json(Delivery);
	}
}

export { UpdateDeliveryController };
