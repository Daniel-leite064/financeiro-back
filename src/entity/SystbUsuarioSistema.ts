import { Column, Entity, Index } from "typeorm";

@Index("PK__systb_us__3213E83F87911B1B", ["id"], { unique: true })
@Entity("systb_usuario_sistema", { schema: "dbo" })
export class SystbUsuarioSistema {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "login", nullable: true, length: 50 })
  login: string | null;

  @Column("varchar", { name: "senha", nullable: true })
  senha: string | null;

  @Column("int", { name: "idUsuarioCadastro", nullable: true })
  idUsuarioCadastro: number | null;

  @Column("datetime", { name: "dtExclusao", nullable: true })
  dtExclusao: Date | null;
}
