import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK__systb_us__3213E83F04C7FD42", ["id"], { unique: true })
@Entity("systb_usuario_sistema", { schema: "dbo" })
export class SystbUsuarioSistema {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "login", length: 200 })
  login: string;

  @Column("varchar", { name: "senha" })
  senha: string;

  @Column("int", { name: "idUsuarioCadastro", nullable: true })
  idUsuarioCadastro: number | null;

  @Column("datetime", { name: "dtExclusao", nullable: true })
  dtExclusao: Date | null;
}
