

export class Calça{
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
    public desfazer_cor(memento: Memento): void {
        this._cor = memento.getCor();
        console.log('A cor da calça voltou a ser:');
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

export class CaretakeP {
    private mementos: Memento[] = [];

    private originator;

    constructor(originator:Calça) {
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
        const memento = this.mementos.pop();
        console.log('Caretaker: voltando ao estado anterior: ${memento?.getCor()}');
        this.originator.desfazer_cor(memento);
    }

    public mostrar_estados(): void {
        console.log('lista de estados guardados');
        for (const memento of this.mementos) {
            console.log(memento.getCor());
        }
    }
}