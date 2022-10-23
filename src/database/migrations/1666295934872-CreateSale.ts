import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSale1666295934872 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'sales',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'idProduct',
						type: 'varchar',
					},
					{
						name: 'idUser',
						type: 'varchar',
					},
					{
						name: 'total',
						type: 'varchar',
					},
					{
						name: 'description',
						type: 'varchar',
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
		queryRunner.dropTable('sales');
	}
}
