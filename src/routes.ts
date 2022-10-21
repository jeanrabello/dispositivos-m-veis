import { Router } from 'express';
import { CreateUserController } from './controllers/User/CreateUserController';
import { DeleteUserController } from './controllers/User/DeleteUserController';
import { ListUsersController } from './controllers/User/ListUsersController';
import { UpdateUserController } from './controllers/User/UpdateUserController';

import { CreateCategoryController } from './controllers/Category/CreateCategoryController';
import { DeleteCategoryController } from './controllers/Category/DeleteCategoryController';
import { ListCategoriesController } from './controllers/Category/ListCategoriesController';
import { UpdateCategoryController } from './controllers/Category/UpdateCategoryController';

import { CreateProductController } from './controllers/Product/CreateProductController';
import { DeleteProductController } from './controllers/Product/DeleteProductController';
import { ListProductsController } from './controllers/Product/ListProductController';
import { UpdateProductController } from './controllers/Product/UpdateProductController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import { AuthenticateUserController } from './controllers/authentication/AuthenticateUserController';
import { CreateSalesController } from './controllers/Sales/CreateSalesController';

const router = Router();

const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const listCategoriesController = new ListCategoriesController();
const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const authenticateUserController = new AuthenticateUserController();

const listProductsController = new ListProductsController();
const createProductController = new CreateProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

const createSalesController = new CreateSalesController();

router.post('/login', authenticateUserController.handle);
router.post('/users', createUserController.handle);
router.get('/products', listProductsController.handle);
router.get('/categories', listCategoriesController.handle);

router.use(ensureAuthenticated);
router.get('/users', listUsersController.handle);
router.put('/users', updateUserController.handle);
router.delete('/users/:id', deleteUserController.handle);

router.post('/categories', createCategoryController.handle);
router.put('/categories', updateCategoryController.handle);
router.delete('/categories/:id', deleteCategoryController.handle);

router.post('/products', createProductController.handle);
router.put('/products', updateProductController.handle);
router.delete('/products/:id', deleteProductController.handle);

router.post('/sales', createSalesController.handle);

export { router };
