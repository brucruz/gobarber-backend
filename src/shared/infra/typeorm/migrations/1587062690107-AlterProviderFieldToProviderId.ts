import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterProviderFieldToProviderId1587062690107
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'provider');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'AppointmentProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        // O que acontece com os agendamentos de um usuário caso um usuário seja deletado:
        // RESTRICT: bloqueia, não deixando o usuário ser deletado
        // SET NULL: vai definir a variável como nula
        // CASCADE: deletar todas as entradas relacionados ao usuário deletado
        onDelete: 'SET NULL',
        // Sempre usar CASCADE, caso o ID tenha sido alterado,
        onUpdate: 'CASCADE',
      }),
    );
  }

  // Precisa ser desfeito na ordem reversa do up
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');

    await queryRunner.dropColumn('appointments', 'provider_id');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'provider',
        type: 'varchar',
        isNullable: false,
      }),
    );
  }
}

// CASCADE: o que acontece com os relacionamentos quando uma instância do modelo for deletada?
