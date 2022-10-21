import { Request, Response } from "express";
import { DeleteProductService } from "../../services/Product/DeleteProductService";

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const deleteProductService = new DeleteProductService();

    const id = request.params.id;

    const product = await deleteProductService.execute({ id });

    return response.json(product);
  }
}

export { DeleteProductController }