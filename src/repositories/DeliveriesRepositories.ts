import { EntityRepository, Repository } from 'typeorm';
import { Delivery } from '../../src/entities/Delivery';

@EntityRepository(Delivery)
class DeliveriesRepositories extends Repository<Delivery> {}

export { DeliveriesRepositories };
