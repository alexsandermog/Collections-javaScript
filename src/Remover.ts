import { Mostrar } from './Mostrar';
import PromptSync = require('prompt-sync');

const prompt = PromptSync()

function Remover(list) {
    Mostrar
    
    const positionText = prompt('O que  você deseja remover?: ')
    const position = Number(positionText) - 1
    list.splice(position, 1);
}

export { Remover }