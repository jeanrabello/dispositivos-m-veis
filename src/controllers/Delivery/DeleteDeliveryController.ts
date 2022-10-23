import { Request, Response } from 'express';
import { DeleteDeliveryService } from '../../services/Delivery/DeleteDeliveryService';

class DeleteDeliveryController {
	async handle(request: Request, response: Response) {
		const deleteDeliveryService = new DeleteDeliveryService();

		const id = request.params.id;

		const delivery = await deleteDeliveryService.execute({ id });

		return response.json(delivery);
	}
}

export { DeleteDeliveryController };
