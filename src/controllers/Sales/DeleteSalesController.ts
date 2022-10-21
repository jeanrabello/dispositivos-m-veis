import { Request, Response } from "express";
import { DeleteSalesService } from "../../services/Sales/DeleteSalesService";

class DeleteSalesController {
  async handle(request: Request, response: Response) {
    const deleteSalesService = new DeleteSalesService();

    const id = request.params.id;

    const sales = await deleteSalesService.execute({ id });

    return response.json(sales);
  }
}

export { DeleteSalesController }