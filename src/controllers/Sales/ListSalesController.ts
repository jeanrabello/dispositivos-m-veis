import { Request, Response } from "express";
import { ListSalesService } from "../../services/Sales/ListSalesService";

class ListSalesController {
  async handle(request: Request, response: Response) {
    const listSalesService = new ListSalesService();

    const sales = await listSalesService.execute();

    return response.json(sales);
  }
}

export { ListSalesController };