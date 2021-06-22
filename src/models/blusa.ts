
export class Blusa{
    private _cor: string = "" ;
    getCor(){
        return this._cor;
    }
    setCort(cor: string){
        this._cor = cor;
    }
    public mudar_cor(cor: string): void{
        this._cor = cor;
    }
    public salvar(): Memento {
        return new OBJMemento(this._cor);
    }
    public desfazer(memento: Memento): void {
        this._cor = memento.getCor();
        console.log('A cor da blusa voltou a ser:');
        console.log(this._cor);
    }
}
export interface Memento {
    getCor(): string;
}

export class OBJMemento implements Memento {
    private cor: string;
    constructor(cor: string) {
        this.cor = cor;
        
    }
    public getCor(): string {
        return this.cor;
    }
}

export class CaretakeB {
    private mementos: Memento[] = [];

    private originator;

    constructor(originator:Blusa) {
        this.originator = originator;
    }

    public salvar_estado(): void {
        console.log('Caretaker: salvando o estado atual');
        this.mementos.push(this.originator.salvar());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento!: Memento = this.mementos.pop();
        console.log('Caretaker: voltando ao estado anterior');
        this.originator.desfazer(memento);
    }

    public mostrar_estados(): void {
        console.log('lista de estados guardados');
        for (const memento of this.mementos) {
            console.log(memento.getCor());
        }
    }
}















/*const a = new Blusa();
let c = new CaretakeB(a);
a.setCort("amarelo");
c.salvar_estado;
a.mudar_cor("roxo");
c.salvar_estado();
a.mudar_cor("verde");
c.salvar_estado();
a.mudar_cor("vermelho");
c.salvar_estado();
c.mostrar_estados();
c.undo();
c.undo();
c.undo();
c.undo();*/