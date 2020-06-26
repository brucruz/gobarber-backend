import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1587056778718
  implements MigrationInterface {
  // método up: o que deve ser feito no banco de dados na execução do BD
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        // usar letras minúsculas, separados por _ e no plural
        name: 'appointments',
        columns: [
          {
            name: 'id',
            // varchar usar para usar o uuid
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
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
      }),
    );
  }

  // método down: o que deve ser feito para desfazer no método up em caso de fallback
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
