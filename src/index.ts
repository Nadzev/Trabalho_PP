
import { Blusa,CaretakeB } from "./models/blusa";
import { Calça ,CaretakeP} from "./models/calça";
import { Cabelo,CaretakeC } from "./models/cabelo";
import { Sapato,CaretakeS } from "./models/sapato";
 
let blusa = new Blusa();
const caretakeb = new CaretakeB(blusa)



blusa.setCort("amarelo");
caretakeb.salvar_estado();
blusa.mudar_cor("roxo");
caretakeb.salvar_estado();
blusa.mudar_cor("verde");
caretakeb.salvar_estado();
blusa.mudar_cor("vermelho");
caretakeb.salvar_estado();
caretakeb.mostrar_estados();
caretakeb.undo();
caretakeb.undo();
console.log(blusa.getCor());
/*caretakeb.salvar_estado();
caretakeb.mostrar_estados();
caretakeb.salvar_estado();
caretakeb.undo();
caretakeb.undo();
caretakeb.undo();
caretakeb.undo();
caretakeb.undo();
console.log(blusa.getCor());
*/
