import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('sales')
class Sales {
	@PrimaryColumn()
	readonly id!: string;

	@Column()
	idProduct!: string;

	@Column()
	idUser!: string;

	@Column()
	total!: number;

	@Column()
	description!: string;

	@Column()
	obs!: string;

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

export { Sales };
