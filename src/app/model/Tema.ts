import { Postagem } from "./Postagem";

export class Tema {
    public id: number;
    public tema: string;
    public listaDePostagens: Postagem[]
}