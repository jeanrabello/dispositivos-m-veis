import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDelivery1666295941075 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'deliveries',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'idSale',
						type: 'varchar',
					},
					{
						name: 'dt_delivery',
						type: 'date',
					},
					{
						name: 'obs',
						type: 'varchar',
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('deliveries');
	}
}
