import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem {
    public id: number;
    public titulo: string;
    public texto: string;
    public dataPostagem: Date;
    public criador: User;
    public tema: Tema;
}