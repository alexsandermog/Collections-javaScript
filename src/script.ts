import { Estoque } from "./Estoque";
import { mostraMenu } from "./Menu";
import PromptSync = require('prompt-sync');
import { addToList } from "./Add";
import { Mostrar } from "./Mostrar";
import { Remover } from "./Remover";

const prompt = PromptSync()
let list : string [] = []
let option = 0

do {
    console.clear();
    mostraMenu();
    console.log();
    option = Number(prompt('Escolha uma opção: '))

    switch (option) {
        case 1:
            addToList(list);
            break;
        case 2:
            Remover(list);
            break
        case 3:
            Mostrar(list)
            Remover(list)
            addToList(list)
            break
        case 4:
            Mostrar(list);
            break
        case 5:
            console.log('Finalizando a aplicação!');
            
        default:
            console.log('Opção inválida!')
            break;
    }
    prompt('Pressione ENTER para continuar...')
}while (option != 5);

