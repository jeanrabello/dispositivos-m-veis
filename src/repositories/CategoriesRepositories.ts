import { EntityRepository, Repository } from 'typeorm';
import { Category } from '../../src/entities/Category';

@EntityRepository(Category)
class CategoriesRepositories extends Repository<Category> {}

export { CategoriesRepositories };
