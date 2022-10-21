import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	JoinColumn,
	ManyToOne,
} from 'typeorm';
import { Category } from './Category';
import { v4 as uuid } from 'uuid';
import { Sales } from './Sales';

@Entity('products')
class Product {
	@PrimaryColumn()
	readonly id!: string;

	@Column()
	name!: string;

	@Column()
	description!: string;

	@Column()
	price!: number;

	@Column()
	url!: string;

	@Column()
	idCategory!: string;

	// @ManyToOne(() => Sales)
	// idSale!: Sales;

	@CreateDateColumn()
	created_at!: Date;

	@UpdateDateColumn()
	updated_at!: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { Product };
