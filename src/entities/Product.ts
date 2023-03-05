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
	@PrimaryColumn({ type: 'uuid' })
	readonly id!: string;

	@Column({ type: 'uuid' })
	idCategory!: string;

	@Column({ type: 'varchar' })
	name!: string;

	@Column({ type: 'varchar' })
	description!: string;

	@Column({ type: 'real' })
	price!: number;

	@Column({ type: 'varchar' })
	url!: string;

	@CreateDateColumn({ type: 'date' })
	created_at!: Date;

	@UpdateDateColumn({ type: 'date' })
	updated_at!: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { Product };
