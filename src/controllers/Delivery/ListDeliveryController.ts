import { Request, Response } from 'express';
import { ListDeliveryService } from '../../services/Delivery/ListDeliveryService';

class ListDeliveryController {
	async handle(request: Request, response: Response) {
		const listDeliveryService = new ListDeliveryService();

		const delivery = await listDeliveryService.execute();

		return response.json(delivery);
	}
}

export { ListDeliveryController };
